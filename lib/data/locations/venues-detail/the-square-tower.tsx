import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "The Square Tower wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed 15th-century tower on Portsmouth's Old Town seafront. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const theSquareTower: VenueRecord = {
  type: "venue",
  slug: "the-square-tower",
  name: "The Square Tower",
  countySlug: "hampshire",
  meta: {
    title: "The Square Tower Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "The Square Tower Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "The Square Tower, Portsmouth, Hampshire",
    subAreas: ["Portsmouth", "Old Portsmouth", "Southsea", "Gosport", "Fareham"],
  },
  hero: {
    eyebrow: "The Square Tower · Portsmouth · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for The Square Tower.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed 15th-century
        tower on Portsmouth&rsquo;s Old Town seafront. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · The Square Tower",
    heading: (
      <>
        Built 1494. Old Portsmouth seafront.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Square Tower sits on Broad Street in Old Portsmouth,
          looking out across the harbour entrance towards the Solent.
          The tower was built in 1494 as a residence for the
          Governor of Portsmouth, became a gunpowder store in 1584
          and a Royal Navy meat store between 1779 and 1850. It&rsquo;s
          Grade I listed and has been owned by Portsmouth City
          Council since 1958 to 1960. The Council runs it as a
          venue for weddings and events.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Portsmouth is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and the{" "}
          <Link href="/wedding-bands/portsmouth" className={linkClass}>
            Portsmouth
          </Link>{" "}
          area regularly, so there are no travel surcharges, no
          overnight accommodation and no anxious 4am drives back
          from the wrong end of the country.
        </p>
        <p>
          The Square Tower is a stone-walled, high-ceilinged room
          with hard surfaces in every direction. It&rsquo;s a
          characterful brief and one we set up carefully. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Square Tower wedding tends to pull a guest list with a
          strong Solent and Portsmouth core, plus travelled-in
          friends staying for the weekend on the seafront. The
          setlist flexes accordingly: Arctic Monkeys, The Killers
          and Kings of Leon for the late floor, Oasis and
          Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for
          the chart-aware younger guests. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline)
          take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at the Square Tower are managed by the
          council-run wedding team, and they vary by booking.
          Council-run heritage venues often carry their own access,
          conservation and timing protocols. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking The Square Tower and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love to
          be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near the Square Tower.",
    blurb: (
      <>
        Backbeat plays across south Hampshire and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Portsmouth. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Solent Hotel", town: "Whiteley" },
      { name: "Lainston House", town: "Sparsholt" },
      { name: "Avington Park", town: "Winchester" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Goodwood House", town: "Chichester" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Chewton Glen", town: "New Milton" },
    ],
  },
  cta: {
    heading: "Live music for your Square Tower wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
