import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Gloucestershire wedding band Backbeat. Live indie and rock for Cotswolds, Cheltenham and Tetbury weddings. Country house circuit, Cripps Barn, Cowley Manor, Sudeley Castle. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const gloucestershire: CountyRecord = {
  type: "county",
  slug: "gloucestershire",
  name: "Gloucestershire",
  meta: {
    title: "Gloucestershire Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Gloucestershire Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Gloucestershire",
    subAreas: [
      "Cheltenham",
      "Cirencester",
      "Tetbury",
      "Stroud",
      "Stow-on-the-Wold",
      "Painswick",
      "Gloucester",
    ],
  },
  hero: {
    eyebrow: "Gloucestershire · Cotswolds · UK-wide",
    heading: (
      <>
        A Cotswolds wedding band
        <br className="hidden sm:block" /> for Gloucestershire.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Cotswolds country-house circuit,
        Cheltenham elegance and Tetbury barns. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Gloucestershire",
    heading: (
      <>
        From Cotswolds country houses
        <br />
        to Cheltenham elegance.
      </>
    ),
    body: (
      <>
        <p>
          Gloucestershire sits at the centre of the country&rsquo;s
          most competitive wedding region. The Cotswolds end of the
          county is the country-house brief at its grandest, with a
          long string of estates that pull London weekend traffic
          west on a Friday afternoon. Cheltenham brings the
          regency-elegant version of the same evening, Tetbury and
          Cirencester deliver the design-led barn and farm circuit,
          and the Stroud valleys hold the more relaxed end of the
          county. Cowley Manor, Calcot, Lords of the Manor, Whatley
          Manor, Cripps Barn, Lapstone Barn, Elmore Court and
          Pittville Pump Room are all regularly booked across the
          area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so the drive into
          Gloucestershire is a comfortable hour and a half or so. We also
          play{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          regularly, so the wider Cotswolds and West Country corridor is
          genuinely home turf. No travel surcharges, no overnight
          accommodation, no anxious 4am drive back from the wrong end of the
          country.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          Cotswolds country estates, regency-Cheltenham hotels and
          townhouses, the Tetbury-Cirencester barn-and-estate belt,
          and the gastronomic country-house circuit. We brief
          differently for each. A black-tie country-estate evening
          is a different room to a barn marquee, and the set list,
          lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          The Cotswolds wedding circuit has a logistical layer most
          couples don&rsquo;t expect. Country-estate venues carry
          their own gated drives and delivery windows, often on
          single-track lanes. Village-pub accommodation around the
          venue books out a year ahead. We confirm the specific
          load-in plan with the coordinator ahead of time rather
          than learning it on the night.
        </p>
        <p>
          Gloucestershire wedding crowds are often a hybrid: London
          weekend guests, county locals, and multi-generational
          family guest lists. Cheltenham guest lists tend to skew
          regency-glam with a sharper dress code than the Cotswolds
          country-estate average. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the
          late floor, Oasis and Stereophonics for the singalong
          moments, modern-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender) layered through for the chart-aware younger
          guests. Wedding non-negotiables (Mr Brightside, Don&rsquo;t
          Stop Me Now, Sweet Caroline) land in the back half.
          Between sets a DJ playlist (collaborated with you) keeps
          the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Gloucestershire. Cheltenham conservation-area and
          town-centre hotels typically run earlier cut-offs from
          local planning conditions. Country-estate, barn and
          private-land venues often allow later finishes, but every
          venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Cotswolds or Gloucestershire wedding and
          want a band that turns up briefed for the venue and reads the room
          properly, send us your date. We&rsquo;d love to be on your
          shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Gloucestershire venues",
    heading: "Gloucestershire wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Gloucestershire wedding venues, from
        Cotswolds country estates to Cheltenham hotels and Tetbury barn
        venues. We&rsquo;re Hampshire-based and travel across the county and
        beyond. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Cowley Manor", town: "Cheltenham" },
      { name: "Calcot Manor", town: "Tetbury" },
      { name: "Whatley Manor", town: "Easton Grey" },
      { name: "Cripps Barn", town: "South Cerney" },
      { name: "Lords of the Manor", town: "Upper Slaughter" },
      { name: "Sudeley Castle", town: "Winchcombe" },
      { name: "Lapstone Barn", town: "Chipping Campden" },
      { name: "Elmore Court", town: "Gloucester" },
      { name: "Lower Slaughter Manor", town: "Lower Slaughter" },
      { name: "Tortworth Court", town: "Wotton-under-Edge" },
      { name: "Pittville Pump Room", town: "Cheltenham" },
      { name: "Painswick Rococo Garden", town: "Painswick" },
    ],
  },
  cta: {
    heading: "Live music for your Gloucestershire wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
