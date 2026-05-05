import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Somerset wedding band Backbeat. Live indie and rock music for Bath, Wells, Bruton and Mendip weddings. Country estates, design-led venues and Bath classics. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const somerset: CountyRecord = {
  type: "county",
  slug: "somerset",
  name: "Somerset",
  meta: {
    title: "Somerset Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Somerset Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Somerset",
    subAreas: [
      "Bath",
      "Wells",
      "Bruton",
      "Frome",
      "Glastonbury",
      "Taunton",
      "Yeovil",
    ],
  },
  hero: {
    eyebrow: "Somerset · Bath · Mendips",
    heading: (
      <>
        A Somerset wedding band
        <br className="hidden sm:block" /> for Bath and beyond.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Bath classics, Mendip country houses and
        the design-led Somerset wedding scene. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Somerset",
    heading: (
      <>
        From Georgian Bath
        <br />
        to design-led country houses.
      </>
    ),
    body: (
      <>
        <p>
          Somerset has quietly become one of the most interesting
          wedding counties in the country. Bath delivers the
          Georgian-elegance brief on its own terms. Out in the
          Mendips and around Bruton, a generation of design-led
          venues has pulled a creative-and-design crowd into the
          county. The country-house circuit does what it has always
          done. The Newt, Hauser &amp; Wirth Somerset, Pennard
          House, Maunsel House, Walton Castle, Holcombe Manor and
          The Bishop&rsquo;s Palace are all regularly booked across
          the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Somerset sits inside a
          comfortable hour-and-a-half drive of base. We also play{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/gloucestershire" className={linkClass}>
            Gloucestershire
          </Link>{" "}
          regularly, so the West Country corridor is genuinely home turf. No
          travel surcharges, no overnight accommodation, no anxious 4am drive
          back from the wrong end of the country.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          Bath city and Bath-circuit hotels, design-led country
          venues around Bruton and the Mendips, classic country
          estates, and rural farm and barn venues across the
          Levels. Each has its own rhythm. A design-led country
          dinner is a different evening to a Levels barn, and the
          set list, lighting rig and stage volume flex around which
          one you&rsquo;ve booked.
        </p>
        <p>
          Somerset has a logistical layer most couples don&rsquo;t
          expect. Bath city venues sit inside protected
          residential streets with tighter vehicle access.
          Country-estate and design-led venues carry their own
          gated drives and delivery windows, often on rural
          single-track lanes. We confirm the specific load-in
          plan with the coordinator ahead of time rather than
          learning it on the night.
        </p>
        <p>
          Somerset wedding crowds skew musically wide. Bath
          guest lists often pull a London-and-county hybrid,
          while the Bruton end of the county pulls a
          creative-and-design crowd that arrives paying
          attention to the music. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of
          Leon for the late floor, Oasis and Stereophonics for
          the singalong moments, modern-pop crossover (Harry
          Styles, Dua Lipa, Sam Fender) layered through for the
          chart-aware younger guests. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet
          Caroline) land in the back half. Between sets a DJ
          playlist (collaborated with you) keeps the floor
          moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Somerset. Bath city and town-centre venues typically
          run earlier cut-offs from local planning conditions.
          Country-estate and private-land venues often allow
          later finishes, but every venue has its own rules,
          in-house limiters or coordinator-managed
          arrangements. We confirm the specific cut-off and any
          sound restrictions with the venue the week before,
          and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Somerset wedding and want a band that
          turns up briefed for the room rather than playing the same set
          everywhere, send us your date and venue. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Somerset venues",
    heading: "Somerset wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Somerset wedding venues, from Bath classics
        to design-led country houses and rural farm venues. We&rsquo;re
        Hampshire-based and travel across the county end to end. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Newt in Somerset", town: "Bruton" },
      { name: "Hauser & Wirth Somerset", town: "Bruton" },
      { name: "Pennard House", town: "Shepton Mallet" },
      { name: "Maunsel House", town: "Taunton" },
      { name: "Walton Castle", town: "Clevedon" },
      { name: "Kingsdon Manor", town: "Somerton" },
      { name: "Holcombe Manor", town: "Bath" },
      { name: "Aldwick Estate", town: "Redhill" },
      { name: "Stoberry House", town: "Wells" },
      { name: "The Bishop's Palace", town: "Wells" },
      { name: "Bath Pavilion", town: "Bath" },
      { name: "Coombe Lodge", town: "Blagdon" },
    ],
  },
  cta: {
    heading: "Live music for your Somerset wedding.",
    body: (
      <>
        Tell us your date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
