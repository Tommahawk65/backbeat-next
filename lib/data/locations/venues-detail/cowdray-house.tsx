import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Cowdray House wedding band Backbeat. Live indie and rock for exclusive-use weddings on the 16,000-acre Pearson family estate in the South Downs. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const cowdrayHouse: VenueRecord = {
  type: "venue",
  slug: "cowdray-house",
  name: "Cowdray House",
  countySlug: "west-sussex",
  meta: {
    title: "Cowdray House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Cowdray House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Cowdray House, Midhurst, West Sussex",
    subAreas: ["Midhurst", "Petworth", "Chichester", "Haslemere", "Petersfield"],
  },
  hero: {
    eyebrow: "Cowdray House · Midhurst · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Cowdray House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for exclusive-use weddings on the 16,000-acre
        Cowdray Estate in the South Downs. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Cowdray House",
    heading: (
      <>
        A 16,000-acre estate.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Cowdray House sits at Midhurst, in the South Downs National
          Park, on the Pearson family&rsquo;s 16,000-acre Cowdray
          Estate. The house has 22 bedrooms and is offered on an
          exclusive-hire basis, with Capability Brown parkland,
          landscaped gardens, a lake and woodland on the doorstep.
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
          regularly, so Midhurst sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Cowdray&rsquo;s reception spaces have the kind of country
          house finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          A Cowdray wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd that&rsquo;s comfortable on a dance floor. The setlist
          flexes accordingly: Arctic Monkeys, The Killers and Kings of
          Leon for the late floor, Oasis and Stereophonics for the
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
          arrangements at Cowdray are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Cowdray House and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Cowdray.",
    blurb: (
      <>
        Backbeat plays across West Sussex, Hampshire and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Midhurst. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Goodwood House", town: "Chichester" },
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
    heading: "Live music for your Cowdray House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
