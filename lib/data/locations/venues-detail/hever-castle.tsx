import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Hever Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Anne Boleyn childhood home, restored by William Waldorf Astor. Kent. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const heverCastle: VenueRecord = {
  type: "venue",
  slug: "hever-castle",
  name: "Hever Castle",
  countySlug: "kent",
  meta: {
    title: "Hever Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Hever Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Hever Castle, Hever, near Edenbridge, Kent",
    subAreas: ["Hever", "Edenbridge", "Tonbridge", "Sevenoaks", "East Grinstead"],
  },
  hero: {
    eyebrow: "Hever Castle · Hever · Kent",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Hever Castle.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Anne Boleyn
        childhood home, restored by William Waldorf Astor. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Hever Castle",
    heading: (
      <>
        Anne Boleyn. Astor restoration.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Hever Castle sits in the village of Hever, near Edenbridge
          in Kent, about 30 miles south-east of London. The oldest
          parts date to 1270, with significant Tudor additions in
          1462. Anne Boleyn spent her childhood here from 1505. In
          1903 William Waldorf Astor acquired and restored the
          property, adding the Italian and rose gardens, the
          1904-planted yew maze and the surrounding lake. The castle
          is Grade I listed and the gatehouse contains the oldest
          working original portcullis in England. It&rsquo;s now
          owned by the Guthrie family&rsquo;s Broadland Properties
          (since 1983).
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/kent" className={linkClass}>
            Kent
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/east-sussex" className={linkClass}>
            East Sussex
          </Link>{" "}
          regularly, so Hever sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Hever&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          A Hever wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          Kent and home-counties core. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a
          DJ playlist (collaborated with you) keeps the floor moving.
          We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Hever are managed by the venue&rsquo;s own
          wedding team, and they vary by booking. A Grade I listed
          medieval castle in a small Kent village is one of the more
          careful briefs we play. We don&rsquo;t make assumptions.
          We confirm the specific cut-off, limiter setup and any
          house rules with the wedding coordinator the week before,
          and pace the closing set so it lands at the actual end of
          the night.
        </p>
        <p>
          If you&rsquo;re booking Hever Castle and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Hever.",
    blurb: (
      <>
        Backbeat plays across Kent, East Sussex and the wider South
        East. A snapshot of other well-known wedding venues within
        about an hour of Hever. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Penshurst Place", town: "Penshurst" },
      { name: "Leeds Castle", town: "Maidstone" },
      { name: "Buxted Park", town: "Buxted" },
      { name: "Salomons Estate", town: "Tunbridge Wells" },
      { name: "Gravetye Manor", town: "West Hoathly" },
      { name: "Bore Place", town: "Edenbridge" },
      { name: "Nettlestead Place", town: "Maidstone" },
      { name: "Sprivers Mansion", town: "Horsmonden" },
    ],
  },
  cta: {
    heading: "Live music for your Hever Castle wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
