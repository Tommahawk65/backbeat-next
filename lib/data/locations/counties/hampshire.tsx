import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Wedding bands in Hampshire & the New Forest from £1,900. Live indie & rock for Southampton, Winchester and Portsmouth weddings. 5-star Google reviews.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const hampshire: CountyRecord = {
  type: "county",
  slug: "hampshire",
  name: "Hampshire",
  meta: {
    title: "Wedding Bands in Hampshire & the New Forest — From £1,900",
    description,
    ogTitle: "Wedding Bands in Hampshire & the New Forest — From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Hampshire",
    subAreas: [
      "Southampton",
      "Winchester",
      "Portsmouth",
      "Basingstoke",
      "New Forest",
      "Petersfield",
      "Andover",
    ],
  },
  hero: {
    eyebrow: "Hampshire · South Coast · UK-wide",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Hampshire.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock that fills the dance floor, from Southampton
        country houses to New Forest barns. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Hampshire",
    heading: (
      <>
        Hampshire-based,
        <br />
        Hampshire-familiar.
      </>
    ),
    body: (
      <>
        <p>
          Backbeat is a Hampshire-based live wedding band. The players
          grew up gigging across the county, and most weeks of the
          season we&rsquo;re playing somewhere between the New Forest
          and the Meon Valley: Winchester, Southampton, Portsmouth, the
          Solent coast and the South Downs edge. Home ground.
        </p>
        <p>
          Being Hampshire-based rather than Hampshire-serving is a
          distinction couples notice on the day. No motorway fatigue
          baked into the load-in, no travel budget in the quote, no
          supplier accommodation to organise. It also means the routes
          into most Hampshire venues are already familiar: the
          single-track lane up to a South Downs barn, the load-in gate
          at a New Forest country house, the coordinator handoff at a
          Solent hotel. Local knowledge is the practical difference
          between a local booking and a travelling booking. We also
          play{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>
          ,{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>
          ,{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          across the season, but the bulk of it sits inside a 90-minute
          drive of base.
        </p>
        <p>
          Hampshire wedding geography splits into four rough types, each
          with its own tone. New Forest country houses and marquee
          venues sit at the western end, with the biggest lawns and the
          most permissive private-land rules. The Winchester belt
          covers historic-house venues and cathedral-adjacent hotels.
          Along the Solent, hotel weddings blend harbour and city
          energy. Up toward Basingstoke and Hook, restored country-house
          and barn venues carry different sound-limiter contexts. The
          set list, stage volume and lighting rig flex around which of
          these you&rsquo;ve booked.
        </p>
        <p>
          Well-known Hampshire wedding venues include Tylney Hall,
          Lainston House, Heckfield Place, Rhinefield House, Careys
          Manor, Beaulieu, The Master Builder&rsquo;s, Four Seasons
          Hampshire, Marwell Hotel and Audleys Wood. If yours
          isn&rsquo;t on that list, tell us anyway; the county has more
          good venues than any one list captures.
        </p>
        <p>
          Hampshire wedding crowds tend to blend Solent locals with
          London-commute couples bringing city friends down for the
          weekend. The setlist reflects the mix. Arctic Monkeys, Kings
          of Leon and The Killers for the late floor. Oasis and
          Stereophonics for the sing-along middle. Modern chart-pop
          crossover (Harry Styles, Dua Lipa, Sam Fender) for the
          younger contingent. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) hit the back-half
          peaks. One custom first dance per booking is included.
          Between sets a DJ playlist, agreed with you in advance, keeps
          the room moving.
        </p>
        <p>
          Curfews and sound limits vary meaningfully across Hampshire.
          Town-centre and residential-neighbour venues typically run
          earlier cut-offs from local planning conditions. New Forest
          country houses, South Downs barns and private-land venues
          often allow later finishes. Rules like these get confirmed
          with the venue coordinator before the day, not on it, so the
          closing set can be paced to land at the actual end of the
          night rather than in the middle of it.
        </p>
        <p>
          If you&rsquo;re planning a Hampshire wedding and want a band
          that treats the county as home rather than as a destination,
          send the date and venue.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Hampshire venues",
    heading: "Hampshire wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Hampshire wedding venues, from New Forest
        country houses to South Downs barns. We&rsquo;re Hampshire-based and
        travel across the county and beyond. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Manor Farmhouse", town: "Warnford" },
      { name: "The Elvetham Hotel", town: "Hook" },
      { name: "Rhinefield House", town: "New Forest" },
      { name: "Careys Manor", town: "Brockenhurst" },
      { name: "Lainston House", town: "Winchester" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Hook" },
      { name: "Four Seasons Hotel Hampshire", town: "Dogmersfield" },
      { name: "Audleys Wood", town: "Basingstoke" },
      { name: "Beaulieu", town: "New Forest" },
      { name: "Marwell Hotel", town: "Winchester" },
      { name: "The Master Builder's", town: "Buckler's Hard" },
    ],
  },
  cta: {
    heading: "Live music for your Hampshire wedding.",
    body: (
      <>
        Tell us your date and venue and we&rsquo;ll come back with availability
        and a tailored quote, normally within 24 hours.
      </>
    ),
  },
  faqs: [
    {
      q: "What are the main types of Hampshire wedding venue?",
      a: "Roughly four groupings. New Forest country houses and marquee venues at the western end. Winchester's historic-house and cathedral-adjacent hotels. Solent hotels blending harbour and city energy. Basingstoke and Hook country-house and barn venues at the northern end. Each has a different closing-set brief and a different sound-limiter context.",
    },
    {
      q: "Are New Forest venue rules stricter than the rest of Hampshire?",
      a: "It varies. New Forest country houses on private land often allow later finishes and higher stage volumes than the county average. Some New Forest hotels do carry planning-driven cut-offs though, and marquee weddings on National Park land can have specific noise conditions. Rules are venue-by-venue, and worth confirming with the coordinator before the day.",
    },
    {
      q: "What difference does a Hampshire-based band make versus one that travels in?",
      a: "The visible difference is on load-in and pack-down: fewer surprises about routes, gates and coordinator handoffs. The hidden difference is in the quote structure. Travel-in bands generally price travel, accommodation and drive-time into the fee. A band based inside the county doesn't need to, which means the same-tier live music tends to work out lower cost for Hampshire couples.",
    },
    {
      q: "What guest count does a Hampshire wedding usually sit at?",
      a: "Most Hampshire weddings we play sit somewhere between 90 and 200 guests. New Forest marquees and country-house venues can go bigger; South Downs barns and Winchester intimate venues can go smaller. Guest count changes stage sizing and lighting rig, not the shape of the set.",
    },
    {
      q: "How do the sub-areas of Hampshire compare — New Forest, Winchester, Portsmouth, Southampton?",
      a: "Each area has its own wedding character. The New Forest leans country-house, marquee and outdoor. Winchester leans historic and Cathedral-adjacent. Southampton is more harbour-hotel and Solent coast. Portsmouth mixes historic naval venues with Victorian hotel venues. The music that closes each is different, and the running order shapes around which of these you've booked.",
    },
  ],
};
