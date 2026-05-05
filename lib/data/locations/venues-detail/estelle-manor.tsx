import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Estelle Manor wedding band Backbeat. Live indie and rock for weddings at the Grade II-listed Ennismore country house and members' club (formerly Eynsham Hall) in Oxfordshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const estelleManor: VenueRecord = {
  type: "venue",
  slug: "estelle-manor",
  name: "Estelle Manor",
  countySlug: "oxfordshire",
  meta: {
    title: "Estelle Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Estelle Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Estelle Manor, North Leigh, Oxfordshire",
    subAreas: ["North Leigh", "Witney", "Woodstock", "Oxford", "Burford"],
  },
  hero: {
    eyebrow: "Estelle Manor · North Leigh · Oxfordshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Estelle Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II-listed Ennismore
        country house and members&rsquo; club (formerly Eynsham
        Hall) in west Oxfordshire. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Estelle Manor",
    heading: (
      <>
        Jacobethan mansion. Ennismore country club.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Estelle Manor sits at North Leigh in west Oxfordshire, on
          the estate previously known as Eynsham Hall. The current
          Jacobethan mansion was rebuilt in 1908 to a design by
          Ernest George (the original Georgian house dated from the
          1770s) and is Grade II listed; the parkland and terraced
          gardens are on the National Register of Historic Parks
          and Gardens. Sharan Pasricha&rsquo;s Ennismore group
          (Hoxton, Gleneagles, Mama Shelter) bought the estate in
          2018 and reopened it in spring 2023 as Estelle Manor, a
          country house and members&rsquo; club.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          regularly, so North Leigh sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Estelle&rsquo;s reception spaces are a mix of restored
          period interiors and updated members&rsquo;-club-style
          rooms. Our stage setup is built to dress around the room
          rather than fight it. Black-finished kit, restrained on-
          stage lighting rather than a stadium rig, and a PA sized
          for the room rather than the road. We dress in stage-
          blacks unless you ask otherwise.
        </p>
        <p>
          An Estelle wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          creative-industry crowd that&rsquo;s comfortable on a
          dance floor. The setlist flexes accordingly: Arctic
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
          arrangements at Estelle Manor are managed by the
          property&rsquo;s own wedding team, and they vary by
          booking. We don&rsquo;t make assumptions. We confirm the
          specific cut-off, limiter setup and any house rules with
          the wedding coordinator the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Estelle Manor and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Estelle Manor.",
    blurb: (
      <>
        Backbeat plays across Oxfordshire, Buckinghamshire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of North Leigh. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Blenheim Palace", town: "Woodstock" },
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
      { name: "Caswell House", town: "Witney" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
      { name: "Stratton Court Barn", town: "Bicester" },
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "Notley Abbey", town: "Long Crendon" },
      { name: "Stowe House", town: "Buckingham" },
    ],
  },
  cta: {
    heading: "Live music for your Estelle Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
