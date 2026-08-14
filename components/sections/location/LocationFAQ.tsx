import { Plus } from "lucide-react";

import type { LocationFAQ } from "@/lib/data/locations/types";

type Props = {
  eyebrow?: string;
  heading?: string;
  faqs: LocationFAQ[];
};

export function LocationFAQ({
  eyebrow = "Common questions",
  heading = "Wedding-day questions, answered.",
  faqs,
}: Props) {
  if (faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-zinc-200 border-y border-zinc-200 sm:mt-14">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group py-5"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-base font-semibold leading-snug text-zinc-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white"
                >
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </summary>
              <p className="mt-3 pr-10 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
