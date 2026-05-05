import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Whatley Manor wedding band Backbeat. Live indie and rock for weddings at the Grade II-listed Cotswold country hotel near Malmesbury, Wiltshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const whatleyManor: VenueRecord = {
  type: "venue",
  slug: "whatley-manor",
  name: "Whatley Manor",
  countySlug: "wiltshire",
  meta: {
    title: "Whatley Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Whatley Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Whatley Manor, near Easton Grey, Malmesbury, Wiltshire",
    subAreas: ["Easton Grey", "Malmesbury", "Tetbury", "Castle Combe", "Chippenham"],
  },
  hero: {
    eyebrow: "Whatley Manor · Easton Grey · Wiltshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Whatley Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the southern Cotswold country hotel
        and Michelin restaurant near Malmesbury. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Whatley Manor",
    heading: (
      <>
        Cotswold country hotel. Michelin Dining Room.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Whatley Manor sits near Easton Grey, about two miles west
          of Malmesbury in the southern Cotswolds, in Wiltshire. The
          original 18th-century farmhouse first appears on the
          Malmesbury Tithe Map in 1840 and the main building is
          Grade II listed. Marco and Alix Landolt acquired the
          property in 2000 and the hotel has been a member of Pride
          of Britain Hotels since 2017. The Dining Room holds one
          Michelin star; Grey&rsquo;s Brasserie and the Green Room
          run alongside it.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/gloucestershire" className={linkClass}>
            Gloucestershire
          </Link>{" "}
          regularly, so Easton Grey sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Whatley&rsquo;s reception spaces have the kind of country-
          house finish that doesn&rsquo;t need help. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Whatley wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Whatley Manor are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Whatley Manor and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Whatley.",
    blurb: (
      <>
        Backbeat plays across Wiltshire, Gloucestershire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Malmesbury. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Euridge Manor", town: "Castle Combe" },
      { name: "Lucknam Park", town: "Colerne" },
      { name: "Babington House", town: "Frome" },
      { name: "Elmore Court", town: "Elmore" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
      { name: "Old Down Estate", town: "Tockington" },
      { name: "Lapstone Barn", town: "Chipping Campden" },
    ],
  },
  cta: {
    heading: "Live music for your Whatley Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
