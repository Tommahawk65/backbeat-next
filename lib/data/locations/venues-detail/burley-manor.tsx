import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Burley Manor wedding band Backbeat. Live indie and rock for weddings at the New Forest Hotels country house with private deer park, near Ringwood. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const burleyManor: VenueRecord = {
  type: "venue",
  slug: "burley-manor",
  name: "Burley Manor",
  countySlug: "hampshire",
  meta: {
    title: "Burley Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Burley Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Burley Manor, Burley, near Ringwood, Hampshire",
    subAreas: ["Burley", "Ringwood", "Bransgore", "Lyndhurst", "Brockenhurst"],
  },
  hero: {
    eyebrow: "Burley Manor · Burley · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Burley Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the New Forest country house with a
        private deer park, near Ringwood. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Burley Manor",
    heading: (
      <>
        New Forest village. Private deer park.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Burley Manor sits in the New Forest village of Burley, a
          short drive from Ringwood. It runs as a country house hotel
          under New Forest Hotels, with a private deer park on the
          estate, a seasonal outdoor wellness pool and an outdoor
          terrace overlooking the grounds. Accommodation runs across
          a mix of named room types from the Burley Suite through to
          Garden Suites and a converted Deer View Hut.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so Burley
          is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and the{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          coast regularly, so there are no travel surcharges, no
          overnight accommodation and no anxious 4am drives back
          from the wrong end of the country.
        </p>
        <p>
          Burley&rsquo;s reception spaces have the kind of country-
          house finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Burley wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-South-coast
          crowd plus a strong New Forest local turnout. The setlist
          flexes accordingly: Arctic Monkeys, The Killers and Kings of
          Leon for the late floor, Oasis and Stereophonics for the
          mid-evening, modern-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender) layered through for the chart-aware younger
          guests. Wedding non-negotiables (Mr Brightside, Don&rsquo;t
          Stop Me Now, Sweet Caroline) take the back-half peaks.
          Between sets a DJ playlist (collaborated with you) keeps
          the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Burley Manor are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          Properties inside the New Forest National Park can carry
          their own access and timing protocols. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Burley Manor and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Burley.",
    blurb: (
      <>
        Backbeat plays across the New Forest, the Dorset coast and
        the wider South. A snapshot of other well-known wedding
        venues within about an hour of Ringwood. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Somerley House", town: "Ringwood" },
      { name: "Rhinefield House", town: "Brockenhurst" },
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Pylewell Park", town: "Lymington" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "The Montagu Arms", town: "Beaulieu" },
      { name: "Lainston House", town: "Winchester" },
    ],
  },
  cta: {
    heading: "Live music for your Burley Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
