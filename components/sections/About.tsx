import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

export function About() {
  return (
    <section id="about" className="bg-cream py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="reveal-left hidden md:sticky md:top-28 md:block md:self-start">
            <div className="@container relative aspect-[9/10]">
              <div className="absolute right-0 top-0 aspect-[2/3] w-[48%] overflow-hidden rounded-xl">
                <Image
                  src="/images/band/3.jpg"
                  alt="Backbeat wedding band on stage"
                  fill
                  sizes="(max-width: 768px) 48vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 aspect-[2/3] w-[56%] overflow-hidden rounded-xl">
                <Image
                  src="/images/gallery/4.jpg"
                  alt="Backbeat wedding band performing live"
                  fill
                  sizes="(max-width: 768px) 56vw, 28vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div
                aria-hidden
                className="absolute left-[52%] top-[64%] h-[28cqw] w-[28cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3.5cqw] border-cream"
              />
            </div>
          </div>

          <div className="reveal-right flex flex-col justify-center">
            <span className="eyebrow">About the band</span>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              Hampshire&rsquo;s premier
              <br />
              indie &amp; rock wedding band.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-700 sm:text-lg">
              <p>
                Backbeat are Hampshire&rsquo;s leading wedding band specialising
                in high-energy indie and rock performances. Based in
                Southampton and serving Portsmouth, Winchester and the entire
                South Coast, we deliver an expertly curated mix of indie
                anthems, rock classics and modern chart hits that keep your
                dance floor packed all night long.
              </p>
              <p>
                Consistently glowing five-star reviews from happy couples
                across Hampshire, Dorset and Sussex. Professional live
                entertainment for weddings, corporate events and private
                parties.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-3xl tracking-wide text-zinc-900">
                  From £1,900
                </p>
                <p className="mt-1 text-sm text-zinc-500">
                  Live sets &middot; full PA &amp; lighting &middot; DJ between &amp; after
                </p>
              </div>
              <EnquiryTrigger className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-accent-light">
                Check availability
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </EnquiryTrigger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
