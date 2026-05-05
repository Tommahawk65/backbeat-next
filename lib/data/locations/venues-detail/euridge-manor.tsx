import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Euridge Manor wedding band Backbeat. Live indie and rock for exclusive-use weddings at the Cotswold stone manor near Chippenham, Wiltshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const euridgeManor: VenueRecord = {
  type: "venue",
  slug: "euridge-manor",
  name: "Euridge Manor",
  countySlug: "wiltshire",
  meta: {
    title: "Euridge Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Euridge Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Euridge Manor, near Chippenham, Wiltshire",
    subAreas: ["Euridge", "Chippenham", "Castle Combe", "Corsham", "Marshfield"],
  },
  hero: {
    eyebrow: "Euridge Manor · Chippenham · Wiltshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Euridge Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the exclusive-use Cotswold stone
        manor near Castle Combe. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Euridge Manor",
    heading: (
      <>
        Cotswold stone manor. Lakeside gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Euridge Manor sits at Euridge, near Chippenham in
          Wiltshire. The estate runs on an exclusive-use basis with a
          stone manor house at its centre and named spaces including
          The Orangerie (the dining room), the Eastern field, the
          lakeside gardens, the historic courtyards and a boathouse
          on the lake. On-estate accommodation runs through suites
          and cottages.
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
          regularly, so Castle Combe sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Euridge&rsquo;s reception spaces split between the
          glasshouse-style Orangerie and the manor and courtyard
          interiors. Each plays differently. Our stage setup is built
          to dress around the room rather than fight it. Black-
          finished kit, restrained on-stage lighting rather than a
          stadium rig, and a PA sized for the space rather than the
          road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Euridge wedding tends to pull a guest list that&rsquo;s
          travelled in from London and Bristol for the weekend, with
          a strong Cotswold core. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop
          Me Now, Sweet Caroline) take the back-half peaks. Between
          sets a DJ playlist (collaborated with you) keeps the floor
          moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Euridge are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Euridge Manor and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Euridge.",
    blurb: (
      <>
        Backbeat plays across Wiltshire, Somerset, Bristol and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Castle Combe. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Whatley Manor", town: "Easton Grey" },
      { name: "Lucknam Park", town: "Colerne" },
      { name: "Babington House", town: "Frome" },
      { name: "Priston Mill", town: "Bath" },
      { name: "Old Down Estate", town: "Tockington" },
      { name: "Berkeley Castle", town: "Berkeley" },
      { name: "Owlpen Manor", town: "Uley" },
    ],
  },
  cta: {
    heading: "Live music for your Euridge Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
