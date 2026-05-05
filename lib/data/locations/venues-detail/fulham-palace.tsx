import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Fulham Palace wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed former Bishops of London residence on the Thames. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const fulhamPalace: VenueRecord = {
  type: "venue",
  slug: "fulham-palace",
  name: "Fulham Palace",
  countySlug: "greater-london",
  meta: {
    title: "Fulham Palace Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Fulham Palace Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Fulham Palace, Fulham, London",
    subAreas: ["Fulham", "Hammersmith", "Putney", "Chelsea", "Barnes"],
  },
  hero: {
    eyebrow: "Fulham Palace · Fulham · London",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Fulham Palace.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed former
        Bishops&rsquo; residence on the Thames. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Fulham Palace",
    heading: (
      <>
        Tudor Great Hall. 13 acres of garden.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Fulham Palace sits on the north bank of the Thames in
          Fulham, in the London Borough of Hammersmith and Fulham.
          The Bishops of London held it from the 8th century and
          used it as their principal residence from the 11th century
          until 1973. The Tudor Great Hall and Tudor courtyard date
          to the late 15th century. The palace is Grade I listed and
          the moat is a scheduled monument; the 13-acre botanic
          garden is Grade II*-listed in the Register of Historic
          Parks and Gardens. The site is owned by the Church of
          England and run by the Fulham Palace Trust.
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
          Fulham Palace&rsquo;s reception spaces have the kind of
          period finish that doesn&rsquo;t need help. The Great Hall
          is the room of the day for most weddings here. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Fulham Palace wedding tends to pull a guest list with a
          strong London core, plus family travelled in for the
          weekend. The setlist flexes accordingly: Arctic Monkeys,
          The Killers and Kings of Leon for the late floor, Oasis
          and Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for
          the chart-aware younger guests. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline)
          take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Fulham Palace are managed by the
          Trust&rsquo;s own events team, and they vary by booking.
          A Grade I listed heritage palace in a residential
          riverside London setting carries its own access,
          conservation and timing protocols, and curfews here can
          be earlier than couples expect. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter setup
          and any house rules with the events coordinator the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re booking Fulham Palace and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Fulham.",
    blurb: (
      <>
        Backbeat plays across west and central London. A snapshot of
        other well-known wedding venues within about an hour of
        Fulham. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Hurlingham Club", town: "Fulham" },
      { name: "Hampton Court Palace", town: "Richmond" },
      { name: "Kew Gardens", town: "Richmond" },
      { name: "Syon Park", town: "Brentford" },
      { name: "Chiswick House", town: "Chiswick" },
      { name: "OXO Tower", town: "South Bank" },
      { name: "RIBA", town: "Marylebone" },
      { name: "Wallace Collection", town: "Marylebone" },
    ],
  },
  cta: {
    heading: "Live music for your Fulham Palace wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
