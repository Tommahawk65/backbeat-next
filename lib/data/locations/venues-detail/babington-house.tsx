import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Babington House wedding band Backbeat. Live indie and rock for weddings at the Soho House country club, Grade II*-listed Georgian manor near Frome, Somerset. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const babingtonHouse: VenueRecord = {
  type: "venue",
  slug: "babington-house",
  name: "Babington House",
  countySlug: "somerset",
  meta: {
    title: "Babington House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Babington House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Babington House, between Radstock and Frome, Somerset",
    subAreas: ["Babington", "Frome", "Radstock", "Bath", "Shepton Mallet"],
  },
  hero: {
    eyebrow: "Babington House · Frome · Somerset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Babington House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Soho House country club,
        between Bath and Frome. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Babington House",
    heading: (
      <>
        Soho House in the country.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Babington House sits in the village of Babington, between
          Radstock and Frome in Somerset. The Georgian manor was
          built around 1705 and is Grade II* listed (the grounds
          separately Grade II in the Register of Historic Parks and
          Gardens). The estate was converted in 1998 by Nick Jones
          into a country house, members&rsquo; club and wedding
          venue under Soho House. Weddings are open to non-members
          as well.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          regularly, so Frome sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Babington&rsquo;s reception spaces are a mix of restored
          Georgian-period interiors and lighter, members&rsquo;-club-
          style rooms. Our stage setup is built to dress around the
          room rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA sized
          for the room rather than the road. We dress in stage-blacks
          unless you ask otherwise.
        </p>
        <p>
          A Babington wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          creative-industry crowd that&rsquo;s comfortable on a
          dance floor. The setlist flexes accordingly: Arctic
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
          arrangements at Babington House are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Babington House and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love to
          be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Babington.",
    blurb: (
      <>
        Backbeat plays across Somerset, Wiltshire and the wider
        South West. A snapshot of other well-known wedding venues
        within about an hour of Frome. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Lucknam Park", town: "Colerne" },
      { name: "Orchardleigh", town: "Frome" },
      { name: "Whatley Manor", town: "Malmesbury" },
      { name: "Euridge Manor", town: "Castle Combe" },
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Priston Mill", town: "Bath" },
      { name: "Mapperton", town: "Beaminster" },
      { name: "Brympton House", town: "Yeovil" },
    ],
  },
  cta: {
    heading: "Live music for your Babington House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
