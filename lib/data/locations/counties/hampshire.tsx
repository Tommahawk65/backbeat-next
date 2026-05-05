import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Hampshire wedding band Backbeat. Live indie and rock music for weddings across Southampton, Winchester, Portsmouth and the New Forest. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const hampshire: CountyRecord = {
  type: "county",
  slug: "hampshire",
  name: "Hampshire",
  meta: {
    title: "Hampshire Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Hampshire Wedding Band | Backbeat. From £1,900",
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
        Hampshire&rsquo;s premier
        <br className="hidden sm:block" /> wedding band.
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
        Built in Hampshire,
        <br />
        booked across the county.
      </>
    ),
    body: (
      <>
        <p>
          Backbeat is a Hampshire-based live wedding band founded by musicians
          who grew up gigging across the county. Most weeks of the season we
          play somewhere between the New Forest and the Meon Valley. Country
          houses near Winchester, coastal venues on the Solent, barn weddings
          in the South Downs.
        </p>
        <p>
          Booking a local band matters more than couples expect. There are no
          travel surcharges for Hampshire weddings, no overnight accommodation
          to budget for, and no anxious 4am drives back from the other end of
          the country. We&rsquo;re packed up and home before the venue staff
          have finished sweeping the dance floor. We also cover{" "}
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
          regularly. The bulk of our season sits inside a 90-minute drive of
          base.
        </p>
        <p>
          Hampshire weddings have a particular character: long
          summer evenings, country-house marquees on lawns, sound
          limiters at restored barns, and late-night sets that
          need to land regardless of how full the bar got.
          That&rsquo;s the room we&rsquo;re built for. Our PA is
          sized for everything from a 120-guest barn to a 250-guest
          country house. Tylney Hall, Lainston House, Heckfield
          Place, Rhinefield House, Careys Manor, Beaulieu and The
          Master Builder&rsquo;s are all regularly booked across
          the county.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          New Forest country houses with private grounds and
          marquee permissions, South Downs barns, Solent-side
          hotels, and Winchester and Basingstoke venues that range
          from grand to relaxed. Each has its own rhythm. A
          converted barn is a different evening to an open-air New
          Forest marquee, and the set list, lighting rig and stage
          volume flex around which one you&rsquo;ve booked.
        </p>
        <p>
          We perform full live sets of indie anthems and rock classics, plus a
          modern pop crossover when the room asks for it. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving, so your
          night runs from drinks reception to last call without a flat spot.
        </p>
        <p>
          The Hampshire wedding crowd we play to most often runs from Solent
          locals to London-commute couples bringing City friends down for
          the weekend. The late floor leans Arctic Monkeys, Kings of Leon
          and The Killers, the singalong moments lean Oasis and
          Stereophonics, and we keep a modern-pop crossover layer (Harry
          Styles, Dua Lipa, Sam Fender) for the chart-aware guests in the
          room. We learn one custom first dance per booking. If a song
          genuinely doesn&rsquo;t translate to a four-piece live arrangement
          we&rsquo;ll talk it through with you, but most do.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Hampshire. Town-centre and residential-neighbour venues
          typically run earlier cut-offs from local planning
          conditions. New Forest country houses, South Downs barns
          and private-land venues often allow later finishes, but
          every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the
          specific cut-off and any sound restrictions with the
          venue the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          Five-star reviews from Warnford, Hook, Sandhurst and beyond. Local
          couples booking a local band that genuinely knows the venues, the
          timings and the dance floor.
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
};
