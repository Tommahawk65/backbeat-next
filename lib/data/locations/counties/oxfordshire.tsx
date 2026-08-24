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
    title: "Wedding Bands in Oxfordshire — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Oxfordshire — Live Music From £1,900 | Backbeat",
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
        History is the venue
        <br />
        in Oxfordshire.
      </>
    ),
    body: (
      <>
        <p>
          Oxfordshire runs on a very particular kind of wedding
          setting. The colleges of the city — Wolfson, Worcester,
          Trinity, Magdalen — host weddings in rooms that are older
          than most countries. The country-house circuit at the
          Cotswolds end of the county (Blenheim Palace, Le Manoir,
          the Chipping Norton belt) trades on architectural drama.
          Even the barn and gastronomy venues sit in Cotswold
          honey-stone villages that anchor the day&rsquo;s tone before
          the band even sets up.
        </p>
        <p>
          Oxfordshire sits inside our regular season patch. From base
          the drive is roughly 90 minutes to central Oxford, longer
          to the Chipping Norton end but not dramatically so. Same
          for{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          on either side. The county doesn&rsquo;t sit at the edge of
          our range; it sits inside it.
        </p>
        <p>
          Wedding-venue types in Oxfordshire split roughly four ways.
          Oxford college weddings run on their own quad-and-hall
          rhythm, with events teams managing load-in through
          historic buildings. Cotswolds country estates offer the
          country-house wedding template with local architectural
          flavour. Private-estate marquees in the Chipping Norton
          belt add another dimension. The gastronomic country-house
          circuit (Le Manoir, the string of Michelin-related venues)
          brings a specific dinner-first pacing that shapes the
          closing set.
        </p>
        <p>
          Well-known Oxfordshire wedding venues include Wolfson
          College, Blenheim Palace, Le Manoir aux Quat&rsquo;Saisons,
          Caswell House, Cornwell Manor, The Old Swan &amp; Minster
          Mill, Eynsham Hall, Great Tew Estate and the Chipping
          Norton estate circuit. If your venue isn&rsquo;t on that
          list, tell us; Oxfordshire has more good venues than any
          one snapshot captures.
        </p>
        <p>
          Oxfordshire wedding crowds are musically wide-open. Global
          guests at college weddings, multi-generational families at
          country houses, friend groups that range from City lawyers
          to choral scholars. The setlist has to bridge that spread.
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor. Oasis and Stereophonics for the sing-along middle.
          Modern chart-pop crossover (Harry Styles, Dua Lipa, Sam
          Fender) layered through. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) hit the
          back-half peaks. Between sets a DJ playlist, agreed with
          you in advance, keeps the room moving. One custom first
          dance per booking is included.
        </p>
        <p>
          Curfews are unusually varied across Oxfordshire. Oxford
          college and city-centre venues typically run earlier
          cut-offs from local planning and college rules. Country
          estates and private-land venues in the Cotswolds often
          allow later finishes. Heritage-protected rooms sometimes
          have specific decibel constraints. Rules get confirmed
          with the coordinator ahead of the day, not on it.
        </p>
        <p>
          If you&rsquo;re planning an Oxfordshire wedding and want a
          band that reads the setting as part of the brief, send the
          date and venue.
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
  faqs: [
    {
      q: "What's different about a college wedding compared to a country-estate wedding?",
      a: "Oxford colleges are historic buildings with their own events teams managing load-in through architecturally sensitive spaces. Load-in windows are often tighter and the visual staging expectation is quieter. Country estates in the Cotswolds run more permissively on stage setup but often carry firmer curfews from residential neighbours. Two genuinely different wedding-day briefs.",
    },
    {
      q: "Do Oxford college weddings usually have specific music restrictions?",
      a: "Yes, and they vary by college. Some rooms carry strict dB limits due to heritage-protected fabric. Others are more flexible. Rules are set by the individual college's events team and worth confirming during venue selection, not on the day.",
    },
    {
      q: "How do Cotswolds village venues typically compare to Oxford city venues?",
      a: "Cotswolds village venues (honey-stone country houses, converted barns, estate marquees) tend toward more relaxed evening pacing, later curfews and outdoor-drinks-reception energy. Oxford city venues (colleges, city-centre hotels) are more formal, more tightly scheduled and closer-hemmed by residential neighbours. Setlist and stage volume flex around which end you're at.",
    },
    {
      q: "What does an Oxfordshire wedding guest list usually look like?",
      a: "Musically wide-open. College weddings often pull international guests. Country-house weddings pull multi-generational family groups and London-weekend friends. Setlists work best when they read across generations and genres rather than skewing hard in one direction.",
    },
    {
      q: "Is the Cotswolds end of Oxfordshire really as far as it looks from the South Coast?",
      a: "Not really. The drive from base to Chipping Norton or Burford is about 2 hours in normal traffic. Longer than a Hampshire wedding, but well inside our regular working geography. Bookings in that belt sit inside our usual season pattern, not as special-occasion trips.",
    },
  ],
};
