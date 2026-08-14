import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Bath wedding band Backbeat. Live indie and rock for the Pump Room, Royal Crescent, Bath Pavilion and Bath's Georgian wedding scene. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const bath: CityRecord = {
  type: "city",
  countySlug: "somerset",
  slug: "bath",
  name: "Bath",
  meta: {
    title: "Wedding Bands in Bath — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Bath — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Bath",
    subAreas: [
      "Bath city",
      "Royal Crescent",
      "Pulteney",
      "Widcombe",
      "Bathwick",
      "Combe Down",
      "Lansdown",
    ],
  },
  hero: {
    eyebrow: "Bath · Somerset · Georgian",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in Bath.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Pump Room, Royal Crescent and Bath&rsquo;s
        Georgian wedding scene. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Bath",
    heading: (
      <>
        From the Pump Room
        <br />
        to the Royal Crescent.
      </>
    ),
    body: (
      <>
        <p>
          Bath is one of the most recognisable wedding cities in the
          country. The area covers historic city-centre rooms, Georgian
          crescent and townhouse hotels, design-led museum and pavilion
          venues, and edge-of-city country options. The Pump Room, Roman
          Baths, Royal Crescent Hotel, Holburne Museum, Assembly Rooms,
          Bath Pavilion, Bailbrook, Macdonald Bath Spa, Apex City of
          Bath and Combe Grove are all regularly booked across the area.
        </p>
        <p>
          Backbeat is a Hampshire-based band, so Bath sits inside a comfortable
          hour-and-a-half drive of base. We play{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/salisbury" className={linkClass}>
            Salisbury
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from the wrong end of the country.
        </p>
        <p>
          Bath wedding venues split roughly into three types: historic
          city-centre rooms, townhouse hotels and Georgian crescents,
          and design-led museum and pavilion venues (with edge-of-city
          country options on top). Each has its own rhythm. A black-tie
          city-centre evening is a different room to a pavilion marquee,
          and the set list, lighting rig and stage volume flex around
          which one you&rsquo;ve booked.
        </p>
        <p>
          Bath has a logistical layer most couples don&rsquo;t expect.
          City-centre venues sit inside Roman-zone protected residential
          streets with tighter load-in and parking. Bath traffic into
          the city centre on a Friday afternoon is a known
          supplier-killer, so we plan our load-in to clear the rush. We
          confirm the specific load-in plan with the coordinator ahead
          of time rather than learning it on the night.
        </p>
        <p>
          Bath wedding crowds tend to be a polished hybrid. The city
          pulls a strong London weekend layer (Paddington an hour and
          a quarter away), West Country county families across the
          parents-of-the-bride brackets, and a notable international
          and academic contingent through the Bath Spa and Bath
          University connections. The setlist flexes accordingly: Arctic Monkeys, The
          Killers and Kings of Leon for the late floor across the
          board, Oasis and Stereophonics doing more work in the
          older-skewing rooms, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-half
          peaks. Between sets a DJ playlist (collaborated with you)
          keeps the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across Bath.
          City-centre venues inside the World Heritage Roman zone
          typically run earlier cut-offs from local planning
          conditions. Townhouse and conservation-area hotels run
          their own conditions, and edge-of-city venues on private
          grounds often allow later finishes. Every venue has its
          own rules, in-house limiters or coordinator-managed
          arrangements. We confirm the specific cut-off and any sound
          restrictions with the venue the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning a Bath wedding and want a band that
          turns up briefed for the venue (and the city traffic) and reads
          the room properly, send us your date. We&rsquo;ll come back
          within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Bath venues",
    heading: "Bath wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Bath wedding venues, from the Pump Room
        and Royal Crescent to townhouse hotels and edge-of-city pavilions.
        We&rsquo;re Hampshire-based and travel across to Bath regularly.
        If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Pump Room", town: "Bath" },
      { name: "Roman Baths", town: "Bath" },
      { name: "The Royal Crescent Hotel", town: "Royal Crescent" },
      { name: "The Holburne Museum", town: "Pulteney" },
      { name: "Bath Assembly Rooms", town: "Bath" },
      { name: "Bath Pavilion", town: "Bath" },
      { name: "Macdonald Bath Spa", town: "Bathwick" },
      { name: "Bailbrook House Hotel", town: "Bailbrook" },
      { name: "Apex City of Bath", town: "Bath" },
      { name: "Combe Grove", town: "Monkton Combe" },
    ],
  },
  cta: {
    heading: "Live music for your Bath wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
