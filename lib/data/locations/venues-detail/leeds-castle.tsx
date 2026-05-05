import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Leeds Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed island castle near Maidstone, Kent. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const leedsCastle: VenueRecord = {
  type: "venue",
  slug: "leeds-castle",
  name: "Leeds Castle",
  countySlug: "kent",
  meta: {
    title: "Leeds Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Leeds Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Leeds Castle, Broomfield, near Maidstone, Kent",
    subAreas: ["Broomfield", "Maidstone", "Hollingbourne", "Sittingbourne", "Ashford"],
  },
  hero: {
    eyebrow: "Leeds Castle · Maidstone · Kent",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Leeds Castle.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed island castle
        in the Kentish lake. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Leeds Castle",
    heading: (
      <>
        Castle on a lake.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Leeds Castle sits on islands in a lake formed by the River
          Len, about seven miles south-east of Maidstone in Kent.
          A castle has stood on the site since 857. The present
          castle largely dates to the early 19th century, with
          remodelling completed in 1823. It&rsquo;s Grade I listed.
          Olive, Lady Baillie purchased it in 1926 and restored it
          extensively before leaving it to the Leeds Castle
          Foundation, the charitable trust that runs it today.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/kent" className={linkClass}>
            Kent
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/east-sussex" className={linkClass}>
            East Sussex
          </Link>{" "}
          regularly, so Maidstone sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          The castle&rsquo;s reception spaces have the kind of
          period finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          A Leeds Castle wedding tends to pull a guest list
          that&rsquo;s travelled in for the weekend, with a London-
          and-Kent core. The setlist flexes accordingly: Arctic
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
          arrangements at Leeds Castle are managed by the
          Foundation&rsquo;s own wedding team, and they vary by
          booking. A Grade I listed castle on an island in a public
          attraction is one of the more careful briefs we play. We
          don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the
          wedding coordinator the week before, and pace the closing
          set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Leeds Castle and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Leeds Castle.",
    blurb: (
      <>
        Backbeat plays across Kent, East Sussex and the wider South
        East. A snapshot of other well-known wedding venues within
        about an hour of Maidstone. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Hever Castle", town: "Hever" },
      { name: "Penshurst Place", town: "Penshurst" },
      { name: "Salomons Estate", town: "Tunbridge Wells" },
      { name: "Mount Ephraim Gardens", town: "Faversham" },
      { name: "Nettlestead Place", town: "Maidstone" },
      { name: "Preston Court", town: "Canterbury" },
      { name: "Sprivers Mansion", town: "Horsmonden" },
      { name: "Bore Place", town: "Edenbridge" },
    ],
  },
  cta: {
    heading: "Live music for your Leeds Castle wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
