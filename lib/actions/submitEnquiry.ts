"use server";

import { after } from "next/server";
import { headers } from "next/headers";
import * as Sentry from "@sentry/nextjs";

import { enquirySchema } from "@/lib/validation/enquiry";
import { createCrmLead } from "@/lib/crm/createLead";
import {
  sendEnquiryConfirmation,
  sendEnquiryNotification,
  sendFailureAlert,
  type FailureDetail,
} from "@/lib/email/resend";
import { sendMetaCapiLead } from "@/lib/tracking/metaCapi";

export type ActionResult =
  | { status: "success" }
  | { status: "error"; message: string }
  | { status: "invalid"; fieldErrors: Record<string, string> };

export async function submitEnquiry(input: unknown): Promise<ActionResult> {
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? "form";
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "invalid", fieldErrors };
  }

  const data = parsed.data;

  // Silent honeypot — if filled, pretend success so bots don't retry.
  if (data.website) {
    return { status: "success" };
  }

  const h = await headers();
  const clientIp =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    undefined;
  const userAgent = h.get("user-agent") ?? undefined;
  const referer = h.get("referer") ?? undefined;

  // Critical path: band MUST actually receive the notification email.
  // `skipped: true` (no Resend env vars) means nothing was sent — treat as failure.
  const bandEmail = await sendEnquiryNotification(data);
  if (!bandEmail.ok) {
    const isSkipped = "skipped" in bandEmail && bandEmail.skipped === true;
    console.error("[enquiry] band notification failed", bandEmail);
    Sentry.captureMessage(
      isSkipped
        ? "enquiry: band notification SKIPPED (Resend not configured) — lead lost"
        : "enquiry: band notification failed",
      {
        level: "error",
        extra: {
          result: bandEmail,
          skipped: isSkipped,
          enquirerName: data.name,
          enquirerEmail: data.email,
          eventDate: data.eventDate.toISOString().slice(0, 10),
          venue: data.venue,
        },
      },
    );
    return {
      status: "error",
      message: "We couldn't send your enquiry right now. Please try again.",
    };
  }

  // Non-critical: customer confirmation, CRM logging, Meta CAPI.
  // Run after the response is sent so the user sees success immediately.
  // If any step fails, send a single alert email to the band.
  after(async () => {
    const [confirmation, crm, capi] = await Promise.allSettled([
      sendEnquiryConfirmation(data),
      createCrmLead(data),
      sendMetaCapiLead(data, {
        clientIp,
        userAgent,
        eventSourceUrl: referer,
      }),
    ]);

    const failures: FailureDetail[] = [];

    if (
      confirmation.status !== "fulfilled" ||
      (!confirmation.value.ok && !confirmation.value.skipped)
    ) {
      console.error("[enquiry] customer confirmation failed", confirmation);
      failures.push({ step: "Customer confirmation email", detail: confirmation });
    }
    if (crm.status !== "fulfilled" || (!crm.value.ok && !crm.value.skipped)) {
      console.error("[enquiry] CRM failed", crm);
      failures.push({ step: "CRM lead create", detail: crm });
    }
    if (capi.status !== "fulfilled" || (!capi.value.ok && !capi.value.skipped)) {
      console.error("[enquiry] CAPI failed", capi);
      failures.push({ step: "Meta Conversions API", detail: capi });
    }

    if (failures.length > 0) {
      Sentry.captureMessage("enquiry: deferred steps failed", {
        level: "warning",
        extra: {
          failedSteps: failures.map((f) => f.step),
          details: failures,
          enquirerEmail: data.email,
          eventDate: data.eventDate.toISOString().slice(0, 10),
        },
      });
      const alert = await sendFailureAlert({ enquiry: data, failures }).catch(
        (err) => ({ ok: false, error: err instanceof Error ? err.message : "unknown" }),
      );
      if (!alert.ok && !("skipped" in alert && alert.skipped)) {
        console.error("[enquiry] failure alert send failed", alert);
      }
    }
  });

  return { status: "success" };
}
