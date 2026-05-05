import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Hurlingham Club wedding band Backbeat. Live indie and rock for weddings at the 42-acre Georgian-style members' club on the Thames at Fulham. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const hurlinghamClub: VenueRecord = {
  type: "venue",
  slug: "hurlingham-club",
  name: "The Hurlingham Club",
  countySlug: "greater-london",
  meta: {
    title: "Hurlingham Club Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Hurlingham Club Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "The Hurlingham Club, Fulham, London",
    subAreas: ["Fulham", "Putney", "Chelsea", "Hammersmith", "Wandsworth"],
  },
  hero: {
    eyebrow: "Hurlingham Club · Fulham · London",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for the Hurlingham Club.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the 42-acre members&rsquo; club on
        the Thames at Fulham. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · The Hurlingham Club",
    heading: (
      <>
        Founded 1869. 42 acres on the Thames.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Hurlingham Club sits in Ranelagh Gardens at Fulham, on
          42 acres beside the Thames in south-west London. The club
          was founded in 1869 around a Georgian-style clubhouse and
          is still a private members&rsquo; club today, with around
          13,000 members and a closed waiting list. The club is
          historically significant as the home of modern polo
          (rules published here in 1873; first international match
          England vs the United States in 1886; polo events for the
          1908 London Olympics).
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
          The Hurlingham&rsquo;s reception spaces have the kind of
          Georgian-style finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Hurlingham wedding tends to pull a guest list with a
          strong London core, a members&rsquo;-club crowd that knows
          the room, and friends travelled in for the weekend. The
          setlist flexes accordingly: Arctic Monkeys, The Killers and
          Kings of Leon for the late floor, Oasis and Stereophonics
          for the mid-evening, modern-pop crossover (Harry Styles,
          Dua Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-
          half peaks. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at the Hurlingham Club are managed by the
          club&rsquo;s own events team, and they vary by booking.
          A members&rsquo; club in a residential riverside London
          setting is one of the more careful briefs we play. We
          don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the events
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking the Hurlingham Club and want a
          band that turns up briefed, properly dressed and with the
          dance floor firmly in mind, send us your date. We&rsquo;d
          love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near the Hurlingham.",
    blurb: (
      <>
        Backbeat plays across west and central London. A snapshot of
        other well-known wedding venues within about an hour of
        Fulham. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Fulham Palace", town: "Fulham" },
      { name: "Kew Gardens", town: "Richmond" },
      { name: "Hampton Court Palace", town: "Richmond" },
      { name: "Syon Park", town: "Brentford" },
      { name: "Chiswick House", town: "Chiswick" },
      { name: "OXO Tower", town: "South Bank" },
      { name: "Wallace Collection", town: "Marylebone" },
      { name: "RIBA", town: "Marylebone" },
    ],
  },
  cta: {
    heading: "Live music for your Hurlingham Club wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
