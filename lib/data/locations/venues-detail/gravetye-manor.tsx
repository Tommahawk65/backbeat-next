import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Gravetye Manor wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Elizabethan manor near East Grinstead, West Sussex. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const gravetyeManor: VenueRecord = {
  type: "venue",
  slug: "gravetye-manor",
  name: "Gravetye Manor",
  countySlug: "west-sussex",
  meta: {
    title: "Gravetye Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Gravetye Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Gravetye Manor, near East Grinstead, West Sussex",
    subAreas: [
      "West Hoathly",
      "East Grinstead",
      "Forest Row",
      "Crawley",
      "Lingfield",
    ],
  },
  hero: {
    eyebrow: "Gravetye Manor · West Hoathly · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Gravetye Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Elizabethan
        manor near East Grinstead. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Gravetye Manor",
    heading: (
      <>
        Built 1598. William Robinson&rsquo;s gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Gravetye Manor sits at West Hoathly, near East Grinstead in
          West Sussex. The Elizabethan house was built in 1598 by
          Richard Infield (an ironmaster) for his bride. It&rsquo;s
          Grade I listed, with the gardens separately Grade II*-
          listed in the Register of Historic Parks and Gardens. The
          gardens are the layout of William Robinson, the influential
          landscape gardener and author of The English Flower Garden,
          who lived at Gravetye from 1884 until his death in 1935.
          Today it runs as a one-Michelin-star country house hotel
          set in 1,000 acres.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/east-sussex" className={linkClass}>
            East Sussex
          </Link>{" "}
          regularly, so Gravetye sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Gravetye&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Gravetye wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a Sussex
          and home-counties core. The setlist flexes accordingly:
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
          arrangements at Gravetye are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. A Grade I-listed
          house with heritage gardens is one of the more careful
          briefs we play. We don&rsquo;t make assumptions. We confirm
          the specific cut-off, limiter setup and any house rules
          with the wedding coordinator the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Gravetye Manor and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Gravetye.",
    blurb: (
      <>
        Backbeat plays across Sussex, Surrey and the wider South.
        A snapshot of other well-known wedding venues within about
        an hour of East Grinstead. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "South Lodge", town: "Lower Beeding" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Buxted Park", town: "Buxted" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Bailiffscourt", town: "Climping" },
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Pennyhill Park", town: "Bagshot" },
    ],
  },
  cta: {
    heading: "Live music for your Gravetye Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
