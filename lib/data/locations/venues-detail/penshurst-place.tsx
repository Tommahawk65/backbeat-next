import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Penshurst Place wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed 14th-century Sidney family house in Kent. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const penshurstPlace: VenueRecord = {
  type: "venue",
  slug: "penshurst-place",
  name: "Penshurst Place",
  countySlug: "kent",
  meta: {
    title: "Penshurst Place Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Penshurst Place Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Penshurst Place, Penshurst, Kent",
    subAreas: ["Penshurst", "Tonbridge", "Tunbridge Wells", "Sevenoaks", "Edenbridge"],
  },
  hero: {
    eyebrow: "Penshurst Place · Penshurst · Kent",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Penshurst Place.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed 14th-century
        Sidney family house in Kent. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Penshurst Place",
    heading: (
      <>
        Built 1341. Sidney family seven generations.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Penshurst Place sits in the village of Penshurst, about
          32 miles south-east of London in Kent. The original hall
          house was built in 1341 for Sir John de Pulteney, a London
          merchant, and the property has belonged to the Sidney
          family across seven generations since Edward VI granted
          it to Sir William Sidney in 1552. It&rsquo;s Grade I
          listed and widely cited as one of the most complete
          surviving examples of 14th-century domestic architecture
          in England.
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
          regularly, so Penshurst sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          The Baron&rsquo;s Hall and the surrounding period rooms
          have the kind of medieval-domestic finish that doesn&rsquo;t
          need help. Our stage setup is built to dress around the
          room rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA sized
          for the room rather than the road. We dress in stage-blacks
          unless you ask otherwise.
        </p>
        <p>
          A Penshurst wedding tends to pull a guest list that&rsquo;s
          travelled in from London and the home counties for the
          weekend, with a strong Kent core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor, Oasis and Stereophonics for the
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
          arrangements at Penshurst are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. A working
          family estate with significant medieval heritage interiors
          is one of the more careful briefs we play. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Penshurst Place and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Penshurst.",
    blurb: (
      <>
        Backbeat plays across Kent, East Sussex and the wider South
        East. A snapshot of other well-known wedding venues within
        about an hour of Penshurst. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Hever Castle", town: "Hever" },
      { name: "Leeds Castle", town: "Maidstone" },
      { name: "Buxted Park", town: "Buxted" },
      { name: "Salomons Estate", town: "Tunbridge Wells" },
      { name: "Gravetye Manor", town: "West Hoathly" },
      { name: "Bore Place", town: "Edenbridge" },
      { name: "Nettlestead Place", town: "Maidstone" },
      { name: "Sprivers Mansion", town: "Horsmonden" },
    ],
  },
  cta: {
    heading: "Live music for your Penshurst Place wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
