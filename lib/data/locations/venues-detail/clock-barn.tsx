import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Clock Barn wedding band Backbeat. Live indie and rock for exclusive-use weddings at the 19th-century Hampshire barn near Whitchurch. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const clockBarn: VenueRecord = {
  type: "venue",
  slug: "clock-barn",
  name: "Clock Barn",
  countySlug: "hampshire",
  meta: {
    title: "Clock Barn Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Clock Barn Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Clock Barn, Tufton Warren, Whitchurch, Hampshire",
    subAreas: ["Whitchurch", "Andover", "Basingstoke", "Newbury", "Stockbridge"],
  },
  hero: {
    eyebrow: "Clock Barn · Whitchurch · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Clock Barn.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the 19th-century barn at Tufton
        Warren, Whitchurch. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Clock Barn",
    heading: (
      <>
        Hampshire barn. Exclusive use.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Clock Barn sits at Tufton Warren, just outside Whitchurch
          in north Hampshire. The barn is 19th-century and family-
          owned, with the iconic clock added by a previous owner for
          the 1953 coronation. It runs on an exclusive-use basis. The
          wedding offering splits across the main barn (up to 160
          guests), the Stables and Stable Room (ceremonies up to 50),
          the Hayloft, the Outdoor Kitchen, the Farmhouse (nine
          bedrooms) and the new Rose Barn (a 12-bedroom guest house).
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so Clock
          Barn is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          regularly, so there are no travel surcharges, no overnight
          accommodation and no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          A timber-framed barn is a forgiving room for live music if
          it&rsquo;s set up correctly. Our stage setup is built to
          dress around the room rather than fight it. Black-finished
          kit, restrained on-stage lighting rather than a stadium
          rig, and a PA sized for the room rather than the road. We
          dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Clock Barn wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd that&rsquo;s comfortable on a dance floor. The
          setlist flexes accordingly: Arctic Monkeys, The Killers and
          Kings of Leon for the late floor, Oasis and Stereophonics
          for the mid-evening, modern-pop crossover (Harry Styles,
          Dua Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-half
          peaks. Between sets a DJ playlist (collaborated with you)
          keeps the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Clock Barn are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Clock Barn and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Clock Barn.",
    blurb: (
      <>
        Backbeat plays across north Hampshire, Berkshire and the
        wider South. A snapshot of other well-known wedding venues
        within about an hour of Whitchurch. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Highclere Castle", town: "Highclere" },
      { name: "The Vineyard", town: "Newbury" },
      { name: "Wasing Park", town: "Aldermaston" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Avington Park", town: "Winchester" },
      { name: "Lainston House", town: "Sparsholt" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
    ],
  },
  cta: {
    heading: "Live music for your Clock Barn wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
