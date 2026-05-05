import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Foxhills wedding band Backbeat. Live indie and rock for weddings at the 400-acre Surrey country club at Ottershaw, with three golf courses. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const foxhills: VenueRecord = {
  type: "venue",
  slug: "foxhills",
  name: "Foxhills",
  countySlug: "surrey",
  meta: {
    title: "Foxhills Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Foxhills Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Foxhills, Ottershaw, Surrey",
    subAreas: ["Ottershaw", "Chertsey", "Woking", "Weybridge", "Addlestone"],
  },
  hero: {
    eyebrow: "Foxhills · Ottershaw · Surrey",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Foxhills.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the 400-acre Surrey country club at
        Ottershaw. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Foxhills",
    heading: (
      <>
        400 acres. Three golf courses.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Foxhills sits at Ottershaw in Surrey, on a 400-acre estate
          with three golf courses (the 18-hole Longcross and Bernard
          Hunt courses, plus the 9-hole Manor course) and 66 hotel
          rooms. The wedding offering splits across the Clubhouse
          (up to 180), the Orangery (up to 45 ceremonies), the
          Library (up to 100 ceremonies, 66 dining) and the Manor
          Lawns for outdoor ceremonies (up to 150).
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
          regularly, so Ottershaw sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Foxhills&rsquo; reception spaces are a mix of country-club
          interiors and lighter, garden-facing rooms. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Foxhills wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          home-counties core. The setlist flexes accordingly: Arctic
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
          arrangements at Foxhills are managed by the venue&rsquo;s
          own wedding team, and they vary by booking and by which
          space you&rsquo;ve booked. We don&rsquo;t make assumptions.
          We confirm the specific cut-off, limiter setup and any
          house rules with the wedding coordinator the week before,
          and pace the closing set so it lands at the actual end of
          the night.
        </p>
        <p>
          If you&rsquo;re booking Foxhills and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Foxhills.",
    blurb: (
      <>
        Backbeat plays across Surrey, Berkshire and the wider Thames
        Valley. A snapshot of other well-known wedding venues within
        about an hour of Ottershaw. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Great Fosters", town: "Egham" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Loseley Park", town: "Guildford" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Hartwell House", town: "Aylesbury" },
    ],
  },
  cta: {
    heading: "Live music for your Foxhills wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
