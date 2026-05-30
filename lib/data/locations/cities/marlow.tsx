import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Marlow wedding band Backbeat. Live indie and rock for The Compleat Angler, Danesfield House, Bisham Abbey and the Marlow Thames-side wedding circuit. Hampshire-based. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const marlow: CityRecord = {
  type: "city",
  countySlug: "buckinghamshire",
  slug: "marlow",
  name: "Marlow",
  meta: {
    title: "Wedding Bands in Marlow | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Marlow | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Marlow",
    subAreas: [
      "Marlow town",
      "Marlow Thames",
      "Bourne End",
      "Cookham",
      "Hambleden",
      "Bisham",
      "Medmenham",
    ],
  },
  hero: {
    eyebrow: "Marlow · Buckinghamshire · Thames",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Marlow.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for The Compleat Angler, Danesfield House,
        Bisham Abbey and the Marlow Thames-side wedding circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Marlow",
    heading: (
      <>
        From the Compleat Angler
        <br />
        to Hedsor and Cliveden.
      </>
    ),
    body: (
      <>
        <p>
          Marlow holds one of the most-booked Thames-side wedding belts in
          the South East. The area covers riverside-hotel weddings on the
          Thames, country-estate venues above the river, historic-grand
          settings and Thames-side country mansions a short drive in
          either direction. The Compleat Angler, Danesfield House, Bisham
          Abbey, Hedsor House and Cliveden are all regularly booked
          across the wider Marlow circuit.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Marlow sits inside a
          comfortable hour-and-a-half drive of base. We play{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/reading" className={linkClass}>
            Reading
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/oxford" className={linkClass}>
            Oxford
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Marlow wedding venues split roughly into three types:
          riverside-hotel weddings on the Thames, country-estate
          Thames-side venues, and historic-grand options nearby. Each
          has its own rhythm. A riverside-hotel dinner is a different
          evening to a country-estate reception above the river, and
          the set list, lighting rig and stage volume flex around
          which one you&rsquo;ve booked.
        </p>
        <p>
          Marlow has a logistical layer most couples don&rsquo;t expect.
          Marlow Bridge carries a weight limit and a single-lane
          traffic-light system that affects supplier vehicles on a Friday
          afternoon, and M40 traffic into the area on a Friday is a
          known supplier-killer. Country-estate venues carry their own
          gated drives and delivery windows. We confirm the specific
          load-in plan with the coordinator ahead of time rather than
          learning it on the night.
        </p>
        <p>
          Marlow wedding crowds pull a heavy London-commuter layer.
          Marlow, Bourne End and Cookham sit on the High Wycombe
          and Maidenhead lines into Paddington, and the wedding guest
          list usually reflects it: City and creative-industry
          professionals across the parents-of-the-bride brackets,
          younger London friends down for the weekend, and Buckinghamshire
          county families filling the rest. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor across the board, Oasis and Stereophonics
          doing more work in the older-skewing rooms, Sex on Fire as a
          Marlow floor-filler regardless of room, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving. We
          learn one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across the
          Marlow area. Town-centre and riverside-residential venues
          typically run earlier cut-offs from local planning
          conditions. Country estates and private-land venues often
          allow later finishes, but every venue has its own rules,
          in-house limiters or coordinator-managed arrangements. We
          confirm the specific cut-off and any sound restrictions
          with the venue the week before, and pace the closing set
          so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Marlow wedding and want a band that
          already knows the venues, the bridge traffic and the dance
          floor, send us your date. We&rsquo;ll come back within 24
          hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Marlow venues",
    heading: "Marlow wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Marlow wedding venues, from Thames-side
        riverside hotels to country-estate mansions and historic abbeys.
        We&rsquo;re Hampshire-based and travel into the Thames Valley
        regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Compleat Angler", town: "Marlow Bridge" },
      { name: "Danesfield House", town: "Medmenham" },
      { name: "Bisham Abbey", town: "Bisham" },
      { name: "Hedsor House", town: "Bourne End" },
      { name: "Cliveden House", town: "Taplow" },
      { name: "Crowne Plaza Marlow", town: "Marlow" },
      { name: "Stonor Park", town: "Henley-on-Thames" },
      { name: "Hambleden Estate", town: "Hambleden" },
      { name: "Marlow Rowing Club", town: "Marlow" },
      { name: "The Crown at Bray", town: "Bray" },
    ],
  },
  cta: {
    heading: "Live music for your Marlow wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
