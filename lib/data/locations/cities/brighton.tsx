import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Brighton wedding band Backbeat. Live indie and rock for The Grand Brighton, Drakes, Stanmer House and the city's pier-and-pavilion wedding scene. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const brighton: CityRecord = {
  type: "city",
  countySlug: "east-sussex",
  slug: "brighton",
  name: "Brighton",
  meta: {
    title: "Wedding Bands in Brighton | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Brighton | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Brighton",
    subAreas: [
      "Brighton seafront",
      "Hove",
      "Kemptown",
      "The Lanes",
      "Stanmer",
      "Saltdean",
      "Rottingdean",
    ],
  },
  hero: {
    eyebrow: "Brighton · East Sussex · South Coast",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Brighton.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for The Grand, Drakes, Stanmer House and the
        Brighton seafront wedding scene. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Brighton",
    heading: (
      <>
        Brighton energy,
        <br />
        Brighton crowd, Brighton room.
      </>
    ),
    body: (
      <>
        <p>
          Brighton has the most distinct wedding personality on the South
          Coast. The area covers seafront hotels along Marine Parade and
          Kings Road, smaller boutique-and-design venues across the city
          centre and Lanes, and a country-house edge ten minutes out at
          Stanmer Park and across the Lewes line. The Grand Brighton,
          Hilton Metropole, The Old Ship, Drakes, Hotel du Vin, Artist
          Residence, Stanmer House and Pelham House are all regularly
          booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Brighton sits inside a
          comfortable hour-and-a-half drive of base. We play{" "}
          <Link href="/wedding-bands/east-sussex" className={linkClass}>
            East Sussex
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/chichester" className={linkClass}>
            Chichester
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from the wrong end of the country.
        </p>
        <p>
          Brighton wedding venues split roughly into three types: seafront
          hotels, boutique city-centre venues, and the country-house edge
          of the city. Each has its own rhythm. A seafront ballroom is a
          different evening to a country-house room ten minutes out of
          town, and the set list, lighting rig and stage volume flex
          around which one you&rsquo;ve booked.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across Brighton.
          City-centre and seafront residential venues typically run
          earlier cut-offs from local planning conditions. Country-edge
          venues outside the city often allow later finishes, but every
          venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual end
          of the night.
        </p>
        <p>
          Brighton wedding crowds arrive musically sharper than almost
          any room on the South Coast. The city&rsquo;s gig heritage runs
          deep (Concorde 2, Brighton Centre, Komedia, Patterns) and that
          filters straight into the wedding guest list. Our Brighton
          setlist leans indie hard: Arctic Monkeys, The Killers, Kings
          of Leon, Oasis and Stereophonics across the spine, with
          older-indie heritage references (The Smiths, Pulp, Stone
          Roses) earning floor time in the parents-of-the-bride
          brackets, and modern-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender) layered through for the chart-aware younger
          guests. Wedding non-negotiables (Mr Brightside, Don&rsquo;t
          Stop Me Now, Sweet Caroline) take the back-half peaks.
          Between sets a DJ playlist (collaborated with you) keeps the
          floor moving. We learn one custom first dance per booking.
        </p>
        <p>
          If you&rsquo;re planning a Brighton wedding and want a band that
          turns up briefed for the room and reads it properly, send us
          your date and venue. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Brighton venues",
    heading: "Brighton wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Brighton wedding venues, from seafront
        hotels to boutique city-centre venues and the country-house edge of
        the city. We&rsquo;re Hampshire-based and travel across to Brighton
        regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Grand Brighton", town: "Brighton seafront" },
      { name: "Hilton Brighton Metropole", town: "Brighton seafront" },
      { name: "The Old Ship Hotel", town: "Brighton seafront" },
      { name: "Drakes of Brighton", town: "Marine Parade" },
      { name: "Hotel du Vin Brighton", town: "The Lanes" },
      { name: "Artist Residence", town: "Regency Square" },
      { name: "Stanmer House", town: "Stanmer Park" },
      { name: "The Mesnil Estate", town: "Hove" },
      { name: "Saltdean Lido", town: "Saltdean" },
      { name: "Pelham House", town: "Lewes" },
    ],
  },
  cta: {
    heading: "Live music for your Brighton wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
