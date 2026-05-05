import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Findon Place wedding band Backbeat. Live indie and rock for weddings at the 18th-century mansion in the South Downs at Findon, West Sussex. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const findonPlace: VenueRecord = {
  type: "venue",
  slug: "findon-place",
  name: "Findon Place",
  countySlug: "west-sussex",
  meta: {
    title: "Findon Place Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Findon Place Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Findon Place, Findon, West Sussex",
    subAreas: ["Findon", "Worthing", "Storrington", "Steyning", "Arundel"],
  },
  hero: {
    eyebrow: "Findon Place · Findon · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Findon Place.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the 18th-century mansion in the
        South Downs at Findon. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Findon Place",
    heading: (
      <>
        18th-century mansion. South Downs setting.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Findon Place sits in the village of Findon, near Worthing,
          on the South Downs in West Sussex. The house is an
          18th-century mansion, set west of the village and the A24
          near the parish church.
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
          regularly, so Findon sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Findon Place&rsquo;s reception spaces have the kind of
          period finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Findon wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          South-coast core. The setlist flexes accordingly: Arctic
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
          arrangements at Findon Place are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          Rural country-house venues often carry residential-driven
          cut-offs that are worth knowing in advance. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Findon Place and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Findon.",
    blurb: (
      <>
        Backbeat plays across Sussex, Hampshire and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Findon. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Wiston House", town: "Steyning" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Arundel Castle", town: "Arundel" },
      { name: "Bailiffscourt", town: "Climping" },
      { name: "South Lodge", town: "Lower Beeding" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Goodwood House", town: "Chichester" },
      { name: "Tinwood Estate", town: "Halnaker" },
    ],
  },
  cta: {
    heading: "Live music for your Findon Place wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
