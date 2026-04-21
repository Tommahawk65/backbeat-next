"use client";

import { useEffect, useState } from "react";

import { getStoredConsent, setStoredConsent } from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === "unset") setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (value: "accepted" | "rejected") => {
    setStoredConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-xl bg-primary-dark/95 p-4 text-sm text-white shadow-2xl ring-1 ring-white/10 backdrop-blur sm:p-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/85">
          We use cookies to measure traffic and improve your experience.
          Analytics &amp; marketing cookies only run if you accept.{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2 hover:text-accent"
          >
            Learn more
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-full px-4 py-2 text-white/80 ring-1 ring-white/20 transition hover:bg-white/5"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-accent px-4 py-2 font-semibold text-primary-dark transition hover:bg-accent/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
