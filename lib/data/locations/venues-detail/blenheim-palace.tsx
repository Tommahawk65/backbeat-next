import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Blenheim Palace wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed UNESCO World Heritage palace at Woodstock, Oxfordshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const blenheimPalace: VenueRecord = {
  type: "venue",
  slug: "blenheim-palace",
  name: "Blenheim Palace",
  countySlug: "oxfordshire",
  meta: {
    title: "Blenheim Palace Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Blenheim Palace Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Blenheim Palace, Woodstock, Oxfordshire",
    subAreas: ["Woodstock", "Oxford", "Witney", "Bicester", "Chipping Norton"],
  },
  hero: {
    eyebrow: "Blenheim Palace · Woodstock · Oxfordshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Blenheim.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed UNESCO World
        Heritage palace at Woodstock. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Blenheim Palace",
    heading: (
      <>
        Vanbrugh. UNESCO. Churchill&rsquo;s birthplace.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Blenheim Palace sits at Woodstock in Oxfordshire, on the
          12th Duke of Marlborough&rsquo;s estate. The palace was
          built between 1705 and 1722 by Sir John Vanbrugh and
          Nicholas Hawksmoor in the English Baroque style and given
          to the 1st Duke as a reward for the victory at the Battle
          of Blenheim. It&rsquo;s Grade I listed and was designated
          a UNESCO World Heritage Site in 1987. Sir Winston Churchill
          was born here in 1874.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          regularly, so Blenheim sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Blenheim&rsquo;s reception spaces have the kind of period
          finish, scale and ceiling height that don&rsquo;t need
          help. Our stage setup is built to dress around the room
          rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA
          sized for the room rather than the road. We dress in
          stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Blenheim wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, often with international
          friends. The setlist flexes accordingly: Arctic Monkeys,
          The Killers and Kings of Leon for the late floor, Oasis
          and Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for
          the chart-aware younger guests. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline)
          take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Blenheim are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. A Grade I
          listed palace with UNESCO heritage status is one of the
          most careful briefs we play. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the coordinator the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re booking Blenheim Palace and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Blenheim.",
    blurb: (
      <>
        Backbeat plays across Oxfordshire, Buckinghamshire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Woodstock. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
      { name: "Caswell House", town: "Witney" },
      { name: "Eynsham Hall", town: "North Leigh" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
      { name: "The Bay Tree", town: "Burford" },
      { name: "Stowe House", town: "Buckingham" },
      { name: "Notley Abbey", town: "Long Crendon" },
      { name: "Hartwell House", town: "Aylesbury" },
    ],
  },
  cta: {
    heading: "Live music for your Blenheim Palace wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
