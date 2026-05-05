import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Solent Hotel wedding band Backbeat. Live indie and rock for weddings at the Thwaites country hotel and spa at Whiteley, Fareham. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const solentHotel: VenueRecord = {
  type: "venue",
  slug: "solent-hotel",
  name: "Solent Hotel",
  countySlug: "hampshire",
  meta: {
    title: "Solent Hotel Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Solent Hotel Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Solent Hotel, Whiteley, Fareham, Hampshire",
    subAreas: ["Whiteley", "Fareham", "Southampton", "Portsmouth", "Botley"],
  },
  hero: {
    eyebrow: "Solent Hotel · Whiteley · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for the Solent Hotel.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Thwaites hotel and spa between
        Southampton and Portsmouth. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Solent Hotel",
    heading: (
      <>
        Between Southampton and Portsmouth.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Solent Hotel sits at Whiteley, just outside Fareham,
          between Southampton and Portsmouth on the M27 corridor.
          It&rsquo;s a hotel and spa run under the Thwaites group,
          with the Hambledon Suite as the main wedding space.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so the
          Solent Hotel is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and the South Coast regularly, so there are no travel
          surcharges, no overnight accommodation and no anxious 4am
          drives back from the wrong end of the country.
        </p>
        <p>
          The Hambledon Suite is a purpose-built wedding room rather
          than a period-house space, which usually means a clearer
          stage area, friendlier acoustics and more flexibility on
          load-in and rig. Our stage setup is built to dress around
          the room rather than fight it. Black-finished kit,
          restrained on-stage lighting rather than a stadium rig,
          and a PA sized for the room rather than the road. We
          dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Solent Hotel wedding tends to pull a guest list with a
          strong Solent and South-coast core, plus London commuters
          travelling down. The setlist flexes accordingly: Arctic
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
          arrangements at the Solent Hotel are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking the Solent Hotel and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near the Solent Hotel.",
    blurb: (
      <>
        Backbeat plays across south Hampshire and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Whiteley. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "The Square Tower", town: "Portsmouth" },
      { name: "Lainston House", town: "Sparsholt" },
      { name: "Avington Park", town: "Winchester" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Rhinefield House", town: "Brockenhurst" },
      { name: "Cowdray House", town: "Midhurst" },
    ],
  },
  cta: {
    heading: "Live music for your Solent Hotel wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
