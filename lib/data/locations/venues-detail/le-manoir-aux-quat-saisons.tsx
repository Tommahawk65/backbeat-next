import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Le Manoir aux Quat'Saisons wedding band Backbeat. Live indie and rock for weddings at Raymond Blanc's two-Michelin-star manor at Great Milton, Oxfordshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const leManoirAuxQuatSaisons: VenueRecord = {
  type: "venue",
  slug: "le-manoir-aux-quat-saisons",
  name: "Le Manoir aux Quat'Saisons",
  countySlug: "oxfordshire",
  meta: {
    title: "Le Manoir aux Quat'Saisons Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Le Manoir aux Quat'Saisons Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Belmond Le Manoir aux Quat'Saisons, Great Milton, Oxfordshire",
    subAreas: ["Great Milton", "Oxford", "Wheatley", "Thame", "Wallingford"],
  },
  hero: {
    eyebrow: "Le Manoir aux Quat'Saisons · Great Milton · Oxfordshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Le Manoir.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Raymond Blanc&rsquo;s
        two-Michelin-star manor near Oxford. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Le Manoir aux Quat'Saisons",
    heading: (
      <>
        Two Michelin stars. Raymond Blanc&rsquo;s gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Belmond Le Manoir aux Quat&rsquo;Saisons sits at Great
          Milton, near Oxford. It opened as a hotel and restaurant
          in 1984 in a 15th-century manor house, with Raymond Blanc
          at the helm of the kitchen. The restaurant holds two
          Michelin stars and five AA Rosettes. The estate has been
          owned by Belmond since 2014 (originally Orient-Express
          Hotels), and Belmond is in turn part of LVMH from 2018. On-
          site gardens supply the kitchen.
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
          regularly, so Great Milton sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Le Manoir is a small, careful brief. Wedding rooms here
          are intimate-scale rather than ballroom-scale, and the
          food and service are the centre of the day. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Le Manoir wedding tends to pull a guest list that&rsquo;s
          travelled in from London for the weekend, often with a
          food-and-wine-led brief. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the
          late floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop
          Me Now, Sweet Caroline) take the back-half peaks. Between
          sets a DJ playlist (collaborated with you) keeps the
          floor moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Le Manoir are managed by the
          property&rsquo;s own wedding team, and they vary by
          booking. Rural restaurant-led venues often carry tighter
          residential cut-offs and stricter on-stage volume. We
          don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Le Manoir aux Quat&rsquo;Saisons
          and want a band that turns up briefed, properly dressed
          and with the dance floor firmly in mind, send us your
          date. We&rsquo;d love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Le Manoir.",
    blurb: (
      <>
        Backbeat plays across Oxfordshire, Buckinghamshire and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Great Milton. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Blenheim Palace", town: "Woodstock" },
      { name: "Caswell House", town: "Witney" },
      { name: "Eynsham Hall", town: "North Leigh" },
      { name: "Notley Abbey", town: "Long Crendon" },
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "Stowe House", town: "Buckingham" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
      { name: "Hedsor House", town: "Taplow" },
    ],
  },
  cta: {
    heading: "Live music for your Le Manoir wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
