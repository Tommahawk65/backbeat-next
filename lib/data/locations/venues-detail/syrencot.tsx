import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Syrencot wedding band Backbeat. Live indie and rock for exclusive-use weddings at the Grade II-listed 1738 Georgian manor near Salisbury, Wiltshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const syrencot: VenueRecord = {
  type: "venue",
  slug: "syrencot",
  name: "Syrencot",
  countySlug: "wiltshire",
  meta: {
    title: "Syrencot Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Syrencot Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Syrencot, Figheldean, near Salisbury, Wiltshire",
    subAreas: ["Figheldean", "Salisbury", "Amesbury", "Pewsey", "Marlborough"],
  },
  hero: {
    eyebrow: "Syrencot · Figheldean · Wiltshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Syrencot.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II-listed Georgian manor
        near Salisbury, Wiltshire. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Syrencot",
    heading: (
      <>
        Built 1738. Restored 2018. Exclusive use.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Syrencot sits at Figheldean, near Amesbury and about an
          hour from Bath. The Georgian manor was built in 1738 and
          restored in 2018, and is Grade II listed. The estate runs
          on an exclusive-use basis, with named spaces including
          The Glasshouse (ceremony room), The Farmshed (reception),
          The Walled Garden, The Billiard Room (preparation), The
          Pump House, Syrencot House and a new outdoor space (The
          Foldyard). 13 luxury bedrooms in the main house. Capacity
          up to 200 guests, 150 for seated dining.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and the wider{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          coast regularly, so Salisbury sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Syrencot&rsquo;s reception spaces split between the
          glasshouse, the timber-framed Farmshed and the period
          interiors of the main house. Each plays differently. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Syrencot wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          South-West core. The setlist flexes accordingly: Arctic
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
          arrangements at Syrencot are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Syrencot and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Syrencot.",
    blurb: (
      <>
        Backbeat plays across Wiltshire, Hampshire and the wider
        South. A snapshot of other well-known wedding venues within
        about an hour of Salisbury. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Pythouse", town: "Tisbury" },
      { name: "Lucknam Park", town: "Colerne" },
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Euridge Manor", town: "Castle Combe" },
      { name: "Lainston House", town: "Sparsholt" },
      { name: "Mapperton", town: "Beaminster" },
      { name: "Babington House", town: "Frome" },
    ],
  },
  cta: {
    heading: "Live music for your Syrencot wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
