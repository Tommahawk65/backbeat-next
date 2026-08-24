import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Surrey wedding band Backbeat. Live indie and rock music for weddings across Guildford, Farnham, Weybridge and the wider M25 belt. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const surrey: CountyRecord = {
  type: "county",
  slug: "surrey",
  name: "Surrey",
  meta: {
    title: "Wedding Bands in Surrey — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Surrey — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Surrey",
    subAreas: [
      "Guildford",
      "Woking",
      "Farnham",
      "Weybridge",
      "Dorking",
      "Camberley",
      "Reigate",
    ],
  },
  hero: {
    eyebrow: "Surrey · Hampshire borders · UK-wide",
    heading: (
      <>
        Wedding bands in Surrey
        <br className="hidden sm:block" /> the dance floor remembers.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock built for Surrey country houses, golf clubs and
        converted barns. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Surrey",
    heading: (
      <>
        Green-belt country
        <br />
        in commuter distance.
      </>
    ),
    body: (
      <>
        <p>
          Surrey occupies an unusual space in the wedding-venue
          landscape. Physically it&rsquo;s the London-adjacent green
          belt, but geographically most of its country-house and barn
          venues feel further from the M25 than they are. That
          balance is what draws couples to book here: a Weybridge or
          Sunningdale country-estate wedding gives a Cotswolds-feel
          setting inside a 45-minute drive of central London. It also
          shapes the guest list.
        </p>
        <p>
          Surrey sits just over the Hampshire border from base, so
          Guildford, Farnham, Dorking, Weybridge and the M25 belt are
          inside our regular season patch. Same for{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          on either side. The county doesn&rsquo;t sit outside our home
          patch even though it&rsquo;s not in Hampshire.
        </p>
        <p>
          Wedding-venue types in Surrey break into three broad
          groupings. Country-house venues (Pennyhill Park, Great
          Fosters, Wotton House) at the top end. Members&rsquo;
          country and golf clubs (St George&rsquo;s Hill, Foxhills)
          adding a slightly different flavour. Rural barn venues
          tucked into the Surrey Hills (Gate Street Barn, Bury Court
          Barn) at the more relaxed end. Each of those calls for a
          different closing-set brief, and the set list, stage volume
          and lighting rig flex around which of them you&rsquo;ve
          booked.
        </p>
        <p>
          Well-known Surrey wedding venues include Pennyhill Park,
          Great Fosters, Wotton House, Loseley Park, Foxhills,
          Beaverbrook, Botleys Mansion, Northcote House, Burrows Lea,
          Bury Court Barn and Gate Street Barn. If your venue
          isn&rsquo;t on that list, tell us; the county has a deep
          venue circuit and no one snapshot captures all of it.
        </p>
        <p>
          Surrey wedding crowds pull a strong London-commute mix. City
          finance and creative-industry friends in the same room,
          parents who lived through Britpop the first time round,
          younger guests bringing chart-aware requests. Setlist:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor. Oasis and Stereophonics for the sing-along middle.
          Modern chart-pop crossover (Harry Styles, Dua Lipa, Sam
          Fender) layered through. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) hit the
          back-half peaks. Between sets a DJ playlist, agreed with you
          in advance, keeps the room moving. One custom first dance
          per booking is included.
        </p>
        <p>
          Curfews and sound limits are more variable across Surrey
          than most similar counties. Members&rsquo; golf and country
          clubs typically run earlier cut-offs driven by
          member-courtesy rules alongside planning conditions.
          Country-house and private-land venues often allow later
          finishes. Surrey Hills barns depend heavily on the specific
          neighbours. Rules get confirmed with the coordinator ahead
          of time, not on the day.
        </p>
        <p>
          One Surrey-specific practicality: M25 and A3 traffic
          patterns matter for both suppliers and guests. Friday
          afternoon and Sunday evening are the two windows that
          reshape drive times noticeably. Worth factoring into ceremony
          timing and load-in planning.
        </p>
        <p>
          If you&rsquo;re planning a Surrey wedding and want a band
          that reads the county&rsquo;s London-adjacent-but-rural
          character properly, send the date and venue.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Surrey venues",
    heading: "Surrey wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Surrey wedding venues. We&rsquo;re
        Hampshire-based and travel across the county and beyond. If
        yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Royal Military Academy", town: "Sandhurst" },
      { name: "Gate Street Barn", town: "Bramley" },
      { name: "St George's Hill Golf Club", town: "Weybridge" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "Great Fosters", town: "Egham" },
      { name: "Bury Court Barn", town: "Farnham" },
      { name: "Botleys Mansion", town: "Chertsey" },
      { name: "Wotton House", town: "Dorking" },
      { name: "Northcote House", town: "Sunningdale" },
      { name: "Loseley Park", town: "Guildford" },
      { name: "Foxhills", town: "Ottershaw" },
      { name: "Burrows Lea Country House", town: "Shere" },
    ],
  },
  cta: {
    heading: "Live music for your Surrey wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll confirm availability and send
        a quote within 24 hours.
      </>
    ),
  },
  faqs: [
    {
      q: "How does Surrey's London-adjacent geography actually affect a wedding day?",
      a: "It changes two things: the guest list and the traffic pattern. Guest lists pull more London-based friends than most South-East counties, which shapes the setlist toward chart-aware modern crossover alongside indie/rock. Traffic-wise, Friday afternoon westbound and Sunday evening eastbound M25/A3 flows can add 30-60 minutes to standard drive times, which affects load-in and guest-arrival planning.",
    },
    {
      q: "What's the practical difference between a country-house Surrey wedding and a golf-club one?",
      a: "Country houses (Pennyhill Park, Great Fosters, Wotton House) run more like classic destination weddings — full-day pacing, generally later curfews, more permissive stage setup. Members' golf clubs (St George's Hill, Foxhills) run under member-courtesy rules that typically bring earlier cut-offs and slightly different noise expectations, particularly on Sundays.",
    },
    {
      q: "How restrictive are the Surrey Hills barn venues on curfew?",
      a: "It's very venue-specific and depends heavily on the immediate neighbours. Some Surrey Hills barns have generous private-land rules and go past midnight. Others sit close enough to residential properties that they carry harder cut-offs. Worth confirming with the coordinator before assuming from the postcode.",
    },
    {
      q: "Which parts of Surrey pull the highest concentration of wedding bookings?",
      a: "The strongest concentrations sit around Weybridge and the M25-adjacent belt (country-estate weddings), Guildford and Farnham (a mix of country-house and Surrey Hills barn), and the Bagshot-Sunningdale strip (Pennyhill Park, Coworth Park just over in Berkshire).",
    },
    {
      q: "How does a Surrey guest list typically compare to a Hampshire one?",
      a: "Surrey guest lists tend to pull a higher London-commute proportion, which shifts musical expectations toward the modern crossover alongside the indie/rock backbone. Hampshire guest lists lean slightly older and slightly more classic-Britpop in the sing-along middle. The differences are subtle but real, and shape how the middle-evening set gets built.",
    },
  ],
};
