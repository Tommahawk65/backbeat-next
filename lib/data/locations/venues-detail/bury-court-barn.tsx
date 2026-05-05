import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "The Barn at Bury Court wedding band Backbeat. Live indie and rock for weddings at the converted barn with Piet Oudolf and Christopher Bradley-Hole gardens, near Farnham. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const buryCourtBarn: VenueRecord = {
  type: "venue",
  slug: "bury-court-barn",
  name: "The Barn at Bury Court",
  countySlug: "surrey",
  meta: {
    title: "The Barn at Bury Court Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "The Barn at Bury Court Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "The Barn at Bury Court, Bentley, near Farnham, Surrey",
    subAreas: ["Bentley", "Farnham", "Alton", "Aldershot", "Guildford"],
  },
  hero: {
    eyebrow: "The Barn at Bury Court · Bentley · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for the Barn at Bury Court.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the converted barn with Piet
        Oudolf and Bradley-Hole gardens, near Farnham. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · The Barn at Bury Court",
    heading: (
      <>
        Piet Oudolf and Bradley-Hole gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Barn at Bury Court sits at Bentley, a few miles east
          of Farnham, on the Hampshire/Surrey border. It&rsquo;s a
          converted agricultural barn used as a private wedding
          venue, with two notable named gardens on the estate: the
          courtyard garden was designed by Piet Oudolf (a leading
          figure in the new perennial movement) and the front
          garden by Christopher Bradley-Hole (a leading minimalist
          landscape designer).
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so Bury
          Court sits comfortably inside our home patch. We cover{" "}
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
          A timber-framed barn is a forgiving room for live music if
          it&rsquo;s set up correctly. Our stage setup is built to
          dress around the room rather than fight it. Black-finished
          kit, restrained on-stage lighting rather than a stadium
          rig, and a PA sized for the room rather than the road. We
          dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Bury Court wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Bury Court are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. Rural barn
          venues often carry residential-driven cut-offs that are
          worth knowing in advance. We don&rsquo;t make assumptions.
          We confirm the specific cut-off, limiter setup and any
          house rules with the wedding coordinator the week before,
          and pace the closing set so it lands at the actual end of
          the night.
        </p>
        <p>
          If you&rsquo;re booking The Barn at Bury Court and want a
          band that turns up briefed, properly dressed and with the
          dance floor firmly in mind, send us your date. We&rsquo;d
          love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Bury Court.",
    blurb: (
      <>
        Backbeat plays across Surrey, Hampshire and the wider South.
        A snapshot of other well-known wedding venues within about an
        hour of Bentley. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Northbrook Park", town: "Bentley" },
      { name: "Froyle Park", town: "Alton" },
      { name: "Millbridge Court", town: "Frensham" },
      { name: "Farnham Castle", town: "Farnham" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Loseley Park", town: "Guildford" },
    ],
  },
  cta: {
    heading: "Live music for your Bury Court wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
