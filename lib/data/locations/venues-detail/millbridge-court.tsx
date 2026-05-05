import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Millbridge Court wedding band Backbeat. Live indie and rock for exclusive-use weddings at the restored 19th-century house at Frensham, near Farnham, Surrey. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const millbridgeCourt: VenueRecord = {
  type: "venue",
  slug: "millbridge-court",
  name: "Millbridge Court",
  countySlug: "surrey",
  meta: {
    title: "Millbridge Court Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Millbridge Court Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Millbridge Court, Frensham, near Farnham, Surrey",
    subAreas: ["Frensham", "Farnham", "Hindhead", "Haslemere", "Tilford"],
  },
  hero: {
    eyebrow: "Millbridge Court · Frensham · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Millbridge Court.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the restored 19th-century house at
        Frensham, near Farnham. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Millbridge Court",
    heading: (
      <>
        Restored 19th-century house. Exclusive use.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Millbridge Court sits on Frensham Road, near Farnham in
          west Surrey. The main house is a restored 19th-century
          property and runs on an exclusive-use basis, with on-site
          accommodation across nine individually styled bedrooms,
          including a woodland cabin. Capacity is up to 150 guests.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Millbridge sits comfortably inside our home patch. We
          cover{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          regularly, so there are no travel surcharges, no overnight
          accommodation and no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Millbridge&rsquo;s reception spaces are a mix of restored
          period interiors and lighter, garden-facing rooms. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Millbridge wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Millbridge Court are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Millbridge Court and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love to
          be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Millbridge.",
    blurb: (
      <>
        Backbeat plays across Surrey, Hampshire and the wider South.
        A snapshot of other well-known wedding venues within about an
        hour of Frensham. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Farnham Castle", town: "Farnham" },
      { name: "Northbrook Park", town: "Bentley" },
      { name: "Froyle Park", town: "Alton" },
      { name: "The Barn at Bury Court", town: "Bentley" },
      { name: "Loseley Park", town: "Guildford" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
    ],
  },
  cta: {
    heading: "Live music for your Millbridge Court wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
