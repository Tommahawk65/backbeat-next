import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "The Elvetham wedding band Backbeat. Live indie and rock for weddings at the Grade II*-listed Victorian Gothic country house near Fleet, Hampshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const theElvetham: VenueRecord = {
  type: "venue",
  slug: "the-elvetham",
  name: "The Elvetham",
  countySlug: "hampshire",
  meta: {
    title: "The Elvetham Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "The Elvetham Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "The Elvetham, Hartley Wintney, Hampshire",
    subAreas: ["Hartley Wintney", "Fleet", "Odiham", "Hook", "Yateley"],
  },
  hero: {
    eyebrow: "The Elvetham · Hartley Wintney · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for The Elvetham.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II*-listed Victorian
        Gothic country house near Fleet. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · The Elvetham",
    heading: (
      <>
        Victorian Gothic. Grade II* listed.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Elvetham sits at Hartley Wintney, about two miles
          northwest of Fleet in north-east Hampshire. The current
          house was built between 1859 and 1862 by Samuel Sanders
          Teulon, a High Victorian Gothic Revival architect noted
          for polychrome brickwork. It&rsquo;s Grade II* listed,
          with the surrounding park separately Grade II listed.
          The estate&rsquo;s history runs back to 1403 (Sir William
          Sturmy) and passed through the Seymour and Calthorpe
          families before becoming a hotel in the 20th century.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so The
          Elvetham is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          regularly, so there are no travel surcharges, no overnight
          accommodation and no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          The Elvetham&rsquo;s reception spaces have the kind of
          Victorian-Gothic finish, polychrome brick and stone-dressed
          interior that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          An Elvetham wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd that&rsquo;s comfortable on a dance floor. The setlist
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
          arrangements at The Elvetham are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking The Elvetham and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near The Elvetham.",
    blurb: (
      <>
        Backbeat plays across north Hampshire, Surrey and the wider
        Thames Valley. A snapshot of other well-known wedding venues
        within about an hour of Hartley Wintney. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Northbrook Park", town: "Bentley" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Highclere Castle", town: "Highclere" },
      { name: "Wasing Park", town: "Aldermaston" },
      { name: "Coworth Park", town: "Sunningdale" },
    ],
  },
  cta: {
    heading: "Live music for your Elvetham wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
