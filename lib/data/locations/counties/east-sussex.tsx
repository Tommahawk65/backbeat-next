import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "East Sussex wedding band Backbeat. Live indie and rock music for Brighton, Lewes, Glynde and South Downs weddings. Country estates, coastal venues and creative-cool. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const eastSussex: CountyRecord = {
  type: "county",
  slug: "east-sussex",
  name: "East Sussex",
  meta: {
    title: "Wedding Bands in East Sussex | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in East Sussex | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "East Sussex",
    subAreas: [
      "Brighton",
      "Lewes",
      "Eastbourne",
      "Battle",
      "Hastings",
      "Rye",
      "Uckfield",
    ],
  },
  hero: {
    eyebrow: "East Sussex · Brighton · South Downs",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in East Sussex.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Brighton, Lewes and the country-house circuit
        across the South Downs. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · East Sussex",
    heading: (
      <>
        Brighton energy
        <br />
        meets the South Downs.
      </>
    ),
    body: (
      <>
        <p>
          East Sussex weddings have a personality. Brighton brings
          the creative-cool guest list, the late-night intent and
          the late-arriving DJ crowd. The South Downs brings the
          country-estate brief, with long lawns and marquee
          weekends. Inland there are barns and farm venues, and on
          the coast there are hotels where the sea air does half
          the work. Glynde Place, Buxted Park, Wadhurst Castle,
          Pangdean Barn, Pelham House, The Grand Brighton, Battle
          Abbey and Stanmer House are all regularly booked across
          the county.
        </p>
        <p>
          We&rsquo;re a Hampshire-based band, so the drive across to East
          Sussex is comfortably under two hours. We also play{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>
          ,{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/kent" className={linkClass}>
            Kent
          </Link>{" "}
          regularly, so the South East corridor is genuinely home turf. No
          travel surcharge, no overnight accommodation, no anxious 4am drive
          back from the wrong end of the country.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          Brighton city venues, country-house estates inland, barn
          and farm weddings up on the Downs, and coastal hotels on
          the Eastbourne and Hastings stretch. Each has its own
          rhythm. A city-centre Brighton room is a different
          evening to a Downs country-estate marquee, and the set
          list, lighting rig and stage volume flex around which
          one you&rsquo;ve booked.
        </p>
        <p>
          East Sussex has a logistical layer most couples
          don&rsquo;t expect. Brighton city-centre venues sit
          inside residential streets with tighter vehicle access.
          Country-estate venues carry their own gated drives and
          delivery windows. Downs barns often sit at the end of
          rural single-track lanes. We confirm the specific
          load-in plan with the coordinator ahead of time rather
          than learning it on the night.
        </p>
        <p>
          East Sussex wedding crowds skew musically sharper than
          most of the South East. Brighton&rsquo;s gig heritage
          filters straight into the wedding guest list, and even
          inland country weddings tend to pull a chart-aware
          younger contingent. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the
          late floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam
          Fender) layered through. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline)
          take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          East Sussex. Brighton city-centre and residential
          venues typically run earlier cut-offs from local
          planning conditions. Country-estate and private-land
          venues often allow later finishes, but every venue has
          its own rules, in-house limiters or coordinator-managed
          arrangements. We confirm the specific cut-off and any
          sound restrictions with the venue the week before, and
          pace the closing set so it lands at the actual end of
          the night.
        </p>
        <p>
          If you&rsquo;re planning an East Sussex wedding and want a band
          that turns up briefed for the room and reads it properly, send us
          your date and venue. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "East Sussex venues",
    heading: "East Sussex wedding venues.",
    blurb: (
      <>
        A snapshot of well-known East Sussex wedding venues, from country
        estates on the Downs to Brighton city rooms and coastal hotels.
        We&rsquo;re Hampshire-based and travel across the county end to end.
        If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Glynde Place", town: "Lewes" },
      { name: "Buxted Park", town: "Uckfield" },
      { name: "Wadhurst Castle", town: "Wadhurst" },
      { name: "Pangdean Barn", town: "Pyecombe" },
      { name: "Pelham House", town: "Lewes" },
      { name: "The Grand Brighton", town: "Brighton" },
      { name: "Battle Abbey", town: "Battle" },
      { name: "Cooden Beach Hotel", town: "Bexhill" },
      { name: "Hooke Hall", town: "Uckfield" },
      { name: "Stanmer House", town: "Brighton" },
      { name: "The Old Vicarage", town: "Rye" },
      { name: "Drusillas Park", town: "Alfriston" },
    ],
  },
  cta: {
    heading: "Live music for your East Sussex wedding.",
    body: (
      <>
        Tell us your date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
