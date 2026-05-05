import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Exeter wedding band Backbeat. Live indie and rock for Exeter Cathedral, Pynes House, Powderham Castle and the East Devon Jurassic Coast wedding circuit. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const exeter: CityRecord = {
  type: "city",
  countySlug: "east-devon",
  slug: "exeter",
  name: "Exeter",
  meta: {
    title: "Exeter Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Exeter Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Exeter",
    subAreas: [
      "Exeter city",
      "Heavitree",
      "St Leonard's",
      "Topsham",
      "Upton Pyne",
      "Kenton",
      "Exminster",
    ],
  },
  hero: {
    eyebrow: "Exeter · East Devon · Cathedral city",
    heading: (
      <>
        An Exeter
        <br className="hidden sm:block" /> wedding band.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Exeter Cathedral, Pynes House, Powderham
        Castle and the East Devon wedding circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Exeter",
    heading: (
      <>
        From the Cathedral
        <br />
        to Powderham Castle.
      </>
    ),
    body: (
      <>
        <p>
          Exeter is the wedding capital of East Devon and the gateway to
          the Jurassic Coast wedding belt. The area covers the historic
          Cathedral close, country-estate venues on the city edges,
          country-house options a short drive north, and boutique-civic
          hotels inside the city. Exeter Cathedral, Powderham Castle,
          Pynes House, Larkbeare Grange, The Magdalen Chapter and Exeter
          Castle are all regularly booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, and Exeter sits at the
          edge of our regular touring radius (around two hours from
          Southampton). We play{" "}
          <Link href="/wedding-bands/east-devon" className={linkClass}>
            East Devon
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/bournemouth" className={linkClass}>
            Bournemouth
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/bath" className={linkClass}>
            Bath
          </Link>{" "}
          regularly. We add a small travel allowance for Exeter dates
          honestly up front, and most weddings sit comfortably inside a
          same-day there-and-back trip.
        </p>
        <p>
          Exeter wedding venues split roughly into three types: the
          historic-civic centre, country-estate venues on the city
          edges, and boutique city hotels. Each has its own rhythm. A
          Cathedral-close ceremony is a different evening to a
          country-estate marquee reception, and the set list, lighting
          rig and stage volume flex around which one you&rsquo;ve
          booked.
        </p>
        <p>
          Exeter has a logistical layer most couples don&rsquo;t expect.
          The Cathedral close sits inside a heritage-protected pedestrian
          zone with tighter vehicle access and load-in. Country-estate
          venues carry their own gated drives and delivery windows. M5
          traffic into Exeter on a Friday afternoon shapes when suppliers
          actually arrive. We confirm the specific load-in plan with the
          coordinator ahead of time rather than learning it on the
          night.
        </p>
        <p>
          Exeter wedding crowds tend to be a quieter mix of West Country
          locals and London-or-Bristol drivers down for the weekend.
          Exeter University fills out a younger chart-aware contingent
          through the local crowd. The setlist flexes accordingly. We
          lean Arctic Monkeys, The Killers and Kings of Leon for the
          late floor, Oasis and Stereophonics doing more work in the
          older-skewing rooms, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) take
          the back-half peaks. Between sets a DJ playlist (collaborated
          with you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across Exeter.
          Cathedral-close, town-centre and waterfront venues typically
          run earlier cut-offs from local planning conditions. Country
          estates and private-land venues often allow later finishes,
          but every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning an Exeter wedding and want a band that
          treats the drive west as part of the job rather than an
          obstacle, send us your date. We&rsquo;ll come back within 24
          hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Exeter venues",
    heading: "Exeter wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Exeter wedding venues, from the
        Cathedral and Castle to country-estate venues just outside the
        city. We&rsquo;re Hampshire-based and travel into East Devon
        regularly. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Exeter Cathedral", town: "Exeter" },
      { name: "Exeter Castle", town: "Exeter" },
      { name: "Powderham Castle", town: "Kenton" },
      { name: "Pynes House", town: "Upton Pyne" },
      { name: "Larkbeare Grange", town: "Talaton" },
      { name: "The Magdalen Chapter", town: "Exeter" },
      { name: "Mercure Rougemont", town: "Exeter" },
      { name: "Exeter Guildhall", town: "Exeter" },
      { name: "The Custom House", town: "Exeter Quay" },
      { name: "Sandy Park", town: "Exeter" },
    ],
  },
  cta: {
    heading: "Live music for your Exeter wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
