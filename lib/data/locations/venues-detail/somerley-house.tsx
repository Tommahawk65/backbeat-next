import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Somerley House wedding band Backbeat. Live indie and rock for weddings at the Earl of Normanton's Grade II*-listed estate near Ringwood, Hampshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const somerleyHouse: VenueRecord = {
  type: "venue",
  slug: "somerley-house",
  name: "Somerley House",
  countySlug: "hampshire",
  meta: {
    title: "Somerley House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Somerley House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Somerley House, near Ringwood, Hampshire",
    subAreas: ["Ringwood", "Ellingham", "Fordingbridge", "Bransgore", "Burley"],
  },
  hero: {
    eyebrow: "Somerley House · Ringwood · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Somerley House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Earl of Normanton&rsquo;s Grade
        II*-listed estate near Ringwood. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Somerley House",
    heading: (
      <>
        7,000 acres on the Avon.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Somerley sits in the Avon Valley near Ringwood, on the
          7th Earl of Normanton&rsquo;s 7,000-acre Hampshire estate.
          The house was completed around 1795 to a design by Samuel
          Wyatt and is Grade II* listed. The Normanton family have
          held it since 1825. A 90-foot picture gallery was added in
          1850 to display the family&rsquo;s art collection. The
          house remains a private home and isn&rsquo;t open to the
          public, but is hired out for weddings, events and filming
          (recent productions include The Crown and Bridgerton).
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Somerley is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and the{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          coast regularly, so there are no travel surcharges, no
          overnight accommodation and no anxious 4am drives back
          from the wrong end of the country.
        </p>
        <p>
          Somerley&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. The picture gallery
          is the room of the day for most weddings here. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          A Somerley wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-South-coast
          crowd that knows the room. The setlist flexes accordingly:
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
          arrangements at Somerley are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. A working
          family estate with significant heritage interiors is one
          of the more careful briefs we play. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Somerley House and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Somerley.",
    blurb: (
      <>
        Backbeat plays across the New Forest, the Avon Valley and
        the wider South coast. A snapshot of other well-known
        wedding venues within about an hour of Ringwood. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Burley Manor", town: "Burley" },
      { name: "Rhinefield House", town: "Brockenhurst" },
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Pylewell Park", town: "Lymington" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "The Montagu Arms", town: "Beaulieu" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
    ],
  },
  cta: {
    heading: "Live music for your Somerley House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
