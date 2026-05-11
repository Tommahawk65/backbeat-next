"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

const SHOW_AFTER_PX = 400;

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 transition-all duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-full bg-primary-dark/95 py-2 pl-5 pr-2 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-widest text-white/50">
            From
          </span>
          <span className="font-display text-base text-white">£1,900</span>
        </div>
        <EnquiryTrigger
          className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-accent-light"
          aria-label="Check availability"
        >
          Check availability
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </EnquiryTrigger>
      </div>
    </div>
  );
}
