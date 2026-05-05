import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";

import { Breadcrumbs, type BreadcrumbItem } from "@/components/sections/location/Breadcrumbs";
import { LocationHero } from "@/components/sections/location/LocationHero";
import { LocationIntro } from "@/components/sections/location/LocationIntro";
import { LocationTrustStrip } from "@/components/sections/location/LocationTrustStrip";
import { LocationVenues } from "@/components/sections/location/LocationVenues";
import { LocationCTA } from "@/components/sections/location/LocationCTA";
import { LocationSchema } from "@/components/seo/LocationSchema";

import {
  getAllSlugs,
  getCitiesByCounty,
  getCountyBySlug,
  getLocationBySlug,
} from "@/lib/data/locations";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  const path = `/wedding-bands/${location.slug}`;
  return {
    title: location.meta.title,
    description: location.meta.description,
    alternates: { canonical: path },
    openGraph: {
      title: location.meta.ogTitle,
      description: location.meta.description,
      url: path,
      type: "website",
    },
  };
}

export default async function WeddingBandLocationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const path = `/wedding-bands/${location.slug}`;
  const childCities =
    location.type === "county" ? getCitiesByCounty(location.slug) : [];

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Wedding Bands", href: "/wedding-bands" },
  ];
  if (location.type === "venue" || location.type === "city") {
    const county = getCountyBySlug(location.countySlug);
    if (county) {
      breadcrumbItems.push({
        name: county.name,
        href: `/wedding-bands/${county.slug}`,
      });
    }
  }
  breadcrumbItems.push({ name: location.name });

  return (
    <>
      <LocationSchema
        path={path}
        pageName={location.meta.title.split(" |")[0]}
        areaServed={location.schema.areaServed}
        subAreas={location.schema.subAreas}
        description={location.meta.description}
      />

      <LocationHero
        eyebrow={location.hero.eyebrow}
        heading={location.hero.heading}
        subhead={location.hero.subhead}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <LocationIntro
        eyebrow={location.intro.eyebrow}
        heading={location.intro.heading}
        disclaimer={
          location.type === "venue" ? (
            <>
              Backbeat is an independent wedding band and is not
              affiliated with, endorsed by or a preferred supplier of{" "}
              {location.name}. Venue specifics should be confirmed with
              the venue&rsquo;s wedding team directly.
            </>
          ) : undefined
        }
      >
        {location.intro.body}
      </LocationIntro>

      <LocationTrustStrip />

      <LocationVenues
        eyebrow={location.venues.eyebrow}
        heading={location.venues.heading}
        blurb={location.venues.blurb}
        venues={location.venues.list}
      />

      {childCities.length > 0 ? (
        <section
          className="bg-white py-16 sm:py-20 md:py-24"
          aria-labelledby={`${location.slug}-cities-heading`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">{location.name} cities</span>
              <h2
                id={`${location.slug}-cities-heading`}
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl"
              >
                Wedding bands by city in {location.name}.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-600">
                City-specific pages with venue lists, load-in quirks and
                local timing notes.
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {childCities.map((city) => (
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
      ) : null}

      <LocationCTA
        heading={location.cta.heading}
        body={location.cta.body}
      />
    </>
  );
}
