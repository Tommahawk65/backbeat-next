import { Plus } from "lucide-react";

import { faqs } from "@/lib/data/faqs";

export function FAQ() {
  return (
    <section
      id="faqs"
      className="scroll-mt-24 bg-primary-dark py-20 text-white sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow--on-dark">
            Still got questions?
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Frequently asked questions.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/60">
            Anything else, drop a line through the enquiry form.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 border-y border-white/10 sm:mt-16">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group py-5"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-base font-semibold leading-snug text-white sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span
                  className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/30 text-white/80 transition group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-primary-dark"
                  aria-hidden
                >
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </summary>
              <p className="mt-3 pr-10 text-sm leading-relaxed text-white/70 sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
