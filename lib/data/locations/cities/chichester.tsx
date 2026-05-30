import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Chichester wedding band Backbeat. Live indie and rock for Goodwood House, Chichester Cathedral, Tinwood Estate and the South Downs wedding circuit. Hampshire-based. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const chichester: CityRecord = {
  type: "city",
  countySlug: "west-sussex",
  slug: "chichester",
  name: "Chichester",
  meta: {
    title: "Wedding Bands in Chichester | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Chichester | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Chichester",
    subAreas: [
      "Chichester city",
      "Goodwood",
      "Halnaker",
      "West Stoke",
      "Bosham",
      "Itchenor",
      "West Wittering",
    ],
  },
  hero: {
    eyebrow: "Chichester · West Sussex · South Downs",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Chichester.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Goodwood, Chichester Cathedral and the
        South Downs harbourside wedding circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Chichester",
    heading: (
      <>
        From Goodwood House
        <br />
        to Chichester Harbour.
      </>
    ),
    body: (
      <>
        <p>
          Chichester sits at the junction of three of the South Coast&rsquo;s
          best wedding settings: the South Downs, Chichester Harbour and
          the city&rsquo;s historic-civic centre. The area covers
          country-estate venues, city-civic ceremony settings, vineyard
          and rural-South-Downs options, and harbour-side venues toward
          Itchenor and Bosham. Goodwood House, Chichester Cathedral,
          Tinwood Estate, Halnaker Park and Itchenor Sailing Club are
          all regularly booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Chichester sits inside a
          comfortable forty-five minute drive of base. We play{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/portsmouth" className={linkClass}>
            Portsmouth
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/brighton" className={linkClass}>
            Brighton
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Chichester wedding venues split roughly into three types:
          country-estate weddings, city-civic venues, and the
          vineyard-and-harbour option. Each has its own rhythm. A
          country-estate marquee evening is a different room to a
          vineyard reception, and the set list, lighting rig and stage
          volume flex around which one you&rsquo;ve booked.
        </p>
        <p>
          Chichester has a logistical layer most couples don&rsquo;t expect.
          The Cathedral close sits inside heritage-protected residential
          streets with tighter vehicle access. Country-estate venues
          carry their own gated drives and delivery windows. Vineyard
          and rural-South-Downs venues sit on single-track lanes. A27
          traffic on a Friday afternoon shapes when suppliers actually
          arrive. We confirm the specific load-in plan with the
          coordinator ahead of time rather than learning it on the
          night.
        </p>
        <p>
          Chichester wedding crowds tend to be a steady mix of West
          Sussex locals, Naval and military families from the Portsmouth
          side, and London weekenders down for the Goodwood weekend.
          The setlist flexes accordingly: Arctic Monkeys, The Killers
          and Kings of Leon for the late floor across the board, Oasis
          and Stereophonics doing more work in the older-skewing rooms,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet
          Caroline) take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn one
          custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Chichester. City-centre, harbour-side and AONB-protected
          venues typically run earlier cut-offs from local planning
          conditions. Country estates and private-land venues often
          allow later finishes, but every venue has its own rules,
          in-house limiters or coordinator-managed arrangements. We
          confirm the specific cut-off and any sound restrictions with
          the venue the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Chichester wedding and want a band
          that already knows the venues, the South Downs traffic and the
          dance floor, send us your date. We&rsquo;ll come back within 24
          hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Chichester venues",
    heading: "Chichester wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Chichester wedding venues, from Goodwood
        House to the Cathedral, vineyard estates and Chichester Harbour.
        We&rsquo;re Hampshire-based and travel across the area regularly.
        If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Goodwood House", town: "Goodwood" },
      { name: "Chichester Cathedral", town: "Chichester" },
      { name: "Tinwood Estate", town: "Halnaker" },
      { name: "Halnaker Park", town: "Halnaker" },
      { name: "West Dean College", town: "West Dean" },
      { name: "Cowdray", town: "Midhurst" },
      { name: "The Ship Hotel", town: "Chichester" },
      { name: "Pallant House Gallery", town: "Chichester" },
      { name: "Itchenor Sailing Club", town: "Itchenor" },
      { name: "Council House", town: "Chichester" },
    ],
  },
  cta: {
    heading: "Live music for your Chichester wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
