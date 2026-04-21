import "server-only";

import { createHash } from "node:crypto";

import type { EnquiryInput } from "@/lib/validation/enquiry";

function sha256(value: string) {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

type CapiContext = {
  clientIp?: string;
  userAgent?: string;
  eventSourceUrl?: string;
  fbp?: string;
  fbc?: string;
};

export async function sendMetaCapiLead(
  input: EnquiryInput,
  ctx: CapiContext = {},
) {
  const token = process.env.META_CONVERSIONS_API_TOKEN;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (!token || !pixelId) {
    return { ok: false, skipped: true, reason: "CAPI not configured" as const };
  }

  const endpoint = `https://graph.facebook.com/v19.0/${pixelId}/events`;

  const userData: Record<string, string | undefined> = {
    em: sha256(input.email),
    client_ip_address: ctx.clientIp,
    client_user_agent: ctx.userAgent,
    fbp: ctx.fbp,
    fbc: ctx.fbc,
  };
  for (const k of Object.keys(userData)) {
    if (!userData[k]) delete userData[k];
  }

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: ctx.eventSourceUrl,
        user_data: userData,
        custom_data: {
          event_category: "wedding_band_enquiry",
        },
      },
    ],
  };

  try {
    const res = await fetch(`${endpoint}?access_token=${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
