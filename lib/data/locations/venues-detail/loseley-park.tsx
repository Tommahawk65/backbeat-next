import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Loseley Park wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Tudor manor house and Tithe Barn near Guildford, Surrey. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const loseleyPark: VenueRecord = {
  type: "venue",
  slug: "loseley-park",
  name: "Loseley Park",
  countySlug: "surrey",
  meta: {
    title: "Loseley Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Loseley Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Loseley Park, Artington, near Guildford, Surrey",
    subAreas: ["Artington", "Guildford", "Godalming", "Compton", "Shalford"],
  },
  hero: {
    eyebrow: "Loseley Park · Artington · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Loseley Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Tudor manor and
        Tithe Barn near Guildford. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Loseley Park",
    heading: (
      <>
        Tudor. Grade I listed. Tithe Barn.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Loseley Park sits at Artington, three miles south-west of
          Guildford. The Tudor manor was built between 1562 and
          1568 for Sir William More, partly using stone salvaged from
          the ruins of nearby Waverley Abbey. It&rsquo;s Grade I
          listed and the More-Molyneux family (direct descendants of
          the original 16th-century owners) still hold and live in
          the estate. The 17th-century Tithe Barn is the on-site
          space most weddings here use for the evening.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          regularly, so Guildford sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          The Tithe Barn is a timber-framed, high-ceilinged room that
          plays warm and forgiving for live music if it&rsquo;s set
          up correctly. Our stage setup is built to dress around the
          room rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA sized
          for the room rather than the road. We dress in stage-blacks
          unless you ask otherwise.
        </p>
        <p>
          A Loseley wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd and a Surrey-local core. The setlist flexes
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
          arrangements at Loseley are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. A working
          family estate with significant heritage interiors is one
          of the more careful briefs we play. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Loseley Park and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Loseley.",
    blurb: (
      <>
        Backbeat plays across Surrey, Hampshire and the wider South.
        A snapshot of other well-known wedding venues within about
        an hour of Guildford. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Foxhills", town: "Ottershaw" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Northbrook Park", town: "Bentley" },
      { name: "The Barn at Bury Court", town: "Bentley" },
      { name: "Millbridge Court", town: "Frensham" },
      { name: "Farnham Castle", town: "Farnham" },
      { name: "Cowdray House", town: "Midhurst" },
    ],
  },
  cta: {
    heading: "Live music for your Loseley Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
