import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Bournemouth wedding band Backbeat. Live indie and rock for Highcliffe Castle, Hotel du Vin Bournemouth, Sandbanks and the Dorset coast. Hampshire-based. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const bournemouth: CityRecord = {
  type: "city",
  countySlug: "dorset",
  slug: "bournemouth",
  name: "Bournemouth",
  meta: {
    title: "Wedding Bands in Bournemouth — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Bournemouth — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Bournemouth",
    subAreas: [
      "Bournemouth seafront",
      "Westbourne",
      "Boscombe",
      "Sandbanks",
      "Christchurch",
      "Highcliffe",
      "Poole",
    ],
  },
  hero: {
    eyebrow: "Bournemouth · Dorset · Jurassic Coast",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Bournemouth.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Highcliffe Castle, Sandbanks, Hotel du
        Vin and the Bournemouth-Christchurch wedding belt. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Bournemouth",
    heading: (
      <>
        From Highcliffe Castle
        <br />
        to Sandbanks beach.
      </>
    ),
    body: (
      <>
        <p>
          Bournemouth-Christchurch-Poole is the densest run of seaside
          wedding venues on the South Coast. The area covers historic
          cliff-top venues, beach-and-balcony seafront hotels,
          historic-and-harbourside options around Christchurch, and
          boutique townhouse venues. Highcliffe Castle, Christchurch
          Priory, Hotel du Vin Bournemouth, Highcliff Marriott,
          Cumberland Hotel, Hotel Miramar, Sandbanks Hotel and
          Christchurch Harbour Hotel are all regularly booked across
          the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Bournemouth weddings sit
          inside a comfortable forty-five minute drive of base. We play{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/southampton" className={linkClass}>
            Southampton
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/salisbury" className={linkClass}>
            Salisbury
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Bournemouth wedding venues split roughly into three types:
          cliff-top and historic venues, beach-and-seafront hotels, and
          boutique townhouse and harbour-side venues. Each has its own
          rhythm. A cliff-top ceremony is a different evening to a
          beach-balcony reception, and the set list, lighting rig and
          stage volume flex around which one you&rsquo;ve booked.
        </p>
        <p>
          Bournemouth has a logistical layer most couples don&rsquo;t
          expect. Cliff-top and beach-front venues sit at the end of
          seafront-access roads with summer traffic restrictions, and
          coastal weather can affect outdoor stage setups. We confirm
          the specific load-in plan and any weather-window backups with
          the coordinator ahead of time rather than learning it on the
          night.
        </p>
        <p>
          Bournemouth wedding crowds span a wide range across the
          coastal venues, from local Dorset families to weekenders down
          from London for the seaside. The setlist flexes accordingly:
          Arctic Monkeys, The
          Killers and Kings of Leon for the late floor across the board,
          Oasis and Stereophonics doing more work in the older-skewing
          rooms, modern-pop crossover (Harry Styles, Dua Lipa, Sam
          Fender) layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop Me
          Now, Sweet Caroline) take the back-half peaks. Between sets a
          DJ playlist (collaborated with you) keeps the floor moving. We
          learn one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across the
          Bournemouth coast. Beach-front and residential-edge venues
          typically run earlier cut-offs from local planning
          conditions. Cliff-top and private-land venues often allow
          later finishes, but every venue has its own rules, in-house
          limiters or coordinator-managed arrangements. We confirm the
          specific cut-off and any sound restrictions with the venue
          the week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Bournemouth wedding and want a band
          that already knows the venues, the seafront traffic and the
          dance floor, send us your date. We&rsquo;ll come back within 24
          hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Bournemouth venues",
    heading: "Bournemouth wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Bournemouth wedding venues, from
        Highcliffe Castle to seafront hotels and Christchurch
        harbour-side venues. We&rsquo;re Hampshire-based and travel across
        the area regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Christchurch Priory", town: "Christchurch" },
      { name: "Hotel du Vin Bournemouth", town: "Bournemouth" },
      { name: "Highcliff Marriott", town: "Bournemouth" },
      { name: "The Cumberland Hotel", town: "Bournemouth" },
      { name: "Hotel Miramar", town: "Bournemouth" },
      { name: "Sandbanks Hotel", town: "Sandbanks" },
      { name: "Christchurch Harbour Hotel", town: "Mudeford" },
      { name: "Captain's Club Hotel", town: "Christchurch" },
      { name: "Bournemouth Pavilion", town: "Bournemouth" },
    ],
  },
  cta: {
    heading: "Live music for your Bournemouth wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
