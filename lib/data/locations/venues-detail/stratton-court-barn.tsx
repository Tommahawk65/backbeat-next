import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Stratton Court Barn wedding band Backbeat. Live indie and rock for exclusive-use weddings at the Cotswold-stone barn at Stratton Audley, Oxfordshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const strattonCourtBarn: VenueRecord = {
  type: "venue",
  slug: "stratton-court-barn",
  name: "Stratton Court Barn",
  countySlug: "oxfordshire",
  meta: {
    title: "Stratton Court Barn Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Stratton Court Barn Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Stratton Court Barn, Stratton Audley, Bicester, Oxfordshire",
    subAreas: ["Stratton Audley", "Bicester", "Buckingham", "Brackley", "Aylesbury"],
  },
  hero: {
    eyebrow: "Stratton Court Barn · Stratton Audley · Oxfordshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Stratton Court Barn.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the exclusive-use Cotswold stone
        barn at Stratton Audley, north Oxfordshire. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Stratton Court Barn",
    heading: (
      <>
        Cotswold stone. Restored barn. Ferne Wood.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Stratton Court Barn sits at Stratton Audley, near Bicester
          in north Oxfordshire. The estate runs as a family-owned
          exclusive-use wedding venue across restored Cotswold stone
          barns, with named spaces including the Main Barn and the
          Byre, plus a formal rose garden, a Tuscan-style courtyard,
          a lake and woodland (Ferne Wood) for outdoor ceremonies.
          On-site accommodation is provided.
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
          regularly, so Bicester sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          A timber-framed Cotswold-stone barn is a forgiving room
          for live music if it&rsquo;s set up correctly. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Stratton Court wedding tends to pull a guest list
          that&rsquo;s travelled in from London for the weekend,
          with a strong Cotswold and home-counties core. The setlist
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
          arrangements at Stratton Court are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          Rural barn venues often carry residential-driven cut-offs
          that are worth knowing in advance. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Stratton Court Barn and want a
          band that turns up briefed, properly dressed and with the
          dance floor firmly in mind, send us your date. We&rsquo;d
          love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Stratton Court.",
    blurb: (
      <>
        Backbeat plays across Oxfordshire, Buckinghamshire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Bicester. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Estelle Manor", town: "North Leigh" },
      { name: "Caswell House", town: "Witney" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
      { name: "Blenheim Palace", town: "Woodstock" },
      { name: "Notley Abbey", town: "Long Crendon" },
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "Stowe House", town: "Buckingham" },
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
    ],
  },
  cta: {
    heading: "Live music for your Stratton Court wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
