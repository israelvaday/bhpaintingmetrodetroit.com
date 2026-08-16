import areasJson from "@/content/service-areas.json";
import mainJson from "@/content/service-areas-main.json";

export type Area = {
  slug: string;
  name: string;
  city: string;
  kind: "city" | "neighborhood" | "community" | "zip-area";
  lat: number;
  lng: number;
  parent: string | null;
  main?: boolean;
  zip?: string[];
};

export const AREAS = areasJson as Area[];
export const MAIN_AREAS = mainJson as Area[];

export const AREAS_BY_SLUG: Record<string, Area> = Object.fromEntries(
  AREAS.map((a) => [a.slug, a])
);

export const CITIES = AREAS.filter((a) => a.kind === "city");

/**
 * The place label used in titles, headings and map cards.
 *
 * A neighborhood or community is not a municipality: "Norman Oaks, MI" and
 * "Big Beaver Corridor, MI" name places nobody searches for, while the parent
 * city that makes them findable sits unused in `area.city`. Sub-areas therefore
 * render as "<name>, <city>"; cities render unchanged.
 *
 * Skipped when the name already carries the city or its leading token, which
 * covers both the sub-areas that were named properly to begin with (Downtown
 * Royal Oak, Warren Woods) and Downtown Farmington — that one sits in the City
 * of Farmington rather than Farmington Hills, so appending its listed parent
 * would assert a geography that is wrong.
 */
export function areaLabel(area: Area): string {
  if (area.kind === "city" || !area.city || area.city === area.name) return area.name;
  const name = area.name.toLowerCase();
  const city = area.city.toLowerCase();
  if (name.includes(city) || name.includes(city.split(" ")[0])) return area.name;
  return `${area.name}, ${area.city}`;
}

function haversine(a: Area, b: Area): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function nearbyAreas(area: Area, count = 5): Area[] {
  return AREAS.filter((a) => a.slug !== area.slug)
    .map((a) => ({ a, d: haversine(area, a) }))
    .sort((x, y) => x.d - y.d)
    .slice(0, count)
    .map((x) => x.a);
}
