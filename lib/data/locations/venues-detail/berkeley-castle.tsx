import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Berkeley Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed 12th-century Berkeley family castle in Gloucestershire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const berkeleyCastle: VenueRecord = {
  type: "venue",
  slug: "berkeley-castle",
  name: "Berkeley Castle",
  countySlug: "gloucestershire",
  meta: {
    title: "Berkeley Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Berkeley Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Berkeley Castle, Berkeley, Gloucestershire",
    subAreas: ["Berkeley", "Stroud", "Gloucester", "Thornbury", "Wotton-under-Edge"],
  },
  hero: {
    eyebrow: "Berkeley Castle · Berkeley · Gloucestershire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Berkeley Castle.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Berkeley family
        castle, held since the 12th century. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Berkeley Castle",
    heading: (
      <>
        Berkeley family. Nine centuries.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Berkeley Castle sits at Berkeley in Gloucestershire,
          between Bristol and Gloucester. The original motte-and-
          bailey castle dates to around 1067, with the circular
          shell keep built between 1153 and 1156. It&rsquo;s Grade I
          listed and has been held by the Berkeley family since the
          12th century. The castle was the scene of the death of
          King Edward II in 1327, and is currently owned by Charles
          Berkeley, who inherited it from his father in 2017.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/gloucestershire" className={linkClass}>
            Gloucestershire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          regularly, so Berkeley sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          The castle&rsquo;s reception spaces are stone-walled and
          high-ceilinged, with a reverberant acoustic that needs
          respecting rather than fighting. Our stage setup is built
          to dress around the room rather than fight it. Black-
          finished kit, restrained on-stage lighting rather than a
          stadium rig, and a PA sized for the room rather than the
          road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Berkeley wedding tends to pull a guest list that&rsquo;s
          travelled in from London and Bristol for the weekend, with
          a strong Cotswold and West-Country core. The setlist
          flexes accordingly: Arctic Monkeys, The Killers and Kings
          of Leon for the late floor, Oasis and Stereophonics for
          the mid-evening, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-
          half peaks. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Berkeley are managed by the castle&rsquo;s
          own wedding team, and they vary by booking. A working
          family castle with significant medieval heritage interiors
          is one of the more careful briefs we play. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Berkeley Castle and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Berkeley.",
    blurb: (
      <>
        Backbeat plays across Gloucestershire, Somerset and the
        wider Cotswolds. A snapshot of other well-known wedding
        venues within about an hour of Berkeley. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Owlpen Manor", town: "Uley" },
      { name: "Elmore Court", town: "Elmore" },
      { name: "Old Down Estate", town: "Tockington" },
      { name: "The Manor House", town: "Castle Combe" },
      { name: "Whatley Manor", town: "Easton Grey" },
      { name: "Babington House", town: "Frome" },
      { name: "Lucknam Park", town: "Colerne" },
      { name: "Priston Mill", town: "Bath" },
    ],
  },
  cta: {
    heading: "Live music for your Berkeley Castle wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
