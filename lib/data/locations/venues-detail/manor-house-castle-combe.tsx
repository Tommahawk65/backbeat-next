import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "The Manor House Castle Combe wedding band Backbeat. Live indie and rock for weddings at the Grade II-listed Exclusive Collection country hotel and golf club. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const manorHouseCastleCombe: VenueRecord = {
  type: "venue",
  slug: "manor-house-castle-combe",
  name: "The Manor House Castle Combe",
  countySlug: "wiltshire",
  meta: {
    title: "Manor House Castle Combe Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Manor House Castle Combe Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "The Manor House, Castle Combe, Wiltshire",
    subAreas: ["Castle Combe", "Chippenham", "Malmesbury", "Corsham", "Bath"],
  },
  hero: {
    eyebrow: "Manor House · Castle Combe · Wiltshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for the Manor House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II-listed Exclusive
        Collection country hotel at Castle Combe. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · The Manor House Castle Combe",
    heading: (
      <>
        17th-century house. Castle Combe village.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Manor House sits in Castle Combe, a Cotswold village
          about five miles north-west of Chippenham in Wiltshire.
          The house dates to the 17th century, was substantially
          renovated by George Poulett Scrope between 1826 and 1830,
          and is Grade II listed (designated 1960). The property was
          first converted to a country club in 1947 and has been
          owned by the Exclusive Collection since 1988, with an
          adjacent golf club on the estate.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          regularly, so Castle Combe sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          The Manor House&rsquo;s reception spaces have the kind of
          country-house finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Manor House wedding tends to pull a guest list that&rsquo;s
          travelled in from London and Bristol for the weekend, with
          a strong Cotswold core. The setlist flexes accordingly:
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
          arrangements at the Manor House are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          A Grade II listed property in a working Cotswold village
          can carry residential-driven cut-offs that are worth
          knowing in advance. We don&rsquo;t make assumptions. We
          confirm the specific cut-off, limiter setup and any house
          rules with the wedding coordinator the week before, and
          pace the closing set so it lands at the actual end of the
          night.
        </p>
        <p>
          If you&rsquo;re booking the Manor House Castle Combe and
          want a band that turns up briefed, properly dressed and
          with the dance floor firmly in mind, send us your date.
          We&rsquo;d love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Castle Combe.",
    blurb: (
      <>
        Backbeat plays across Wiltshire, Somerset, Bristol and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Castle Combe. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Euridge Manor", town: "Castle Combe" },
      { name: "Whatley Manor", town: "Easton Grey" },
      { name: "Lucknam Park", town: "Colerne" },
      { name: "Babington House", town: "Frome" },
      { name: "Old Down Estate", town: "Tockington" },
      { name: "Priston Mill", town: "Bath" },
      { name: "Berkeley Castle", town: "Berkeley" },
      { name: "Owlpen Manor", town: "Uley" },
    ],
  },
  cta: {
    heading: "Live music for your Manor House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
