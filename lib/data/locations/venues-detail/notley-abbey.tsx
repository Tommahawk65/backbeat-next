import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Notley Abbey wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed 12th-century Buckinghamshire abbey. Bijou Wedding Venues. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const notleyAbbey: VenueRecord = {
  type: "venue",
  slug: "notley-abbey",
  name: "Notley Abbey",
  countySlug: "buckinghamshire",
  meta: {
    title: "Notley Abbey Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Notley Abbey Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Notley Abbey, Long Crendon, Buckinghamshire",
    subAreas: ["Long Crendon", "Thame", "Aylesbury", "Oxford", "Bicester"],
  },
  hero: {
    eyebrow: "Notley Abbey · Long Crendon · Buckinghamshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Notley Abbey.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed 12th-century
        abbey on the Buckinghamshire/Oxfordshire border. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Notley Abbey",
    heading: (
      <>
        12th century. Grade I listed.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Notley Abbey sits at Long Crendon, on the Buckinghamshire
          side of the Buckinghamshire/Oxfordshire border. It was
          founded as an Augustinian abbey between 1154 and 1164 and
          dissolved by Henry VIII in 1538. The surviving abbot&rsquo;s
          house is Grade I listed and a scheduled monument. Laurence
          Olivier and Vivien Leigh owned the property from 1944 until
          1960. Bijou Wedding Venues bought it in 2006 and run it as a
          private wedding venue today.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          regularly, so Notley sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Notley&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Notley wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd that&rsquo;s comfortable on a dance floor. The setlist
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
          arrangements at Notley Abbey are managed by Bijou&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Notley Abbey and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Notley.",
    blurb: (
      <>
        Backbeat plays across Buckinghamshire, Oxfordshire and the
        wider Thames Valley. A snapshot of other well-known wedding
        venues within about an hour of Long Crendon. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
      { name: "Hedsor House", town: "Taplow" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Stratton Court Barn", town: "Bicester" },
      { name: "Caswell House", town: "Witney" },
      { name: "Eynsham Hall", town: "North Leigh" },
      { name: "The Bay Tree", town: "Burford" },
    ],
  },
  cta: {
    heading: "Live music for your Notley Abbey wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
