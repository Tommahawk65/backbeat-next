import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Wedding bands on the Isle of Wight from £1,900. Live indie & rock, ferry-experienced, fully self-contained. 5-star Google reviews. Check availability.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const isleOfWight: CountyRecord = {
  type: "county",
  slug: "isle-of-wight",
  name: "Isle of Wight",
  meta: {
    title: "Wedding Bands in Isle of Wight — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Isle of Wight — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Isle of Wight",
    subAreas: [
      "Cowes",
      "Newport",
      "Ryde",
      "Shanklin",
      "Ventnor",
      "Yarmouth",
      "Bembridge",
    ],
  },
  hero: {
    eyebrow: "Isle of Wight · Solent · Ferry-timed",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> on the Isle of Wight.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock, Solent-side. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Isle of Wight",
    heading: (
      <>
        Island weddings hinge
        <br />
        on the ferry.
      </>
    ),
    body: (
      <>
        <p>
          On the mainland, wedding logistics fall into predictable
          shapes. Load-in windows, coordinator hand-offs, taxis home.
          On the Isle of Wight, one variable rewrites everything else:
          the ferry. When it sails, when it stops, whose guest list is
          on which crossing, and what happens to a car left at
          Portsmouth. That single constraint shapes the running order,
          the closing set and whether suppliers pack down at 10:30pm to
          catch the last Wightlink. Island weddings don&rsquo;t play by
          mainland rules, and pretending otherwise is where they come
          apart.
        </p>
        <p>
          Backbeat is a{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>
          -based band, and the crossing sits inside our normal working
          geography. Same for{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          on either side. The Solent isn&rsquo;t an obstacle for a
          South-Coast-based band; it&rsquo;s a scheduling variable that
          gets factored into a quote up front rather than negotiated on
          the morning of.
        </p>
        <p>
          Three crossings serve the island and each one suits different
          venues. Wightlink Portsmouth-Fishbourne covers the east
          (Ryde, Bembridge, Shanklin, Sandown). Red Funnel
          Southampton-East Cowes serves Cowes, Newport and the centre.
          Wightlink Lymington-Yarmouth is the West Wight route for
          Yarmouth-side venues like The George and Tapnell Farm.
          Picking the right crossing for a venue and load-in time
          isn&rsquo;t complicated, but it&rsquo;s the sort of decision
          mainland-only suppliers routinely get wrong on the day.
        </p>
        <p>
          Island wedding venues cover a wider spectrum than most couples
          expect. The grandeur of Osborne House sits alongside the
          medieval calm of Quarr Abbey, the coastal informality of
          Tapnell Farm, the yacht-club energy of Cowes and the
          country-hotel comfort of the Ventnor stretch. Each venue type
          sets a different closing-set brief. The music that carries a
          mid-May afternoon at Osborne House is not the music that
          closes down a farm marquee at Tapnell on a July Saturday, and
          treating them as if they are is where island wedding music
          goes flat.
        </p>
        <p>
          The single biggest logistical trap for an island wedding is the
          last ferry off. Depending on the route and the season, it
          sails somewhere between 11pm and 12:30am, and once it&rsquo;s
          gone, mainland guests are stuck until morning. That constraint
          reshapes how the night runs. Sometimes the answer is an
          overnight for suppliers; sometimes it&rsquo;s a tighter
          running order that lands the closing set before the exodus.
          Either is workable if it&rsquo;s agreed weeks in advance
          rather than half an hour before the ferry.
        </p>
        <p>
          Island wedding guest lists tend to sit roughly half local, half
          mainland-travelled. The music has to flatter both. Late-floor
          requests lean Arctic Monkeys, Kings of Leon and The Killers.
          Oasis and Stereophonics carry the sing-along middle. Modern
          chart-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layers through for the younger contingent. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet
          Caroline) hit the back-half peaks. Between sets a DJ playlist,
          agreed with you in advance, keeps the room moving. One custom
          first dance per booking is included.
        </p>
        <p>
          If you&rsquo;re planning a wedding on the Isle of Wight and
          want the crossing already priced in and the closing set built
          around the ferry rather than against it, send the date and
          venue.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Island venues",
    heading: "Isle of Wight wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Isle of Wight wedding venues, from
        historic estates to coastal hotels and farm venues. We&rsquo;re
        Hampshire-based and travel across the island end to end. If
        yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Quarr Abbey", town: "Ryde" },
      { name: "Osborne House", town: "East Cowes" },
      { name: "Robin Hill", town: "Downend" },
      { name: "The George Hotel", town: "Yarmouth" },
      { name: "Tapnell Farm", town: "Yarmouth" },
      { name: "North House", town: "Cowes" },
      { name: "The Hambrough", town: "Ventnor" },
      { name: "Royal Hotel", town: "Ventnor" },
      { name: "Haven Hall", town: "Shanklin" },
      { name: "Cowes Yacht Haven", town: "Cowes" },
      { name: "Newport Minster", town: "Newport" },
      { name: "St Catherine's Lighthouse", town: "Niton" },
    ],
  },
  cta: {
    heading: "Live music for your Isle of Wight wedding.",
    body: (
      <>
        Send us your date, venue and ferry plan. We&rsquo;ll handle the
        rest.
      </>
    ),
  },
  faqs: [
    {
      q: "Which Solent crossing suits which island venues?",
      a: "It's venue-driven. Portsmouth-Fishbourne (Wightlink) is the natural route for east-of-island venues around Ryde, Bembridge, Shanklin and Sandown. Southampton-East Cowes (Red Funnel) suits Cowes, Newport and the centre. Lymington-Yarmouth (Wightlink) is the West Wight route for Yarmouth-side venues. The right crossing usually falls out of the venue's postcode and the load-in time.",
    },
    {
      q: "When does the closing set need to end for mainland guests to catch the last ferry?",
      a: "Last car ferries off the island typically sail between 11pm and 12:30am, depending on the route and the season. If a chunk of the guest list is mainland-travelled and needs to make that sailing, the closing set has to land while the floor is still there, not once the parents have already left for the 11pm Wightlink. Confirming ferry times against the running order is a conversation for the planning stage, not the day itself.",
    },
    {
      q: "Is overnight accommodation for suppliers usually needed?",
      a: "It depends on the closing time. If the last set finishes after the last ferry, an overnight is usually the cleaner option than a rushed pack-down and a dash for the boat. If the running order lands the closing set with time to pack and make a sailing, an overnight isn't necessary. It's worth agreeing which model applies at the point of booking rather than the week before.",
    },
    {
      q: "What does an island guest list typically ask for musically?",
      a: "Island wedding guest lists split roughly half local, half mainland-travelled, and the setlist tends to flatter both. Late-floor material leans Arctic Monkeys, Kings of Leon and The Killers. Oasis and Stereophonics carry the sing-along middle. Modern chart-pop crossover (Harry Styles, Dua Lipa, Sam Fender) layers through for the younger contingent. Wedding non-negotiables like Mr Brightside and Sweet Caroline hit the back-half peaks.",
    },
    {
      q: "How quickly can you confirm availability for an Isle of Wight date?",
      a: "Usually within 24 hours of an enquiry. Send the date, the venue and any thoughts on ferry timings and we'll come back with availability plus a quote that already has the crossing priced in.",
    },
  ],
};
