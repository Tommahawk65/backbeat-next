import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Four Seasons Hampshire wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Dogmersfield Park, north Hampshire. 500 acres. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const fourSeasonsHampshire: VenueRecord = {
  type: "venue",
  slug: "four-seasons-hampshire",
  name: "Four Seasons Hampshire",
  countySlug: "hampshire",
  meta: {
    title: "Four Seasons Hampshire Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Four Seasons Hampshire Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Four Seasons Hotel Hampshire, Dogmersfield, Hampshire",
    subAreas: ["Dogmersfield", "Hook", "Fleet", "Hartley Wintney", "Odiham"],
  },
  hero: {
    eyebrow: "Four Seasons Hampshire · Dogmersfield · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Four Seasons Hampshire.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Dogmersfield
        Park, on a 500-acre Hampshire estate. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Four Seasons Hampshire",
    heading: (
      <>
        Grade I listed. 500 acres.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Four Seasons Hotel Hampshire occupies Dogmersfield Park,
          a 500-acre Grade I-listed estate in north Hampshire near
          Hook. The main Georgian block was started in 1728 and
          subsequently extended, and the property has run as a Four
          Seasons hotel since 2005. The estate has held weddings on
          and off for centuries; recorded ownership goes back through
          the Bishops of Bath and Wells, Henry VIII (1539) and the St
          John-Mildmay baronets.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so the
          Four Seasons is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          regularly, so there are no travel surcharges, no overnight
          accommodation and no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Dogmersfield&rsquo;s reception spaces have the kind of
          country-house finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Four Seasons Hampshire wedding tends to pull a guest list
          that&rsquo;s travelled in from London and the home counties
          for the weekend, often with international friends staying
          on at the hotel. The setlist flexes accordingly: Arctic
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
          arrangements at the Four Seasons are managed by the
          hotel&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Four Seasons Hampshire and want a
          band that turns up briefed, properly dressed and with the
          dance floor firmly in mind, send us your date. We&rsquo;d
          love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Dogmersfield.",
    blurb: (
      <>
        Backbeat plays across north Hampshire, Surrey and the wider
        Thames Valley. A snapshot of other well-known wedding venues
        within about an hour of Hook. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "The Elvetham", town: "Hartley Wintney" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Northbrook Park", town: "Bentley" },
      { name: "Froyle Park", town: "Alton" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Highclere Castle", town: "Highclere" },
      { name: "Wasing Park", town: "Aldermaston" },
    ],
  },
  cta: {
    heading: "Live music for your Four Seasons Hampshire wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
