"use client";

import { useEffect, useState } from "react";

const DESKTOP_SRC = "/videos/hero/hero.mp4";
const MOBILE_SRC = "/videos/hero/hero-mobile.mp4";

type Connection = {
  saveData?: boolean;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
};

export function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nav = navigator as Navigator & { connection?: Connection };
    if (nav.connection?.saveData) return;
    if (
      nav.connection?.effectiveType &&
      ["slow-2g", "2g", "3g"].includes(nav.connection.effectiveType)
    ) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const chosen = isMobile ? MOBILE_SRC : DESKTOP_SRC;

    const start = () => setSrc(chosen);
    const win = window as Window &
      typeof globalThis & {
        requestIdleCallback?: (
          cb: IdleRequestCallback,
          opts?: IdleRequestOptions,
        ) => number;
      };
    if (typeof win.requestIdleCallback === "function") {
      win.requestIdleCallback(start, { timeout: 2000 });
    } else {
      window.setTimeout(start, 800);
    }
  }, []);

  if (!src) return null;

  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  );
}
