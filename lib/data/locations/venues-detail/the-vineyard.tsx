import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "The Vineyard wedding band Backbeat. Live indie and rock for weddings at the three-rosette hotel and spa near Newbury, Berkshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const theVineyard: VenueRecord = {
  type: "venue",
  slug: "the-vineyard",
  name: "The Vineyard",
  countySlug: "berkshire",
  meta: {
    title: "The Vineyard Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "The Vineyard Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "The Vineyard, Stockcross, Newbury, Berkshire",
    subAreas: ["Stockcross", "Newbury", "Hungerford", "Thatcham", "Kintbury"],
  },
  hero: {
    eyebrow: "The Vineyard · Stockcross · Berkshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for The Vineyard.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the three-rosette hotel and spa at
        Stockcross, near Newbury. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · The Vineyard",
    heading: (
      <>
        Three-rosette dining. 32 suites.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          The Vineyard sits at Stockcross, just outside Newbury in
          west Berkshire. It runs as a hotel, restaurant and spa,
          with 32 suites across the property and a three-rosette
          restaurant on site. Named guest categories include the
          Atrium Suite, Deluxe Suite, Luxury Suite and Grand Suite.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          regularly, so Newbury sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          The Vineyard&rsquo;s wedding rooms are a mix of restaurant-
          quality interiors and lighter, garden-facing spaces.
          Purpose-built hotel function rooms usually mean a clearer
          stage area, friendlier acoustics and more flexibility on
          load-in and rig. Our stage setup is built to dress around
          the room rather than fight it. Black-finished kit,
          restrained on-stage lighting rather than a stadium rig,
          and a PA sized for the room rather than the road. We dress
          in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Vineyard wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          west-Berkshire-and-home-counties core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor, Oasis and Stereophonics for the
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
          arrangements at The Vineyard are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking The Vineyard and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near The Vineyard.",
    blurb: (
      <>
        Backbeat plays across Berkshire, north Hampshire and the
        wider Thames Valley. A snapshot of other well-known wedding
        venues within about an hour of Newbury. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Highclere Castle", town: "Highclere" },
      { name: "Wasing Park", town: "Aldermaston" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Donnington Grove", town: "Newbury" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Cliveden House", town: "Taplow" },
    ],
  },
  cta: {
    heading: "Live music for your Vineyard wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
