import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How much time do you need for set-up?",
    a: "We require a minimum of 90 minutes to load in and set up. Ideally before your guests enter the performance room, but we're skilled at setting up quietly and efficiently with minimal disruption. For weddings where the evening reception is in the same room as the meal, we often arrive early to set up while the room is being prepared.",
  },
  {
    q: "Do you provide DJ music before, between & after sets?",
    a: "Yes. We'll collaborate with you to create a personalised DJ playlist for before, between and after our live sets. Whether you have a specific genre, a list of favourite songs, or a Spotify playlist, we'll take care of the rest.",
  },
  {
    q: "How much does it cost to book us?",
    a: "Live music packages from £1,900. Pricing depends on event location, performance duration, and specific requirements \u2014 send us your event details for a tailored quote.",
  },
  {
    q: "How far do you travel?",
    a: "We perform across Hampshire, Dorset, Surrey and beyond \u2014 whether your event is across the country or abroad, we're ready to bring live performance to you.",
  },
  {
    q: "Can you provide music for our drinks reception?",
    a: "Yes \u2014 we offer a 60-minute acoustic live-lounge duo set, ideal for setting the ambiance during drinks reception or dinner.",
  },
  {
    q: "Does the band provide all their own equipment?",
    a: "Yes. We use high-quality, PAT-tested equipment for top-notch sound and lighting. The band is fully self-contained, and we're experienced with sound-limiter venues.",
  },
  {
    q: "Do you take requests?",
    a: "Absolutely. As part of our service we'll learn a special song at no extra cost \u2014 whether it's your first dance or a standout main-set moment, let us know and we'll include it.",
  },
];

export function FAQ() {
  return (
    <section
      id="faqs"
      className="scroll-mt-24 bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-16 lg:gap-24">
          <div className="reveal-left md:sticky md:top-28 md:self-start">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              Everything you might want to know.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600">
              Can&apos;t find your answer? Drop a line through the enquiry form
              and we&apos;ll come straight back.
            </p>
          </div>

          <div className="reveal-right divide-y divide-zinc-300 border-t border-zinc-300">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group py-5"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-lg font-semibold leading-snug text-zinc-900 [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span
                    className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-zinc-400 text-zinc-600 transition group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white"
                    aria-hidden
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 pr-10 text-base leading-relaxed text-zinc-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
