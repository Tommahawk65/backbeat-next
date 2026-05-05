import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Wasing Park wedding band Backbeat. Live indie and rock for weddings at the Grade II-listed Mount-family estate at Aldermaston, Berkshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const wasingPark: VenueRecord = {
  type: "venue",
  slug: "wasing-park",
  name: "Wasing Park",
  countySlug: "berkshire",
  meta: {
    title: "Wasing Park Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Wasing Park Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Wasing Park, Aldermaston, Berkshire",
    subAreas: ["Aldermaston", "Newbury", "Reading", "Tadley", "Theale"],
  },
  hero: {
    eyebrow: "Wasing Park · Aldermaston · Berkshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Wasing Park.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Mount-family estate at
        Aldermaston, west Berkshire. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Wasing Park",
    heading: (
      <>
        Built 1770. Mount-family estate.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Wasing Park sits about seven miles south-east of Newbury at
          Aldermaston in west Berkshire. The house was completed in
          1770 for John Mount, a London nautical publisher who had
          bought the land in 1759. The park is Grade II listed. The
          estate has stayed in the same family across generations and
          is now owned and managed by Joshua Dugdale.
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
          regularly, so Aldermaston sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Wasing&rsquo;s reception spaces are a mix of period country-
          house interiors and converted estate buildings. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Wasing wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Wasing are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Wasing Park and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Wasing.",
    blurb: (
      <>
        Backbeat plays across west Berkshire, north Hampshire and
        the wider Thames Valley. A snapshot of other well-known
        wedding venues within about an hour of Aldermaston. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Highclere Castle", town: "Highclere" },
      { name: "The Vineyard", town: "Newbury" },
      { name: "Donnington Grove", town: "Newbury" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Cliveden House", town: "Taplow" },
    ],
  },
  cta: {
    heading: "Live music for your Wasing Park wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
