import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Plus, Youtube } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

const socials = [
  {
    href: "https://www.facebook.com/profile.php?id=61570867951360",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/backbeatlive/",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@Backbeat-UK",
    label: "YouTube",
    Icon: Youtube,
  },
];

const faqs = [
  {
    q: "How much does it cost to book us?",
    a: "Live music packages from £1,900. Pricing depends on event location, performance duration, and specific requirements — send us your event details for a tailored quote.",
  },
  {
    q: "How far do you travel?",
    a: "We perform across Hampshire, Dorset, Surrey and beyond — whether your event is across the country or abroad, we're ready to bring live performance to you.",
  },
  {
    q: "How much time do you need for set-up?",
    a: "We require a minimum of 90 minutes to load in and set up. Ideally before your guests enter the performance room, but we're skilled at setting up quietly and efficiently with minimal disruption.",
  },
  {
    q: "Do you provide DJ music before, between & after sets?",
    a: "Yes. We'll collaborate with you to create a personalised DJ playlist for before, between and after our live sets. Whether you have a specific genre, a list of favourite songs, or a Spotify playlist, we'll take care of the rest.",
  },
  {
    q: "Can you provide music for our drinks reception?",
    a: "Yes — we offer a 60-minute acoustic live-lounge duo set, ideal for setting the ambiance during drinks reception or dinner.",
  },
  {
    q: "Does the band provide all their own equipment?",
    a: "Yes. We use high-quality, PAT-tested equipment for top-notch sound and lighting. The band is fully self-contained, and we're experienced with sound-limiter venues.",
  },
  {
    q: "Do you take requests?",
    a: "Absolutely. As part of our service we'll learn a special song at no extra cost — whether it's your first dance or a standout main-set moment, let us know and we'll include it.",
  },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
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
            availability and a tailored quote — usually within a few hours.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium text-accent-dark">
            Saturdays book up fast — peak season (May–Sept) goes early.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <EnquiryTrigger className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-accent-light">
              Check availability
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </EnquiryTrigger>
            <p className="text-sm text-zinc-500">
              Or message us on{" "}
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent"
              >
                WhatsApp
              </a>
              {" "}&middot;{" "}
              <a
                href="mailto:hello@backbeat-band.co.uk"
                className="font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent"
              >
                email
              </a>
            </p>
          </div>
          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-8 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-widest text-zinc-500">
                From
              </dt>
              <dd className="mt-1 font-display text-2xl text-zinc-900">
                £1,900
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-zinc-500">
                Response
              </dt>
              <dd className="mt-1 font-display text-2xl text-zinc-900">
                &lt; 24 hrs
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-zinc-500">
                Base
              </dt>
              <dd className="mt-1 text-zinc-900">Hampshire</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-zinc-500">
                Travel
              </dt>
              <dd className="mt-1 text-zinc-900">South Coast &amp; UK-wide</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        id="faqs"
        className="scroll-mt-24 border-b border-white/10 py-14 sm:py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[5fr_7fr] md:gap-16">
          <div>
            <span className="eyebrow eyebrow--on-dark">FAQ</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Quick answers.
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Anything else, drop a line through the enquiry form.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group py-5"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-base font-semibold leading-snug text-white [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/30 text-white/80 transition group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-primary-dark"
                    aria-hidden
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-sm leading-relaxed text-white/70">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Link
            href="/"
            aria-label="Backbeat home"
            className="inline-block"
          >
            <Image
              src="/images/Backbeat Logo_White.png"
              alt="Backbeat"
              width={470}
              height={290}
              className="mx-auto h-20 w-auto sm:h-24"
            />
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.32em] text-white/50">
            See you on the dance floor
          </p>
          <div className="mt-10 flex justify-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={`Follow us on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Backbeat Wedding Band</p>
          <p className="text-xs uppercase tracking-widest text-white/40">
            Managed by Impact Entertainment
          </p>
        </div>
      </div>
    </footer>
  );
}
