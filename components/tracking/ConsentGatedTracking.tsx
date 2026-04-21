"use client";

import { useConsent } from "@/lib/consent";
import { GoogleTagManager } from "./GoogleTagManager";
import { MetaPixel } from "./MetaPixel";

type Props = {
  gtmId?: string;
  pixelId?: string;
};

export function ConsentGatedTracking({ gtmId, pixelId }: Props) {
  const consent = useConsent();
  if (consent !== "accepted") return null;
  return (
    <>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      {pixelId ? <MetaPixel pixelId={pixelId} /> : null}
    </>
  );
}
