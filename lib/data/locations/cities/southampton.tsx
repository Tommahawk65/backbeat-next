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
        From the harbourside
        <br />
        to the New Forest edge.
      </>
    ),
    body: (
      <>
        <p>
          Southampton weddings have a different rhythm to the rest of
          Hampshire. The area covers harbourside hotels with Solent
          backdrops, country-estate and country-club venues ringing the
          city, and New Forest edge venues a short drive west. Harbour
          Hotel, Pig in the Wall, Grand Harbour, Botleigh Grange, Botley
          Park, Solent Hotel &amp; Spa, Rhinefield, Master Builder&rsquo;s
          and Careys Manor are all regularly booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band built less than half an hour
          from Southampton city centre, so these are essentially home gigs.
          We play{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          end to end every season, and also cover{" "}
          <Link href="/wedding-bands/winchester" className={linkClass}>
            Winchester
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/portsmouth" className={linkClass}>
            Portsmouth
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Southampton wedding venues split roughly into three types:
          harbourside city hotels, country estates and clubs ringing
          the city, and New Forest edge venues a short drive west.
          Each has its own rhythm. A harbourside hotel evening is a
          different room to a New Forest country house with grounds,
          and the set list, lighting rig and stage volume flex around
          which one you&rsquo;ve booked.
        </p>
        <p>
          Southampton has a logistical layer most couples don&rsquo;t
          expect. Harbourside hotels sit inside the city&rsquo;s
          residential and dock zones with tighter load-in and parking.
          New Forest edge venues sit on rural single-track lanes. We
          confirm the specific load-in plan with the coordinator ahead
          of time rather than learning it on the night.
        </p>
        <p>
          Southampton wedding crowds skew younger and more chart-aware
          than the rest of Hampshire. The city has a strong student and
          young-professional layer, so guest lists often pull a 20s and
          early-30s majority who arrive expecting modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender, Olivia Rodrigo) sitting
          alongside the indie spine. We lean Arctic Monkeys, Kings of
          Leon, The Killers and Oasis for the late floor, Stereophonics
          and the older-indie back-catalogue working in the mid-evening
          for the parents-of-the-bride generation. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet
          Caroline) take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn one
          custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across the
          Southampton area. Harbourside, residential and dock-zone
          venues typically run earlier cut-offs from local planning
          conditions. Country estates and New Forest edge venues on
          private grounds often allow later finishes, but every venue
          has its own rules, in-house limiters or coordinator-managed
          arrangements. We confirm the specific cut-off and any sound
          restrictions with the venue the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Southampton wedding and want a local
          band that already knows the venues, the timings and the dance
          floor, send us your date. We&rsquo;ll come back within 24 hours.
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
      q: "Are you actually based in Southampton?",
      a: "Yes. Backbeat is a Southampton-based band, and the city sits at the centre of our regular wedding-season patch. Home turf for us. No travel surcharge, no overnight accommodation, no anxious 4am drives.",
    },
    {
      q: "Do you know the Southampton wedding venues?",
      a: "Yes. Well-known Southampton and Southampton-edge wedding venues include Harbour Hotel, Grand Harbour, Pig in the Wall, Botleigh Grange, Botley Park, Solent Hotel & Spa, Rhinefield House, The Master Builder's and Careys Manor. Many Southampton couples marry on the New Forest edge — that's part of our home patch. If yours isn't listed, tell us.",
    },
    {
      q: "What are curfews like at Southampton venues?",
      a: "Harbourside hotels sometimes carry earlier cut-offs from residential neighbours. Country-estate venues on the New Forest edge often allow later finishes. We confirm the specific curfew, sound-limiter setup and coordinator's rules the week before, and pace the closing set to land at the actual end of the night.",
    },
    {
      q: "What setlist works for a Southampton wedding?",
      a: "Southampton crowds are a mix of Solent locals, Hampshire families and London-weekend guests. Setlist leans Arctic Monkeys, Kings of Leon and The Killers for the late floor, Oasis and Stereophonics for the singalongs, modern chart-pop crossover (Harry Styles, Dua Lipa, Sam Fender) layered through. Wedding non-negotiables (Mr Brightside, Don't Stop Me Now, Sweet Caroline) hit the back-half peaks.",
    },
    {
      q: "How quickly can you confirm availability?",
      a: "Within 24 hours of your enquiry, normally sooner. Send us the date, venue and any thoughts on the vibe and we'll come back with a tailored quote.",
    },
  ],
};
