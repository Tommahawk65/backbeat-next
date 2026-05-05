import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Kent wedding band Backbeat. Live indie and rock music for Tunbridge Wells, Canterbury, Hever Castle and Leeds Castle weddings. Garden of England country estates and oast houses. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const kent: CountyRecord = {
  type: "county",
  slug: "kent",
  name: "Kent",
  meta: {
    title: "Kent Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Kent Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Kent",
    subAreas: [
      "Tunbridge Wells",
      "Canterbury",
      "Maidstone",
      "Sevenoaks",
      "Ashford",
      "Tenterden",
      "Rochester",
    ],
  },
  hero: {
    eyebrow: "Kent · Garden of England · UK-wide",
    heading: (
      <>
        A Kent wedding band
        <br className="hidden sm:block" /> for the Garden of England.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Kent country estates, oast houses and
        castle weddings. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Kent",
    heading: (
      <>
        From castle estates
        <br />
        to oast house barns.
      </>
    ),
    body: (
      <>
        <p>
          Kent is one of the densest wedding counties in the South
          East. The area covers a strong castle and country-estate
          circuit, an oast house barn-conversion scene across the
          Weald, Tunbridge Wells and Sevenoaks country hotels, and
          coastal-Kent design-led venues around Whitstable and
          Margate. Hever Castle, Leeds Castle, Penshurst Place,
          Knole, Cooling Castle Barn, Hadlow Manor, Boughton
          Monchelsea Place and Chilston Park are all regularly
          booked across the county.
        </p>
        <p>
          Backbeat is a Hampshire-based band and Kent sits inside our regular
          touring radius. We also play{" "}
          <Link href="/wedding-bands/east-sussex" className={linkClass}>
            East Sussex
          </Link>
          ,{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          regularly, so the South East corridor is genuinely home turf. We
          add a small travel allowance for Kent to cover the M25 stretch
          honestly, and there&rsquo;s no overnight accommodation to budget
          for.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          castle and country-estate weddings, oast house and barn
          conversions across the Weald, Tunbridge Wells and
          Sevenoaks country hotels, and the coastal-Kent design-led
          venues. Each has its own rhythm. A castle-estate marquee
          is a different room to a converted oast, and the set
          list, lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          Kent has a logistical layer most couples don&rsquo;t
          expect. Castle and country-estate venues carry their own
          gated drives and delivery windows. Oast houses often sit
          at the end of single-track lanes with their own access
          quirks. M25 and M20 traffic patterns shape when suppliers
          can actually arrive. We confirm the specific load-in plan
          with the coordinator ahead of time rather than learning
          it on the night.
        </p>
        <p>
          Kent wedding crowds are usually a hybrid: London weekend
          guests cutting out of the city Friday afternoon, county
          locals, and multi-generational families arriving Saturday
          lunchtime. Tunbridge Wells guest lists tend to skew
          sharper-dress-code; the coastal end skews more creative.
          The setlist flexes accordingly: Arctic Monkeys, The
          Killers and Kings of Leon for the late floor, Oasis and
          Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for
          the chart-aware younger guests. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline)
          take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Kent. Town-centre and residential-neighbour hotels
          typically run earlier cut-offs from local planning
          conditions. Castle, country-estate and barn venues on
          private grounds often allow later finishes, but every
          venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Kent wedding and want a band that turns
          up briefed for the venue and reads the room properly, send us
          your date. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Kent venues",
    heading: "Kent wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Kent wedding venues, from castle estates
        to oast house barns and country hotels. We&rsquo;re Hampshire-based
        and travel across the county end to end. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Hever Castle", town: "Edenbridge" },
      { name: "Leeds Castle", town: "Maidstone" },
      { name: "Penshurst Place", town: "Tonbridge" },
      { name: "Knole", town: "Sevenoaks" },
      { name: "Chiddingstone Castle", town: "Edenbridge" },
      { name: "Lympne Castle", town: "Hythe" },
      { name: "Hadlow Manor", town: "Tonbridge" },
      { name: "Cooling Castle Barn", town: "Rochester" },
      { name: "Boughton Monchelsea Place", town: "Maidstone" },
      { name: "Mount Ephraim Gardens", town: "Faversham" },
      { name: "Port Lympne Hotel", town: "Hythe" },
      { name: "Chilston Park", town: "Lenham" },
    ],
  },
  cta: {
    heading: "Live music for your Kent wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
