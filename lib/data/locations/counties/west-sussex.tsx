import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "West Sussex wedding band Backbeat. Live indie and rock music for downland weddings, country houses and barns across Chichester, Goodwood and Arundel. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const westSussex: CountyRecord = {
  type: "county",
  slug: "west-sussex",
  name: "West Sussex",
  meta: {
    title: "Wedding Bands in West Sussex — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in West Sussex — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "West Sussex",
    subAreas: [
      "Chichester",
      "Worthing",
      "Horsham",
      "Crawley",
      "Arundel",
      "Bognor Regis",
      "Petworth",
    ],
  },
  hero: {
    eyebrow: "West Sussex · South Downs · UK-wide",
    heading: (
      <>
        Wedding bands in West Sussex
        <br className="hidden sm:block" /> with the dance floor sorted.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for South Downs barn weddings, Goodwood estate
        venues and Chichester country houses. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · West Sussex",
    heading: (
      <>
        Downs, barns,
        <br />
        and a band that finishes the night properly.
      </>
    ),
    body: (
      <>
        <p>
          West Sussex weddings are some of our favourite to play.
          The county has a wedding scene that runs from
          Goodwood&rsquo;s racing-set glamour through to laid-back
          barn weddings out on the Downs, and almost everywhere has
          the South Downs as a backdrop. Goodwood House, Wiston
          House, Amberley Castle, South Lodge, Cowdray House,
          Upwaltham Barns, Bailiffscourt Hotel and Farbridge Barns
          are all regularly booked across the county.
        </p>
        <p>
          We&rsquo;re a Hampshire-based band, so Chichester, Petworth and
          Arundel are short, comfortable runs without travel-fee inflation.
          We cover the wider county including Horsham, Crawley and the Mid
          Sussex border regularly. We also play{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          regularly, so we know the curfew and sound-limiter quirks at most
          major South Coast venues from experience rather than a website.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          country-estate venues, South Downs barns, Chichester and
          Arundel country houses, and the Mid Sussex border where
          the brief is more relaxed. Each has its own rhythm. A
          downland-barn evening is a different room to an open-air
          country-estate marquee, and the set list, lighting rig
          and stage volume flex around which one you&rsquo;ve
          booked.
        </p>
        <p>
          West Sussex has a logistical layer most couples
          don&rsquo;t expect. Country-estate venues carry their own
          gated drives, in-house production teams and curated
          supplier lists. South Downs barns often sit on
          agricultural land at the end of single-track lanes. We
          confirm the specific load-in plan with the coordinator
          ahead of time rather than learning it on the night.
        </p>
        <p>
          West Sussex wedding crowds tend to skew more relaxed than
          the neighbouring Berkshire and Surrey set. Couples here
          often want a band that can slide between live-lounge
          acoustic during dinner and a high-energy late set when
          the dance floor opens. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the
          late floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests.
          Wedding non-negotiables (Mr Brightside, Don&rsquo;t Stop
          Me Now, Sweet Caroline) take the back-half peaks. Between
          sets a DJ playlist (collaborated with you) keeps the
          floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Sound limiters are a particular West Sussex theme. A lot
          of the barn venues sit on agricultural land where sound
          cut-outs are part of the planning permission. We carry a
          stage setup tuned for limiter rooms (in-ear monitoring,
          electronic kit triggers, a PA that stays clean below the
          threshold) so the dance floor still lands without
          tripping the meter mid-chorus.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across West
          Sussex. Town-centre and residential-neighbour venues
          typically run earlier cut-offs from local planning
          conditions. Country-estate and barn venues on private
          grounds often allow later finishes, but every venue has
          its own rules, in-house limiters or coordinator-managed
          arrangements. We confirm the specific cut-off and any
          sound restrictions with the venue the week before, and
          pace the closing set so it lands at the actual end of
          the night.
        </p>
        <p>
          If you&rsquo;re planning a West Sussex wedding and want a
          band that arrives properly briefed and reads the room
          properly, send us the details. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "West Sussex venues",
    heading: "West Sussex wedding venues.",
    blurb: (
      <>
        A snapshot of well-known West Sussex wedding venues, from South
        Downs barns to Goodwood estate venues and Chichester country houses.
        We&rsquo;re Hampshire-based and travel across the county and beyond.
        If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Goodwood House", town: "Chichester" },
      { name: "The Kennels at Goodwood", town: "Chichester" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "South Lodge", town: "Lower Beeding" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Upwaltham Barns", town: "Petworth" },
      { name: "Gravetye Manor", town: "East Grinstead" },
      { name: "Bailiffscourt Hotel", town: "Climping" },
      { name: "Blackstock Country Estate", town: "near Brighton" },
      { name: "Tortington Manor", town: "Arundel" },
      { name: "Farbridge Barns", town: "near Chichester" },
    ],
  },
  cta: {
    heading: "Live music for your West Sussex wedding.",
    body: (
      <>
        Drop us your date and venue and we&rsquo;ll come back with
        availability and pricing, usually within 24 hours.
      </>
    ),
  },
};
