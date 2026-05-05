import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Kew Gardens wedding band Backbeat. Live indie and rock for weddings at the UNESCO Royal Botanic Gardens in Richmond. 326 acres. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const kewGardens: VenueRecord = {
  type: "venue",
  slug: "kew-gardens",
  name: "Kew Gardens",
  countySlug: "greater-london",
  meta: {
    title: "Kew Gardens Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Kew Gardens Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Royal Botanic Gardens, Kew, Richmond, London",
    subAreas: ["Kew", "Richmond", "Brentford", "Chiswick", "Mortlake"],
  },
  hero: {
    eyebrow: "Kew Gardens · Richmond · London",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Kew Gardens.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the UNESCO Royal Botanic Gardens
        in Richmond. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Kew Gardens",
    heading: (
      <>
        UNESCO. 326 acres. Palm House.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Royal Botanic Gardens at Kew sit in the London Borough
          of Richmond upon Thames, on the south side of the river
          in west London. Founded in 1759, the gardens cover 326
          acres and were designated a UNESCO World Heritage Site in
          2003. Notable wedding-relevant buildings on site include
          the Palm House, the Temperate House, the Great Pagoda,
          Kew Palace and Queen Charlotte&rsquo;s Cottage. Kew is
          run as a non-departmental public body sponsored by Defra.
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
          Kew&rsquo;s wedding spaces split between the glasshouses
          (Palm House and Temperate House are large, glass-walled,
          high-ceilinged rooms with a reverberant acoustic) and the
          smaller buildings (Cambridge Cottage, the Nash Conservatory
          and similar). Each plays differently. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          A Kew wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a strong London core
          and out-of-town friends. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the
          late floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop
          Me Now, Sweet Caroline) take the back-half peaks. Between
          sets a DJ playlist (collaborated with you) keeps the
          floor moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Kew are managed by the Royal Botanic
          Gardens&rsquo; own events team, and they vary by booking
          and by which building you&rsquo;ve booked. Kew is a
          working public garden with significant biological
          collections to protect, and outdoor-music rules can be
          stricter than at most venues. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the events coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Kew Gardens and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Kew.",
    blurb: (
      <>
        Backbeat plays across west and outer London, Surrey and the
        wider Thames Valley. A snapshot of other well-known wedding
        venues within about an hour of Kew. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Hampton Court Palace", town: "Richmond" },
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
    heading: "Live music for your Kew Gardens wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
