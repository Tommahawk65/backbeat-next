import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Breadcrumbs } from "@/components/sections/location/Breadcrumbs";
import { LocationHero } from "@/components/sections/location/LocationHero";
import { LocationTrustStrip } from "@/components/sections/location/LocationTrustStrip";
import { LocationCTA } from "@/components/sections/location/LocationCTA";
import { cities, counties } from "@/lib/data/locations";

const description =
  "Backbeat is a Hampshire-based wedding band covering the south of England. Live indie and rock music for weddings across Hampshire, Surrey, Berkshire, West Sussex, Dorset, Wiltshire, Oxfordshire and the Isle of Wight. Packages from £1,900.";

export const metadata: Metadata = {
  title: "Wedding Bands Across the South of England",
  description,
  alternates: { canonical: "/wedding-bands" },
  openGraph: {
    title: "Wedding Bands Across the South of England | Backbeat",
    description,
    url: "/wedding-bands",
    type: "website",
  },
};

export default function WeddingBandsHubPage() {
  return (
    <>
      <LocationHero
        eyebrow="Wedding bands · South of England · UK-wide"
        heading={
          <>
            A wedding band
            <br className="hidden sm:block" /> for the south of England.
          </>
        }
        subhead={
          <>
            Hampshire-based, covering everywhere within two and a half hours of
            Southampton. Live indie &amp; rock from{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Wedding Bands" },
        ]}
      />

      <section
        id="counties"
        className="bg-cream py-16 sm:py-24 md:py-32"
        aria-labelledby="counties-heading"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Counties we cover</span>
            <h2
              id="counties-heading"
              className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
            >
              Browse by county.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
              Pick your county for venues, set timings, curfew quirks and the
              specifics of how a Backbeat wedding plays in your area. We
              travel widely beyond this list. If your county isn&rsquo;t
              listed, get in touch anyway.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {counties.map((county) => (
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
                      {county.schema.subAreas.slice(0, 4).join(" · ")}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    See {county.name} venues
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="cities"
        className="bg-white py-16 sm:py-24 md:py-32"
        aria-labelledby="cities-heading"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Cities we cover</span>
            <h2
              id="cities-heading"
              className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
            >
              Browse by city.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
              City-specific pages with venue lists, parking quirks and
              registry-office tips. If your city isn&rsquo;t listed, the
              county page covers it.
            </p>
          </div>

          <ul className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/wedding-bands/${city.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-zinc-200 bg-cream/40 p-4 transition hover:border-accent/60 hover:bg-cream"
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      className="h-4 w-4 flex-none text-zinc-400"
                      strokeWidth={1.75}
                    />
                    <span className="font-display text-lg tracking-wide text-zinc-900">
                      {city.name}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-none text-accent transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LocationTrustStrip />

      <LocationCTA
        heading="Live music for your wedding."
        body={
          <>
            Tell us your date and venue. We&rsquo;ll come back with
            availability and a tailored quote within 24 hours.
          </>
        }
      />
    </>
  );
}
