import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Southdowns Manor wedding band Backbeat. Live indie and rock for exclusive-use weddings at the South Downs National Park manor near Petersfield. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const southdownsManor: VenueRecord = {
  type: "venue",
  slug: "southdowns-manor",
  name: "Southdowns Manor",
  countySlug: "west-sussex",
  meta: {
    title: "Southdowns Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Southdowns Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Southdowns Manor, near Petersfield, West Sussex",
    subAreas: ["Trotton", "Petersfield", "Midhurst", "Liphook", "Haslemere"],
  },
  hero: {
    eyebrow: "Southdowns Manor · Petersfield · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Southdowns Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the exclusive-use manor on the
        Hampshire/Sussex border in the South Downs. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Southdowns Manor",
    heading: (
      <>
        Hampshire/Sussex border. Exclusive use.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Southdowns Manor sits in the South Downs National Park, on
          the border where West Sussex meets Hampshire and Surrey,
          a few miles from Petersfield. The venue runs on an
          exclusive-use basis with up to 14 guest rooms (plus a
          honeymoon suite) and capacity for around 150 wedding
          guests.
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
          regularly, so Southdowns sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Southdowns&rsquo; reception spaces are a mix of period-
          country-house interiors and lighter, garden-facing rooms.
          Our stage setup is built to dress around the room rather
          than fight it. Black-finished kit, restrained on-stage
          lighting rather than a stadium rig, and a PA sized for the
          room rather than the road. We dress in stage-blacks unless
          you ask otherwise.
        </p>
        <p>
          A Southdowns wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a Hampshire-
          and-Sussex local core. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop
          Me Now, Sweet Caroline) take the back-half peaks. Between
          sets a DJ playlist (collaborated with you) keeps the floor
          moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Southdowns Manor are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          South Downs National Park venues often carry tighter
          outdoor-music protocols. We don&rsquo;t make assumptions.
          We confirm the specific cut-off, limiter setup and any
          house rules with the wedding coordinator the week before,
          and pace the closing set so it lands at the actual end of
          the night.
        </p>
        <p>
          If you&rsquo;re booking Southdowns Manor and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love to
          be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Southdowns Manor.",
    blurb: (
      <>
        Backbeat plays across Sussex, Hampshire and the wider South.
        A snapshot of other well-known wedding venues within about
        an hour of Petersfield. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Goodwood House", town: "Chichester" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Bailiffscourt", town: "Climping" },
      { name: "Tinwood Estate", town: "Halnaker" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Lainston House", town: "Sparsholt" },
    ],
  },
  cta: {
    heading: "Live music for your Southdowns Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
