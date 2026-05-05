import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Northbrook Park wedding band Backbeat. Live indie and rock for exclusive-use weddings on the Hampshire/Surrey border at Bentley, near Farnham. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const northbrookPark: VenueRecord = {
  type: "venue",
  slug: "northbrook-park",
  name: "Northbrook Park",
  countySlug: "surrey",
  meta: {
    title: "Northbrook Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Northbrook Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Northbrook Park, Bentley, near Farnham, Surrey",
    subAreas: ["Bentley", "Farnham", "Alton", "Aldershot", "Guildford"],
  },
  hero: {
    eyebrow: "Northbrook Park · Bentley · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Northbrook Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the country-house estate on the
        Hampshire/Surrey border, near Farnham. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Northbrook Park",
    heading: (
      <>
        Walled gardens. Orangery. Vine Room.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Northbrook Park sits at Bentley, near Farnham, on the
          Hampshire/Surrey border. The wedding offering splits across
          a handful of named spaces: the Vine Room (up to 200 for
          ceremonies, 120 for dining), the Walled Gardens and the
          Orangery (both up to 250), and the Nuns Garden for drinks
          receptions. On-site accommodation runs through the Manor
          House and ten self-catering Mews cottages.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Northbrook sits comfortably inside our home patch. We cover{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          regularly, so there are no travel surcharges, no overnight
          accommodation and no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Northbrook&rsquo;s reception spaces are a mix of period
          interiors, walled-garden settings and a glasshouse-style
          Orangery. Each plays differently. Our stage setup is built
          to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Northbrook wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Northbrook Park are managed by the
          venue&rsquo;s own wedding team, and they vary by booking
          and by which space (Vine Room, Walled Gardens or Orangery)
          you&rsquo;ve booked. We don&rsquo;t make assumptions. We
          confirm the specific cut-off, limiter setup and any house
          rules with the wedding coordinator the week before, and
          pace the closing set so it lands at the actual end of the
          night.
        </p>
        <p>
          If you&rsquo;re booking Northbrook Park and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love to
          be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Northbrook.",
    blurb: (
      <>
        Backbeat plays across Surrey, Hampshire and the wider South.
        A snapshot of other well-known wedding venues within about an
        hour of Bentley. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Froyle Park", town: "Alton" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Foxhills", town: "Ottershaw" },
      { name: "Loseley Park", town: "Guildford" },
      { name: "Lainston House", town: "Winchester" },
    ],
  },
  cta: {
    heading: "Live music for your Northbrook Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
