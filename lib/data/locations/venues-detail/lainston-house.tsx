import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Lainston House wedding band Backbeat. Live indie and rock for weddings at the Queen Anne manor near Winchester. 63 acres of Hampshire grounds. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const lainstonHouse: VenueRecord = {
  type: "venue",
  slug: "lainston-house",
  name: "Lainston House",
  countySlug: "hampshire",
  meta: {
    title: "Lainston House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Lainston House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Lainston House, Sparsholt, Winchester, Hampshire",
    subAreas: ["Sparsholt", "Winchester", "Stockbridge", "Romsey", "Andover"],
  },
  hero: {
    eyebrow: "Lainston House · Sparsholt · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Lainston House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Queen Anne manor on 63 acres
        outside Winchester. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Lainston House",
    heading: (
      <>
        63 acres of Hampshire grounds.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Lainston House sits at Sparsholt, west of Winchester, on 63
          acres of Hampshire grounds. The main house is a Queen Anne
          manor, and the venue runs as part of the Exclusive
          Collection alongside Pennyhill Park and Royal Berkshire.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so Lainston
          is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/winchester" className={linkClass}>
            Winchester
          </Link>{" "}
          regularly, so there are no travel surcharges, no overnight
          accommodation and no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Lainston&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather than
          a stadium rig, and a PA sized for the room rather than the
          road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Lainston wedding tends to pull a guest list that&rsquo;s
          travelled in from London and the home counties for the
          weekend. The setlist flexes accordingly: Arctic Monkeys,
          The Killers and Kings of Leon for the late floor, Oasis
          and Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for
          the chart-aware younger guests. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline)
          take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Lainston House are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Lainston House and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Lainston.",
    blurb: (
      <>
        Backbeat plays across Hampshire and the wider South coast. A
        snapshot of other well-known wedding venues within about an
        hour of Sparsholt. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Great Hall", town: "Winchester" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Rhinefield House", town: "Brockenhurst" },
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Highclere Castle", town: "Newbury" },
      { name: "The Vineyard", town: "Newbury" },
    ],
  },
  cta: {
    heading: "Live music for your Lainston House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
