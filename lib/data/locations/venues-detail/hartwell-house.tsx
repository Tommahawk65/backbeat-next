import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Hartwell House wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Jacobean and Georgian house near Aylesbury. Capability Brown gardens. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const hartwellHouse: VenueRecord = {
  type: "venue",
  slug: "hartwell-house",
  name: "Hartwell House",
  countySlug: "buckinghamshire",
  meta: {
    title: "Hartwell House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Hartwell House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Hartwell House, near Aylesbury, Buckinghamshire",
    subAreas: ["Aylesbury", "Thame", "Long Crendon", "Wendover", "Bicester"],
  },
  hero: {
    eyebrow: "Hartwell House · Aylesbury · Buckinghamshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Hartwell House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed house and 90
        acres of Capability Brown gardens. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Hartwell House",
    heading: (
      <>
        Jacobean. Capability Brown gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Hartwell House sits in the parish of Hartwell, about three
          miles from Aylesbury, on 90 acres of Capability Brown
          gardens (laid out around 1750). The main house is early
          17th-century Jacobean, with a Georgian front and Rococo
          interiors added by Henry Keene between 1759 and 1761. It&rsquo;s
          Grade I listed. Louis XVIII of France lived in the house in
          exile between 1809 and 1814. The estate is owned by the
          Ernest Cook Trust and leased to the National Trust, and has
          run as a hotel under Historic House Hotels since 1989.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          regularly, so Aylesbury sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Hartwell&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. National Trust-leased
          properties tend to have specific access and protection
          arrangements, and we work to whatever the venue sets. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Hartwell wedding tends to pull a guest list that&rsquo;s
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
          arrangements at Hartwell House are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Hartwell House and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Hartwell.",
    blurb: (
      <>
        Backbeat plays across Buckinghamshire, Oxfordshire and the
        wider Thames Valley. A snapshot of other well-known wedding
        venues within about an hour of Aylesbury. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Notley Abbey", town: "Long Crendon" },
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
      { name: "Hedsor House", town: "Taplow" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Stratton Court Barn", town: "Bicester" },
      { name: "Eynsham Hall", town: "North Leigh" },
      { name: "Caswell House", town: "Witney" },
      { name: "The Bay Tree", town: "Burford" },
    ],
  },
  cta: {
    heading: "Live music for your Hartwell House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
