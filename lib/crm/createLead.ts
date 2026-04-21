import "server-only";

import type { EnquiryInput } from "@/lib/validation/enquiry";

export async function createCrmLead(input: EnquiryInput) {
  const url = process.env.CRM_URL;
  const apiKey = process.env.CRM_API_KEY;
  const artistSlug = process.env.CRM_ARTIST_SLUG ?? "backbeat";

  if (!url || !apiKey) {
    return { ok: false, skipped: true, reason: "CRM not configured" as const };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        eventDate: input.eventDate.toISOString().slice(0, 10),
        eventType: "wedding",
        venueName: input.venue,
        message: input.message || undefined,
        artistSlug,
      }),
      // Don't cache; this is a mutation.
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      return { ok: false, status: res.status, body };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}
