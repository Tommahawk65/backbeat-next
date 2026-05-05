import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Farnham Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed 12th-century Bishop's Palace in Farnham, Surrey. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const farnhamCastle: VenueRecord = {
  type: "venue",
  slug: "farnham-castle",
  name: "Farnham Castle",
  countySlug: "surrey",
  meta: {
    title: "Farnham Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Farnham Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Farnham Castle, Farnham, Surrey",
    subAreas: ["Farnham", "Bentley", "Aldershot", "Guildford", "Haslemere"],
  },
  hero: {
    eyebrow: "Farnham Castle · Farnham · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Farnham Castle.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Bishop&rsquo;s
        Palace in the heart of Farnham. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Farnham Castle",
    heading: (
      <>
        Built 1138. 900 years on the hill.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Farnham Castle sits on the hill above Farnham, looking
          south across the town. The castle was built in 1138 by
          Henri de Blois, Bishop of Winchester, and was the residence
          of the Bishops of Winchester for more than 800 years. The
          castle and Bishop&rsquo;s Palace are Grade I listed; the
          keep is in the guardianship of English Heritage. The
          Palace runs as a venue for weddings and events, with five
          acres of gardens.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Farnham sits comfortably inside our home patch. We cover{" "}
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
          Farnham&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. A 900-year-old
          Bishop&rsquo;s Palace is a careful brief and one we set up
          accordingly. Our stage setup is built to dress around the
          room rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA sized
          for the room rather than the road. We dress in stage-blacks
          unless you ask otherwise.
        </p>
        <p>
          A Farnham Castle wedding tends to pull a guest list
          that&rsquo;s travelled in for the weekend, with a
          London-and-home-counties crowd that knows the room. The
          setlist flexes accordingly: Arctic Monkeys, The Killers
          and Kings of Leon for the late floor, Oasis and
          Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for
          the chart-aware younger guests. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline)
          take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Farnham Castle are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          A Grade I-listed heritage property in a town centre
          carries its own access, conservation and timing protocols.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Farnham Castle and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Farnham Castle.",
    blurb: (
      <>
        Backbeat plays across Surrey, Hampshire and the wider South.
        A snapshot of other well-known wedding venues within about an
        hour of Farnham. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Northbrook Park", town: "Bentley" },
      { name: "Millbridge Court", town: "Frensham" },
      { name: "The Barn at Bury Court", town: "Bentley" },
      { name: "Froyle Park", town: "Alton" },
      { name: "Loseley Park", town: "Guildford" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Four Seasons Hampshire", town: "Hook" },
    ],
  },
  cta: {
    heading: "Live music for your Farnham Castle wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
