import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Cheltenham wedding band Backbeat. Live indie and rock for Pittville Pump Room, Ellenborough Park, Manor by the Lake and the Cheltenham regency wedding scene. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const cheltenham: CityRecord = {
  type: "city",
  countySlug: "gloucestershire",
  slug: "cheltenham",
  name: "Cheltenham",
  meta: {
    title: "Cheltenham Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Cheltenham Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Cheltenham",
    subAreas: [
      "Cheltenham town",
      "Pittville",
      "Montpellier",
      "Lansdown",
      "Charlton Kings",
      "Prestbury",
      "Tivoli",
    ],
  },
  hero: {
    eyebrow: "Cheltenham · Gloucestershire · Cotswolds edge",
    heading: (
      <>
        A Cheltenham
        <br className="hidden sm:block" /> wedding band.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Pittville Pump Room, Ellenborough Park,
        Manor by the Lake and Cheltenham&rsquo;s regency wedding circuit.
        From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Cheltenham",
    heading: (
      <>
        From regency-elegant townhouses
        <br />
        to Cotswolds-edge estates.
      </>
    ),
    body: (
      <>
        <p>
          Cheltenham is the regency-elegant capital of Gloucestershire
          weddings. The area covers regency-civic venues in the town
          centre, country-house estates inside or just outside the
          town, townhouse hotels across Montpellier and The Promenade,
          and racecourse-and-events venues on the surrounding edges.
          Pittville Pump Room, Ellenborough Park, Manor by the Lake,
          The Greenway, Cowley Manor, Hotel du Vin Cheltenham, No.131
          and Cheltenham Town Hall are all regularly booked across the
          area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Cheltenham sits inside a
          comfortable two-hour drive of base. We play{" "}
          <Link href="/wedding-bands/gloucestershire" className={linkClass}>
            Gloucestershire
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/bath" className={linkClass}>
            Bath
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/oxford" className={linkClass}>
            Oxford
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from the wrong end of the country.
        </p>
        <p>
          Cheltenham wedding venues split roughly into three types: the
          regency-civic venues, country-house estates inside or just
          outside the town, and townhouse hotels. Each has its own
          rhythm. A regency ballroom is a different evening to a
          country-house marquee, and the set list, lighting rig and
          stage volume flex around which one you&rsquo;ve booked.
        </p>
        <p>
          Cheltenham has a logistical layer most couples don&rsquo;t
          expect. The town centre sits inside regency-protected
          residential and conservation streets with tighter vehicle
          access. Country-house estates carry their own gated drives and
          delivery windows, often on single-track Cotswolds lanes. M5
          traffic into Cheltenham on a Friday afternoon shapes when
          suppliers actually arrive. We confirm the specific load-in
          plan with the coordinator ahead of time rather than learning
          it on the night.
        </p>
        <p>
          Cheltenham wedding crowds tend to be a hybrid: London weekend
          traffic, Cotswolds locals, and multi-generational family
          guest lists. The dress code typically skews sharper than the
          average country-house wedding. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor, Oasis and Stereophonics doing more work
          in the older-skewing rooms, modern-pop crossover (Harry
          Styles, Dua Lipa, Sam Fender) layered through for the
          chart-aware younger guests. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) take
          the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn one
          custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Cheltenham. Town-centre and regency-conservation venues
          typically run earlier cut-offs from local planning
          conditions. Country estates and private-land venues often
          allow later finishes, but every venue has its own rules,
          in-house limiters or coordinator-managed arrangements. We
          confirm the specific cut-off and any sound restrictions with
          the venue the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Cheltenham wedding and want a band
          that turns up briefed for the venue and reads the room properly,
          send us your date. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Cheltenham venues",
    heading: "Cheltenham wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Cheltenham wedding venues, from regency
        Pump Rooms to country-house estates and townhouse hotels.
        We&rsquo;re Hampshire-based and travel across to Cheltenham
        regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Pittville Pump Room", town: "Pittville" },
      { name: "Ellenborough Park", town: "Prestbury" },
      { name: "Manor by the Lake", town: "Cheltenham" },
      { name: "The Greenway", town: "Shurdington" },
      { name: "Cowley Manor", town: "Cowley" },
      { name: "Hotel du Vin Cheltenham", town: "Montpellier" },
      { name: "No.131", town: "The Promenade" },
      { name: "No.38 The Park", town: "Pittville" },
      { name: "Cheltenham Town Hall", town: "Cheltenham" },
      { name: "The Cheltenham Park Hotel", town: "Charlton Kings" },
    ],
  },
  cta: {
    heading: "Live music for your Cheltenham wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
