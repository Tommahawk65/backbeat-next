import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Almer Manor wedding band Backbeat. Live indie and rock for weddings at the village manor near Wimborne, Dorset. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const almerManor: VenueRecord = {
  type: "venue",
  slug: "almer-manor",
  name: "Almer Manor",
  countySlug: "dorset",
  meta: {
    title: "Almer Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Almer Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Almer Manor, Almer, near Wimborne, Dorset",
    subAreas: ["Almer", "Wimborne Minster", "Blandford Forum", "Wareham", "Bere Regis"],
  },
  hero: {
    eyebrow: "Almer Manor · Wimborne · Dorset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Almer Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the village manor in the Dorset
        countryside near Wimborne. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Almer Manor",
    heading: (
      <>
        Dorset village setting.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Almer Manor sits in the village of Almer, near Wimborne
          Minster in east Dorset. It&rsquo;s one of the principal
          historic landmarks of the village and runs today as a
          private wedding venue.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          and the wider{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          coast regularly, so Wimborne sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Almer&rsquo;s reception spaces have the kind of country-
          house finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          An Almer wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a strong London-and-
          South-coast core. The setlist flexes accordingly: Arctic
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
          arrangements at Almer Manor are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          A village-set country-house venue often carries
          residential-driven cut-offs that are worth knowing in
          advance. We don&rsquo;t make assumptions. We confirm the
          specific cut-off, limiter setup and any house rules with
          the wedding coordinator the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Almer Manor and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Almer.",
    blurb: (
      <>
        Backbeat plays across Dorset, the New Forest and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Wimborne. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Lulworth Castle", town: "East Lulworth" },
      { name: "Athelhampton", town: "Dorchester" },
      { name: "Smedmore House", town: "Kimmeridge" },
      { name: "Mapperton", town: "Beaminster" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Pylewell Park", town: "Lymington" },
    ],
  },
  cta: {
    heading: "Live music for your Almer Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
