import { counties } from "./counties";
import { cities } from "./cities";
import { venuePages } from "./venues-detail";
import type { LocationRecord } from "./types";

export { counties, cities, venuePages };

export const allLocations: LocationRecord[] = [
  ...counties,
  ...cities,
  ...venuePages,
];

const locationBySlug = new Map<string, LocationRecord>(
  allLocations.map((location) => [location.slug, location]),
);

export function getLocationBySlug(slug: string): LocationRecord | undefined {
  return locationBySlug.get(slug);
}

export function getAllSlugs(): string[] {
  return allLocations.map((location) => location.slug);
}

export function getCountyBySlug(slug: string) {
  return counties.find((c) => c.slug === slug);
}

export function getCitiesByCounty(countySlug: string) {
  return cities.filter((c) => c.countySlug === countySlug);
}

export function getVenuesByCounty(countySlug: string) {
  return venuePages.filter((v) => v.countySlug === countySlug);
}

export type { LocationRecord, CountyRecord, CityRecord, VenueRecord } from "./types";
