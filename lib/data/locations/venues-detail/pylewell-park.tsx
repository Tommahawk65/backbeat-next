import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Pylewell Park wedding band Backbeat. Live indie and rock for weddings at the Grade II*-listed estate near Lymington in the New Forest. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const pylewellPark: VenueRecord = {
  type: "venue",
  slug: "pylewell-park",
  name: "Pylewell Park",
  countySlug: "hampshire",
  meta: {
    title: "Pylewell Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Pylewell Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Pylewell Park, near Lymington, Hampshire",
    subAreas: ["Lymington", "Boldre", "Sway", "Brockenhurst", "Beaulieu"],
  },
  hero: {
    eyebrow: "Pylewell Park · Lymington · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Pylewell Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II*-listed estate near
        Lymington in the New Forest. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Pylewell Park",
    heading: (
      <>
        Grade II* listed. The Solent on the doorstep.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Pylewell Park sits in the parish of Boldre, near Lymington
          on the southern edge of the New Forest. The house is Grade
          II* listed, with the gardens separately Grade II*-listed in
          the Register of Historic Parks and Gardens. The Solent and
          the Isle of Wight ferry route are minutes down the road.
          The estate is currently held in trust.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Pylewell is effectively home turf. We cover{" "}
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
          Pylewell&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Pylewell wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
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
          arrangements at Pylewell Park are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Pylewell Park and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Pylewell.",
    blurb: (
      <>
        Backbeat plays across the New Forest, the Solent coast and
        the wider South. A snapshot of other well-known wedding
        venues within about an hour of Lymington. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Rhinefield House", town: "Brockenhurst" },
      { name: "Burley Manor", town: "Burley" },
      { name: "Somerley House", town: "Ringwood" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Lainston House", town: "Winchester" },
      { name: "The Montagu Arms", town: "Beaulieu" },
    ],
  },
  cta: {
    heading: "Live music for your Pylewell Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
