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
