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
        Downs, coast, castles,
        <br />
        limiters.
      </>
    ),
    body: (
      <>
        <p>
          West Sussex has one of the more distinctive wedding-venue
          geographies in the South East. The South Downs run
          east-west through the middle of the county, throwing up
          barn and estate weddings across their length. The
          Chichester and Arundel coastal strip delivers a very
          different feel again: cathedral cities, historic castles,
          harbour-adjacent hotels. Goodwood sits in a category of
          its own. The county doesn&rsquo;t really have a
          &ldquo;typical&rdquo; wedding — it has four or five
          typicals depending on which corner you&rsquo;re in.
        </p>
        <p>
          West Sussex sits inside our regular working radius from
          base. Chichester, Petworth and Arundel are short runs on
          the coastal side. The Mid Sussex border and Horsham belt
          are longer but still inside standard territory. Same for{" "}
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
          on either side.
        </p>
        <p>
          Well-known West Sussex wedding venues include Goodwood
          House, The Kennels at Goodwood, Wiston House, Amberley
          Castle, South Lodge, Cowdray House, Upwaltham Barns,
          Bailiffscourt Hotel, Farbridge Barns and Findon Place. If
          your venue isn&rsquo;t on that list, tell us. West Sussex
          has an unusually deep venue circuit and no one snapshot
          catches all of it.
        </p>
        <p>
          Sound limiters are a particular West Sussex theme.
          Agricultural-land barn venues across the Downs often carry
          in-house dB limiters as a condition of planning
          permission. Some are set generously; some are set at
          levels that require genuine care from the band to keep
          the dance floor lively without tripping the cutoff.
          It&rsquo;s the sort of context that plays very differently
          for a band with limiter-room experience than for one
          without.
        </p>
        <p>
          West Sussex wedding crowds tend to sit slightly more
          relaxed than the neighbouring Berkshire and Surrey set.
          Country-estate weddings pull London-weekend guests, but
          the general tone is less production-heavy and less
          formally-briefed than the M4-corridor equivalents. That
          shapes how the closing set builds: less compressed peaks,
          more room to breathe. Setlist-wise: Arctic Monkeys, The
          Killers and Kings of Leon for the late floor. Oasis and
          Stereophonics for the sing-along middle. Modern chart-pop
          crossover (Harry Styles, Dua Lipa, Sam Fender) layered
          through. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) hit the back-half
          peaks. Between sets a DJ playlist, agreed with you in
          advance, keeps the room moving. One custom first dance per
          booking is included.
        </p>
        <p>
          The coastal strip (Chichester, Arundel, Bosham,
          Bailiffscourt) carries its own particulars. Cathedral-close
          and residential-neighbour venues sit under earlier planning
          cut-offs. Coastal hotels can have load-in routes shared with
          public seafront access. Weather contingencies matter for
          any outdoor ceremony element. These get factored in during
          venue selection rather than being handled reactively on
          the day.
        </p>
        <p>
          If you&rsquo;re planning a West Sussex wedding and want a
          band that reads the Downs-vs-coast-vs-city character of
          the venue you&rsquo;ve chosen, send the date and venue.
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
  faqs: [
    {
      q: "Which West Sussex venues typically have the strictest sound limiters?",
      a: "Agricultural-land barn venues across the South Downs often carry in-house dB limiters as a condition of planning permission. The specific limit varies barn-to-barn — some are set generously, others are set at levels that shape the whole closing set. Cathedral-close and residential-neighbour venues in Chichester and Arundel sit under their own planning cut-offs. Rules are venue-specific and worth confirming before the day.",
    },
    {
      q: "What's different about a Downs-side wedding vs a coastal Sussex wedding?",
      a: "Downs weddings (Wiston, Amberley, Upwaltham, Farbridge) tend toward country-estate and barn settings, more relaxed evening pacing, more permissive stage setup. Coastal weddings (Chichester, Arundel, Bosham, Bailiffscourt) sit closer to residential neighbours and cathedral-close planning rules, and often carry earlier cut-offs. Same county, meaningfully different logistics.",
    },
    {
      q: "How does Goodwood as a venue compare to the rest of West Sussex?",
      a: "Goodwood sits in a category of its own. Goodwood House and The Kennels are managed under an in-house production template that's more curated than most West Sussex venues. Load-in and coordinator handoffs run to a more formal schedule, and evening pacing is set by the house rather than by supplier preference.",
    },
    {
      q: "Do coastal Sussex weddings need weather contingencies for outdoor elements?",
      a: "Yes, meaningfully so, particularly for anything scheduled outdoors in shoulder-season months. Even summer coastal ceremonies benefit from a wet-weather backup plan. Live music setup usually stays indoors regardless, but ceremony position and drinks reception layout often need genuine flex.",
    },
    {
      q: "How does a West Sussex wedding guest list typically compare to Surrey or Berkshire ones?",
      a: "West Sussex crowds sit slightly more relaxed on average than the neighbouring counties. Less overtly London-corporate energy, more mix between local Sussex-set couples and London-weekend guests. Musical expectations reflect that — the setlist has a bit more room to breathe rather than needing to hit compressed high-energy peaks throughout.",
    },
  ],
};
