import { ArrowRight } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

type LocationCTAProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
};

export function LocationCTA({
  eyebrow = "Check availability",
  heading,
  body,
}: LocationCTAProps) {
  return (
    <section className="bg-cream py-16 text-zinc-900 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
          {heading}
        </h2>
        {body ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {body}
          </p>
        ) : null}
        <div className="mt-10 flex flex-col items-center justify-center gap-3">
          <EnquiryTrigger className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold tracking-wide text-white shadow-lg transition hover:bg-accent-light">
            Check availability
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </EnquiryTrigger>
          <p className="text-sm text-zinc-500">
            No obligation &middot; usually a reply within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
