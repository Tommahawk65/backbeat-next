import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Hampton Court Palace wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Tudor and Baroque palace on the Thames. Historic Royal Palaces. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const hamptonCourtPalace: VenueRecord = {
  type: "venue",
  slug: "hampton-court-palace",
  name: "Hampton Court Palace",
  countySlug: "greater-london",
  meta: {
    title: "Hampton Court Palace Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Hampton Court Palace Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Hampton Court Palace, Richmond upon Thames, London",
    subAreas: [
      "Hampton",
      "Richmond",
      "Kingston upon Thames",
      "Esher",
      "Surbiton",
    ],
  },
  hero: {
    eyebrow: "Hampton Court Palace · Richmond · London",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Hampton Court.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Tudor and
        Baroque palace on the Thames. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Hampton Court Palace",
    heading: (
      <>
        Built 1514. Wolsey. Henry VIII.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Hampton Court Palace sits on the Thames in the London
          Borough of Richmond upon Thames, about twelve miles
          south-west of central London. Construction began in 1514
          for Cardinal Thomas Wolsey, before the palace passed to
          Henry VIII in 1529 and became one of his most-favoured
          residences. It&rsquo;s Grade I listed, with the formal
          gardens (and the 1690s Maze) separately Grade I listed in
          the Register of Historic Parks and Gardens. The palace is
          run today by the independent charity Historic Royal
          Palaces.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/greater-london" className={linkClass}>
            Greater London
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          regularly, with the M3 corridor in handled routinely. We
          add a small London allowance to cover ULEZ, congestion-
          charge and Friday-afternoon traffic honestly, and
          there&rsquo;s no overnight accommodation to budget for.
        </p>
        <p>
          Hampton Court&rsquo;s reception spaces have the kind of
          period finish, scale and ceiling height that don&rsquo;t
          need help. Our stage setup is built to dress around the
          room rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA sized
          for the room rather than the road. We dress in stage-blacks
          unless you ask otherwise.
        </p>
        <p>
          A Hampton Court wedding tends to pull a guest list
          that&rsquo;s travelled in for the weekend, often with
          international friends. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop
          Me Now, Sweet Caroline) take the back-half peaks. Between
          sets a DJ playlist (collaborated with you) keeps the floor
          moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Hampton Court are managed by Historic Royal
          Palaces, and they vary by booking. A Grade I listed Tudor
          palace with daytime public-tour operations and a Sunday-
          evening reset is one of the most careful briefs we play.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Hampton Court Palace and want a
          band that turns up briefed, properly dressed and with the
          dance floor firmly in mind, send us your date. We&rsquo;d
          love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Hampton Court.",
    blurb: (
      <>
        Backbeat plays across west and outer London, Surrey and the
        wider Thames Valley. A snapshot of other well-known wedding
        venues within about an hour of Hampton Court. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Kew Gardens", town: "Richmond" },
      { name: "Syon Park", town: "Brentford" },
      { name: "Fulham Palace", town: "Fulham" },
      { name: "Hurlingham Club", town: "Fulham" },
      { name: "Great Fosters", town: "Egham" },
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Coworth Park", town: "Sunningdale" },
    ],
  },
  cta: {
    heading: "Live music for your Hampton Court wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
