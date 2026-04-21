import { Sparkles, Award, ShieldCheck, FileCheck } from "lucide-react";

const items = [
  {
    Icon: Sparkles,
    title: "Bespoke service",
    body: "Expert guidance through the whole booking process. Smooth and hassle-free from first enquiry to last song.",
  },
  {
    Icon: Award,
    title: "Industry experts",
    body: "World-class musicians with hundreds of weddings and events delivered across the South Coast.",
  },
  {
    Icon: ShieldCheck,
    title: "Peace of mind",
    body: "Every booking includes a professional contract so everything is clear, secure and stress-free.",
  },
  {
    Icon: FileCheck,
    title: "Fully covered",
    body: "PLI insured and PAT certified — compliant and welcome at any venue across the UK.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why Backbeat</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Built for the big day.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="reveal-up flex flex-col bg-white p-8 sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-zinc-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
