"use server";

import { headers } from "next/headers";

import { enquirySchema } from "@/lib/validation/enquiry";
import { createCrmLead } from "@/lib/crm/createLead";
import {
  sendEnquiryConfirmation,
  sendEnquiryNotification,
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

  const [crm, email, confirmation, capi] = await Promise.allSettled([
    createCrmLead(data),
    sendEnquiryNotification(data),
    sendEnquiryConfirmation(data),
    sendMetaCapiLead(data, {
      clientIp,
      userAgent,
      eventSourceUrl: referer,
    }),
  ]);

  // Business rule: if the notification email to the band fails we surface an
  // error so the user can retry. CRM, the customer confirmation, and CAPI
  // failures are logged but don't block success — losing a lead is worse than
  // a missing CRM row or a missed auto-reply.
  const emailOk =
    email.status === "fulfilled" && (email.value.ok || email.value.skipped);

  if (!emailOk) {
    console.error("[enquiry] band notification failed", email);
    return {
      status: "error",
      message: "We couldn't send your enquiry right now. Please try again.",
    };
  }

  if (crm.status !== "fulfilled" || (!crm.value.ok && !crm.value.skipped)) {
    console.error("[enquiry] CRM failed", crm);
  }
  if (
    confirmation.status !== "fulfilled" ||
    (!confirmation.value.ok && !confirmation.value.skipped)
  ) {
    console.error("[enquiry] customer confirmation failed", confirmation);
  }
  if (capi.status !== "fulfilled" || (!capi.value.ok && !capi.value.skipped)) {
    console.error("[enquiry] CAPI failed", capi);
  }

  return { status: "success" };
}
