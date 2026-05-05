import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Tinwood Estate wedding band Backbeat. Live indie and rock for weddings at the Tukker family vineyard near Chichester, West Sussex. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const tinwoodEstate: VenueRecord = {
  type: "venue",
  slug: "tinwood-estate",
  name: "Tinwood Estate",
  countySlug: "west-sussex",
  meta: {
    title: "Tinwood Estate Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Tinwood Estate Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Tinwood Estate, near Chichester, West Sussex",
    subAreas: ["Halnaker", "Chichester", "Goodwood", "Tangmere", "Boxgrove"],
  },
  hero: {
    eyebrow: "Tinwood Estate · Halnaker · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Tinwood.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the family-run vineyard on the
        edge of the South Downs near Chichester. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Tinwood Estate",
    heading: (
      <>
        English sparkling wine. South Downs vineyard.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Tinwood Estate sits on the edge of the South Downs National
          Park, near Chichester in West Sussex. Founded in 2007 by
          the Tukker family, the estate produces English sparkling
          wines using the three classic champagne grape varieties
          (Chardonnay, Pinot Noir and Pinot Meunier) by the
          traditional method. On-estate accommodation runs from
          luxury lodges, with the Vineyard Kitchen handling food.
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
          regularly, so Chichester sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Tinwood&rsquo;s wedding spaces are a mix of vineyard
          settings, modern pavilion-style rooms and the Vineyard
          Kitchen building. Outdoor and pavilion settings change
          the acoustic significantly. Our stage setup is built to
          dress around the room rather than fight it. Black-finished
          kit, restrained on-stage lighting rather than a stadium
          rig, and a PA sized for the space rather than the road. We
          dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Tinwood wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          food-and-wine-led brief. The setlist flexes accordingly:
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
          arrangements at Tinwood are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. South Downs
          National Park venues often carry tighter outdoor-music
          protocols. We don&rsquo;t make assumptions. We confirm
          the specific cut-off, limiter setup and any house rules
          with the wedding coordinator the week before, and pace
          the closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Tinwood Estate and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Tinwood.",
    blurb: (
      <>
        Backbeat plays across West Sussex, Hampshire and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Chichester. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Goodwood House", town: "Chichester" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Bailiffscourt", town: "Climping" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Arundel Castle", town: "Arundel" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Findon Place", town: "Findon" },
      { name: "Southdowns Manor", town: "Petersfield" },
    ],
  },
  cta: {
    heading: "Live music for your Tinwood Estate wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
