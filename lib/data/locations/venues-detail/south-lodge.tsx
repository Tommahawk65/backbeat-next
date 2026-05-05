import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "South Lodge wedding band Backbeat. Live indie and rock for weddings at the Exclusive Collection country house near Horsham, West Sussex. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const southLodge: VenueRecord = {
  type: "venue",
  slug: "south-lodge",
  name: "South Lodge",
  countySlug: "west-sussex",
  meta: {
    title: "South Lodge Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "South Lodge Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "South Lodge, Lower Beeding, near Horsham, West Sussex",
    subAreas: [
      "Lower Beeding",
      "Horsham",
      "Crawley",
      "Cuckfield",
      "Haywards Heath",
    ],
  },
  hero: {
    eyebrow: "South Lodge · Lower Beeding · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for South Lodge.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Exclusive Collection country
        house near Horsham. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · South Lodge",
    heading: (
      <>
        Country house. Spa. Three restaurants.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          South Lodge sits on Brighton Road at Lower Beeding,
          outside Horsham in West Sussex. It runs as a country house
          hotel under the Exclusive Collection (alongside Pennyhill
          Park, Royal Berkshire and Lainston House), with three
          named restaurants on site (Botanica, The Pass and
          Camellia) and a spa.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          regularly, so Lower Beeding sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          South Lodge&rsquo;s reception spaces have the kind of
          country-house finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A South Lodge wedding tends to pull a guest list
          that&rsquo;s travelled in from London for the weekend,
          with a strong Sussex and home-counties core. The setlist
          flexes accordingly: Arctic Monkeys, The Killers and Kings
          of Leon for the late floor, Oasis and Stereophonics for
          the mid-evening, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-
          half peaks. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at South Lodge are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking South Lodge and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near South Lodge.",
    blurb: (
      <>
        Backbeat plays across Sussex and the wider South. A snapshot
        of other well-known wedding venues within about an hour of
        Lower Beeding. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Gravetye Manor", town: "West Hoathly" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Bailiffscourt", town: "Climping" },
      { name: "Goodwood House", town: "Chichester" },
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Pennyhill Park", town: "Bagshot" },
    ],
  },
  cta: {
    heading: "Live music for your South Lodge wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
