import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Guildford wedding band Backbeat. Live indie and rock for Loseley Park, Guildford Cathedral, Painshill Park and the Surrey Hills wedding circuit. Hampshire-based. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const guildford: CityRecord = {
  type: "city",
  countySlug: "surrey",
  slug: "guildford",
  name: "Guildford",
  meta: {
    title: "Wedding Bands in Guildford — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Guildford — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Guildford",
    subAreas: [
      "Guildford town",
      "Compton",
      "Shalford",
      "Wonersh",
      "Worplesdon",
      "Merrow",
      "Stoke",
    ],
  },
  hero: {
    eyebrow: "Guildford · Surrey · Surrey Hills",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Guildford.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Loseley Park, Guildford Cathedral and
        the Surrey Hills wedding circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Guildford",
    heading: (
      <>
        From Loseley Park
        <br />
        to the Cathedral on the hill.
      </>
    ),
    body: (
      <>
        <p>
          Guildford and the Surrey Hills hold one of the country&rsquo;s
          strongest wedding belts. The area covers country-house estates
          in the Surrey Hills, city-civic ceremony venues in central
          Guildford, rural-estate options on the escarpment and
          relaxed-elegant town hotels. Loseley Park, Guildford Cathedral,
          Painshill Park, Hatchlands, Albury Park and Mandolay are all
          regularly booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Guildford sits inside a
          comfortable forty-five minute drive of base. We play{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/winchester" className={linkClass}>
            Winchester
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/reading" className={linkClass}>
            Reading
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Guildford wedding venues split roughly into three types:
          country-estate weddings on the Surrey Hills, city-civic
          venues in the centre, and town hotels. Each has its own
          rhythm. A country-estate lawn marquee is a different evening
          to a city-centre ceremony reception, and the set list,
          lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          Guildford has a logistical layer most couples don&rsquo;t expect.
          City-centre venues sit inside heritage-protected and
          residential streets with tighter load-in and parking.
          Country-estate venues carry their own gated drives and
          delivery windows. A3 traffic on a Friday afternoon shapes
          when suppliers actually arrive. We confirm the specific
          load-in plan with the coordinator ahead of time rather than
          learning it on the night.
        </p>
        <p>
          Guildford wedding crowds pull a strong London-commuter layer.
          The Waterloo and Portsmouth lines drop guests into the centre
          on Friday afternoon, county-local Surrey families fill the
          parents-of-the-bride brackets, and the Surrey University
          contingent keeps a younger chart-aware layer in the room.
          The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor across the board, Oasis and Stereophonics doing more
          work in the older-skewing rooms, modern-pop crossover (Harry
          Styles, Dua Lipa, Sam Fender) layered through for the
          chart-aware younger guests. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) take the
          back-half peaks. Between sets a DJ playlist (collaborated
          with you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Guildford. Town-centre and residential-edge venues typically
          run earlier cut-offs from local planning conditions. Country
          estates and private-land venues often allow later finishes,
          but every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Guildford wedding and want a band
          that turns up briefed for the venue and reads the room properly,
          send us your date. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Guildford venues",
    heading: "Guildford wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Guildford wedding venues, from Loseley
        Park to the Cathedral and the Surrey Hills estates. We&rsquo;re
        Hampshire-based and travel across to Guildford regularly. If
        yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Loseley Park", town: "Compton" },
      { name: "Guildford Cathedral", town: "Stag Hill" },
      { name: "Painshill Park", town: "Cobham" },
      { name: "Hatchlands Park", town: "East Clandon" },
      { name: "Albury Park", town: "Albury" },
      { name: "Mandolay Hotel", town: "Guildford" },
      { name: "Guildford Castle", town: "Guildford" },
      { name: "Bourne Hill Manor", town: "Worplesdon" },
      { name: "Mercure Guildford", town: "Guildford" },
      { name: "Surrey Sports Park", town: "Guildford" },
    ],
  },
  cta: {
    heading: "Live music for your Guildford wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
