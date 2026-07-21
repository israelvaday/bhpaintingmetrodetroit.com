/**
 * Rebuild local painting copy while preserving the existing Metro Detroit
 * service-area names and landmark lists. This provides an offline fallback
 * when the optional OpenRouter copy refresh is unavailable.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const areas = JSON.parse(
  readFileSync(join(ROOT, "content/service-areas.json"), "utf8")
);
const current = JSON.parse(
  readFileSync(join(ROOT, "content/area-insights.json"), "utf8")
);

const taglines = [
  "Careful interior and exterior painting for homes, rentals, and businesses.",
  "Preparation-first painting with clean protection and written project scopes.",
  "Professional painting planned around your property, colors, and schedule.",
  "Interior, exterior, cabinet, and commercial painting across Metro Detroit.",
];

const callSets = [
  ["whole-home interior repaint", "exterior trim refresh", "cabinet color update"],
  ["rental turnover painting", "ceiling and trim painting", "deck or fence staining"],
  ["commercial interior repaint", "wallpaper removal", "color and sheen guidance"],
  ["living-area color update", "weathered exterior repaint", "door and baseboard painting"],
];

const propertyNotes = [
  "Properties here range from established homes to updated commercial spaces, so preparation and product selection should follow the actual surface condition. Michigan temperature and humidity swings also make cure time and exterior scheduling important.",
  "Local painting projects often involve a mix of original finishes, renovated rooms, and high-use surfaces. A clear plan for protection, primer, sheen, and color samples helps the finished work stay consistent.",
  "Homes and businesses in this area benefit from coating systems chosen for the substrate rather than a one-product-fits-all approach. Exterior work is scheduled around moisture, direct sun, wind, and the product's application range.",
  "Interior updates here commonly focus on durable, washable finishes and clean room-to-room color transitions. Exterior projects require careful cleaning, adhesion checks, and a dependable Michigan weather window.",
];

function hash(value) {
  return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function lowerPlace(value) {
  return value.toLocaleLowerCase("en-US");
}

const output = Object.fromEntries(
  areas.map((area) => {
    const index = hash(area.slug) % taglines.length;
    const place = area.name;
    const city =
      area.kind === "city" || !area.city || area.city === place
        ? place
        : `${place} in ${area.city}`;
    const priorLandmarks = Array.isArray(current[area.slug]?.landmarks)
      ? current[area.slug].landmarks.filter(
          (landmark) => typeof landmark === "string" && landmark.trim()
        )
      : [];

    return [
      area.slug,
      {
        tagline: `${place}: ${taglines[index]}`,
        landmarks: priorLandmarks,
        common_calls: callSets[index],
        neighborhood_notes: `${city} is within our regular Metro Detroit painting service area. ${propertyNotes[index]}`,
        keywords: [
          `${lowerPlace(place)} painters`,
          `painting company ${lowerPlace(place)} mi`,
          `interior painting ${lowerPlace(place)}`,
          `exterior painting ${lowerPlace(place)}`,
          `house painters ${lowerPlace(place)}`,
          `commercial painting ${lowerPlace(place)}`,
        ],
      },
    ];
  })
);

writeFileSync(
  join(ROOT, "content/area-insights.json"),
  `${JSON.stringify(output, null, 2)}\n`
);
console.log(`Wrote painting insights for ${Object.keys(output).length} service areas`);
