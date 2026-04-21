"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

type Props = { videoId: string; title?: string };

export function Showreel({
  videoId,
  title = "Backbeat live showreel",
}: Props) {
  const [active, setActive] = useState(false);

  return (
    <section
      id="video"
      className="scroll-mt-24 bg-primary-dark py-16 text-white sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] md:items-center md:gap-16 lg:gap-20">
          <div className="reveal-left">
            <span className="eyebrow eyebrow--on-dark">Showreel</span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
              Watch us light up a dance floor.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              A two-minute cut of the dance-floor moments that keep couples
              coming back — real weddings, real energy, and a band that knows
              how to play a room.
            </p>
            <div className="mt-8 flex items-center gap-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
              <span>2 min watch</span>
              <span aria-hidden className="h-px w-8 bg-white/20" />
              <span>Wedding highlights</span>
            </div>
          </div>

          <div className="reveal-up relative aspect-video w-full overflow-hidden rounded-sm shadow-2xl">
            {active ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setActive(true)}
                className="group absolute inset-0 h-full w-full cursor-pointer"
                aria-label={`Play ${title}`}
              >
                <Image
                  src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  unoptimized
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent transition group-hover:from-black/40"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="relative flex h-28 w-28 items-center justify-center rounded-full bg-accent text-white shadow-2xl transition group-hover:scale-110">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-accent opacity-60 animate-ping"
                    />
                    <Play className="relative ml-1 h-11 w-11 fill-white" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
