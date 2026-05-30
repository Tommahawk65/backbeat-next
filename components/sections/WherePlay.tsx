import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { counties } from "@/lib/data/locations";

// Order matters for SEO authority flow — top counties first based on ranking opportunity.
const FEATURED_COUNTY_SLUGS = [
  "hampshire",
  "surrey",
  "west-sussex",
  "berkshire",
  "dorset",
  "isle-of-wight",
  "oxfordshire",
  "wiltshire",
] as const;

export function WherePlay() {
  const featured = FEATURED_COUNTY_SLUGS.map((slug) =>
    counties.find((c) => c.slug === slug),
  ).filter((c): c is (typeof counties)[number] => Boolean(c));

  return (
    <section
      id="where-we-play"
      className="scroll-mt-24 bg-zinc-50 py-16 text-zinc-900 sm:py-24 md:py-32"
      aria-labelledby="where-we-play-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Where we play</span>
          <h2
            id="where-we-play-heading"
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Wedding bands across the south.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
            Based in Southampton, covering everywhere within two and a half
            hours of base. Pick your county for local venues, set timings,
            curfews and the way a Backbeat wedding plays in your area.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((county) => (
            <li key={county.slug}>
              <Link
                href={`/wedding-bands/${county.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-accent/60 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {county.schema.areaServed}
                  </span>
                  <p className="mt-3 font-display text-2xl tracking-wide text-zinc-900">
                    {county.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {county.schema.subAreas.slice(0, 3).join(" · ")}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Wedding bands in {county.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/wedding-bands"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-accent hover:text-accent"
          >
            See all counties and venues
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
