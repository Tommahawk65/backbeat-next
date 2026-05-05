import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Donnington Grove wedding band Backbeat. Live indie and rock for weddings at the Grade II*-listed Strawberry Hill Gothic country club near Newbury, Berkshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const donningtonGrove: VenueRecord = {
  type: "venue",
  slug: "donnington-grove",
  name: "Donnington Grove",
  countySlug: "berkshire",
  meta: {
    title: "Donnington Grove Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Donnington Grove Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Donnington Grove, near Newbury, Berkshire",
    subAreas: ["Donnington", "Newbury", "Hungerford", "Thatcham", "Hermitage"],
  },
  hero: {
    eyebrow: "Donnington Grove · Newbury · Berkshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Donnington Grove.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II*-listed Strawberry
        Hill Gothic country club at Newbury. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Donnington Grove",
    heading: (
      <>
        Built 1763. Strawberry Hill Gothic.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Donnington Grove sits at Donnington, just outside Newbury
          in west Berkshire. The house was built in 1763 for James
          Pettit Andrews in a Strawberry Hill Gothic style, and the
          dandy Beau Brummell&rsquo;s father William Brummell
          expanded the estate in the late 18th century. It&rsquo;s
          Grade II* listed. The property opened as Donnington Grove
          Country Club in 1993, with an 18-hole golf course
          designed by former Ryder Cup player Dave Thomas.
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
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Donnington&rsquo;s reception spaces have the kind of
          period-Gothic finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Donnington wedding tends to pull a guest list
          that&rsquo;s travelled in from London for the weekend,
          with a strong west-Berkshire and home-counties core. The
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
          arrangements at Donnington Grove are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the
          wedding coordinator the week before, and pace the closing
          set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Donnington Grove and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Donnington.",
    blurb: (
      <>
        Backbeat plays across Berkshire, Hampshire and the wider
        Thames Valley. A snapshot of other well-known wedding venues
        within about an hour of Newbury. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "The Vineyard", town: "Newbury" },
      { name: "Highclere Castle", town: "Highclere" },
      { name: "Wasing Park", town: "Aldermaston" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Four Seasons Hampshire", town: "Hook" },
      { name: "Cliveden House", town: "Taplow" },
    ],
  },
  cta: {
    heading: "Live music for your Donnington Grove wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
