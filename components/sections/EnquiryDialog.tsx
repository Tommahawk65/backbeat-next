"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

import { EnquiryForm } from "./EnquiryForm";
import { OPEN_ENQUIRY_EVENT } from "@/lib/enquiryDialog";

export function EnquiryDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const open = () => {
      const el = ref.current;
      if (!el) return;
      if (!el.open) el.showModal();
    };
    window.addEventListener(OPEN_ENQUIRY_EVENT, open);
    return () => window.removeEventListener(OPEN_ENQUIRY_EVENT, open);
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      className="enquiry-dialog"
      aria-labelledby="enquiry-dialog-title"
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
    >
      <div className="relative rounded-sm bg-primary-dark p-8 text-white shadow-2xl ring-1 ring-white/10 sm:p-10">
        <button
          type="button"
          onClick={close}
          aria-label="Close enquiry form"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <span className="eyebrow eyebrow--on-dark">Check availability</span>
        <h2
          id="enquiry-dialog-title"
          className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        >
          Let&apos;s make it a night.
        </h2>
        <p className="mt-3 text-sm text-white/65">
          Tell us about your event &mdash; we&apos;ll reply quickly with
          availability and a tailored quote.
        </p>
        <div className="mt-8">
          <EnquiryForm variant="dark" />
        </div>
      </div>
    </dialog>
  );
}
