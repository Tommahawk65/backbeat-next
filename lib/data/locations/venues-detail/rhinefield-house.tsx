import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Rhinefield House wedding band Backbeat. Live indie and rock for weddings at the Hand Picked Hotels country house in the New Forest at Brockenhurst. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const rhinefieldHouse: VenueRecord = {
  type: "venue",
  slug: "rhinefield-house",
  name: "Rhinefield House",
  countySlug: "hampshire",
  meta: {
    title: "Rhinefield House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Rhinefield House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Rhinefield House, Brockenhurst, Hampshire",
    subAreas: ["Brockenhurst", "Lyndhurst", "Lymington", "Sway", "Beaulieu"],
  },
  hero: {
    eyebrow: "Rhinefield House · Brockenhurst · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Rhinefield House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Hand Picked Hotels country
        house, deep in the New Forest at Brockenhurst. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Rhinefield House",
    heading: (
      <>
        Deep in the New Forest.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Rhinefield House sits in the New Forest at Brockenhurst, in
          south-west Hampshire. It runs as a country house hotel
          under Hand Picked Hotels, with woodland and ornamental
          gardens on the doorstep and the Rhinefield Ornamental Drive
          a few minutes away.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Rhinefield is effectively home turf. We cover{" "}
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
          Rhinefield&rsquo;s reception spaces have the kind of
          country-house finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Rhinefield wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-South-coast
          crowd that&rsquo;s comfortable on a dance floor. The
          setlist flexes accordingly: Arctic Monkeys, The Killers and
          Kings of Leon for the late floor, Oasis and Stereophonics
          for the mid-evening, modern-pop crossover (Harry Styles,
          Dua Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-half
          peaks. Between sets a DJ playlist (collaborated with you)
          keeps the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Rhinefield are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. Heritage
          properties inside the New Forest National Park can carry
          their own access and timing protocols. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter setup
          and any house rules with the wedding coordinator the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re booking Rhinefield House and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love to
          be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Rhinefield.",
    blurb: (
      <>
        Backbeat plays across the New Forest, the Solent coast and
        the wider South. A snapshot of other well-known wedding
        venues within about an hour of Brockenhurst. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Pylewell Park", town: "Lymington" },
      { name: "Burley Manor", town: "Burley" },
      { name: "Somerley House", town: "Ringwood" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "The Montagu Arms", town: "Beaulieu" },
      { name: "Lainston House", town: "Winchester" },
    ],
  },
  cta: {
    heading: "Live music for your Rhinefield House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
