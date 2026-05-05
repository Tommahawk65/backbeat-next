import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Syon Park wedding band Backbeat. Live indie and rock for weddings at the Duke of Northumberland's Grade I-listed Adam-interior house in west London. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const syonPark: VenueRecord = {
  type: "venue",
  slug: "syon-park",
  name: "Syon Park",
  countySlug: "greater-london",
  meta: {
    title: "Syon Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Syon Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Syon House, Brentford, London",
    subAreas: ["Brentford", "Isleworth", "Kew", "Richmond", "Twickenham"],
  },
  hero: {
    eyebrow: "Syon Park · Brentford · London",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Syon Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Duke of Northumberland&rsquo;s
        Grade I-listed house in west London. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Syon Park",
    heading: (
      <>
        Robert Adam interiors. Capability Brown park.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Syon House sits on a 200-acre park in the London Borough of
          Hounslow, by the Thames opposite Kew. The exterior was
          built in 1547 for the 1st Duke of Somerset and the
          interiors were redesigned by Robert Adam from 1762 to 1769
          in what became the canonical Adam neoclassical style. The
          house is Grade I listed. The park and lake were laid out
          by Capability Brown around 1760, and the cast-iron-and-
          glass Great Conservatory by Charles Fowler (1820s,
          completed 1827) is on site. The house has been the west
          London residence of the Percy family (Dukes of
          Northumberland) since 1594.
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
          Syon&rsquo;s reception spaces have the kind of Adam-period
          finish that doesn&rsquo;t need help. The 136-foot Long
          Gallery and the State Dining Room set the tone of the day.
          Our stage setup is built to dress around the room rather
          than fight it. Black-finished kit, restrained on-stage
          lighting rather than a stadium rig, and a PA sized for the
          room rather than the road. We dress in stage-blacks unless
          you ask otherwise.
        </p>
        <p>
          A Syon wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a strong London core
          and out-of-town friends. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving. We
          learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Syon are managed by the estate&rsquo;s own
          wedding team, and they vary by booking. A working ducal
          residence with Grade I-listed Adam interiors is one of the
          more careful briefs we play. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter setup
          and any house rules with the wedding coordinator the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re booking Syon Park and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Syon.",
    blurb: (
      <>
        Backbeat plays across west and outer London. A snapshot of
        other well-known wedding venues within about an hour of
        Brentford. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Kew Gardens", town: "Richmond" },
      { name: "Hampton Court Palace", town: "Richmond" },
      { name: "Fulham Palace", town: "Fulham" },
      { name: "Hurlingham Club", town: "Fulham" },
      { name: "Chiswick House", town: "Chiswick" },
      { name: "Great Fosters", town: "Egham" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Coworth Park", town: "Sunningdale" },
    ],
  },
  cta: {
    heading: "Live music for your Syon Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
