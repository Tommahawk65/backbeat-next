import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Owlpen Manor wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Tudor manor with formal terraced gardens, Uley, Gloucestershire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const owlpenManor: VenueRecord = {
  type: "venue",
  slug: "owlpen-manor",
  name: "Owlpen Manor",
  countySlug: "gloucestershire",
  meta: {
    title: "Owlpen Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Owlpen Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Owlpen Manor, Uley, Gloucestershire",
    subAreas: ["Owlpen", "Uley", "Dursley", "Stroud", "Wotton-under-Edge"],
  },
  hero: {
    eyebrow: "Owlpen Manor · Uley · Gloucestershire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Owlpen Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Tudor manor
        with formal terraced gardens. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Owlpen Manor",
    heading: (
      <>
        Tudor manor. Yew topiary terraces.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Owlpen Manor sits in Owlpen village, in the Stroud district
          of Gloucestershire, about a mile east of Uley. Construction
          began in 1450 and was completed in 1616, with medieval
          fabric on the site dating to around 1270. The manor is
          Grade I listed. The formal terraced gardens (Grade II
          registered) are noted as one of the earliest continuously
          cultivated domestic gardens in England, and the Mander
          family have owned and lived in the manor since 1974.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/gloucestershire" className={linkClass}>
            Gloucestershire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          regularly, so Uley sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Owlpen&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          An Owlpen wedding tends to pull a guest list that&rsquo;s
          travelled in from London and Bristol for the weekend, with
          a strong Cotswold core. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop
          Me Now, Sweet Caroline) take the back-half peaks. Between
          sets a DJ playlist (collaborated with you) keeps the floor
          moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Owlpen are managed by the family&rsquo;s
          own wedding team, and they vary by booking. A working
          family manor with significant heritage interiors and
          gardens is one of the more careful briefs we play. We
          don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the
          wedding coordinator the week before, and pace the closing
          set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Owlpen Manor and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Owlpen.",
    blurb: (
      <>
        Backbeat plays across Gloucestershire, Wiltshire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Uley. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Berkeley Castle", town: "Berkeley" },
      { name: "Elmore Court", town: "Elmore" },
      { name: "Old Down Estate", town: "Tockington" },
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Whatley Manor", town: "Easton Grey" },
      { name: "Lapstone Barn", town: "Chipping Campden" },
      { name: "Babington House", town: "Frome" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
    ],
  },
  cta: {
    heading: "Live music for your Owlpen Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
