import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Avington Park wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed country house in the Itchen Valley near Winchester. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const avingtonPark: VenueRecord = {
  type: "venue",
  slug: "avington-park",
  name: "Avington Park",
  countySlug: "hampshire",
  meta: {
    title: "Avington Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Avington Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Avington Park, Avington, Winchester, Hampshire",
    subAreas: ["Avington", "Winchester", "Alresford", "Itchen Abbas", "Easton"],
  },
  hero: {
    eyebrow: "Avington Park · Avington · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Avington Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed country house in
        the Itchen Valley near Winchester. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Avington Park",
    heading: (
      <>
        Grade I listed. Itchen Valley.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Avington Park sits in the Itchen Valley, a few miles east
          of Winchester. The original house was 16th-century, with
          substantial 17th-century rebuilding, and is Grade I listed.
          The wedding offering centres on the historic library, the
          conservatories, the rose garden and the riverside settings
          on the estate, with on-site accommodation across the main
          house, the Pavilion and a number of estate apartments and
          cottages.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Avington is effectively home turf. We cover{" "}
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
          Avington&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          An Avington wedding tends to pull a guest list that&rsquo;s
          travelled in from London and the home counties for the
          weekend, with a Winchester-and-Hampshire core. The setlist
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
          arrangements at Avington Park are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Avington Park and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Avington.",
    blurb: (
      <>
        Backbeat plays across Hampshire and the wider South coast. A
        snapshot of other well-known wedding venues within about an
        hour of Winchester. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Lainston House", town: "Sparsholt" },
      { name: "The Great Hall", town: "Winchester" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Highclere Castle", town: "Highclere" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Rhinefield House", town: "Brockenhurst" },
    ],
  },
  cta: {
    heading: "Live music for your Avington Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
