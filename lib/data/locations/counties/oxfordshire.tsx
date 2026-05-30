import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Oxfordshire wedding band Backbeat. Live indie and rock music for Oxford college, Cotswolds and country house weddings. Five-star reviews from Wolfson College and beyond. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const oxfordshire: CountyRecord = {
  type: "county",
  slug: "oxfordshire",
  name: "Oxfordshire",
  meta: {
    title: "Wedding Bands in Oxfordshire | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Oxfordshire | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Oxfordshire",
    subAreas: [
      "Oxford",
      "Banbury",
      "Witney",
      "Henley-on-Thames",
      "Bicester",
      "Burford",
      "Chipping Norton",
    ],
  },
  hero: {
    eyebrow: "Oxfordshire · Cotswolds · UK-wide",
    heading: (
      <>
        Wedding bands in Oxfordshire
        <br className="hidden sm:block" /> the colleges have already booked.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Oxford colleges, Cotswolds country houses
        and stately home weddings. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Oxfordshire",
    heading: (
      <>
        From Oxford colleges
        <br />
        to Cotswolds country houses.
      </>
    ),
    body: (
      <>
        <p>
          Oxfordshire is one of the country&rsquo;s strongest wedding
          regions and one of our most-requested. Oxford&rsquo;s historic
          colleges (Wolfson, Worcester, Trinity, Magdalen) host weddings
          that demand a band capable of matching the room without being
          precious about it. The Cotswolds end of the county delivers the
          country-house brief: Blenheim Palace, Le Manoir, the string of
          estates around Chipping Norton.
        </p>
        <p>
          Backbeat has played at Wolfson College, Oxford (five-star review
          from Anthony &amp; Timothy below) and we cover the wider county
          including Witney, Henley, Burford and Banbury regularly. As a
          Hampshire-based band the drive is a comfortable hour or so. We
          also play{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          regularly, so the bulk of our season sits inside an
          hour-and-a-half&rsquo;s drive of base. No travel surcharges, no
          overnight accommodation, no anxious 4am drive back from the
          Cotswolds.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          Oxford college weddings with their own quad-and-hall
          rhythm, Cotswolds country estates, private-estate
          marquees in the Chipping Norton belt, and the
          gastronomic country-house circuit. Each has its own
          rhythm. A college wedding is a different evening to a
          country-estate marquee, and the set list, lighting rig
          and stage volume flex around which one you&rsquo;ve
          booked.
        </p>
        <p>
          Oxfordshire has a logistical layer most couples
          don&rsquo;t expect. Oxford&rsquo;s city centre and
          college quarter sit inside heritage-protected pedestrian
          and residential streets with tighter vehicle access.
          College venues each carry their own load-in arrangements
          through their events team. Country-estate venues sit on
          gated drives and delivery windows, often on rural
          single-track lanes. We confirm the specific load-in
          plan with the coordinator ahead of time rather than
          learning it on the night.
        </p>
        <p>
          Oxfordshire wedding crowds are musically wide-open:
          global guests at college weddings, multi-generational
          families at country houses, and friend groups that range
          from City lawyers to choral scholars. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of
          Leon for the late floor, Oasis and Stereophonics for the
          mid-evening, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the
          back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Oxfordshire. Oxford college and city-centre venues
          typically run earlier cut-offs from local planning
          conditions and college rules. Country estates and
          private-land venues often allow later finishes, but
          every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the
          specific cut-off and any sound restrictions with the
          venue the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning an Oxfordshire wedding and want a band
          that turns up briefed for the venue and reads the room
          properly, send us your date. We&rsquo;d love to be on your
          shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Oxfordshire venues",
    heading: "Oxfordshire wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Oxfordshire wedding venues, from Oxford
        colleges to Cotswolds country estates and stately homes.
        We&rsquo;re Hampshire-based and travel across the county and
        beyond. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Wolfson College", town: "Oxford" },
      { name: "Blenheim Palace", town: "Woodstock" },
      { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
      { name: "The Bay Tree Hotel", town: "Burford" },
      { name: "Caswell House", town: "Brize Norton" },
      { name: "Cornwell Manor", town: "Chipping Norton" },
      { name: "The Old Swan & Minster Mill", town: "Minster Lovell" },
      { name: "Eynsham Hall", town: "Witney" },
      { name: "Great Tew Estate", town: "Chipping Norton" },
      { name: "Stonor Park", town: "Henley-on-Thames" },
      { name: "Oxford Town Hall", town: "Oxford" },
      { name: "Heythrop Park", town: "Chipping Norton" },
    ],
  },
  cta: {
    heading: "Live music for your Oxfordshire wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
