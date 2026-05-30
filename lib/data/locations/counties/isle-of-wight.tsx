import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Isle of Wight wedding band Backbeat. Mainland-based live indie and rock band that travels to weddings across the island. Ferry-experienced, fully self-contained. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const isleOfWight: CountyRecord = {
  type: "county",
  slug: "isle-of-wight",
  name: "Isle of Wight",
  meta: {
    title: "Wedding Bands in Isle of Wight | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Isle of Wight | Backbeat — From £1,900",
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
    eyebrow: "Isle of Wight · Solent · Ferry-ready",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> on the Isle of Wight.
      </>
    ),
    subhead: (
      <>
        Mainland-based live indie &amp; rock band that travels to the
        island regularly. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Isle of Wight",
    heading: (
      <>
        Crossing the Solent
        <br />
        isn&rsquo;t a problem.
      </>
    ),
    body: (
      <>
        <p>
          Isle of Wight weddings have a different rhythm to mainland ones.
          Guests arriving on multiple ferries across the day, suppliers
          coordinating around tide-led crossings, late nights that have to
          stop being late at exactly the right time so suppliers catch
          the last sailing. That logistics layer is part of the brief, and
          we plan around it.
        </p>
        <p>
          We&rsquo;re a Southampton-side, Hampshire-based band, so the
          ferry from Southampton or Portsmouth is a routine part of an
          island gig for us. We also play{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          regularly, so the South Coast is genuinely home turf and the
          crossing is the only thing that changes about an island
          booking. We arrive on an earlier crossing than we strictly need
          to, with a full back-up of cables and load-in-ready kit, because
          the answer to &ldquo;can we just nip back for it?&rdquo; on the
          Isle of Wight is no.
        </p>
        <p>
          Three Solent crossings serve the island and each one suits a
          different kind of booking. Wightlink Portsmouth-Fishbourne is
          the workhorse crossing for the east of the island (Ryde,
          Bembridge, Shanklin). Red Funnel Southampton-East Cowes is the
          natural option for Cowes, Newport and the centre of the island.
          Wightlink Lymington-Yarmouth is the West Wight option for venues
          like The George and Tapnell Farm. We pick the crossing that
          fits your venue and your timeline rather than the one
          that&rsquo;s cheapest, and we factor it into the quote up front.
        </p>
        <p>
          Island wedding venues span from the grandeur of Osborne House
          and Quarr Abbey through to relaxed farm and beach venues at
          Tapnell or Compton Bay. We&rsquo;re fully self-contained: PA,
          lighting, all instruments. Even venues with limited
          infrastructure get a proper live-band sound and look. For
          coastal and farm venues where power can be fragile, we bring a
          small generator backup so a tripped breaker mid-set isn&rsquo;t
          the end of the night.
        </p>
        <p>
          Ferry timing is where island weddings catch couples out. The
          last car ferries off the island typically run between 11pm and
          12:30am depending on the route and the season, and once
          they&rsquo;ve gone, you&rsquo;re stuck until the morning. We
          plan around it. Either we stay on the island overnight (and
          factor that into the quote up front) or the closing set ends in
          time to make the last sailing with kit packed. Both are fine.
          The wrong answer is finding out on the day.
        </p>
        <p>
          Island weddings often have a guest list that splits roughly
          half and half between local Wight residents and mainland
          friends and family who have made the crossing. The set has to
          flatter both. The local end skews indie-rock heavy (Arctic
          Monkeys, Kings of Leon, The Killers, Oasis), the mainland
          younger guests bring requests for the modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender), and the wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet
          Caroline) bridge the two when the floor calls for them. Between
          sets a DJ playlist (collaborated with you) keeps the floor
          moving. We learn one custom first dance per booking.
        </p>
        <p>
          Island timing isn&rsquo;t really about the venue&rsquo;s curfew,
          it&rsquo;s about the ferry. Most island weddings end earlier
          than mainland equivalents because the last car ferries off the
          island typically run between 11pm and 12:30am depending on the
          route. Mainland guests need to make a sailing or stay over.
          We pace the running order so the closing set lands when the
          floor&rsquo;s still there, not after the parents have already
          left for the 11pm Wightlink. Confirming the ferry plan with
          the venue before the day is the bit most couples don&rsquo;t
          think to do until the morning of, and we ask up front.
        </p>
        <p>
          If you&rsquo;re planning an Isle of Wight wedding and want a
          mainland band that treats the crossing as part of the job
          rather than an obstacle, send us your date and venue.
          We&rsquo;ll come back within 24 hours.
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
};
