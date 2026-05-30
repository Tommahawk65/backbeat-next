import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Salisbury wedding band Backbeat. Live indie and rock for Salisbury Cathedral, Old Mill at Harnham, Pythouse and the Wiltshire-edge wedding circuit. Hampshire-based. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const salisbury: CityRecord = {
  type: "city",
  countySlug: "wiltshire",
  slug: "salisbury",
  name: "Salisbury",
  meta: {
    title: "Wedding Bands in Salisbury | Backbeat — From £1,900",
    description,
    ogTitle: "Wedding Bands in Salisbury | Backbeat — From £1,900",
  },
  schema: {
    areaServed: "Salisbury",
    subAreas: [
      "Salisbury city",
      "Harnham",
      "Old Sarum",
      "Wilton",
      "Britford",
      "Tisbury",
      "Tollard Royal",
    ],
  },
  hero: {
    eyebrow: "Salisbury · Wiltshire · Cathedral city",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Salisbury.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Salisbury Cathedral, Old Mill at Harnham,
        Pythouse and the Wiltshire-edge wedding circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Salisbury",
    heading: (
      <>
        From the Cathedral close
        <br />
        to Pythouse and Larmer Tree.
      </>
    ),
    body: (
      <>
        <p>
          Salisbury anchors one of the most underrated wedding belts in
          the country. The area covers the Cathedral and Cathedral close,
          riverside and rural country options a short drive from the
          city, country-estate venues out toward Tisbury and Tollard
          Royal, and historic-grand options in Wilton and Old Sarum.
          Salisbury Cathedral, Old Mill at Harnham, Pythouse, Larmer
          Tree Gardens, Howards House Hotel and Wilton House are all
          regularly booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Salisbury sits inside a
          comfortable hour&rsquo;s drive of base. We play{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/bath" className={linkClass}>
            Bath
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/bournemouth" className={linkClass}>
            Bournemouth
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Salisbury wedding venues split roughly into three types: the
          Cathedral and Cathedral-close venues, riverside-and-rural
          country venues a short drive from the city, and historic-grand
          options. Each has its own rhythm. A Cathedral-close ceremony
          is a different evening to a country-gardens marquee, and the
          set list, lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          Salisbury has a logistical layer most couples don&rsquo;t
          expect. The Cathedral close sits inside heritage-protected
          residential streets with tighter vehicle access and load-in.
          Country-estate venues carry their own gated drives and
          delivery windows, often on rural single-track access. A303
          traffic on a Friday afternoon shapes when suppliers actually
          arrive. We confirm the specific load-in plan with the
          coordinator ahead of time rather than learning it on the
          night.
        </p>
        <p>
          Salisbury wedding crowds tend to be a quieter, multi-generational
          mix. South Wiltshire and Hampshire-edge county families fill
          the parents-of-the-bride brackets (Salisbury sits inside an
          Army-and-academic catchment that runs toward Tidworth and
          Larkhill). London weekenders down for the Cathedral or for a
          Wiltshire country-house weekend make up the younger layer.
          The setlist flexes accordingly. We lean Arctic Monkeys, The
          Killers and Kings of Leon for the
          late floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-half
          peaks. Between sets a DJ playlist (collaborated with you)
          keeps the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Salisbury. Cathedral-close and town-centre venues typically
          run earlier cut-offs from local planning conditions. Country
          estates and private-land venues often allow later finishes,
          but every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Salisbury wedding and want a band
          that turns up briefed for the venue and reads the room properly,
          send us your date. We&rsquo;ll come back within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Salisbury venues",
    heading: "Salisbury wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Salisbury wedding venues, from the
        Cathedral close to riverside country houses and historic
        estates. We&rsquo;re Hampshire-based and travel across to
        Salisbury regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Salisbury Cathedral", town: "Salisbury" },
      { name: "Old Mill at Harnham", town: "Harnham" },
      { name: "Wilton House", town: "Wilton" },
      { name: "Pythouse", town: "Tisbury" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Howards House Hotel", town: "Teffont Evias" },
      { name: "Old Sarum", town: "Salisbury" },
      { name: "Milford Hall Hotel", town: "Salisbury" },
      { name: "The Red Lion", town: "Salisbury" },
      { name: "Sarum College", town: "Cathedral Close" },
    ],
  },
  cta: {
    heading: "Live music for your Salisbury wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
