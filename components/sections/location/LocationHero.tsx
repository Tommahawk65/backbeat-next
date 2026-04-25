import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

type LocationHeroProps = {
  eyebrow: string;
  heading: React.ReactNode;
  subhead: React.ReactNode;
};

export function LocationHero({
  eyebrow,
  heading,
  subhead,
}: LocationHeroProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-primary-dark text-white">
      <div className="relative h-[calc(100dvh-10rem)] min-h-[480px] w-full md:h-[calc(100dvh-12rem)] md:min-h-[560px]">
        <video
          src="/videos/hero/hero.mp4"
          poster="/images/hero.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/60"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10 sm:px-10 sm:pb-14 md:pb-16">
          <div>
            <span className="eyebrow eyebrow--on-dark">{eyebrow}</span>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {heading}
            </h1>

            <div className="mt-4 grid gap-4 md:mt-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12">
              <p className="max-w-lg break-words text-base leading-relaxed text-white/85 sm:text-xl">
                {subhead}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:flex-row">
                <EnquiryTrigger className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-accent-light">
                  Check availability
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </EnquiryTrigger>
                <Link
                  href="#venues"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4" />
                  See venues
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
