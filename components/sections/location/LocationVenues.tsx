import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { venuePages } from "@/lib/data/locations";

export type Venue = {
  name: string;
  town: string;
};

type LocationVenuesProps = {
  eyebrow: string;
  heading: React.ReactNode;
  blurb?: React.ReactNode;
  venues: Venue[];
};

const venueSlugByName = new Map(venuePages.map((v) => [v.name, v.slug]));

const cardClass =
  "group flex h-full items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-accent/50 hover:bg-white/[0.08]";

export function LocationVenues({
  eyebrow,
  heading,
  blurb,
  venues,
}: LocationVenuesProps) {
  return (
    <section
      id="venues"
      className="scroll-mt-24 bg-primary-dark py-16 text-white sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow--on-dark">{eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          {blurb ? (
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              {blurb}
            </p>
          ) : null}
        </div>

        <ul className="mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {venues.map((v) => {
            const slug = venueSlugByName.get(v.name);
            const body = (
              <>
                <span
                  className="mt-0.5 flex-none text-white/40"
                  aria-hidden
                >
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-snug text-white">
                    {v.name}
                  </p>
                  <p className="mt-0.5 text-xs uppercase tracking-widest text-white/50">
                    {v.town}
                  </p>
                </div>
                {slug ? (
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 flex-none text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                ) : null}
              </>
            );

            return (
              <li key={v.name}>
                {slug ? (
                  <Link
                    href={`/wedding-bands/${slug}`}
                    className={cardClass}
                  >
                    {body}
                  </Link>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-white/40">
          Venue names are used for descriptive reference. Backbeat is an
          independent wedding band and is not affiliated with, endorsed by
          or a preferred supplier of any venue listed unless stated.
        </p>
      </div>
    </section>
  );
}
