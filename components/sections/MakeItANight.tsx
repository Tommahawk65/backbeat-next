import { ArrowRight } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

export function MakeItANight() {
  return (
    <section
      id="book"
      className="scroll-mt-24 bg-cream py-16 text-zinc-900 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="eyebrow">Check availability</span>
        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Let&apos;s make it a night.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-zinc-600">
          Tell us about your event and we&apos;ll come straight back with
          availability and a tailored quote, usually within a few hours.
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm font-medium text-accent-dark">
          Saturdays book up fast. Peak season (May to Sept) goes early.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <EnquiryTrigger className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-accent-light">
            Check availability
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </EnquiryTrigger>
        </div>
        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-y-8 text-sm sm:grid-cols-4">
          {[
            { label: "From", value: "£1,900" },
            { label: "Response", value: "Fast" },
            { label: "Base", value: "Hampshire" },
            { label: "Travel", value: "UK & abroad" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`px-4 ${
                i % 2 === 0 ? "border-r border-zinc-300" : ""
              } sm:border-r sm:border-zinc-300 sm:[&:nth-child(4)]:border-r-0`}
            >
              <dt className="text-xs uppercase tracking-widest text-zinc-500">
                {item.label}
              </dt>
              <dd className="mt-1 font-display text-2xl text-zinc-900">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
