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
        Surrey weddings,
        <br />
        played the way they should be.
      </>
    ),
    body: (
      <>
        <p>
          Surrey is one of our most-played counties. We&rsquo;re just over the
          Hampshire border, so Guildford, Farnham, Dorking, Weybridge and the
          wider M25 belt are inside our home patch and there are no bolt-on
          travel fees pushing the budget around.
        </p>
        <p>
          Booking a band that&rsquo;s already familiar with Surrey weddings
          matters more than couples expect. No overnight accommodation, no
          anxious 4am drive back, no surcharges for a Saturday in peak season.
          Most weeks of the season we&rsquo;re somewhere between Hampshire and
          the M25, and we also cover{" "}
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
          regularly.
        </p>
        <p>
          Surrey weddings tend to split into three camps:
          country-house weddings, golf club functions at
          members&rsquo; venues, and barn weddings tucked around
          the Surrey Hills. Each has its own rhythm. A country-house
          ballroom is a different evening to a Surrey Hills barn,
          and the set list, lighting rig and stage volume flex
          around which one you&rsquo;ve booked.
        </p>
        <p>
          Surrey has a logistical layer most couples don&rsquo;t
          expect. Country-estate venues carry their own gated
          drives and delivery windows. Surrey Hills barns often
          sit at the end of single-track lanes. M25 and A3 traffic
          on a Friday afternoon shapes when suppliers actually
          arrive. We confirm the specific load-in plan with the
          coordinator ahead of time rather than learning it on the
          night.
        </p>
        <p>
          Some of our most loved gigs have been Surrey ones. We&rsquo;ve
          played the Royal Military Academy at Sandhurst, kept the dance
          floor going past midnight at Gate Street Barn near Bramley, and
          finished out the night for a packed room at St George&rsquo;s Hill
          Golf Club. Each of those clients left a five-star review.
        </p>
        <p>
          Surrey wedding crowds pull a particular mix: London
          commuters and their City friends, parents who remember
          Britpop the first time round, and younger guests asking
          for whatever&rsquo;s top of the chart that week. The
          setlist flexes accordingly: Arctic Monkeys, The Killers
          and Kings of Leon for the late floor, Oasis and
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
          Surrey. Golf-club and residential-edge venues typically
          run earlier cut-offs from local planning conditions and
          member-courtesy rules. Country-house and barn venues on
          private grounds often allow later finishes, but every
          venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the
          specific cut-off and any sound restrictions with the
          venue the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          For Surrey couples looking for a wedding band with proper
          experience of the local venues, a calm professional set-up and a
          dance floor record that holds up, we&rsquo;d love to be on your
          shortlist.
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
      q: "Do you travel from Hampshire to Surrey?",
      a: "Yes. Surrey sits inside our regular season patch, roughly 90 minutes' drive from base. No travel surcharge for standard Surrey coverage. That covers the county from Guildford and Farnham through to Weybridge, Dorking and the M25 belt.",
    },
    {
      q: "Do you know the Surrey wedding venues?",
      a: "Yes. Well-known Surrey wedding venues include Pennyhill Park, Beaverbrook, Foxhills, Farnham Castle, Loseley Park, Great Fosters (just over the border), Northbrook Park, Burrows Lea and Wotton House. If your venue isn't on that list, tell us — we're happy to talk you through what to expect.",
    },
    {
      q: "What are curfews and sound rules like at Surrey venues?",
      a: "Country hotels and country-estate venues in Surrey often allow later finishes. Village-hall style venues and residential-neighbour rooms can carry earlier cut-offs from local planning. We confirm the specific curfew, sound-limiter setup and any coordinator's rules the week before, and pace the closing set to land at the actual end of the night.",
    },
    {
      q: "What kind of setlist works for a Surrey wedding?",
      a: "Surrey crowds are strongly London-commute influenced — the modern chart-pop crossover (Harry Styles, Dua Lipa, Sam Fender) tends to land well alongside the indie/rock backbone (Arctic Monkeys, Kings of Leon, The Killers). Wedding non-negotiables (Mr Brightside, Don't Stop Me Now, Sweet Caroline) hit the back-half peaks. Full set list is on the repertoire page.",
    },
    {
      q: "How quickly can you confirm availability for a Surrey date?",
      a: "Within 24 hours of your enquiry, normally sooner. Send us the date, venue and any thoughts on the vibe and we'll come back with a tailored quote.",
    },
  ],
};
