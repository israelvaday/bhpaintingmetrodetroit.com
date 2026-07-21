/**
 * Rebuild content/photos.json from the current painting asset set only.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = join(ROOT, "content/photos.json");
const BUSINESS_NAME = "BH Painting Metro Detroit";
const REGION = "Metro Detroit, MI";

const SERVICES = [
  {
    slug: "interior-painting",
    label: "Interior painting",
  },
  {
    slug: "exterior-painting",
    label: "Exterior painting",
  },
  {
    slug: "cabinet-painting",
    label: "Cabinet painting",
  },
  {
    slug: "commercial-painting",
    label: "Commercial painting",
  },
  {
    slug: "deck-fence-staining",
    label: "Deck and fence staining",
  },
  {
    slug: "trim-door-painting",
    label: "Trim and door painting",
  },
  {
    slug: "ceiling-painting",
    label: "Ceiling painting",
  },
  {
    slug: "rental-turnover-painting",
    label: "Rental turnover painting",
  },
  {
    slug: "wallpaper-removal",
    label: "Wallpaper removal",
  },
  {
    slug: "color-consultation",
    label: "Color consultation",
  },
];

const GALLERY = [
  {
    file: "painting-gallery--interior-living-room.png",
    category: "interior",
    services: ["interior-painting"],
    alt: "Professional painter finishing a protected Metro Detroit living room",
  },
  {
    file: "painting-gallery--exterior-brick-home.png",
    category: "exterior",
    services: ["exterior-painting", "trim-door-painting"],
    alt: "Exterior trim painting on a brick Michigan home",
  },
  {
    file: "painting-gallery--cabinet-finish.png",
    category: "cabinets",
    services: ["cabinet-painting"],
    alt: "Smooth cabinet-grade finish applied in a controlled work area",
  },
  {
    file: "painting-gallery--commercial-office.png",
    category: "commercial",
    services: ["commercial-painting"],
    alt: "Protected Metro Detroit office during professional painting",
  },
  {
    file: "painting-gallery--deck-staining.png",
    category: "wood-staining",
    services: ["deck-fence-staining"],
    alt: "Semi-transparent stain applied to clean Michigan deck boards",
  },
  {
    file: "painting-gallery--trim-detail.png",
    category: "trim-doors",
    services: ["trim-door-painting", "interior-painting"],
    alt: "Crisp professional finish on interior window trim and baseboard",
  },
  {
    file: "painting-gallery--ceiling-rolling.png",
    category: "ceilings",
    services: ["ceiling-painting", "interior-painting"],
    alt: "Professional ceiling painting above a fully protected room",
  },
  {
    file: "painting-gallery--rental-turnover.png",
    category: "rental-turnover",
    services: ["rental-turnover-painting", "interior-painting"],
    alt: "Vacant Metro Detroit apartment prepared for new residents",
  },
  {
    file: "painting-gallery--wallpaper-removal.png",
    category: "wallpaper",
    services: ["wallpaper-removal", "interior-painting"],
    alt: "Careful wallpaper removal with floor protection",
  },
  {
    file: "painting-gallery--color-sampling.png",
    category: "color",
    services: ["color-consultation", "interior-painting"],
    alt: "Interior color samples reviewed beside permanent finishes",
  },
  {
    file: "painting-gallery--exterior-siding.png",
    category: "exterior",
    services: ["exterior-painting"],
    alt: "Durable exterior finish applied to prepared Michigan siding",
  },
  {
    file: "painting-gallery--occupied-office.png",
    category: "commercial",
    services: ["commercial-painting"],
    alt: "After-hours office painting with desks and floors protected",
  },
  {
    file: "painting-gallery--front-door.png",
    category: "trim-doors",
    services: ["trim-door-painting", "exterior-painting"],
    alt: "Deep navy finish on a Metro Detroit home's front door",
  },
  {
    file: "painting-gallery--multifamily-hallway.png",
    category: "commercial",
    services: ["commercial-painting", "rental-turnover-painting"],
    alt: "Apartment hallway repainted in carefully planned sections",
  },
];

function diskPath(src) {
  return join(ROOT, "public", ...src.replace(/^\/+/, "").split("/"));
}

function imageMeta(src) {
  const path = diskPath(src);
  const buffer = readFileSync(path);
  let width = 1600;
  let height = 900;

  if (
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer.toString("ascii", 1, 4) === "PNG"
  ) {
    width = buffer.readUInt32BE(16);
    height = buffer.readUInt32BE(20);
  }

  return {
    width,
    height,
    ratio: Number((width / height).toFixed(3)),
    orientation:
      width === height ? "square" : width > height ? "landscape" : "portrait",
    bytes: buffer.length,
    source: "openrouter-generated",
  };
}

function catalogAsset(asset) {
  const path = diskPath(asset.src);
  if (!existsSync(path)) {
    console.warn("Missing asset, not catalogued:", asset.src);
    return null;
  }
  return {
    ...asset,
    ...imageMeta(asset.src),
  };
}

const expectedAssets = [
  {
    id: "logo-master-on-navy",
    src: "/logo.png",
    alt: `${BUSINESS_NAME} navy and gold paint roller logo`,
    category: "brand",
    kind: "brand",
    services: ["brand"],
  },
  {
    id: "logo-icon-square",
    src: "/logo-256.png",
    alt: `${BUSINESS_NAME} BH logo icon`,
    category: "brand",
    kind: "brand",
    services: ["brand"],
  },
  {
    id: "logo-large-square",
    src: "/logo-512.png",
    alt: `${BUSINESS_NAME} large BH logo`,
    category: "brand",
    kind: "brand",
    services: ["brand"],
  },
  {
    id: "branding-hero-metro",
    src: "/photos/branding-generated--hero-painting-metro-detroit.png",
    alt: `${BUSINESS_NAME} professional painter working in a protected Michigan home`,
    category: "branding-generated",
    kind: "hero",
    services: SERVICES.map(({ slug }) => slug),
  },
  {
    id: "branding-map-metro",
    src: "/photos/branding-generated--metro-detroit-map.png",
    alt: `${BUSINESS_NAME} service area across ${REGION}`,
    category: "branding-generated",
    kind: "brand",
    services: ["brand"],
  },
  ...SERVICES.map(({ slug, label }) => ({
    id: `service-hero-${slug}`,
    src: `/photos/service-hero-${slug}.png`,
    alt: `${label} by ${BUSINESS_NAME} in ${REGION}`,
    category: "service-hero",
    kind: "hero",
    services: [slug],
  })),
  ...GALLERY.map(({ file, category, services, alt }) => ({
    id: file.replace(/\.png$/i, ""),
    src: `/photos/${file}`,
    alt: `${alt} — ${BUSINESS_NAME}, ${REGION}`,
    category,
    kind: "work",
    services,
  })),
];

const photos = expectedAssets.map(catalogAsset).filter(Boolean);
writeFileSync(OUTPUT, `${JSON.stringify(photos, null, 2)}\n`);
console.log(
  `Wrote ${photos.length}/${expectedAssets.length} current painting assets to content/photos.json`
);
