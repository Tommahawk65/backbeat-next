import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Berkshire wedding band Backbeat. Live indie and rock music for weddings across Reading, Newbury, Windsor and the Royal County. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const berkshire: CountyRecord = {
  type: "county",
  slug: "berkshire",
  name: "Berkshire",
  meta: {
    title: "Wedding Bands in Berkshire | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Berkshire | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Berkshire",
    subAreas: [
      "Reading",
      "Newbury",
      "Windsor",
      "Maidenhead",
      "Bracknell",
      "Wokingham",
      "Ascot",
    ],
  },
  hero: {
    eyebrow: "Berkshire · Royal County · UK-wide",
    heading: (
      <>
        Wedding bands in Berkshire
        <br className="hidden sm:block" /> that lift the room.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Royal Berkshire country estates, manor
        houses and city venues. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Berkshire",
    heading: (
      <>
        Polished venues.
        <br />
        Properly loud finish.
      </>
    ),
    body: (
      <>
        <p>
          Berkshire weddings tend to fall on the more polished end
          of the spectrum. The area covers Royal County country
          estates, racing-set venues around Ascot and Sunningdale,
          and grand riverside hotels around Henley and Marlow. The
          expectation on suppliers is high, and rightly so.
          Backbeat is set up for it. Coworth Park, Cliveden House,
          Royal Berkshire Hotel, Donnington Valley, Stoke Park,
          The Vineyard, Easthampstead Park and Bisham Abbey are
          all regularly booked across the county.
        </p>
        <p>
          We&rsquo;re Hampshire-based but Berkshire is comfortably inside our
          home patch. Reading, Newbury and Wokingham are short hops; Ascot,
          Windsor and the Thames Valley venues are familiar runs. We also
          cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          regularly, so the bulk of our season sits inside an hour&rsquo;s
          drive of the Thames Valley. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the other end of
          the country.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          Royal Berkshire country estates, racing-set hotels around
          Ascot and Sunningdale, Thames Valley riverside venues
          from Marlow through Henley, and the Reading and Newbury
          commuter belt where the briefs are slightly more
          relaxed. Each has its own rhythm. A country-estate
          ballroom is a different evening to a riverside marquee,
          and the set list, lighting rig and stage volume flex
          around which one you&rsquo;ve booked.
        </p>
        <p>
          Berkshire has a logistical layer most couples
          don&rsquo;t expect. Country-estate venues carry their own
          gated drives, in-house production teams and tight
          load-in windows. Thames Valley riverside venues sit
          inside residential streets with tighter vehicle access.
          M4 traffic on a Friday afternoon shapes when suppliers
          actually arrive. We confirm the specific load-in plan
          with the coordinator ahead of time and arrive briefed,
          early and presentable, because that matters more at
          Berkshire venues than most.
        </p>
        <p>
          Berkshire wedding crowds pull a strong London-corporate
          skew. Guests arriving down from the City for the
          weekend, City lawyers and creative-industry friends in
          the same room, and a floor that expects polish to match
          the venue. The setlist flexes accordingly: Arctic
          Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam
          Fender) layered through for the chart-aware younger
          guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the
          back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Berkshire. Country-estate and racing-set venues
          typically run firm cut-offs managed by in-house
          production teams. Thames Valley riverside venues
          sometimes inherit residential-neighbour cut-offs from
          local planning conditions. Every venue has its own
          rules, in-house limiters or coordinator-managed
          arrangements. We confirm the specific cut-off and any
          sound restrictions with the venue the week before, and
          pace the closing set so it lands at the actual end of
          the night.
        </p>
        <p>
          If you&rsquo;re booking a Berkshire wedding and want a band that
          matches the venue&rsquo;s standards while still emptying the bar
          when the dance floor opens, we&rsquo;d love to hear from you.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Berkshire venues",
    heading: "Berkshire wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Berkshire wedding venues, from Royal County
        country estates to Thames Valley riverside hotels. We&rsquo;re
        Hampshire-based and travel across the county and beyond. If
        yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Donnington Valley", town: "Newbury" },
      { name: "Sandhurst Suite", town: "Royal Military Academy" },
      { name: "Stoke Park", town: "Stoke Poges" },
      { name: "The Vineyard", town: "Stockcross" },
      { name: "Easthampstead Park", town: "Wokingham" },
      { name: "Bisham Abbey", town: "Marlow" },
      { name: "The Elephant Hotel", town: "Pangbourne" },
      { name: "Greenlands", town: "Henley-on-Thames" },
      { name: "Hartwell House", town: "near Aylesbury" },
    ],
  },
  cta: {
    heading: "Live music for your Berkshire wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll reply with availability and
        pricing within 24 hours.
      </>
    ),
  },
};
