import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Beaverbrook wedding band Backbeat. Live indie and rock for weddings at the Surrey Hills country estate, former home of the 1st Baron Beaverbrook. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const beaverbrook: VenueRecord = {
  type: "venue",
  slug: "beaverbrook",
  name: "Beaverbrook",
  countySlug: "surrey",
  meta: {
    title: "Beaverbrook Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Beaverbrook Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Beaverbrook, Leatherhead, Surrey",
    subAreas: ["Leatherhead", "Dorking", "Mickleham", "Reigate", "Cobham"],
  },
  hero: {
    eyebrow: "Beaverbrook · Leatherhead · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Beaverbrook.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Surrey Hills estate, former
        home of the 1st Baron Beaverbrook. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Beaverbrook",
    heading: (
      <>
        Surrey Hills. Lord Beaverbrook&rsquo;s estate.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Beaverbrook sits on Reigate Road in Leatherhead, in the
          Surrey Hills. The estate was the former home of the 1st
          Baron Beaverbrook, the publisher and political insider, and
          was a regular weekend stop for Winston Churchill among
          others. It runs as a country house hotel today, with the
          wedding offering split across The House, the Garden House,
          the Coach House and the Village, and named restaurants
          including Sir Frank&rsquo;s Bar, Mrs Beeton&rsquo;s and
          the Japanese Grill on site.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          regularly, so Leatherhead sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Beaverbrook&rsquo;s reception spaces are a mix of period
          country-house interiors and converted estate buildings.
          Each plays differently. Our stage setup is built to dress
          around the room rather than fight it. Black-finished kit,
          restrained on-stage lighting rather than a stadium rig,
          and a PA sized for the room rather than the road. We dress
          in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Beaverbrook wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          home-counties core. The setlist flexes accordingly: Arctic
          Monkeys, The Killers and Kings of Leon for the late floor,
          Oasis and Stereophonics for the mid-evening, modern-pop
          crossover (Harry Styles, Dua Lipa, Sam Fender) layered
          through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a
          DJ playlist (collaborated with you) keeps the floor moving.
          We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Beaverbrook are managed by the
          venue&rsquo;s own wedding team, and they vary by booking
          and by which building (House, Garden House or Coach House)
          you&rsquo;ve booked. We don&rsquo;t make assumptions. We
          confirm the specific cut-off, limiter setup and any house
          rules with the wedding coordinator the week before, and
          pace the closing set so it lands at the actual end of the
          night.
        </p>
        <p>
          If you&rsquo;re booking Beaverbrook and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Beaverbrook.",
    blurb: (
      <>
        Backbeat plays across Surrey, Berkshire and the wider South
        East. A snapshot of other well-known wedding venues within
        about an hour of Leatherhead. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Foxhills", town: "Ottershaw" },
      { name: "Great Fosters", town: "Egham" },
      { name: "Loseley Park", town: "Guildford" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "South Lodge", town: "Lower Beeding" },
    ],
  },
  cta: {
    heading: "Live music for your Beaverbrook wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
