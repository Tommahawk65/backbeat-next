import "server-only";

import { Resend } from "resend";

import { EnquiryConfirmation } from "@/emails/EnquiryConfirmation";
import { EnquiryNotification } from "@/emails/EnquiryNotification";
import type { EnquiryInput } from "@/lib/validation/enquiry";

const dateFmt = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const DEFAULT_FROM = "Backbeat Enquiries <enquiries@backbeat-band.co.uk>";

function getClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendEnquiryNotification(input: EnquiryInput) {
  const resend = getClient();
  const to = process.env.RESEND_TO_EMAIL;
  if (!resend || !to) {
    return { ok: false, skipped: true, reason: "Resend not configured" as const };
  }

  const eventDate = dateFmt.format(input.eventDate);
  const from = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;

  try {
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: input.email,
      subject: `New enquiry — ${input.name} (${eventDate})`,
      react: (
        <EnquiryNotification
          name={input.name}
          email={input.email}
          eventDateFormatted={eventDate}
          venue={input.venue}
          message={input.message || undefined}
          fbclid={input.fbclid || undefined}
          gclid={input.gclid || undefined}
        />
      ),
    });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return { ok: true, id: result.data?.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}

export async function sendEnquiryConfirmation(input: EnquiryInput) {
  const resend = getClient();
  if (!resend) {
    return { ok: false, skipped: true, reason: "Resend not configured" as const };
  }

  const eventDate = dateFmt.format(input.eventDate);
  const from = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";

  try {
    const result = await resend.emails.send({
      from,
      to: [input.email],
      replyTo: process.env.RESEND_TO_EMAIL ?? undefined,
      subject: `Thanks ${input.name.split(" ")[0]} — we've got your enquiry`,
      react: (
        <EnquiryConfirmation
          name={input.name}
          eventDateFormatted={eventDate}
          venue={input.venue}
          message={input.message || undefined}
          siteUrl={siteUrl}
        />
      ),
    });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return { ok: true, id: result.data?.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}
