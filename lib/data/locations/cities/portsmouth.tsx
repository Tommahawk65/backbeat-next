import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Portsmouth wedding band Backbeat. Live indie and rock for Spinnaker Tower, Solent Forts, Portsmouth Cathedral and harbour-side weddings. Hampshire-based. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const portsmouth: CityRecord = {
  type: "city",
  countySlug: "hampshire",
  slug: "portsmouth",
  name: "Portsmouth",
  meta: {
    title: "Wedding Bands in Portsmouth | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Portsmouth | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Portsmouth",
    subAreas: [
      "Old Portsmouth",
      "Gunwharf Quays",
      "Southsea",
      "Portsea",
      "Cosham",
      "Hayling Island",
      "Hilsea",
    ],
  },
  hero: {
    eyebrow: "Portsmouth · Hampshire · Solent",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Portsmouth.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Spinnaker, Solent Forts, Portsmouth
        Cathedral and harbour-side weddings. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Portsmouth",
    heading: (
      <>
        From Old Portsmouth
        <br />
        to the Solent Forts.
      </>
    ),
    body: (
      <>
        <p>
          Portsmouth has a wedding scene the rest of the country
          underestimates. The area covers historic-naval venues across
          Old Portsmouth and the Historic Dockyard, city-skyline
          venues around Gunwharf Quays and Spinnaker Tower, and the
          Solent Forts as a sea-bound category of their own.
          Portsmouth Cathedral, the Square Tower, HMS Warrior, the
          Royal Maritime Club, Spinnaker Tower, Portsmouth Guildhall
          and Spitbank Fort are all regularly booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Portsmouth weddings sit
          inside a comfortable forty-minute drive of base. We play{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          end to end every season, and also cover{" "}
          <Link href="/wedding-bands/southampton" className={linkClass}>
            Southampton
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/chichester" className={linkClass}>
            Chichester
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Portsmouth wedding venues split roughly into three types:
          historic-naval city venues, city-skyline venues around
          Gunwharf and Spinnaker, and the Solent Forts as a sea-bound
          boat-trip category that demands tight logistics. Each has
          its own rhythm. A historic-dockyard ceremony is a different
          evening to a Solent Fort stay-over wedding, and the set
          list, lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          Portsmouth has a logistical layer most couples don&rsquo;t
          expect. Historic-naval venues sit inside heritage-protected
          dockyard zones with tighter vehicle access. The Solent Forts
          work on tide and boat schedule (we arrive on the supplier
          crossing, not the guest one). City-skyline venues sit inside
          Gunwharf&rsquo;s shopping-precinct service zone. We confirm
          the specific load-in plan with the coordinator ahead of time
          rather than learning it on the night.
        </p>
        <p>
          Portsmouth wedding crowds often pull a strong Royal Navy and
          military layer that other south-coast cities don&rsquo;t
          see. Naval families bring the parents-of-the-bride
          generation that cycle on and off Portsmouth bases, alongside
          civilian friend groups and university friends. The setlist
          flexes accordingly: Arctic Monkeys, The Killers, Oasis and
          Stereophonics for the indie spine, Kings of Leon for the
          late floor, modern-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender) layered through for the chart-aware younger
          guests. Wedding non-negotiables (Mr Brightside, Don&rsquo;t
          Stop Me Now, Sweet Caroline) take the back-half peaks.
          Between sets a DJ playlist (collaborated with you) keeps
          the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Portsmouth. Historic-dockyard, city-centre and retail-zone
          venues typically run earlier cut-offs from local planning
          conditions. Solent Fort weddings work to the tide-and-boat
          schedule, and every venue has its own rules, in-house
          limiters or coordinator-managed arrangements. We confirm
          the specific cut-off and any sound restrictions with the
          venue the week before, and pace the closing set so it lands
          at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Portsmouth wedding and want a local
          band that already knows the venues, the tide tables and the dance
          floor, send us your date. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Portsmouth venues",
    heading: "Portsmouth wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Portsmouth wedding venues, from historic
        naval dockyard rooms to Spinnaker Tower and the Solent Forts.
        We&rsquo;re Hampshire-based and travel across the area regularly.
        If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Portsmouth Cathedral", town: "Old Portsmouth" },
      { name: "Spinnaker Tower", town: "Gunwharf Quays" },
      { name: "HMS Warrior", town: "Historic Dockyard" },
      { name: "Square Tower", town: "Old Portsmouth" },
      { name: "Royal Maritime Club", town: "Portsmouth" },
      { name: "Portsmouth Marriott", town: "North Harbour" },
      { name: "Spitbank Fort", town: "Solent" },
      { name: "No Man's Land Fort", town: "Solent" },
      { name: "Portsmouth Guildhall", town: "Portsmouth" },
      { name: "Langstone Quays Resort", town: "Hayling Island" },
    ],
  },
  cta: {
    heading: "Live music for your Portsmouth wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
