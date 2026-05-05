import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Stowe House wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Vanbrugh / Adam house at Stowe, Buckinghamshire. National Trust gardens. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const stoweHouse: VenueRecord = {
  type: "venue",
  slug: "stowe-house",
  name: "Stowe House",
  countySlug: "buckinghamshire",
  meta: {
    title: "Stowe House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Stowe House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Stowe House, near Buckingham, Buckinghamshire",
    subAreas: ["Stowe", "Buckingham", "Brackley", "Bicester", "Aylesbury"],
  },
  hero: {
    eyebrow: "Stowe House · Stowe · Buckinghamshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Stowe.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed house and
        National Trust landscape gardens. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Stowe House",
    heading: (
      <>
        Vanbrugh, Kent, Adam, Soane.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Stowe House sits at Stowe, near Buckingham. The original
          house was built between 1677 and 1683 for the Temple
          family and substantially remodelled across the 18th century
          by a roll-call of architects including John Vanbrugh,
          James Gibbs, William Kent, Robert Adam and John Soane.
          It&rsquo;s Grade I listed and one of the largest country
          houses in England (over 400 rooms, 900 feet end to end).
          The landscape gardens are separately Grade I listed and
          have been in National Trust care since 1989. The house
          itself is run by the Stowe House Preservation Trust and
          shared with Stowe School.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          regularly, so Stowe sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Stowe&rsquo;s reception spaces have the kind of period
          finish, scale and ceiling height that don&rsquo;t need
          help. Our stage setup is built to dress around the room
          rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA
          sized for the room rather than the road. We dress in
          stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Stowe wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-
          counties crowd that knows the room. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of
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
          arrangements at Stowe are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. A Grade I
          listed house with National Trust grounds and a working
          school on site is one of the more careful briefs we play.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Stowe House and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Stowe.",
    blurb: (
      <>
        Backbeat plays across Buckinghamshire, Oxfordshire and the
        wider South. A snapshot of other well-known wedding venues
        within about an hour of Buckingham. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "Notley Abbey", town: "Long Crendon" },
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
      { name: "Blenheim Palace", town: "Woodstock" },
      { name: "Caswell House", town: "Witney" },
      { name: "Eynsham Hall", town: "North Leigh" },
      { name: "Hedsor House", town: "Taplow" },
      { name: "Cliveden House", town: "Taplow" },
    ],
  },
  cta: {
    heading: "Live music for your Stowe wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
