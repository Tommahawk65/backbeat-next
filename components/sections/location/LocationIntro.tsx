import { ArrowRight } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

type LocationIntroProps = {
  eyebrow: string;
  heading: React.ReactNode;
  children: React.ReactNode;
  disclaimer?: React.ReactNode;
};

export function LocationIntro({
  eyebrow,
  heading,
  children,
  disclaimer,
}: LocationIntroProps) {
  return (
    <section className="bg-cream py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            {heading}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-700 sm:mt-12 sm:text-lg">
          {children}
        </div>

        {disclaimer ? (
          <p className="mx-auto mt-8 max-w-3xl text-xs leading-relaxed text-zinc-500">
            {disclaimer}
          </p>
        ) : null}

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-3xl tracking-wide text-zinc-900">
              From £1,900
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Live sets &middot; full PA &amp; lighting &middot; DJ between
              &amp; after
            </p>
          </div>
          <EnquiryTrigger className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-accent-light">
            Check availability
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </EnquiryTrigger>
        </div>
      </div>
    </section>
  );
}
