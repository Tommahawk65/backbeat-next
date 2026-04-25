import { MapPin } from "lucide-react";

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
          {venues.map((v) => (
            <li
              key={v.name}
              className="group flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-accent/50 hover:bg-white/[0.08]"
            >
              <span className="mt-0.5 flex-none text-white/40" aria-hidden>
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-semibold leading-snug text-white">
                  {v.name}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-white/50">
                  {v.town}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
