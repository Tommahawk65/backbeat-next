import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Buckinghamshire wedding band Backbeat. Live indie and rock for Marlow, Aylesbury, Cliveden and Hedsor House weddings. Chilterns and Thames country estates. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const buckinghamshire: CountyRecord = {
  type: "county",
  slug: "buckinghamshire",
  name: "Buckinghamshire",
  meta: {
    title: "Wedding Bands in Buckinghamshire | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Buckinghamshire | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Buckinghamshire",
    subAreas: [
      "Marlow",
      "Aylesbury",
      "Beaconsfield",
      "High Wycombe",
      "Buckingham",
      "Amersham",
      "Gerrards Cross",
    ],
  },
  hero: {
    eyebrow: "Buckinghamshire · Chilterns · Thames",
    heading: (
      <>
        Wedding bands in Buckinghamshire
        <br className="hidden sm:block" /> for the Chilterns and the Thames.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Cliveden, Hedsor, Stoke Park and the
        Marlow Thames-side circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Buckinghamshire",
    heading: (
      <>
        From Thames-side estates
        <br />
        to the Chiltern Hills.
      </>
    ),
    body: (
      <>
        <p>
          Buckinghamshire holds one of the country&rsquo;s strongest
          country-house wedding circuits. The county covers Thames-side
          country estates around Marlow and Cookham, historic
          country-house venues across the Vale of Aylesbury, the
          Chilterns rural-estate and barn circuit, and the
          Beaconsfield-Gerrards Cross belt that pulls a London-weekend
          crowd west out of the city. Cliveden, Stoke Park, Hartwell,
          Hedsor House, Notley Abbey, Danesfield House, Wotton and
          Missenden Abbey are all regularly booked across the county.
        </p>
        <p>
          Backbeat is a Hampshire-based band and Buckinghamshire sits inside
          a comfortable hour-and-a-half drive of base. We also play{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          regularly, so the Thames Valley corridor is genuinely home turf.
          No travel surcharges, no overnight accommodation, no anxious 4am
          drive back from the wrong end of the country.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          Thames-side country estates, historic country-house venues,
          Chiltern Hills rural-estate and barn weddings, and the
          country-club tier around Stoke Poges. Each carries its own
          brief. A black-tie country-estate evening is a different room
          to a Chilterns barn marquee, and the set list, lighting rig
          and stage volume flex around which one you&rsquo;ve booked.
        </p>
        <p>
          Buckinghamshire has a logistical layer most couples
          don&rsquo;t expect. Thames-side estates carry their own
          gated drives and heritage-protected delivery routes. The
          bigger weddings often stack catering, florist, lighting and
          band into the same back-of-house corridor on the same Friday
          afternoon. We confirm the specific load-in plan with the
          coordinator ahead of time rather than learning it on the
          night.
        </p>
        <p>
          Buckinghamshire crowds pull a London skew more reliably than
          most Home Counties. Beaconsfield, Gerrards Cross and the
          Marlow Thames-side belt are full of London commuters whose
          university friends still live in the city, and the playlist
          follows. The setlist flexes accordingly: Arctic Monkeys, The
          Killers and Kings of Leon for the late floor, Oasis and
          Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for the
          chart-aware younger guests. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) take
          the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn one
          custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Buckinghamshire. Thames-side and residential-neighbour
          venues typically run earlier cut-offs from local planning
          conditions. Country-estate and private-grounds venues often
          allow later finishes, but every venue has its own rules,
          in-house limiters or coordinator-managed arrangements. We
          confirm the specific cut-off and any sound restrictions with
          the venue the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Buckinghamshire wedding and want a
          band that turns up briefed for the venue and reads the room
          properly, send us your date. We&rsquo;d love to be on your
          shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Buckinghamshire venues",
    heading: "Buckinghamshire wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Buckinghamshire wedding venues, from
        Thames-side estates to Chilterns country houses and historic
        abbeys. We&rsquo;re Hampshire-based and travel across the county
        end to end. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Cliveden House", town: "Taplow" },
      { name: "Stoke Park", town: "Stoke Poges" },
      { name: "Hedsor House", town: "Bourne End" },
      { name: "Hartwell House", town: "Aylesbury" },
      { name: "Notley Abbey", town: "Long Crendon" },
      { name: "Danesfield House", town: "Marlow" },
      { name: "The Compleat Angler", town: "Marlow" },
      { name: "Wotton House", town: "Aylesbury" },
      { name: "Missenden Abbey", town: "Great Missenden" },
      { name: "Waddesdon Manor", town: "Aylesbury" },
      { name: "Dorney Court", town: "Windsor" },
      { name: "Latimer Estate", town: "Chesham" },
    ],
  },
  cta: {
    heading: "Live music for your Buckinghamshire wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
