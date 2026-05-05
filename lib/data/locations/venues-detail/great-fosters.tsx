import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Great Fosters wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Elizabethan house at Egham. Tithe Barn receptions. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const greatFosters: VenueRecord = {
  type: "venue",
  slug: "great-fosters",
  name: "Great Fosters",
  countySlug: "surrey",
  meta: {
    title: "Great Fosters Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Great Fosters Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Great Fosters, Egham, Surrey",
    subAreas: ["Egham", "Virginia Water", "Sunningdale", "Windsor", "Staines"],
  },
  hero: {
    eyebrow: "Great Fosters · Egham · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Great Fosters.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Elizabethan
        house and Tithe Barn at Egham. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Great Fosters",
    heading: (
      <>
        Elizabethan house. Tithe Barn.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Great Fosters sits at Egham in Surrey, on roughly 17 acres
          of Grade II*-listed historic parkland. The main house is an
          Elizabethan U-shaped homestead built around 1550, Grade I
          listed, with Elizabeth I&rsquo;s 1598 crest above the
          entrance from a royal visit. The on-site Tithe Barn (Grade
          II listed, 17th century) is the venue&rsquo;s reception
          space of choice for larger weddings. The estate has run as
          a five-star hotel under Alexander Hotels since 2018.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          regularly, so Egham sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no anxious
          4am drives back from the wrong end of the country.
        </p>
        <p>
          The Tithe Barn and the main house play differently. The
          Barn is timber-framed and warm and forgiving for live
          music; the house rooms are formal-period in feel. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Great Fosters wedding tends to pull a guest list
          that&rsquo;s travelled in for the weekend, with a
          London-and-home-counties crowd that knows the room. The
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
          arrangements at Great Fosters are managed by the
          venue&rsquo;s own wedding team, and they vary by booking
          and by which space (Barn or house) you&rsquo;ve booked. We
          don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Great Fosters and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Great Fosters.",
    blurb: (
      <>
        Backbeat plays across Surrey, Berkshire and the wider Thames
        Valley. A snapshot of other well-known wedding venues within
        about an hour of Egham. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Foxhills", town: "Ottershaw" },
      { name: "Hedsor House", town: "Taplow" },
      { name: "Hampton Court Palace", town: "Richmond" },
    ],
  },
  cta: {
    heading: "Live music for your Great Fosters wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
