import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Priston Mill wedding band Backbeat. Live indie and rock for weddings at the working watermill and Tythe Barn on the Duchy of Cornwall's Newton Park Estate near Bath. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const pristonMill: VenueRecord = {
  type: "venue",
  slug: "priston-mill",
  name: "Priston Mill",
  countySlug: "somerset",
  meta: {
    title: "Priston Mill Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Priston Mill Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Priston Mill, Priston, near Bath, Somerset",
    subAreas: ["Priston", "Bath", "Bristol", "Keynsham", "Saltford"],
  },
  hero: {
    eyebrow: "Priston Mill · Bath · Somerset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Priston Mill.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the working watermill and Tythe
        Barn on the Duchy of Cornwall&rsquo;s estate near Bath. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Priston Mill",
    heading: (
      <>
        Working watermill. Tythe Barn.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Priston Mill sits in a valley on the Duchy of Cornwall&rsquo;s
          Newton Park Estate, about seven miles from Bath and ten
          miles from Bristol, in Somerset. The wedding offering
          centres on two restored buildings: the Tythe Barn (a
          stone-walled barn) and a working Watermill, with an
          additional Hayloft space. Capacity ranges from intimate
          (around 50) to larger (around 150).
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          regularly, so Bath sits comfortably inside our home patch.
          No travel surcharges, no overnight accommodation, no
          anxious 4am drives back from the wrong end of the country.
        </p>
        <p>
          Priston&rsquo;s reception spaces are timber-and-stone, and
          play warm and forgiving for live music if set up
          correctly. Our stage setup is built to dress around the
          room rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA
          sized for the room rather than the road. We dress in
          stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Priston wedding tends to pull a guest list that&rsquo;s
          travelled in from London and Bristol for the weekend, with
          a strong Bath and West-Country core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor, Oasis and Stereophonics for the
          mid-evening, modern-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender) layered through for the chart-aware younger
          guests. Wedding non-negotiables (Mr Brightside, Don&rsquo;t
          Stop Me Now, Sweet Caroline) take the back-half peaks.
          Between sets a DJ playlist (collaborated with you) keeps
          the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Priston Mill are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          A working watermill on a Duchy of Cornwall estate carries
          its own access and timing protocols. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Priston Mill and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Priston.",
    blurb: (
      <>
        Backbeat plays across Somerset, Wiltshire and the wider
        South West. A snapshot of other well-known wedding venues
        within about an hour of Bath. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Lucknam Park", town: "Colerne" },
      { name: "Babington House", town: "Frome" },
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Euridge Manor", town: "Castle Combe" },
      { name: "Whatley Manor", town: "Easton Grey" },
      { name: "Old Down Estate", town: "Tockington" },
      { name: "Berkeley Castle", town: "Berkeley" },
      { name: "Owlpen Manor", town: "Uley" },
    ],
  },
  cta: {
    heading: "Live music for your Priston Mill wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
