import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Caswell House wedding band Backbeat. Live indie and rock for weddings at the Cotswold-stone country estate near Witney, Oxfordshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const caswellHouse: VenueRecord = {
  type: "venue",
  slug: "caswell-house",
  name: "Caswell House",
  countySlug: "oxfordshire",
  meta: {
    title: "Caswell House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Caswell House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Caswell House, near Witney, Oxfordshire",
    subAreas: ["Witney", "Burford", "Charlbury", "Bampton", "Carterton"],
  },
  hero: {
    eyebrow: "Caswell House · Witney · Oxfordshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Caswell House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Cotswold-stone country estate
        near Witney. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Caswell House",
    heading: (
      <>
        Cotswold stone. Country estate.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Caswell House sits in the west Oxfordshire countryside,
          between Witney and the edge of the Cotswolds. It runs as
          a private wedding venue across a Cotswold-stone manor
          house and converted estate buildings, with garden ceremony
          settings.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          regularly, so Witney sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Caswell&rsquo;s reception spaces are a mix of stone-built
          period interiors and lighter, garden-facing rooms. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Caswell wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          Cotswold and home-counties core. The setlist flexes
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
          arrangements at Caswell are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. Rural
          country-house venues often carry residential-driven
          cut-offs that are worth knowing in advance. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Caswell House and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Caswell.",
    blurb: (
      <>
        Backbeat plays across Oxfordshire, Buckinghamshire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Witney. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
      { name: "Blenheim Palace", town: "Woodstock" },
      { name: "Eynsham Hall", town: "North Leigh" },
      { name: "Stratton Court Barn", town: "Bicester" },
      { name: "The Bay Tree", town: "Burford" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
      { name: "Stowe House", town: "Buckingham" },
      { name: "Notley Abbey", town: "Long Crendon" },
    ],
  },
  cta: {
    heading: "Live music for your Caswell House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
