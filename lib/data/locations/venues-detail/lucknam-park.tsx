import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Lucknam Park wedding band Backbeat. Live indie and rock for weddings at the Grade II-listed country house and spa near Bath, Wiltshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const lucknamPark: VenueRecord = {
  type: "venue",
  slug: "lucknam-park",
  name: "Lucknam Park",
  countySlug: "wiltshire",
  meta: {
    title: "Lucknam Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Lucknam Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Lucknam Park, Colerne, Wiltshire",
    subAreas: ["Colerne", "Bath", "Castle Combe", "Chippenham", "Corsham"],
  },
  hero: {
    eyebrow: "Lucknam Park · Colerne · Wiltshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Lucknam Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II-listed country house
        and spa, seven miles north-east of Bath. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Lucknam Park",
    heading: (
      <>
        Country house and spa.
        <br />
        Seven miles north-east of Bath.
      </>
    ),
    body: (
      <>
        <p>
          Lucknam Park sits at Colerne, about seven miles north-east
          of Bath in Wiltshire. The original house dates to the late
          17th or early 18th century and was substantially remodelled
          in 1919 to 1920. It&rsquo;s Grade II listed, designated in
          1960. The estate runs as a country house hotel and spa
          today under the Laskaridis family.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          regularly, so Bath sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Lucknam&rsquo;s reception spaces have the kind of country-
          house finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Lucknam wedding tends to pull a guest list that&rsquo;s
          travelled in from London and Bristol for the weekend, with
          a strong Bath and home-counties core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor, Oasis and Stereophonics for the
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
          arrangements at Lucknam are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Lucknam Park and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Lucknam.",
    blurb: (
      <>
        Backbeat plays across Wiltshire, Somerset, Bristol and the
        wider South West. A snapshot of other well-known wedding
        venues within about an hour of Bath. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Euridge Manor", town: "Castle Combe" },
      { name: "Babington House", town: "Frome" },
      { name: "Whatley Manor", town: "Malmesbury" },
      { name: "Priston Mill", town: "Bath" },
      { name: "Orchardleigh", town: "Frome" },
      { name: "Old Down Estate", town: "Tockington" },
      { name: "Bowood House", town: "Calne" },
    ],
  },
  cta: {
    heading: "Live music for your Lucknam Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
