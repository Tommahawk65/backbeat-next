import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Lulworth Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Weld family castle on the Dorset coast. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const lulworthCastle: VenueRecord = {
  type: "venue",
  slug: "lulworth-castle",
  name: "Lulworth Castle",
  countySlug: "dorset",
  meta: {
    title: "Lulworth Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Lulworth Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Lulworth Castle, East Lulworth, Dorset",
    subAreas: ["East Lulworth", "Wareham", "Dorchester", "Wool", "Bovington"],
  },
  hero: {
    eyebrow: "Lulworth Castle · East Lulworth · Dorset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Lulworth Castle.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Weld-family
        castle on the Dorset coast. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Lulworth Castle",
    heading: (
      <>
        Built 1588. Restored from ruin.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Lulworth Castle sits at East Lulworth on the Dorset coast,
          about an hour from Bournemouth. The castle was built
          between 1588 and 1609 for Thomas Howard, 3rd Viscount
          Howard of Bindon, and is Grade I listed and a scheduled
          monument. It was gutted by fire in August 1929 and left
          as a roofless ruin until restoration began in the 1970s,
          completed in 1998. The Weld family have held the estate
          since 1641 and still own it today.
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
          coast regularly, so Lulworth sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Lulworth&rsquo;s reception spaces are stone-walled and
          high-ceilinged, with a reverberant acoustic that needs
          respecting rather than fighting. Our stage setup is built
          to dress around the room rather than fight it. Black-
          finished kit, restrained on-stage lighting rather than a
          stadium rig, and a PA sized for the room rather than the
          road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Lulworth wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Lulworth are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. A Grade I
          listed castle on a working family estate is one of the
          more careful briefs we play. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Lulworth Castle and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Lulworth.",
    blurb: (
      <>
        Backbeat plays across Dorset, the New Forest and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Lulworth. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Athelhampton House", town: "Dorchester" },
      { name: "Mapperton", town: "Beaminster" },
      { name: "Almer Manor", town: "Wimborne" },
      { name: "Parley Manor", town: "Christchurch" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Smedmore House", town: "Kimmeridge" },
    ],
  },
  cta: {
    heading: "Live music for your Lulworth Castle wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
