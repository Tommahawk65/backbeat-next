import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Hedsor House wedding band Backbeat. Live indie and rock for exclusive-use weddings at the Grade II-listed Buckinghamshire estate. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const hedsorHouse: VenueRecord = {
  type: "venue",
  slug: "hedsor-house",
  name: "Hedsor House",
  countySlug: "buckinghamshire",
  meta: {
    title: "Hedsor House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Hedsor House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Hedsor House, Taplow, Buckinghamshire",
    subAreas: ["Taplow", "Bourne End", "Marlow", "Maidenhead", "Beaconsfield"],
  },
  hero: {
    eyebrow: "Hedsor House · Taplow · Buckinghamshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Hedsor House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II-listed Buckinghamshire
        estate above the Thames. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Hedsor House",
    heading: (
      <>
        100 acres, exclusive use.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Hedsor House sits above the Thames near Bourne End, on 100
          acres of Grade II-listed Buckinghamshire grounds. The
          present house was completed in 1868 to a design by James
          Knowles, on a site whose history runs back centuries. It
          runs on an exclusive-use basis: the house and gardens are
          yours for the weekend, with no other wedding sharing the
          estate.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          regularly, so Hedsor sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no anxious
          4am drives back from the wrong end of the country.
        </p>
        <p>
          Hedsor&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. High ceilings, original
          detail, windows out onto the Thames Valley. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather than
          a stadium rig, and a PA sized for the room rather than the
          road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Hedsor wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Hedsor are managed by the venue&rsquo;s own
          wedding team, and they vary by booking. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter setup
          and any house rules with the wedding coordinator the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re booking Hedsor House and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Hedsor.",
    blurb: (
      <>
        Backbeat plays across the Thames Valley and the wider South
        East. A snapshot of other well-known wedding venues within
        about an hour of Hedsor. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Cliveden House", town: "Taplow" },
      { name: "The Compleat Angler", town: "Marlow" },
      { name: "Danesfield House", town: "Marlow" },
      { name: "Bisham Abbey", town: "Marlow" },
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Notley Abbey", town: "Long Crendon" },
    ],
  },
  cta: {
    heading: "Live music for your Hedsor House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
