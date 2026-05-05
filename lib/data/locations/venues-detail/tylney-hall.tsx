import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Tylney Hall wedding band Backbeat. Live indie and rock for weddings at the Grade II-listed Hampshire country house. 66 acres of parkland and gardens. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const tylneyHall: VenueRecord = {
  type: "venue",
  slug: "tylney-hall",
  name: "Tylney Hall",
  countySlug: "hampshire",
  meta: {
    title: "Tylney Hall Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Tylney Hall Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Tylney Hall, Rotherwick, Hampshire",
    subAreas: ["Rotherwick", "Hook", "Basingstoke", "Reading", "Fleet"],
  },
  hero: {
    eyebrow: "Tylney Hall · Rotherwick · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Tylney Hall.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II-listed north Hampshire
        country house. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Tylney Hall",
    heading: (
      <>
        66 acres of Hampshire parkland.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Tylney Hall sits at Rotherwick, just outside Hook in north
          Hampshire, on 66 acres of Grade II-listed parkland and
          gardens. It runs as a country house hotel under Elite
          Hotels, with M3 and M4 access on the doorstep.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so Tylney
          is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          regularly, so there are no travel surcharges, no overnight
          accommodation and no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Tylney&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather than
          a stadium rig, and a PA sized for the room rather than the
          road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Tylney wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Tylney Hall are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Tylney Hall and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Tylney.",
    blurb: (
      <>
        Backbeat plays across Hampshire, Berkshire and the wider
        Thames Valley. A snapshot of other well-known wedding venues
        within about an hour of Rotherwick. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Highclere Castle", town: "Newbury" },
      { name: "Wasing Park", town: "Aldermaston" },
      { name: "Lainston House", town: "Winchester" },
      { name: "The Vineyard", town: "Newbury" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Pennyhill Park", town: "Bagshot" },
    ],
  },
  cta: {
    heading: "Live music for your Tylney Hall wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
