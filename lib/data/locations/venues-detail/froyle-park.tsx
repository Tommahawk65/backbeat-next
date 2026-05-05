import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Froyle Park wedding band Backbeat. Live indie and rock for exclusive-use weddings at the Jacobean country house near Alton, Hampshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const froylePark: VenueRecord = {
  type: "venue",
  slug: "froyle-park",
  name: "Froyle Park",
  countySlug: "hampshire",
  meta: {
    title: "Froyle Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Froyle Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Froyle Park, Upper Froyle, Alton, Hampshire",
    subAreas: ["Upper Froyle", "Alton", "Bentley", "Farnham", "Petersfield"],
  },
  hero: {
    eyebrow: "Froyle Park · Upper Froyle · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Froyle Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Jacobean country house near
        Alton, an hour from London. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Froyle Park",
    heading: (
      <>
        Jacobean. Exclusive use.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Froyle Park sits at Upper Froyle, near Alton in east
          Hampshire, about an hour from London. The house is
          Jacobean and runs on an exclusive-use basis. The wedding
          offering splits across the Grand Ballroom (up to 300), the
          Great Hall, the Dome (a fixed outdoor ceremony space) and
          a hideaway and groom&rsquo;s lounge for the run-up to the
          day. On-site accommodation sleeps 66 guests.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so Froyle
          is effectively home turf. We cover{" "}
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
          Froyle&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Froyle wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Froyle Park are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Froyle Park and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Froyle.",
    blurb: (
      <>
        Backbeat plays across east Hampshire, Surrey and the wider
        South. A snapshot of other well-known wedding venues within
        about an hour of Alton. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Northbrook Park", town: "Bentley" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Loseley Park", town: "Guildford" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Lainston House", town: "Winchester" },
      { name: "Cowdray House", town: "Midhurst" },
    ],
  },
  cta: {
    heading: "Live music for your Froyle Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
