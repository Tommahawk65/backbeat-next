import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Elmore Court wedding band Backbeat. Live indie and rock for weddings at the Grade II*-listed Guise family estate and the Gillyflower at Elmore, Gloucestershire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const elmoreCourt: VenueRecord = {
  type: "venue",
  slug: "elmore-court",
  name: "Elmore Court",
  countySlug: "gloucestershire",
  meta: {
    title: "Elmore Court Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Elmore Court Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Elmore Court, Elmore, near Gloucester, Gloucestershire",
    subAreas: ["Elmore", "Gloucester", "Stroud", "Stonehouse", "Cheltenham"],
  },
  hero: {
    eyebrow: "Elmore Court · Elmore · Gloucestershire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Elmore Court.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II*-listed Guise family
        estate and the Gillyflower at Elmore. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Elmore Court",
    heading: (
      <>
        Built ~1564. Guise family 800 years.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Elmore Court sits at Elmore, in the Stroud district of
          Gloucestershire. The mansion was built between 1564 and
          1588 and is Grade II* listed. The estate has been held by
          the Guise baronets for nearly 800 years. Sir Anselm Guise,
          9th Baronet, inherited in 2007 and reopened the property
          for weddings and events in November 2013, with The
          Gillyflower added on the grounds as a sustainable
          reception space.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/gloucestershire" className={linkClass}>
            Gloucestershire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          regularly, so Elmore sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Elmore&rsquo;s reception spaces split between the main
          house (period country-estate interiors) and The Gillyflower
          (a purpose-built modern reception space on the estate).
          Each plays differently. Our stage setup is built to dress
          around the room rather than fight it. Black-finished kit,
          restrained on-stage lighting rather than a stadium rig,
          and a PA sized for the room rather than the road. We dress
          in stage-blacks unless you ask otherwise.
        </p>
        <p>
          An Elmore Court wedding tends to pull a guest list
          that&rsquo;s travelled in from London and Bristol for the
          weekend, with a strong Cotswold and West-Country core. The
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
          arrangements at Elmore Court are managed by the
          estate&rsquo;s own wedding team, and they vary by booking
          and by which space (main house or Gillyflower) you&rsquo;ve
          booked. We don&rsquo;t make assumptions. We confirm the
          specific cut-off, limiter setup and any house rules with
          the wedding coordinator the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Elmore Court and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Elmore.",
    blurb: (
      <>
        Backbeat plays across Gloucestershire, Wiltshire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Elmore. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Berkeley Castle", town: "Berkeley" },
      { name: "Owlpen Manor", town: "Uley" },
      { name: "Old Down Estate", town: "Tockington" },
      { name: "Lapstone Barn", town: "Chipping Campden" },
      { name: "Whatley Manor", town: "Easton Grey" },
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
      { name: "Babington House", town: "Frome" },
    ],
  },
  cta: {
    heading: "Live music for your Elmore Court wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
