import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Larmer Tree Gardens wedding band Backbeat. Live indie and rock for weddings at the Grade II*-listed Pitt-Rivers gardens on the Wiltshire/Dorset border. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const larmerTreeGardens: VenueRecord = {
  type: "venue",
  slug: "larmer-tree-gardens",
  name: "Larmer Tree Gardens",
  countySlug: "wiltshire",
  meta: {
    title: "Larmer Tree Gardens Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Larmer Tree Gardens Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Larmer Tree Gardens, Tollard Royal, Wiltshire",
    subAreas: ["Tollard Royal", "Shaftesbury", "Salisbury", "Blandford Forum", "Cranborne"],
  },
  hero: {
    eyebrow: "Larmer Tree Gardens · Tollard Royal · Wiltshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Larmer Tree.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II*-listed Pitt-Rivers
        gardens on the Wiltshire/Dorset border. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Larmer Tree Gardens",
    heading: (
      <>
        Founded 1880. 11 acres on the border.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Larmer Tree Gardens sit near Tollard Royal in south
          Wiltshire, on the county border with Dorset, on the
          Pitt-Rivers Rushmore Estate. The gardens were laid out by
          General Augustus Pitt Rivers in 1880 and opened to the
          public in 1885 (the first private gardens opened to the
          public in the UK). They&rsquo;re Grade II* on the
          Register of Parks and Gardens, cover about 11 acres and
          have run on a Friday-and-weekend wedding-and-events
          schedule since restoration in the 1990s.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          regularly, so Tollard Royal sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Larmer Tree weddings tend to use the open-air pavilions
          and lawns alongside the listed garden buildings.
          Outdoor and pavilion settings change the acoustic
          significantly, and weather contingencies need building in
          early. Our stage setup is built to dress around the room
          rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA
          sized for the space rather than the road. We dress in
          stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Larmer Tree wedding tends to pull a guest list
          that&rsquo;s travelled in for the weekend, with a strong
          London-and-South-West core. The setlist flexes accordingly:
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
          arrangements at Larmer Tree are managed by the
          estate&rsquo;s own wedding team, and they vary by booking.
          Heritage-listed gardens in a rural setting often carry
          tighter outdoor-music rules and earlier cut-offs than a
          private barn. We don&rsquo;t make assumptions. We confirm
          the specific cut-off, limiter setup and any house rules
          with the wedding coordinator the week before, and pace
          the closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Larmer Tree Gardens and want a
          band that turns up briefed, properly dressed and with the
          dance floor firmly in mind, send us your date. We&rsquo;d
          love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Larmer Tree.",
    blurb: (
      <>
        Backbeat plays across Wiltshire, Dorset and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Tollard Royal. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Mapperton", town: "Beaminster" },
      { name: "Lulworth Castle", town: "East Lulworth" },
      { name: "Pythouse", town: "Tisbury" },
      { name: "Syrencot", town: "Amesbury" },
      { name: "Almer Manor", town: "Wimborne" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Babington House", town: "Frome" },
    ],
  },
  cta: {
    heading: "Live music for your Larmer Tree wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
