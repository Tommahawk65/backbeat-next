import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Heckfield Place wedding band Backbeat. Live indie and rock for weddings at the Grade II-listed Hampshire estate. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const heckfieldPlace: VenueRecord = {
  type: "venue",
  slug: "heckfield-place",
  name: "Heckfield Place",
  countySlug: "hampshire",
  meta: {
    title: "Heckfield Place Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Heckfield Place Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Heckfield Place, Heckfield, Hampshire",
    subAreas: ["Heckfield", "Hook", "Reading", "Basingstoke", "Wokingham"],
  },
  hero: {
    eyebrow: "Heckfield Place · Heckfield · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Heckfield Place.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II-listed Georgian estate
        on the Hampshire/Berkshire border. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Heckfield Place",
    heading: (
      <>
        Georgian house. Working farm.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Heckfield Place sits on the Hampshire side of the
          Hampshire/Berkshire border, north of Hook. The Georgian
          house was built between 1763 and 1766 and is Grade II
          listed. After a long restoration the estate reopened as a
          country house hotel in 2018, with biodynamic gardens, a
          working Home Farm and a Green Michelin-starred restaurant
          (Marle) attached.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Heckfield is effectively home turf. We cover{" "}
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
          Heckfield&rsquo;s reception spaces have the kind of restored
          period finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Heckfield wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Heckfield are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Heckfield Place and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Heckfield.",
    blurb: (
      <>
        Backbeat plays across north Hampshire, the Thames Valley and
        the wider South East. A snapshot of other well-known wedding
        venues within about an hour of Heckfield. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Highclere Castle", town: "Newbury" },
      { name: "Wasing Park", town: "Aldermaston" },
      { name: "The Vineyard", town: "Newbury" },
      { name: "Wokefield Estate", town: "Reading" },
      { name: "Lainston House", town: "Winchester" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
    ],
  },
  cta: {
    heading: "Live music for your Heckfield Place wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
