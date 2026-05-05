import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Cliveden House wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Taplow estate above the Thames. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const clivedenHouse: VenueRecord = {
  type: "venue",
  slug: "cliveden-house",
  name: "Cliveden House",
  countySlug: "berkshire",
  meta: {
    title: "Cliveden House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Cliveden House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Cliveden House, Taplow, Berkshire",
    subAreas: ["Taplow", "Maidenhead", "Burnham", "Bourne End", "Marlow"],
  },
  hero: {
    eyebrow: "Cliveden House · Taplow · Berkshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Cliveden House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed estate above the
        Thames. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Cliveden House",
    heading: (
      <>
        376 acres of grounds.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Cliveden House sits above the Thames at Taplow, in 376 acres
          of National Trust grounds. Built in 1666, Grade I-listed,
          part of the Iconic Luxury Hotels collection and a Relais
          &amp; Châteaux property. It&rsquo;s about as well-known a
          wedding venue as the South East has, and the brief that
          comes with it is a serious one.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          regularly, so Cliveden sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Cliveden&rsquo;s wedding rooms have the kind of period
          interior that doesn&rsquo;t need help. High ceilings,
          original detail, windows out onto the Parterre and the
          Thames. Our stage setup is built to dress around the room
          rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA sized
          for the room rather than the road. We dress in stage-blacks
          unless you ask otherwise.
        </p>
        <p>
          A Cliveden wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, often with London commuters
          and out-of-town friends mixing on the dance floor. The
          setlist flexes accordingly: Arctic Monkeys, The Killers and
          Kings of Leon for the late floor, Oasis and Stereophonics
          for the mid-evening, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-half
          peaks. Between sets a DJ playlist (collaborated with you)
          keeps the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Cliveden are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Cliveden House and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Cliveden.",
    blurb: (
      <>
        Backbeat plays across the Thames Valley and the wider South
        East. A snapshot of other well-known wedding venues within
        about an hour of Cliveden. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Hedsor House", town: "Bourne End" },
      { name: "Bisham Abbey", town: "Marlow" },
      { name: "Danesfield House", town: "Marlow" },
      { name: "The Compleat Angler", town: "Marlow" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "Pennyhill Park", town: "Bagshot" },
    ],
  },
  cta: {
    heading: "Live music for your Cliveden wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
