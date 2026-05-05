import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Pennyhill Park wedding band Backbeat. Live indie and rock for weddings at the 120-acre Bagshot estate in Surrey. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const pennyhillPark: VenueRecord = {
  type: "venue",
  slug: "pennyhill-park",
  name: "Pennyhill Park",
  countySlug: "surrey",
  meta: {
    title: "Pennyhill Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Pennyhill Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Pennyhill Park, Bagshot, Surrey",
    subAreas: ["Bagshot", "Sunningdale", "Ascot", "Camberley", "Windlesham"],
  },
  hero: {
    eyebrow: "Pennyhill Park · Bagshot · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Pennyhill Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the 120-acre Surrey estate on the
        Bagshot/Ascot border. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Pennyhill Park",
    heading: (
      <>
        120 acres of Surrey estate.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Pennyhill Park sits on London Road in Bagshot, on a 120-acre
          Surrey estate that runs up to the Berkshire border. The
          house was started in 1849 and the property opened as a hotel
          in 1972. It&rsquo;s now part of the Exclusive Collection,
          with 123 rooms, a Michelin-starred restaurant (Latymer) and
          a spa.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          regularly, so Bagshot sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Pennyhill&rsquo;s reception spaces have the kind of country-
          house finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Pennyhill wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd that knows the room. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving. We
          learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Pennyhill Park are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Pennyhill Park and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Pennyhill Park.",
    blurb: (
      <>
        Backbeat plays across Surrey, Berkshire and the wider Thames
        Valley. A snapshot of other well-known wedding venues within
        about an hour of Bagshot. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Great Fosters", town: "Egham" },
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Foxhills", town: "Ottershaw" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Hartwell House", town: "Aylesbury" },
    ],
  },
  cta: {
    heading: "Live music for your Pennyhill Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
