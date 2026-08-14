import type { ReactNode } from "react";

export type LocationType = "county" | "city" | "venue";

export type VenueListItem = {
  name: string;
  town: string;
};

export type LocationHeroCopy = {
  eyebrow: string;
  heading: ReactNode;
  subhead: ReactNode;
};

export type LocationIntroCopy = {
  eyebrow: string;
  heading: ReactNode;
  body: ReactNode;
};

export type LocationVenuesCopy = {
  eyebrow: string;
  heading: string;
  blurb: ReactNode;
  list: VenueListItem[];
};

export type LocationCTACopy = {
  heading: string;
  body: ReactNode;
};

export type LocationFAQ = {
  /** Question — must be phrased as an actual question a couple would type. */
  q: string;
  /** Answer — plain text (no JSX). Also used for FAQPage schema. */
  a: string;
};

export type LocationMeta = {
  title: string;
  description: string;
  ogTitle: string;
};

export type LocationSchemaInfo = {
  areaServed: string;
  subAreas: string[];
};

type LocationBase = {
  slug: string;
  name: string;
  meta: LocationMeta;
  schema: LocationSchemaInfo;
  hero: LocationHeroCopy;
  intro: LocationIntroCopy;
  venues: LocationVenuesCopy;
  cta: LocationCTACopy;
  /** Optional location-specific FAQs. Rendered as accordion + emitted as FAQPage schema. */
  faqs?: LocationFAQ[];
};

export type CountyRecord = LocationBase & {
  type: "county";
};

export type CityRecord = LocationBase & {
  type: "city";
  countySlug: string;
};

export type VenueRecord = LocationBase & {
  type: "venue";
  countySlug: string;
  citySlug?: string;
};

export type LocationRecord = CountyRecord | CityRecord | VenueRecord;
