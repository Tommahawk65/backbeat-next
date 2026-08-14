import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "London wedding band Backbeat. Live indie and rock for Mayfair, Chelsea, Kensington and riverside weddings. Hampton Court, Kew Gardens, OXO Tower, livery halls. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const greaterLondon: CountyRecord = {
  type: "county",
  slug: "greater-london",
  name: "Greater London",
  meta: {
    title: "Wedding Bands in London — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in London — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Greater London",
    subAreas: [
      "Mayfair",
      "Chelsea",
      "Kensington",
      "Westminster",
      "Greenwich",
      "Richmond",
      "Hampstead",
    ],
  },
  hero: {
    eyebrow: "Greater London · Capital · UK-wide",
    heading: (
      <>
        Wedding bands in London
        <br className="hidden sm:block" /> for the capital.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Mayfair members&rsquo; clubs, livery halls
        and riverside venues across Greater London. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · London",
    heading: (
      <>
        From Mayfair members&rsquo; clubs
        <br />
        to Thames-side palaces.
      </>
    ),
    body: (
      <>
        <p>
          London weddings live in a category of their own. The central
          members&rsquo;-club tier plays differently to the City&rsquo;s
          livery halls. Riverside venues carry their own brief again.
          And in the outer boroughs, the palaces and houses sit
          somewhere between country estate and city venue. The Ned,
          Home House, Plaisterers&rsquo; Hall, Trinity House, OXO
          Tower, Fulham Palace, Hampton Court Palace, Kew Gardens,
          Syon House and the Wallace Collection are all regularly
          booked across the capital.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so London sits inside a
          comfortable two-hour drive of base. We also play{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>
          ,{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          regularly, so the M3/M4 corridor in is a routine drive. We add a
          small London allowance to cover ULEZ, congestion-charge and
          Friday-afternoon traffic honestly, and there&rsquo;s no overnight
          accommodation to budget for.
        </p>
        <p>
          The capital splits roughly into four wedding-venue types:
          members&rsquo; clubs and private dining rooms in the central
          postcodes, historic livery halls in the City and along the
          Thames, riverside warehouse-and-tower weddings, and the
          outer-borough palaces and houses across Richmond, Kew,
          Greenwich and Hampton. Each is a completely different
          brief. A members&rsquo;-club DJ-and-band evening is a
          different room to a livery-hall dinner, and the set list,
          lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          London has the steepest logistical layer of any wedding
          city. Most central venues only allow load-in inside a tight
          afternoon window, parking is metered and time-limited
          everywhere, ULEZ and Congestion Charge zones cover most of
          the wedding belt, and Friday-afternoon traffic shapes when
          suppliers actually arrive. We confirm the specific load-in
          plan with the coordinator ahead of time rather than
          learning it on the night.
        </p>
        <p>
          London wedding crowds are the hardest single thing to brief
          for. The guest list is usually international,
          multi-generational and musically varied, and the bar shut
          can come earlier than couples expect. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor, Oasis and Stereophonics for the
          mid-evening, modern-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender, Olivia Rodrigo) layered through for the
          chart-aware younger guests. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) take
          the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across London,
          and they vary more here than almost anywhere else.
          Residential-planning-driven cut-offs in some central
          postcodes can be hours earlier than late-licensed
          members&rsquo; clubs a few streets away. Riverside venues
          sometimes inherit South Bank residential conditions.
          Outer-borough palaces and heritage venues have their own
          rules. We confirm the specific cut-off and any sound
          restrictions with the venue the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a London wedding and want a band that
          turns up briefed for the venue (and the postcode) and reads the
          room properly, send us your date. We&rsquo;ll come back within
          24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "London venues",
    heading: "London wedding venues.",
    blurb: (
      <>
        A snapshot of well-known London wedding venues, from members&rsquo;
        clubs to livery halls, riverside warehouses and outer-borough
        palaces. We&rsquo;re Hampshire-based and travel into the capital
        regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Hampton Court Palace", town: "Richmond" },
      { name: "Kew Gardens", town: "Richmond" },
      { name: "Fulham Palace", town: "Fulham" },
      { name: "Chiswick House", town: "Chiswick" },
      { name: "Syon House", town: "Brentford" },
      { name: "Wallace Collection", town: "Marylebone" },
      { name: "OXO Tower", town: "South Bank" },
      { name: "The Ned", town: "City" },
      { name: "Plaisterers' Hall", town: "City" },
      { name: "Trinity House", town: "Tower Hill" },
      { name: "Stationers' Hall", town: "City" },
      { name: "RIBA", town: "Marylebone" },
    ],
  },
  cta: {
    heading: "Live music for your London wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
