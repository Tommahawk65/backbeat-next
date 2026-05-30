import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Dorset wedding band Backbeat. Live indie and rock music for coastal, country house and barn weddings across Bournemouth, Poole, Dorchester and beyond. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const dorset: CountyRecord = {
  type: "county",
  slug: "dorset",
  name: "Dorset",
  meta: {
    title: "Wedding Bands in Dorset | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Dorset | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Dorset",
    subAreas: [
      "Bournemouth",
      "Poole",
      "Christchurch",
      "Dorchester",
      "Sherborne",
      "Wareham",
      "Weymouth",
    ],
  },
  hero: {
    eyebrow: "Dorset · Jurassic Coast · UK-wide",
    heading: (
      <>
        Wedding bands in Dorset
        <br className="hidden sm:block" /> with the soundtrack to match.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for coastal weddings, country houses and
        converted barns across Dorset. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Dorset",
    heading: (
      <>
        Coastal weddings.
        <br />
        Country house weddings.
        <br />
        Same packed dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Dorset has a wedding scene unlike anywhere else on the South Coast.
          Cliffside ceremonies at Highcliffe and Lulworth, walled-garden
          weddings at houses like Athelhampton, barn weddings tucked into
          the Blackmore Vale. Every weekend has its own logistics. Backbeat
          is set up to roll into any of them.
        </p>
        <p>
          We&rsquo;re Hampshire-based, which puts most of Dorset within a
          comfortable drive. Bournemouth, Poole and Christchurch are
          essentially home turf, and we cover the wider county including
          Dorchester, Sherborne and the Jurassic Coast without inflating
          the budget. We also play{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          regularly, so the bulk of our season sits inside an hour or
          so&rsquo;s drive of base. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the coast.
        </p>
        <p>
          The county splits roughly into four wedding-venue types. Coastal
          castle and clifftop venues such as Highcliffe and Lulworth,
          riverside and harbour hotels around Christchurch and Poole,
          country manor houses inland through Dorchester and Sherborne, and
          Blackmore Vale barns where the brief is relaxed and the curfew is
          generous. We brief differently for each. A coastal cliff-edge
          ceremony with a marquee contingency is a different evening to a
          Sherborne manor with a 250-guest sit-down, and the set list,
          lighting rig and stage volume flex around which one you&rsquo;ve
          booked.
        </p>
        <p>
          Coastal venues come with their own quirks. Weather
          contingencies and tent backups, salty-air-friendly kit, and
          tight load-in windows when access roads are shared with the
          public. We plan for all of it, arrive early, and confirm the
          specific load-in plan with the coordinator ahead of time
          rather than learning it on the night.
        </p>
        <p>
          Dorset weddings tend to span more generations than most. Local
          couples bringing extended family in from the wider Wessex
          catchment, plus university friends down from London for the
          long weekend. The musical mix flatters both ends. We lean
          Arctic Monkeys, Kings of Leon and The Killers for the indie
          spine, Oasis and Stereophonics for the singalong moments, and
          the wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop Me
          Now, Sweet Caroline) read as crowd peaks rather than checkboxes.
          Modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender) sits
          in the back half. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first dance
          per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across Dorset.
          Town-centre and residential-neighbour hotels typically run
          earlier cut-offs from local planning conditions. Coastal,
          country-estate and rural-barn venues on private grounds
          often allow later finishes, but every venue has its own
          rules, in-house limiters or coordinator-managed
          arrangements. We confirm the specific cut-off and any sound
          restrictions with the venue the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Dorset wedding and want a band that
          treats the venue, the timing and the dance floor with equal care,
          send us a date and we&rsquo;ll come back with availability and
          pricing.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Dorset venues",
    heading: "Dorset wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Dorset wedding venues, from coastal
        castles to Blackmore Vale barns. We&rsquo;re Hampshire-based and
        travel across the county and beyond. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Lulworth Castle", town: "Wareham" },
      { name: "Highcliffe Castle", town: "Christchurch" },
      { name: "Athelhampton House", town: "Dorchester" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Upton Country House", town: "Poole" },
      { name: "Hamoon Wedding Barn", town: "Sturminster Newton" },
      { name: "Lulworth Cove", town: "West Lulworth" },
      { name: "The Grange at Oborne", town: "Sherborne" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Plush Manor", town: "Piddletrenthide" },
      { name: "Stock Gaylard House", town: "Sturminster Newton" },
      { name: "Captain's Club Hotel", town: "Christchurch" },
    ],
  },
  cta: {
    heading: "Live music for your Dorset wedding.",
    body: (
      <>
        We reply to most enquiries within 24 hours with availability and a
        tailored quote.
      </>
    ),
  },
};
