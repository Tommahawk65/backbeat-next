import { Sparkles, Award, ShieldCheck, FileCheck } from "lucide-react";

const items = [
  {
    Icon: Sparkles,
    title: "Built around your day",
    body: "We'll learn your first dance — or any song that matters — at no extra cost.",
  },
  {
    Icon: Award,
    title: "Seasoned players",
    body: "Professional full-time musicians. Festival stages and wedding rooms on the same CV.",
  },
  {
    Icon: ShieldCheck,
    title: "Nothing left to chance",
    body: "PAT-tested kit, sound-limiter ready, and a trusted dep-musician network if anyone's unwell.",
  },
  {
    Icon: FileCheck,
    title: "Arrive, plug in, play",
    body: "Full PA, stage lighting, DJ sets between and after. Self-contained. PLI insured.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-zinc-50 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why Backbeat</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Built for the big day.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Four things we hold ourselves to on every booking.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="reveal-up group flex flex-col items-center rounded-sm bg-white p-5 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-zinc-100 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] sm:p-8 lg:p-10"
            >
              <Icon
                className="h-9 w-9 text-accent transition duration-500 group-hover:scale-110"
                strokeWidth={1.25}
              />
              <h3 className="mt-8 text-lg font-semibold tracking-tight text-zinc-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 sm:mt-12 sm:text-sm">
          Public liability insured &middot; PAT-tested annually &middot; Dep cover for illness &middot; Sound-limiter ready
        </p>
      </div>
    </section>
  );
}
