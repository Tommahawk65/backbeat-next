import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Cornwell Manor wedding band Backbeat. Live indie and rock for weddings at the Grade II*-listed Clough Williams-Ellis-restored manor near Chipping Norton, Oxfordshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const cornwellManor: VenueRecord = {
  type: "venue",
  slug: "cornwell-manor",
  name: "Cornwell Manor",
  countySlug: "oxfordshire",
  meta: {
    title: "Cornwell Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Cornwell Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Cornwell Manor, near Chipping Norton, Oxfordshire",
    subAreas: ["Cornwell", "Chipping Norton", "Stow-on-the-Wold", "Burford", "Moreton-in-Marsh"],
  },
  hero: {
    eyebrow: "Cornwell Manor · Chipping Norton · Oxfordshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Cornwell Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II*-listed Cotswold
        manor restored by Clough Williams-Ellis. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Cornwell Manor",
    heading: (
      <>
        Clough Williams-Ellis ballroom and gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Cornwell Manor sits in the village of Cornwell in west
          Oxfordshire, about 2.5 miles west of Chipping Norton, in
          the heart of the Cotswolds. The original house dates to
          the 16th or 17th century. The architect Clough Williams-
          Ellis (best known for designing the Welsh village of
          Portmeirion) restored the house in 1939, adding a
          ballroom and laying out the gardens, swimming pool and
          formal water garden. It&rsquo;s Grade II* listed.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/gloucestershire" className={linkClass}>
            Gloucestershire
          </Link>{" "}
          regularly, so Chipping Norton sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Cornwell&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. The Williams-Ellis
          ballroom is a purpose-built room for an evening floor.
          Our stage setup is built to dress around the room rather
          than fight it. Black-finished kit, restrained on-stage
          lighting rather than a stadium rig, and a PA sized for
          the room rather than the road. We dress in stage-blacks
          unless you ask otherwise.
        </p>
        <p>
          A Cornwell wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, with a strong
          Cotswold and home-counties core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of
          Leon for the late floor, Oasis and Stereophonics for the
          mid-evening, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-
          half peaks. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Cornwell are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. A working
          family manor in a small Cotswold village is one of the
          more careful briefs we play. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Cornwell Manor and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Cornwell.",
    blurb: (
      <>
        Backbeat plays across Oxfordshire, Gloucestershire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Chipping Norton. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Blenheim Palace", town: "Woodstock" },
      { name: "Estelle Manor", town: "North Leigh" },
      { name: "Caswell House", town: "Witney" },
      { name: "Stratton Court Barn", town: "Bicester" },
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
      { name: "Lapstone Barn", town: "Chipping Campden" },
      { name: "Owlpen Manor", town: "Uley" },
      { name: "Elmore Court", town: "Elmore" },
    ],
  },
  cta: {
    heading: "Live music for your Cornwell Manor wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
