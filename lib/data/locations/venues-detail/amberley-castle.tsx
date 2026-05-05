import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Amberley Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed 12th-century castle on the South Downs, West Sussex. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const amberleyCastle: VenueRecord = {
  type: "venue",
  slug: "amberley-castle",
  name: "Amberley Castle",
  countySlug: "west-sussex",
  meta: {
    title: "Amberley Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Amberley Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Amberley Castle, Amberley, West Sussex",
    subAreas: ["Amberley", "Storrington", "Pulborough", "Arundel", "Petworth"],
  },
  hero: {
    eyebrow: "Amberley Castle · Amberley · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Amberley Castle.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed 12th-century
        castle in the South Downs. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Amberley Castle",
    heading: (
      <>
        Built 12th century. Fortified 1377.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Amberley Castle sits in the South Downs at Amberley, in
          West Sussex. Its origins are 12th-century manor house;
          the curtain walls and gatehouse were added when the site
          was fortified in 1377. The castle was the seat of the
          Bishops of Chichester from the Norman Conquest until 1536
          and is Grade I listed. It now runs as a country house
          hotel under the Brownsword Hotel group.
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
          regularly, so Amberley sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          A medieval castle is a characterful brief and one we set
          up carefully. Stone walls and high ceilings change the
          acoustic in a way that needs respecting rather than
          fighting. Our stage setup is built to dress around the
          room rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA
          sized for the room rather than the road. We dress in
          stage-blacks unless you ask otherwise.
        </p>
        <p>
          An Amberley wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-South-coast
          crowd that&rsquo;s comfortable on a dance floor. The
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
          arrangements at Amberley are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. A Grade I-listed
          medieval castle with live-in residential neighbours is
          one of the more careful briefs we play. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Amberley Castle and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Amberley.",
    blurb: (
      <>
        Backbeat plays across Sussex, Hampshire and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Amberley. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Goodwood House", town: "Chichester" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Bailiffscourt", town: "Climping" },
      { name: "South Lodge", town: "Lower Beeding" },
      { name: "Gravetye Manor", town: "West Hoathly" },
      { name: "Arundel Castle", town: "Arundel" },
      { name: "Tinwood Estate", town: "Halnaker" },
    ],
  },
  cta: {
    heading: "Live music for your Amberley Castle wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
