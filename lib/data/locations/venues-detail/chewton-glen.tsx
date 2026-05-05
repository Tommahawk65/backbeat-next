import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Chewton Glen wedding band Backbeat. Live indie and rock for weddings at the Relais & Châteaux country house on the edge of the New Forest. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const chewtonGlen: VenueRecord = {
  type: "venue",
  slug: "chewton-glen",
  name: "Chewton Glen",
  countySlug: "hampshire",
  meta: {
    title: "Chewton Glen Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Chewton Glen Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Chewton Glen, New Milton, Hampshire",
    subAreas: ["New Milton", "Lymington", "Christchurch", "Brockenhurst", "Sway"],
  },
  hero: {
    eyebrow: "Chewton Glen · New Milton · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Chewton Glen.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Relais &amp; Châteaux country
        house on the edge of the New Forest. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Chewton Glen",
    heading: (
      <>
        Edge of the New Forest.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Chewton Glen sits at New Milton on the south coast of
          Hampshire, on the edge of the New Forest National Park. The
          house dates to the 18th century (first recorded mention
          1732) and has run as a hotel since 1962. It&rsquo;s a
          five-star Relais &amp; Châteaux property and part of the
          Iconic Hotels &amp; Resorts group, with 70 rooms and suites
          across the estate.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so Chewton
          Glen is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and the{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          coast regularly, so there are no travel surcharges, no
          overnight accommodation and no anxious 4am drives back from
          the wrong end of the country.
        </p>
        <p>
          Chewton Glen&rsquo;s reception spaces have the kind of
          country-house finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Chewton Glen wedding tends to pull a guest list
          that&rsquo;s travelled in for the weekend, with a London-and-home-counties
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
          arrangements at Chewton Glen are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Chewton Glen and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Chewton Glen.",
    blurb: (
      <>
        Backbeat plays across the New Forest, the Dorset coast and
        the wider South. A snapshot of other well-known wedding
        venues within about an hour of New Milton. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Rhinefield House", town: "Brockenhurst" },
      { name: "Pylewell Park", town: "Lymington" },
      { name: "Burley Manor", town: "Burley" },
      { name: "Somerley House", town: "Ringwood" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Lainston House", town: "Winchester" },
      { name: "The Montagu Arms", town: "Beaulieu" },
    ],
  },
  cta: {
    heading: "Live music for your Chewton Glen wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
