import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Royal Berkshire Hotel wedding band Backbeat. Live indie and rock for weddings at the Exclusive Collection country house at Sunninghill, Ascot. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const royalBerkshireHotel: VenueRecord = {
  type: "venue",
  slug: "royal-berkshire-hotel",
  name: "Royal Berkshire Hotel",
  countySlug: "berkshire",
  meta: {
    title: "Royal Berkshire Hotel Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Royal Berkshire Hotel Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Royal Berkshire Hotel, Sunninghill, Ascot, Berkshire",
    subAreas: ["Sunninghill", "Ascot", "Sunningdale", "Windsor", "Bagshot"],
  },
  hero: {
    eyebrow: "Royal Berkshire Hotel · Sunninghill · Berkshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for the Royal Berkshire.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Exclusive Collection country
        house at Sunninghill, Ascot. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Royal Berkshire Hotel",
    heading: (
      <>
        Sunninghill. Ascot. Country house.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Royal Berkshire Hotel sits on London Road at
          Sunninghill, near Ascot in Berkshire. It runs as a country
          house hotel under the Exclusive Collection (alongside
          Pennyhill Park, South Lodge and Lainston House).
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          regularly, so Ascot sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          The Royal Berkshire&rsquo;s reception spaces have the kind
          of country-house finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Royal Berkshire wedding tends to pull a guest list
          that&rsquo;s travelled in from London for the weekend,
          with a strong Ascot-and-home-counties core. The setlist
          flexes accordingly: Arctic Monkeys, The Killers and Kings
          of Leon for the late floor, Oasis and Stereophonics for
          the mid-evening, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-
          half peaks. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at the Royal Berkshire are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking the Royal Berkshire Hotel and want
          a band that turns up briefed, properly dressed and with
          the dance floor firmly in mind, send us your date.
          We&rsquo;d love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near the Royal Berkshire.",
    blurb: (
      <>
        Backbeat plays across Berkshire, Surrey and the wider Thames
        Valley. A snapshot of other well-known wedding venues within
        about an hour of Ascot. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Great Fosters", town: "Egham" },
      { name: "Beaverbrook", town: "Leatherhead" },
      { name: "Foxhills", town: "Ottershaw" },
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "The Vineyard", town: "Newbury" },
    ],
  },
  cta: {
    heading: "Live music for your Royal Berkshire wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
