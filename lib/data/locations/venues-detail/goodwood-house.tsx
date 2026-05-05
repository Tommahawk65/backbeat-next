import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Goodwood House wedding band Backbeat. Live indie and rock for weddings at the Duke of Richmond's West Sussex estate. Goodwood House and The Kennels. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const goodwoodHouse: VenueRecord = {
  type: "venue",
  slug: "goodwood-house",
  name: "Goodwood House",
  countySlug: "west-sussex",
  meta: {
    title: "Goodwood House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Goodwood House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Goodwood House, Chichester, West Sussex",
    subAreas: ["Chichester", "Midhurst", "Petworth", "Arundel", "Bosham"],
  },
  hero: {
    eyebrow: "Goodwood House · Chichester · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Goodwood.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Duke of Richmond&rsquo;s West
        Sussex estate. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Goodwood",
    heading: (
      <>
        A working ducal estate.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Goodwood sits north of Chichester in West Sussex, on an
          estate the 1st Duke of Richmond bought in 1697 and that has
          stayed in the family since. The wedding offering splits
          across two named buildings: Goodwood House itself, licensed
          for civil ceremonies up to 245 guests, and The Kennels, a
          smaller James Wyatt building from 1787 that originally
          housed the third Duke&rsquo;s fox hounds.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          regularly, so Goodwood sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Goodwood House and The Kennels are very different rooms.
          The House is a state-room brief with the kind of period
          finish that doesn&rsquo;t need help. The Kennels is the
          smaller, warmer, more relaxed end of the day. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Goodwood wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd that knows the room. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving. We
          learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Goodwood are managed by the estate&rsquo;s
          own wedding team, and they vary by booking and by which
          building you&rsquo;ve booked. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter setup
          and any house rules with the wedding coordinator the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re booking Goodwood House or The Kennels and
          want a band that turns up briefed, properly dressed and
          with the dance floor firmly in mind, send us your date.
          We&rsquo;d love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Goodwood.",
    blurb: (
      <>
        Backbeat plays across West Sussex, Hampshire and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Goodwood. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Cowdray House", town: "Midhurst" },
      { name: "South Lodge", town: "Lower Beeding" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Bailiffscourt Hotel", town: "Climping" },
      { name: "Tinwood Estate", town: "Halnaker" },
      { name: "Farbridge", town: "West Dean" },
      { name: "Arundel Castle", town: "Arundel" },
    ],
  },
  cta: {
    heading: "Live music for your Goodwood wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
