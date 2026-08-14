import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Bristol wedding band Backbeat. Live indie and rock music for Clifton, harbourside and country house weddings. Goldney Hall, Tobacco Factory, Avon Gorge. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const bristol: CountyRecord = {
  type: "county",
  slug: "bristol",
  name: "Bristol",
  meta: {
    title: "Wedding Bands in Bristol — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Bristol — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Bristol",
    subAreas: [
      "Clifton",
      "Harbourside",
      "Bedminster",
      "Stokes Croft",
      "Bishopston",
      "Westbury-on-Trym",
      "Redland",
    ],
  },
  hero: {
    eyebrow: "Bristol · Avon · Harbourside",
    heading: (
      <>
        Wedding bands in Bristol
        <br className="hidden sm:block" /> for the city and beyond.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Clifton, harbourside and country-estate
        weddings across the Bristol-Avon belt. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Bristol",
    heading: (
      <>
        From Clifton townhouses
        <br />
        to harbourside warehouses.
      </>
    ),
    body: (
      <>
        <p>
          Bristol is one of the most distinctive wedding cities in the
          country. Clifton brings a Georgian-elegance brief, harbourside
          delivers an urban-cool brief, historic ship and bridge venues
          add their own twist, and the Avon edges of the unitary spill
          out into country estates that reach into{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/gloucestershire" className={linkClass}>
            Gloucestershire
          </Link>
          . Goldney Hall, The Mansion House, Avon Gorge Hotel, Tobacco
          Factory, M Shed, Aerospace Bristol, Brunel&rsquo;s SS Great
          Britain and Leigh Court are all regularly booked across the
          city.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Bristol sits inside a
          comfortable hour-and-a-half drive of base. We also play{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          regularly, so the West Country corridor is genuinely home turf.
          No travel surcharges, no overnight accommodation, no anxious 4am
          drive back from the wrong end of the country.
        </p>
        <p>
          Bristol weddings split roughly into four venue types: Clifton
          townhouses and university buildings, harbourside
          industrial-cool venues, historic ship and bridge weddings,
          and the Avon-edge country estates that reach out of the
          city. Each carries its own brief. A Clifton lawn marquee is
          a different evening to a harbourside warehouse, and the set
          list, lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          Bristol city venues have a logistical layer most couples
          don&rsquo;t expect. Clifton load-in often runs through narrow
          residential streets with strict parking windows, harbourside
          warehouses can sit underneath residential conversions with
          their own sound considerations, and M5/M32 traffic patterns
          shape when suppliers actually arrive. We confirm the specific
          load-in plan with the coordinator ahead of time rather than
          learning it on the night.
        </p>
        <p>
          The Bristol crowd is musically sharper than most. The city
          has a stronger live-music culture than most of the country,
          and the room often arrives expecting the band to actually
          play. The setlist flexes accordingly: Arctic Monkeys, The
          Killers and Kings of Leon for the late floor, Oasis and
          Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for the
          chart-aware younger guests. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) take the
          back-half peaks. Between sets a DJ playlist (collaborated
          with you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across Bristol.
          Clifton townhouses and residential-street central venues
          typically run earlier cut-offs from conservation-area
          planning. Harbourside warehouses sometimes inherit sound
          restrictions tied to residential conversions overhead.
          Avon-edge country estates often allow later finishes, but
          every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Bristol wedding and want a band that
          turns up briefed for the venue and reads the room properly,
          send us your date. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Bristol venues",
    heading: "Bristol wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Bristol wedding venues, from Clifton
        townhouses to harbourside warehouses and Avon-edge country estates.
        We&rsquo;re Hampshire-based and travel across the city end to end.
        If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Goldney Hall", town: "Clifton" },
      { name: "Tobacco Factory", town: "Bedminster" },
      { name: "M Shed", town: "Harbourside" },
      { name: "Aerospace Bristol", town: "Filton" },
      { name: "Avon Gorge Hotel", town: "Clifton" },
      { name: "Brunel's SS Great Britain", town: "Harbourside" },
      { name: "The Mansion House", town: "Clifton" },
      { name: "Leigh Court", town: "Abbots Leigh" },
      { name: "Bristol Old Vic", town: "King Street" },
      { name: "Berkeley Square Hotel", town: "Clifton" },
      { name: "Watershed", town: "Harbourside" },
      { name: "Tortworth Court", town: "Wotton-under-Edge" },
    ],
  },
  cta: {
    heading: "Live music for your Bristol wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
