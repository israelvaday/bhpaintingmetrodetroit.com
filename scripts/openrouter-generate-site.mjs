/**
 * Generate BH Painting Metro Detroit image assets and local painting insights.
 *
 * Usage:
 *   node scripts/openrouter-generate-site.mjs --test [--force]
 *   node scripts/openrouter-generate-site.mjs --images-blog [--force]
 *   node scripts/openrouter-generate-site.mjs --images-gallery [--force]
 *   node scripts/openrouter-generate-site.mjs --images-brand [--force]
 *   node scripts/openrouter-generate-site.mjs --images-quote [--force]
 *   node scripts/openrouter-generate-site.mjs --areas [--force]
 *   node scripts/openrouter-generate-site.mjs --all [--force]
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  chatJson,
  generateImage,
  getOpenRouterKey,
  loadEnvLocal,
  sleep,
} from "./openrouter-lib.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BUSINESS_NAME = "BH Painting Metro Detroit";
const PHONE = "(313) 236-4558";
const PHOTO_STYLE =
  "Photorealistic professional painting project photographed on a full-frame camera, authentic Metro Detroit property, realistic materials and tools, natural Michigan light, balanced editorial composition";
const NO_TEXT =
  "No visible words, letters, labels, signs, logos, watermarks, captions, UI, or artificial CGI styling";

const SERVICE_HEROES = [
  {
    slug: "interior-painting",
    prompt:
      "Insured professional painter rolling a warm neutral finish in a bright occupied living room, floors and furniture carefully protected",
  },
  {
    slug: "exterior-painting",
    prompt:
      "Professional painter applying an exterior coating to a well-kept Michigan colonial home, safe ladder setup and prepared siding",
  },
  {
    slug: "cabinet-painting",
    prompt:
      "Professional cabinet painter finishing labeled kitchen doors in a clean controlled work area, refined navy coating",
  },
  {
    slug: "commercial-painting",
    prompt:
      "Professional painting crew refreshing a modern occupied office after business hours, organized protected work zone",
  },
  {
    slug: "deck-fence-staining",
    prompt:
      "Professional painter staining clean dry deck boards behind a Michigan home, rich natural wood tone and careful application",
  },
  {
    slug: "trim-door-painting",
    prompt:
      "Close professional painting detail of crisp white trim and an interior paneled door, careful brushwork and floor protection",
  },
  {
    slug: "ceiling-painting",
    prompt:
      "Professional painter rolling a bright flat ceiling in a furnished Metro Detroit room with complete masking below",
  },
  {
    slug: "rental-turnover-painting",
    prompt:
      "Professional painting crew refreshing a vacant Metro Detroit apartment between residents, clean efficient room setup",
  },
  {
    slug: "wallpaper-removal",
    prompt:
      "Professional painter carefully removing wallpaper in controlled sections and cleaning the exposed interior surface",
  },
  {
    slug: "color-consultation",
    prompt:
      "Professional painter and homeowner comparing unlabeled color swatches beside flooring and wood trim in natural daylight",
  },
];

const BLOG_IMAGES = [
  {
    slug: "interior-paint-colors-metro-detroit",
    hero:
      "Homeowner comparing several unlabeled warm neutral paint samples in a bright Metro Detroit living room",
    secondary:
      "Professional painter applying a generous color sample beside stained wood trim under natural window light",
  },
  {
    slug: "exterior-paint-michigan-weather",
    hero:
      "Professional painter coating prepared siding on a Michigan home during mild clear weather",
    secondary:
      "Painter checking clean dry exterior wood before applying primer, authentic close job detail",
  },
  {
    slug: "cabinet-painting-vs-replacement",
    hero:
      "Finished Metro Detroit kitchen with professionally painted navy cabinets and subtle brass hardware",
    secondary:
      "Professional painter applying a smooth cabinet-grade finish to organized labeled cabinet doors",
  },
  {
    slug: "hire-painting-contractor-michigan",
    hero:
      "Homeowner reviewing an unbranded written painting scope with an insured professional painter at a kitchen island",
    secondary:
      "Organized professional painters protecting floors and furnishings before an interior project",
  },
  {
    slug: "commercial-painting-minimal-downtime",
    hero:
      "Professional painters refreshing a modern Metro Detroit office during quiet after-hours",
    secondary:
      "Commercial corridor divided into neat protected painting zones with clear open walking space",
  },
  {
    slug: "deck-staining-michigan-climate",
    hero:
      "Freshly stained wood deck behind a Metro Detroit home during mild summer weather",
    secondary:
      "Professional painter checking clean dry deck boards before applying semi-transparent stain",
  },
];

const GALLERY_IMAGES = [
  {
    file: "painting-gallery--interior-living-room.png",
    prompt:
      "Professional painter rolling an even warm-white finish in a sunlit Metro Detroit living room with meticulous floor protection",
  },
  {
    file: "painting-gallery--exterior-brick-home.png",
    prompt:
      "Professional painter coating prepared trim on a classic brick Michigan home with a safe organized setup",
  },
  {
    file: "painting-gallery--cabinet-finish.png",
    prompt:
      "Close view of a professional painter applying a smooth durable finish to kitchen cabinet doors in a controlled area",
  },
  {
    file: "painting-gallery--commercial-office.png",
    prompt:
      "Painting crew refreshing a modern Metro Detroit office with protected carpet and organized work zones",
  },
  {
    file: "painting-gallery--deck-staining.png",
    prompt:
      "Professional staining of clean dry deck boards with rich semi-transparent color at a Michigan home",
  },
  {
    file: "painting-gallery--trim-detail.png",
    prompt:
      "Detailed professional brush application on crisp interior baseboard and window trim",
  },
  {
    file: "painting-gallery--ceiling-rolling.png",
    prompt:
      "Professional painter rolling a high ceiling above a fully protected furnished room",
  },
  {
    file: "painting-gallery--rental-turnover.png",
    prompt:
      "Efficient professional repaint of a clean vacant apartment between residents in Metro Detroit",
  },
  {
    file: "painting-gallery--wallpaper-removal.png",
    prompt:
      "Careful wallpaper removal in controlled strips with protected floor and organized tools",
  },
  {
    file: "painting-gallery--color-sampling.png",
    prompt:
      "Painter placing several generous unlabeled color samples beside permanent wood and stone finishes",
  },
  {
    file: "painting-gallery--exterior-siding.png",
    prompt:
      "Professional exterior painter applying a durable finish to prepared lap siding in mild Michigan weather",
  },
  {
    file: "painting-gallery--occupied-office.png",
    prompt:
      "After-hours office painting with desks protected and a clean open path through the space",
  },
  {
    file: "painting-gallery--front-door.png",
    prompt:
      "Professional painter finishing a deep navy front door on a well-kept Metro Detroit home",
  },
  {
    file: "painting-gallery--multifamily-hallway.png",
    prompt:
      "Professional crew repainting a bright apartment hallway in carefully phased sections",
  },
];

const QUOTE_IMAGES = [
  ...SERVICE_HEROES.map(({ slug, prompt }) => ({
    file: `${slug}.png`,
    prompt: `Square website selection image, ${prompt}`,
  })),
  {
    file: "property-home.png",
    prompt:
      "Square view of a welcoming Michigan home interior being professionally painted with furnishings protected",
  },
  {
    file: "property-business.png",
    prompt:
      "Square view of a Metro Detroit business interior receiving a professional organized repaint",
  },
  {
    file: "property-multifamily.png",
    prompt:
      "Square view of a clean apartment common area being professionally repainted in phases",
  },
  {
    file: "property-other.png",
    prompt:
      "Square view of a detached garage studio interior receiving a careful professional repaint",
  },
];

const BRAND_IMAGES = [
  {
    path: "public/logo.png",
    logo: true,
    aspectRatio: "1:1",
    prompt:
      "Professional navy and warm gold brand logo, centered BH monogram integrated with a clean paint roller silhouette, premium geometric vector mark, strong contrast, transparent or plain background, no words beyond the BH monogram, no watermark",
  },
  {
    path: "public/photos/branding-generated--hero-painting-metro-detroit.png",
    aspectRatio: "16:9",
    prompt:
      "Wide cinematic website hero of a professional painter rolling a sophisticated navy accent wall in a bright Metro Detroit home, protected room, open composition for page overlay",
  },
  {
    path: "public/photos/branding-generated--metro-detroit-map.png",
    aspectRatio: "16:9",
    prompt:
      "Photorealistic tabletop service-area map visual showing the recognizable tri-county Metro Detroit region through unlabeled navy and gold location markers, painting swatches and roller nearby",
  },
  {
    path: "public/about/about-hero.png",
    aspectRatio: "16:9",
    prompt:
      "Wide editorial portrait of an insured professional painting team preparing rollers and drop cloths inside a bright Metro Detroit home",
  },
  {
    path: "public/about/about-workshop.png",
    aspectRatio: "16:9",
    prompt:
      "Professional painting team organizing clean brushes, rollers, sprayer equipment and sealed unbranded coating cans in a tidy workshop",
  },
];

function absolutePath(relativePath) {
  return join(ROOT, ...relativePath.split("/"));
}

function writeBuffer(outPath, buffer) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buffer);
  console.log("Wrote", outPath.replace(ROOT, ""));
}

function paintingPrompt(prompt) {
  return `${prompt}. Brand context: ${BUSINESS_NAME}, serving Metro Detroit, Michigan. ${PHOTO_STYLE}. ${NO_TEXT}.`;
}

async function generateAsset(key, imageModel, job, force) {
  const outPath = absolutePath(job.path);
  if (existsSync(outPath) && !force) {
    console.log("Skip existing", job.path);
    return false;
  }

  const prompt = job.logo ? job.prompt : paintingPrompt(job.prompt);
  const buffer = await generateImage(key, prompt, {
    model: imageModel,
    aspect_ratio: job.aspectRatio ?? "16:9",
    resolution: job.resolution ?? "1K",
    quality: job.quality ?? "high",
  });
  writeBuffer(outPath, buffer);
  return true;
}

async function runAssetJobs(key, imageModel, jobs, force) {
  for (const job of jobs) {
    try {
      const generated = await generateAsset(key, imageModel, job, force);
      if (generated) await sleep(1400);
    } catch (error) {
      console.error(`Failed ${job.path}:`, error instanceof Error ? error.message : error);
    }
  }
}

async function generateBlogImages(key, imageModel, force) {
  const jobs = BLOG_IMAGES.flatMap(({ slug, hero, secondary }) => [
    {
      path: `public/blog/${slug}-hero.png`,
      prompt: hero,
      aspectRatio: "16:9",
    },
    {
      path: `public/blog/${slug}-secondary.png`,
      prompt: secondary,
      aspectRatio: "16:9",
    },
  ]);
  await runAssetJobs(key, imageModel, jobs, force);
}

async function generateGalleryImages(key, imageModel, force) {
  const jobs = GALLERY_IMAGES.map(({ file, prompt }) => ({
    path: `public/photos/${file}`,
    prompt,
    aspectRatio: "16:9",
  }));
  await runAssetJobs(key, imageModel, jobs, force);
}

async function generateQuoteImages(key, imageModel, force) {
  const jobs = QUOTE_IMAGES.map(({ file, prompt }) => ({
    path: `public/photos/quote/${file}`,
    prompt,
    aspectRatio: "1:1",
  }));
  await runAssetJobs(key, imageModel, jobs, force);
}

async function refreshLogoCopies(force) {
  const logoPath = absolutePath("public/logo.png");
  if (!existsSync(logoPath)) return;

  const logo = readFileSync(logoPath);
  let sharp;
  try {
    ({ default: sharp } = await import("sharp"));
  } catch {
    console.warn("Image resizer unavailable; logo copies will retain source dimensions");
  }

  for (const size of [256, 512]) {
    const file = `logo-${size}.png`;
    const outPath = absolutePath(`public/${file}`);
    if (existsSync(outPath) && !force) continue;
    if (sharp) {
      await sharp(logoPath).resize(size, size, { fit: "contain" }).png().toFile(outPath);
      console.log("Wrote", outPath.replace(ROOT, ""));
    } else {
      writeBuffer(outPath, logo);
    }
  }
}

async function generateBrandImages(key, imageModel, force) {
  await runAssetJobs(key, imageModel, BRAND_IMAGES, force);
  await refreshLogoCopies(force);

  const serviceJobs = SERVICE_HEROES.map(({ slug, prompt }) => ({
    path: `public/photos/service-hero-${slug}.png`,
    prompt: `Wide service-page hero, ${prompt}`,
    aspectRatio: "16:9",
  }));
  await runAssetJobs(key, imageModel, serviceJobs, force);
}

async function generateTestImage(key, imageModel, force) {
  await runAssetJobs(
    key,
    imageModel,
    [
      {
        path: "public/photos/openrouter-test.png",
        prompt:
          "Close professional painting detail of a clean navy paint roller applying one even stripe on a prepared interior surface",
        aspectRatio: "1:1",
      },
    ],
    force
  );
}

function readJson(path, fallback) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

function stringList(value, maxItems = Number.MAX_SAFE_INTEGER) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => typeof item === "string" && item.trim())
    .map((item) => item.trim())
    .slice(0, maxItems);
}

function normalizeAreaInsight(area, candidate, previous) {
  const priorLandmarks = stringList(previous?.landmarks);
  const generatedLandmarks = stringList(candidate?.landmarks, 3);
  const tagline =
    typeof candidate?.tagline === "string" ? candidate.tagline.trim() : "";
  let neighborhoodNotes =
    typeof candidate?.neighborhood_notes === "string"
      ? candidate.neighborhood_notes.trim()
      : "";

  const exactName = area.name;
  const combined = `${tagline} ${neighborhoodNotes}`.toLocaleLowerCase();
  if (exactName && !combined.includes(exactName.toLocaleLowerCase())) {
    neighborhoodNotes = `${exactName} painting projects benefit from preparation suited to the property's age, materials, and exposure. ${neighborhoodNotes}`.trim();
  }

  return {
    tagline,
    landmarks: priorLandmarks.length ? priorLandmarks : generatedLandmarks,
    common_calls: stringList(candidate?.common_calls, 3),
    neighborhood_notes: neighborhoodNotes,
    keywords: stringList(candidate?.keywords, 7).map((keyword) =>
      keyword.toLocaleLowerCase()
    ),
  };
}

async function refreshAreaInsights(key, chatModel, force) {
  const areasPath = absolutePath("content/service-areas.json");
  const outputPath = absolutePath("content/area-insights.json");
  const areas = readJson(areasPath, []);
  const previous = readJson(outputPath, {});
  const output = force ? {} : { ...previous };

  if (!Array.isArray(areas) || !areas.length) {
    throw new Error("No service areas found");
  }

  if (force) {
    writeFileSync(outputPath, "{}\n");
    console.log("Started area insights from a clean output");
  }

  const system = `Write original local SEO data for ${BUSINESS_NAME}, an insured professional painting business serving Metro Detroit, Michigan. Return only a JSON object keyed by the supplied slug. Each value must contain: tagline (14 words maximum), landmarks (exactly the supplied landmarks in the same order; only generate three accurate landmarks when none are supplied), common_calls (three concise painting requests), neighborhood_notes (two or three useful sentences about local property styles, surfaces, color, weather, or maintenance), and keywords (six or seven lowercase local painting search phrases). Keep every supplied place name exact. Do not claim ratings, awards, or licensing. Discuss painting only and do not mention unrelated construction trades.`;
  const batchSize = 8;

  for (let index = 0; index < areas.length; index += batchSize) {
    const batch = areas.slice(index, index + batchSize);
    const request = batch.map((area) => ({
      slug: area.slug,
      name: area.name,
      city: area.city,
      kind: area.kind,
      landmarks: stringList(previous[area.slug]?.landmarks),
    }));

    try {
      console.log(`Area batch ${Math.floor(index / batchSize) + 1}`);
      const generated = await chatJson(
        key,
        chatModel,
        system,
        `Create painting insights for this exact JSON input:\n${JSON.stringify(request, null, 2)}`,
        0.55
      );

      for (const area of batch) {
        const candidate = generated?.[area.slug];
        if (!candidate || typeof candidate !== "object") {
          console.error(`Missing generated insight for ${area.slug}`);
          continue;
        }
        output[area.slug] = normalizeAreaInsight(
          area,
          candidate,
          previous[area.slug]
        );
      }

      writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);
      await sleep(800);
    } catch (error) {
      console.error(
        `Failed area batch ${Math.floor(index / batchSize) + 1}:`,
        error instanceof Error ? error.message : error
      );
    }
  }

  console.log(`Area insights: ${Object.keys(output).length}/${areas.length}`);
}

function printUsage() {
  console.log(
    "Pass --test, --images-blog, --images-gallery, --images-brand, --images-quote, --areas, or --all. Add --force to replace existing output."
  );
}

async function main() {
  const args = process.argv.slice(2);
  const validFlags = new Set([
    "--test",
    "--images-blog",
    "--images-gallery",
    "--images-brand",
    "--images-quote",
    "--areas",
    "--all",
    "--force",
  ]);
  const unknownFlags = args.filter((arg) => !validFlags.has(arg));
  if (unknownFlags.length) {
    throw new Error(`Unknown flag${unknownFlags.length > 1 ? "s" : ""}: ${unknownFlags.join(", ")}`);
  }

  const hasMode = args.some((arg) => arg !== "--force");
  if (!hasMode) {
    printUsage();
    return;
  }

  loadEnvLocal();
  const key = getOpenRouterKey();
  if (!key) {
    throw new Error("Set OPENROUTER_API_KEY in .env.local");
  }

  const force = args.includes("--force");
  const all = args.includes("--all");
  const chatModel =
    process.env.OPENROUTER_CHAT_MODEL || "google/gemini-2.5-flash";
  const imageModel =
    process.env.OPENROUTER_IMAGE_MODEL || "google/gemini-3-pro-image-preview";
  let productionImagesChanged = false;

  if (args.includes("--test")) {
    await generateTestImage(key, imageModel, force);
  }
  if (all || args.includes("--images-blog")) {
    await generateBlogImages(key, imageModel, force);
    productionImagesChanged = true;
  }
  if (all || args.includes("--images-gallery")) {
    await generateGalleryImages(key, imageModel, force);
    productionImagesChanged = true;
  }
  if (all || args.includes("--images-brand")) {
    await generateBrandImages(key, imageModel, force);
    productionImagesChanged = true;
  }
  if (all || args.includes("--images-quote")) {
    await generateQuoteImages(key, imageModel, force);
    productionImagesChanged = true;
  }
  if (all || args.includes("--areas")) {
    await refreshAreaInsights(key, chatModel, force);
  }

  if (productionImagesChanged) {
    console.log("Rebuilding painting photo catalog");
    execFileSync(
      process.execPath,
      [absolutePath("scripts/rebuild-photos-gallery.mjs")],
      { cwd: ROOT, stdio: "inherit" }
    );
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
