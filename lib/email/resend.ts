import "server-only";

import { Resend } from "resend";

import type { EnquiryInput } from "@/lib/validation/enquiry";

const dateFmt = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEnquiryNotification(input: EnquiryInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Backbeat Enquiries <enquiries@backbeat-band.co.uk>";

  if (!apiKey || !to) {
    return { ok: false, skipped: true, reason: "Resend not configured" as const };
  }

  const resend = new Resend(apiKey);
  const eventDate = dateFmt.format(input.eventDate);
  const attributionLines: string[] = [];
  if (input.fbclid) attributionLines.push(`fbclid: ${input.fbclid}`);
  if (input.gclid) attributionLines.push(`gclid: ${input.gclid}`);

  const textParts = [
    `New enquiry from ${input.name}`,
    "",
    `Name:       ${input.name}`,
    `Email:      ${input.email}`,
    `Event date: ${eventDate}`,
    `Venue:      ${input.venue}`,
    "",
    `Message:`,
    input.message || "(none)",
  ];
  if (attributionLines.length) {
    textParts.push("", "Attribution:", ...attributionLines);
  }

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:560px">
      <h2 style="color:#242426;margin:0 0 16px">New enquiry from ${escapeHtml(
        input.name,
      )}</h2>
      <table style="border-collapse:collapse;width:100%">
        <tbody>
          <tr><td style="padding:6px 12px 6px 0;color:#666">Name</td><td style="padding:6px 0"><strong>${escapeHtml(
            input.name,
          )}</strong></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(
            input.email,
          )}">${escapeHtml(input.email)}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666">Event date</td><td style="padding:6px 0">${escapeHtml(
            eventDate,
          )}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666">Venue / town</td><td style="padding:6px 0">${escapeHtml(
            input.venue,
          )}</td></tr>
        </tbody>
      </table>
      <h3 style="color:#242426;margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.5;margin:0">${
        input.message ? escapeHtml(input.message) : "<em>(none)</em>"
      }</p>
      ${
        attributionLines.length
          ? `<h3 style="color:#242426;margin:24px 0 8px">Attribution</h3><ul style="padding-left:18px;margin:0;color:#555">${attributionLines
              .map((l) => `<li>${escapeHtml(l)}</li>`)
              .join("")}</ul>`
          : ""
      }
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: input.email,
      subject: `New enquiry — ${input.name} (${eventDate})`,
      text: textParts.join("\n"),
      html,
    });
    if (result.error) {
      return { ok: false, error: result.error.message };
    }
    return { ok: true, id: result.data?.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}
