import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Buxted Park wedding band Backbeat. Live indie and rock for weddings at the Grade II*-listed Hand Picked Hotels country house near Uckfield, East Sussex. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const buxtedPark: VenueRecord = {
  type: "venue",
  slug: "buxted-park",
  name: "Buxted Park",
  countySlug: "east-sussex",
  meta: {
    title: "Buxted Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Buxted Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Buxted Park, Buxted, near Uckfield, East Sussex",
    subAreas: ["Buxted", "Uckfield", "Heathfield", "Crowborough", "Mayfield"],
  },
  hero: {
    eyebrow: "Buxted Park · Buxted · East Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Buxted Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II*-listed Hand Picked
        Hotels country house near Uckfield. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Buxted Park",
    heading: (
      <>
        Built 1725. 200 acres of East Sussex park.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Buxted Park sits in East Sussex, just outside Uckfield. The
          house was built in 1725 and is Grade II* listed. The
          surrounding park covers around 206 acres. After a fire in
          1940 the property was restored and remodelled by the
          architect Basil Ionides. It runs today as a country house
          hotel under Hand Picked Hotels.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/east-sussex" className={linkClass}>
            East Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          regularly, so Uckfield sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Buxted&rsquo;s reception spaces have the kind of country-
          house finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          A Buxted wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          Sussex core. The setlist flexes accordingly: Arctic
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
          arrangements at Buxted Park are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Buxted Park and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Buxted.",
    blurb: (
      <>
        Backbeat plays across Sussex, Kent and the wider South East.
        A snapshot of other well-known wedding venues within about
        an hour of Uckfield. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Gravetye Manor", town: "West Hoathly" },
      { name: "Pelham House", town: "Lewes" },
      { name: "South Lodge", town: "Lower Beeding" },
      { name: "Hever Castle", town: "Hever" },
      { name: "Penshurst Place", town: "Penshurst" },
      { name: "Salomons Estate", town: "Tunbridge Wells" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Amberley Castle", town: "Amberley" },
    ],
  },
  cta: {
    heading: "Live music for your Buxted Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
