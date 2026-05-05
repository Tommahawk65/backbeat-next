import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Coworth Park wedding band Backbeat. Live indie and rock for weddings at the Dorchester Collection's 240-acre Sunningdale estate. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const coworthPark: VenueRecord = {
  type: "venue",
  slug: "coworth-park",
  name: "Coworth Park",
  countySlug: "berkshire",
  meta: {
    title: "Coworth Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Coworth Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Coworth Park, Sunningdale, Berkshire",
    subAreas: ["Sunningdale", "Ascot", "Virginia Water", "Windsor", "Bagshot"],
  },
  hero: {
    eyebrow: "Coworth Park · Sunningdale · Berkshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Coworth Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Dorchester Collection&rsquo;s 240-acre
        Ascot estate. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Coworth Park",
    heading: (
      <>
        240 acres of Berkshire estate.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Coworth Park sits in Sunningdale, near Ascot, on a 240-acre
          Berkshire estate that the Dorchester Collection took on in
          2001 and reopened after refurbishment in 2010. The original
          house dates to 1776. The estate spans polo grounds, stables,
          a spa and rooms split across the main house, the original
          stables and on-estate cottages.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          regularly, so Sunningdale sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Coworth Park&rsquo;s wedding rooms have the kind of finish
          and proportions that don&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather than
          a stadium rig, and a PA sized for the room rather than the
          road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Coworth wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd that knows the room. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving. We
          learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Coworth Park are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Coworth Park and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Coworth Park.",
    blurb: (
      <>
        Backbeat plays across the Thames Valley and the wider South
        East. A snapshot of other well-known wedding venues within
        about an hour of Sunningdale. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Cliveden House", town: "Taplow" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Great Fosters", town: "Egham" },
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Foxhills", town: "Ottershaw" },
      { name: "Hedsor House", town: "Taplow" },
      { name: "Hartwell House", town: "Aylesbury" },
    ],
  },
  cta: {
    heading: "Live music for your Coworth Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
