import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Wiston House wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed 16th-century Goring family house in the South Downs. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const wistonHouse: VenueRecord = {
  type: "venue",
  slug: "wiston-house",
  name: "Wiston House",
  countySlug: "west-sussex",
  meta: {
    title: "Wiston House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Wiston House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Wiston House, Wiston, near Steyning, West Sussex",
    subAreas: ["Wiston", "Steyning", "Storrington", "Worthing", "Pulborough"],
  },
  hero: {
    eyebrow: "Wiston House · Steyning · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Wiston House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed 16th-century
        Goring family house in the South Downs. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Wiston House",
    heading: (
      <>
        Built ~1576. 6,000 acres.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Wiston House sits at Wiston, near Steyning in the South
          Downs National Park. The Tudor house was built around 1576
          for Thomas Shirley and substantially enlarged in the early
          19th century by the architect Edward Blore. It&rsquo;s
          Grade I listed and surrounded by more than 6,000 acres of
          parkland. The house has been in the Goring family since
          1743, and since 1951 has hosted Wilton Park, an executive
          agency of the Foreign &amp; Commonwealth Office, on
          weekdays. Weddings tend to use the house and grounds at
          weekends.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and the wider{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          coast regularly, so Wiston sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Wiston&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Wiston wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a Sussex
          and home-counties core. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the
          late floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop
          Me Now, Sweet Caroline) take the back-half peaks. Between
          sets a DJ playlist (collaborated with you) keeps the
          floor moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Wiston are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. A working
          family estate with significant heritage interiors is one
          of the more careful briefs we play. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Wiston House and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Wiston.",
    blurb: (
      <>
        Backbeat plays across Sussex, Hampshire and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Steyning. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "South Lodge", town: "Lower Beeding" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Goodwood House", town: "Chichester" },
      { name: "Bailiffscourt", town: "Climping" },
      { name: "Gravetye Manor", town: "West Hoathly" },
      { name: "Arundel Castle", town: "Arundel" },
      { name: "Tinwood Estate", town: "Halnaker" },
    ],
  },
  cta: {
    heading: "Live music for your Wiston House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
