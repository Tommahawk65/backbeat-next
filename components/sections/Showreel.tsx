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
      className="scroll-mt-24 bg-primary-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow eyebrow--on-dark">Live showreel</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Watch us light up
            <br />a dance floor.
          </h2>
        </div>

        <div className="reveal-up relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-sm shadow-2xl ring-1 ring-white/10">
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
                sizes="(max-width: 1024px) 100vw, 1120px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                unoptimized
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition group-hover:from-black/70"
              />
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-accent text-white shadow-2xl transition group-hover:scale-110">
                  <Play className="ml-1 h-10 w-10 fill-white" />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
