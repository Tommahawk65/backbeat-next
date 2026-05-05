import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Reading wedding band Backbeat. Live indie and rock for The French Horn, Sonning Golf Club, Mapledurham and the Reading Thames Valley wedding scene. Hampshire-based. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const reading: CityRecord = {
  type: "city",
  countySlug: "berkshire",
  slug: "reading",
  name: "Reading",
  meta: {
    title: "Reading Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Reading Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Reading",
    subAreas: [
      "Reading town",
      "Caversham",
      "Sonning",
      "Tilehurst",
      "Pangbourne",
      "Mapledurham",
      "Earley",
    ],
  },
  hero: {
    eyebrow: "Reading · Berkshire · Thames Valley",
    heading: (
      <>
        A Reading
        <br className="hidden sm:block" /> wedding band.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Sonning, Caversham, Mapledurham and the
        Reading Thames Valley wedding circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Reading",
    heading: (
      <>
        From Sonning Thames-side
        <br />
        to Mapledurham Estate.
      </>
    ),
    body: (
      <>
        <p>
          Reading sits in the middle of one of the strongest wedding belts
          in the Thames Valley. The area covers riverside-hotel venues
          along the Sonning Thames, country-estate options around
          Caversham, Mapledurham and Pangbourne, town civic rooms in the
          centre, and country-club venues across the wider Berkshire
          belt. The French Horn, The Mill at Sonning, Sonning Golf Club,
          Mapledurham Estate, Hennerton House, Caversham Court, Reading
          Town Hall and Calcot Park are all regularly booked across the
          area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Reading sits inside a
          comfortable hour-and-a-half drive of base. We play{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/marlow" className={linkClass}>
            Marlow
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/oxford" className={linkClass}>
            Oxford
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Reading wedding venues split roughly into three types:
          riverside Thames-side venues, country estates around Caversham
          and Pangbourne, and the Reading civic and country-club venues.
          Each has its own rhythm. A riverside dinner is a different
          evening to a country-estate reception, and the set list,
          lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          Reading has a logistical layer most couples don&rsquo;t expect.
          Sonning sits across single-track Thames-bridge access from
          Reading, and Friday afternoon traffic on the A4 and M4 shapes
          when suppliers actually arrive. Country-estate venues carry
          their own gated drives and delivery windows. We confirm the
          specific load-in plan with the coordinator ahead of time
          rather than learning it on the night.
        </p>
        <p>
          Reading wedding crowds tend to be a hybrid: London weekend
          traffic out of Paddington, Berkshire locals, and
          multi-generational family guest lists. Reading Festival is a
          decades-old live-music institution and the city carries that
          heritage into wedding crowds that arrive paying attention. The
          setlist flexes accordingly: Arctic Monkeys, The Killers and
          Kings of Leon for the late floor, Oasis and Stereophonics for
          the mid-evening, modern-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender) layered through for the chart-aware younger
          guests. Wedding non-negotiables (Mr Brightside, Don&rsquo;t
          Stop Me Now, Sweet Caroline) take the back-half peaks.
          Between sets a DJ playlist (collaborated with you) keeps the
          floor moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across Reading.
          Town-centre and riverside-residential venues typically run
          earlier cut-offs from local planning conditions. Country
          estates and private-land venues often allow later finishes,
          but every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Reading wedding and want a band that
          turns up briefed for the venue and reads the room properly,
          send us your date. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Reading venues",
    heading: "Reading wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Reading wedding venues, from Sonning
        riverside to Mapledurham Estate and the Reading civic rooms.
        We&rsquo;re Hampshire-based and travel into the Thames Valley
        regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The French Horn", town: "Sonning" },
      { name: "The Mill at Sonning", town: "Sonning" },
      { name: "Sonning Golf Club", town: "Sonning" },
      { name: "Mapledurham Estate", town: "Mapledurham" },
      { name: "Hennerton House", town: "Wargrave" },
      { name: "Caversham Court", town: "Caversham" },
      { name: "Reading Town Hall", town: "Reading" },
      { name: "Reading Abbey", town: "Reading" },
      { name: "Calcot Park", town: "Tilehurst" },
      { name: "Crowne Plaza Reading", town: "Reading" },
    ],
  },
  cta: {
    heading: "Live music for your Reading wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
