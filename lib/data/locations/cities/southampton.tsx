import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Wedding bands in Southampton from £1,900. Backbeat: live indie & rock for harbour hotels & country-estate weddings. 5-star Google reviews. Check availability.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const southampton: CityRecord = {
  type: "city",
  countySlug: "hampshire",
  slug: "southampton",
  name: "Southampton",
  meta: {
    title: "Wedding Bands in Southampton — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Southampton — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Southampton",
    subAreas: [
      "Southampton city",
      "Ocean Village",
      "Bitterne",
      "Hedge End",
      "Botley",
      "Romsey",
      "Hamble",
    ],
  },
  hero: {
    eyebrow: "Southampton · Hampshire · Solent",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Southampton.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Southampton harbour hotels, country
        estates and the New Forest edge. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Southampton",
    heading: (
      <>
        Home is Southampton.
      </>
    ),
    body: (
      <>
        <p>
          Backbeat is a Southampton-based wedding band. Not
          &ldquo;based in Hampshire&rdquo; or &ldquo;based on the South
          Coast&rdquo; but actually based in Southampton, inside the
          city&rsquo;s postcodes and less than half an hour from most of
          its wedding venues. Home turf isn&rsquo;t a marketing line;
          it&rsquo;s the postcode we live in.
        </p>
        <p>
          That specificity matters more for Southampton weddings than
          couples usually assume. The city sits in a genuinely dense
          wedding-venue geography. Harbourside hotels with Solent
          backdrops (Harbour Hotel, Grand Harbour, Pig in the Wall).
          Country estates and country clubs ringing the city (Botleigh
          Grange, Botley Park, Solent Hotel &amp; Spa). New Forest-edge
          venues a short drive west (Rhinefield, Careys Manor, The
          Master Builder&rsquo;s). Load-in gates, coordinator handoffs
          and neighbour-noise contexts vary meaningfully across that
          spread, and being ten minutes away rather than two hours away
          closes the gap between &ldquo;supplier who&rsquo;s read the
          venue guide&rdquo; and &ldquo;supplier who&rsquo;s been here
          before.&rdquo;
        </p>
        <p>
          Southampton wedding crowds also read differently to the rest
          of Hampshire. The city carries a strong student and
          young-professional layer, so the guest list tends to skew
          younger and more chart-aware than a Hampshire country-house
          average. Modern chart-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender, Olivia Rodrigo) sits alongside the indie backbone
          rather than as a token add-on. The late floor still leans
          Arctic Monkeys, Kings of Leon and The Killers. The sing-along
          middle takes Oasis and Stereophonics. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) hit
          the back-half peaks. Between sets a DJ playlist, agreed with
          you in advance, keeps the room moving. One custom first dance
          per booking is included.
        </p>
        <p>
          Curfews and sound restrictions vary within Southampton itself,
          not just between the city and the wider county. Harbourside
          and dock-zone venues sit inside residential-adjacent planning
          conditions and typically carry earlier cut-offs. Country
          estates and New Forest-edge venues on private land often allow
          later finishes. Between the two, city-centre hotels carry
          mixed rules that depend on the specific room. These get
          confirmed with the coordinator ahead of the day, not on it.
        </p>
        <p>
          Southampton weddings frequently overlap with wider{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          venues, particularly the western New Forest belt. Booking a
          Southampton-based band for a Careys Manor or Rhinefield
          wedding is essentially still a home gig; the drive is 25
          minutes, not 25 miles down a motorway.
        </p>
        <p>
          If you&rsquo;re planning a wedding in or around Southampton
          and want a band that&rsquo;s actually from the city rather
          than from somewhere in the county around it, send the date
          and venue.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Southampton venues",
    heading: "Southampton wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Southampton wedding venues, from
        harbourside hotels to country estates ringing the city. We&rsquo;re
        Hampshire-based and travel across the area regularly. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Southampton Harbour Hotel", town: "Ocean Village" },
      { name: "The Pig in the Wall", town: "Southampton" },
      { name: "Grand Harbour Hotel", town: "Southampton" },
      { name: "Botleigh Grange", town: "Hedge End" },
      { name: "Botley Park Hotel", town: "Botley" },
      { name: "Solent Hotel & Spa", town: "Whiteley" },
      { name: "Highfield House Hotel", town: "Highfield" },
      { name: "The White Star Tavern", town: "Southampton" },
      { name: "Romsey Abbey", town: "Romsey" },
      { name: "Greatwood Barn", town: "Sherfield English" },
    ],
  },
  cta: {
    heading: "Live music for your Southampton wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
  faqs: [
    {
      q: "How is a Southampton wedding different from a wider Hampshire wedding?",
      a: "Southampton weddings sit in a denser and more urban venue geography than the county average, with a stronger harbour and coastal element. The guest list also skews younger and more chart-aware, particularly at city-centre and harbourside venues. The setlist mix reflects that: more chart-pop crossover in the main sets, and the closing set often runs slightly harder than a comparable country-house evening.",
    },
    {
      q: "Do you cover the New Forest-edge venues from Southampton?",
      a: "Yes. Venues like Rhinefield, Careys Manor and The Master Builder's are essentially local from a Southampton base. Drive time from central Southampton to Brockenhurst or Beaulieu is 20-30 minutes depending on route and time of day. Bookings at those venues sit inside the city's normal working geography, not outside it.",
    },
    {
      q: "Which Southampton venues sit under the strictest sound-limiter rules?",
      a: "Harbourside and dock-zone hotels typically carry the tighter cut-offs, driven by neighbouring residential blocks and local planning conditions. Botleigh Grange, Botley Park and other country-club venues on the city's edge generally sit under more relaxed rules. Specific limits are venue-by-venue and worth confirming with the coordinator before the day rather than assuming from the postcode.",
    },
    {
      q: "What guest demographics show up at a Southampton city wedding?",
      a: "Southampton wedding guest lists frequently pull a 20s-and-early-30s majority, driven by the city's student, young-professional and post-graduate layer. Music expectations skew accordingly: chart-pop crossover as a legitimate part of the main set, not a token add-on, sitting alongside the indie/rock backbone.",
    },
    {
      q: "What's the typical enquiry-to-quote timeline for a Southampton date?",
      a: "Usually within 24 hours of the initial enquiry. Send the date, the venue and any thoughts on the guest count or vibe and a quote comes back with availability and any venue-specific notes.",
    },
  ],
};
