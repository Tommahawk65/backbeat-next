import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate w-full overflow-hidden bg-primary-dark text-white"
    >
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
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/85"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10 sm:px-10 sm:pb-14 md:pb-16">
          <div>
            <span className="eyebrow eyebrow--on-dark">
              Hampshire &middot; South Coast &middot; UK-wide
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Weddings that end up
              <br className="hidden sm:block" />{" "}
              on the dance floor.
            </h1>

            <div className="mt-5 grid gap-6 md:mt-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
              <p className="max-w-lg text-lg leading-relaxed text-white/85 sm:text-xl">
                Indie &amp; rock live music, built for the big night. From{" "}
                <span className="font-semibold text-white">£1,900</span>.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:flex-row">
                <EnquiryTrigger className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-accent-light">
                  Check availability
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </EnquiryTrigger>
                <Link
                  href="#video"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  <Play className="h-4 w-4" />
                  Watch video
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
