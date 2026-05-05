import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Sopley Mill wedding band Backbeat. Live indie and rock for exclusive-use weddings at the listed riverside mill near Christchurch, Dorset. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const sopleyMill: VenueRecord = {
  type: "venue",
  slug: "sopley-mill",
  name: "Sopley Mill",
  countySlug: "dorset",
  meta: {
    title: "Sopley Mill Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Sopley Mill Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Sopley Mill, Sopley, Christchurch, Dorset",
    subAreas: ["Sopley", "Christchurch", "Bournemouth", "Ringwood", "Bransgore"],
  },
  hero: {
    eyebrow: "Sopley Mill · Christchurch · Dorset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Sopley Mill.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the listed riverside mill near
        Christchurch, on the Hampshire/Dorset border. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Sopley Mill",
    heading: (
      <>
        Riverside mill. Exclusive use.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Sopley Mill sits at Sopley, just outside Christchurch, on
          the Avon. The mill is a listed building and runs on an
          exclusive-use basis. The wedding offering splits across the
          ceremony room, the Granary (the evening floor), the River
          Deck, the Avon Suite (bridal preparation), Tom&rsquo;s Bar
          and the Potting Shed Bar. Lift access reaches the upper
          floors and there&rsquo;s parking for around 80 cars.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers
          the{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          coast and the{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          New Forest regularly, so Sopley sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Sopley&rsquo;s reception spaces are timber-framed and warm.
          Our stage setup is built to dress around the room rather
          than fight it. Black-finished kit, restrained on-stage
          lighting rather than a stadium rig, and a PA sized for the
          room rather than the road. We dress in stage-blacks unless
          you ask otherwise.
        </p>
        <p>
          A Sopley wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-South-coast
          crowd that&rsquo;s comfortable on a dance floor. The
          setlist flexes accordingly: Arctic Monkeys, The Killers and
          Kings of Leon for the late floor, Oasis and Stereophonics
          for the mid-evening, modern-pop crossover (Harry Styles,
          Dua Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-half
          peaks. Between sets a DJ playlist (collaborated with you)
          keeps the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Sopley Mill are managed by the venue&rsquo;s
          own wedding team, and they vary by booking. The mill sits
          inside a Site of Special Scientific Interest, which can
          shape what&rsquo;s allowed outside (fireworks in particular).
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so it
          lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Sopley Mill and want a band that
          turns up briefed, properly dressed and with the dance floor
          firmly in mind, send us your date. We&rsquo;d love to be on
          your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Sopley.",
    blurb: (
      <>
        Backbeat plays across Dorset, the New Forest and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Christchurch. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Pylewell Park", town: "Lymington" },
      { name: "Rhinefield House", town: "Brockenhurst" },
      { name: "Burley Manor", town: "Burley" },
      { name: "Somerley House", town: "Ringwood" },
      { name: "Parley Manor", town: "Christchurch" },
      { name: "Almer Manor", town: "Wimborne" },
    ],
  },
  cta: {
    heading: "Live music for your Sopley Mill wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
