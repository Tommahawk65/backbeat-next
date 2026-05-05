import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Winchester wedding band Backbeat. Live indie and rock for Lainston House, Avington Park, Marwell Hotel and Winchester Cathedral weddings. Hampshire-based. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const winchester: CityRecord = {
  type: "city",
  countySlug: "hampshire",
  slug: "winchester",
  name: "Winchester",
  meta: {
    title: "Winchester Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Winchester Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Winchester",
    subAreas: [
      "Winchester city",
      "Twyford",
      "Hursley",
      "Itchen Abbas",
      "Sparsholt",
      "Owslebury",
      "Easton",
    ],
  },
  hero: {
    eyebrow: "Winchester · Hampshire · Cathedral city",
    heading: (
      <>
        A Winchester
        <br className="hidden sm:block" /> wedding band.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Winchester city, Lainston, Avington and the
        country-house circuit just outside town. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Winchester",
    heading: (
      <>
        From the Cathedral
        <br />
        to the country houses.
      </>
    ),
    body: (
      <>
        <p>
          Winchester is one of the most-booked wedding cities in the south.
          City-centre ceremonies pull a crowd into the High Street pubs
          first, then out to country-house receptions a short drive away.
          Lainston House, Avington Park, Norton Park and Marwell Hotel
          all sit inside a short drive of the city centre, alongside
          Winchester Cathedral, the Guildhall and the Wykeham Arms in
          town.
        </p>
        <p>
          Backbeat is a Hampshire-based band built about ten miles from the
          Cathedral, so Winchester weddings are essentially home gigs. We
          play{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          end to end every season, and also cover{" "}
          <Link href="/wedding-bands/southampton" className={linkClass}>
            Southampton
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/portsmouth" className={linkClass}>
            Portsmouth
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Winchester wedding venues split roughly into three types:
          city-centre ceremonies, country-house receptions just outside
          the city, and rural-estate weddings further out into the South
          Downs and Itchen Valley. Each has its own rhythm. A black-tie
          country-house evening is a different room to a relaxed garden
          marquee, and the set list, lighting rig and stage volume flex
          around which one you&rsquo;ve booked.
        </p>
        <p>
          Winchester has a logistical layer most couples don&rsquo;t expect.
          City-centre venues sit inside protected residential streets with
          tighter load-in windows and parking restrictions. Country-estate
          venues carry their own gated drives and delivery windows, often
          on single-track approaches. We confirm the specific load-in
          plan with the coordinator ahead of time rather than learning it
          on the night.
        </p>
        <p>
          Winchester wedding crowds tend to be a tight mix of Hampshire
          locals (often the parents have lived in the city for thirty
          years) and London friend groups down for the weekend. The
          musical brief sits comfortably between the two. We lean Arctic
          Monkeys, The Killers and Oasis for the indie spine, Kings of
          Leon and Stereophonics for the late floor, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for the
          chart-aware younger guests. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) take the
          back-half peaks. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first dance
          per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Winchester. Town-centre and residential-edge venues typically
          run earlier cut-offs from local planning conditions. Country
          estates and private-land venues often allow later finishes,
          but every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Winchester wedding and want a local band
          that already knows the venues, the timings and the dance floor,
          send us your date. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Winchester venues",
    heading: "Winchester wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Winchester wedding venues, from the
        Cathedral and Guildhall to the country houses just outside the city.
        We&rsquo;re Hampshire-based and travel across the area regularly. If
        yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Lainston House", town: "Sparsholt" },
      { name: "Winchester Cathedral", town: "Winchester" },
      { name: "Avington Park", town: "Itchen Abbas" },
      { name: "Marwell Hotel", town: "Owslebury" },
      { name: "Norton Park", town: "Sutton Scotney" },
      { name: "Winchester Guildhall", town: "Winchester" },
      { name: "The Wykeham Arms", town: "Winchester" },
      { name: "Royal Winchester Hotel", town: "Winchester" },
      { name: "Lillie Langtry Manor", town: "Winchester" },
      { name: "Hutton Hall", town: "Easton" },
    ],
  },
  cta: {
    heading: "Live music for your Winchester wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
