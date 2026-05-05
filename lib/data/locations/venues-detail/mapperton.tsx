import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Mapperton wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Earl of Sandwich's manor near Beaminster, Dorset. Italianate gardens. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const mapperton: VenueRecord = {
  type: "venue",
  slug: "mapperton",
  name: "Mapperton",
  countySlug: "dorset",
  meta: {
    title: "Mapperton Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Mapperton Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Mapperton House, near Beaminster, Dorset",
    subAreas: ["Beaminster", "Bridport", "Dorchester", "Lyme Regis", "Yeovil"],
  },
  hero: {
    eyebrow: "Mapperton · Beaminster · Dorset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Mapperton.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Earl of
        Sandwich&rsquo;s manor with Italianate gardens. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Mapperton",
    heading: (
      <>
        Tudor manor. Italianate gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Mapperton sits about three miles south-east of Beaminster
          in west Dorset. The Tudor manor is Grade I listed, with
          parkland and gardens separately Grade II* registered. The
          estate has been owned by the Montagu family since 1955 and
          is currently held by Luke Montagu, the 12th Earl of
          Sandwich, with the Italianate gardens (laid out in the
          1920s) regularly cited among the finest in England. The
          house has appeared as a filming location for Emma (1996),
          Far from the Madding Crowd (2015) and Rebecca (2020).
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          and the wider South coast regularly, so Mapperton sits
          comfortably inside our home patch. No travel surcharges,
          no overnight accommodation, no anxious 4am drives back from
          the wrong end of the country.
        </p>
        <p>
          Mapperton&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Mapperton wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          South-coast and home-counties core. The setlist flexes
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
          arrangements at Mapperton are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. A working
          family estate with significant heritage gardens is one of
          the more careful briefs we play. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Mapperton and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Mapperton.",
    blurb: (
      <>
        Backbeat plays across Dorset, Somerset and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Beaminster. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Brympton House", town: "Yeovil" },
      { name: "Babington House", town: "Frome" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Lulworth Castle", town: "Lulworth" },
      { name: "Athelhampton House", town: "Dorchester" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Orchardleigh", town: "Frome" },
    ],
  },
  cta: {
    heading: "Live music for your Mapperton wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
