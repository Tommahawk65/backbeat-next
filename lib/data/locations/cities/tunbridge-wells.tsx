import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Tunbridge Wells wedding band Backbeat. Live indie and rock for Salomons Estate, Hotel du Vin, High Rocks and the Tunbridge Wells country-hotel circuit. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const tunbridgeWells: CityRecord = {
  type: "city",
  countySlug: "kent",
  slug: "tunbridge-wells",
  name: "Tunbridge Wells",
  meta: {
    title: "Wedding Bands in Tunbridge Wells | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Tunbridge Wells | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Tunbridge Wells",
    subAreas: [
      "Royal Tunbridge Wells",
      "Pantiles",
      "Rusthall",
      "Southborough",
      "Speldhurst",
      "Bidborough",
      "Frant",
    ],
  },
  hero: {
    eyebrow: "Tunbridge Wells · Kent · West Kent",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Tunbridge Wells.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Salomons Estate, Hotel du Vin, High Rocks
        and the Tunbridge Wells country-hotel circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Tunbridge Wells",
    heading: (
      <>
        From the Pantiles
        <br />
        to High Rocks.
      </>
    ),
    body: (
      <>
        <p>
          Tunbridge Wells holds one of the most consistent country-hotel
          wedding belts in Kent. The area covers country-mansion estates,
          boutique townhouse hotels in town, sandstone-outcrop ceremony
          settings on the rural fringe and historic-estate options a short
          drive out. Salomons Estate, Hotel du Vin Tunbridge Wells, the
          Royal Wells Hotel, High Rocks and Penshurst Place are all
          regularly booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, and Tunbridge Wells sits at
          the western edge of Kent within our regular touring radius. We
          play{" "}
          <Link href="/wedding-bands/kent" className={linkClass}>
            Kent
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/east-sussex" className={linkClass}>
            East Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/brighton" className={linkClass}>
            Brighton
          </Link>{" "}
          regularly. We add a small travel allowance for Kent honestly up
          front, and there&rsquo;s no overnight accommodation to budget
          for.
        </p>
        <p>
          Tunbridge Wells wedding venues split roughly into three types:
          country-mansion estates, boutique townhouse hotels in town, and
          rural-rock or outdoor venues on the fringe. Each has its own
          rhythm. A country-mansion gallery dinner is a different evening
          to an outdoor sandstone-courtyard reception, and the set list,
          lighting rig and stage volume flex around which one you&rsquo;ve
          booked.
        </p>
        <p>
          Tunbridge Wells has a logistical layer most couples don&rsquo;t
          expect. Boutique town hotels sit inside the Pantiles conservation
          area with tighter load-in and parking. Country-estate venues
          carry their own gated drives and delivery windows. A21 traffic
          on a Friday afternoon shapes when suppliers actually arrive. We
          confirm the specific load-in plan with the coordinator ahead of
          time rather than learning it on the night.
        </p>
        <p>
          Tunbridge Wells wedding crowds skew polished and county-rooted.
          Royal Tunbridge Wells has long pulled a particular West-Kent
          professional demographic, and the wedding guest list usually
          reflects it: London commuters in from Charing Cross and
          Cannon Street, Kent county families across the parents-of-
          the-bride brackets, and a smaller chart-aware younger layer.
          The setlist flexes accordingly: Arctic Monkeys, The Killers
          and Kings of Leon for the late floor, Oasis and
          Stereophonics doing more work in the older-skewing rooms,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-half
          peaks. Between sets a DJ playlist (collaborated with you)
          keeps the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across Tunbridge
          Wells. Town-centre and conservation-area venues typically run
          earlier cut-offs from local planning conditions. Country
          estates and private-land venues often allow later finishes,
          but every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Tunbridge Wells wedding and want a
          band that turns up briefed for the venue and reads the room
          properly, send us your date. We&rsquo;ll come back within 24
          hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Tunbridge Wells venues",
    heading: "Tunbridge Wells wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Tunbridge Wells wedding venues, from
        country-mansion estates to boutique townhouse hotels and outdoor
        rock venues. We&rsquo;re Hampshire-based and travel into West Kent
        regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Salomons Estate", town: "Southborough" },
      { name: "Hotel du Vin Tunbridge Wells", town: "Tunbridge Wells" },
      { name: "The Royal Wells Hotel", town: "Tunbridge Wells" },
      { name: "High Rocks", town: "Rusthall" },
      { name: "The Spa Hotel", town: "Tunbridge Wells" },
      { name: "Penshurst Place", town: "Tonbridge" },
      { name: "Bayham Abbey", town: "Lamberhurst" },
      { name: "The Pantiles", town: "Tunbridge Wells" },
      { name: "The Beacon", town: "Rusthall" },
      { name: "One Warwick Park", town: "Tunbridge Wells" },
    ],
  },
  cta: {
    heading: "Live music for your Tunbridge Wells wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
