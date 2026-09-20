/**
 * Build a meta description that ends where a human would end it.
 *
 * Service copy is written for the page body and runs 278-306 characters here, so
 * a blind `.slice(0, 160)` shipped snippets cut mid-word ("...We protect floors
 * and fu"). Prefer the last complete sentence that still fills the snippet;
 * otherwise cut on a word boundary and mark the truncation.
 *
 * Ported unchanged from bh-drywall (main 40a0354) - the three
 * github-pages-local-build repos share one codebase lineage and had the same bug
 * on the same line.
 */
import type { Metadata } from "next";
import { BIZ } from "@/lib/business";

const MAX_LENGTH = 160;

/** Below this a sentence-only cut wastes too much of the snippet, so use a word cut instead. */
const MIN_SENTENCE_LENGTH = 110;

export function metaDescription(text: string, max: number = MAX_LENGTH): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  // +1 so a terminator sitting at the budget edge is still visible with its following character.
  const window = clean.slice(0, max + 1);

  let sentenceEnd = -1;
  const terminator = /[.?!](?=\s|$)/g;
  let match: RegExpExecArray | null;
  while ((match = terminator.exec(window)) !== null) {
    if (match.index < max) sentenceEnd = match.index;
  }
  if (sentenceEnd >= MIN_SENTENCE_LENGTH) return window.slice(0, sentenceEnd + 1);

  const wordEnd = window.slice(0, max).lastIndexOf(" ");
  const body = wordEnd > 0 ? window.slice(0, wordEnd) : window.slice(0, max);
  return `${body.replace(/[\s,;:.\-–—]+$/, "")}…`;
}

/**
 * Open Graph block for a route that has an identity of its own.
 *
 * The root layout hardcodes `openGraph.url: BIZ.url`, and Next inherits that
 * object wholesale into every route that does not declare one — so the 101 area
 * pages and the 10 service pages were all announcing the homepage as their
 * address, two lines under a rel=canonical that named the page correctly, and
 * carrying the site-default headline instead of their own.
 *
 * Declaring `openGraph` on a route REPLACES the parent object rather than
 * merging into it (the blog route proves it: it sets openGraph and emits no
 * og:url at all), so `type`, `siteName` and `locale` have to be restated here.
 *
 * `images` defaults to absent. Each of the area and service routes owns an
 * `opengraph-image.tsx` that renders a per-slug PNG and exports its own `alt`;
 * naming images for those would shadow that per-slug image with the site
 * default, which is the regression 66fc4b5 fixed.
 *
 * A ROUTE THAT OWNS NO `opengraph-image` FILE MUST PASS `images`, and this was
 * measured on the 2026-09-19 build rather than assumed. b88e4df established that
 * the root `app/opengraph-image.tsx` still wins when the HOMEPAGE replaces the
 * parent object, because that file sits in the homepage's own segment. It does
 * NOT cascade the same way: the first build of the eleven static routes shipped
 * them with their own og:title and og:description and NO og:image at all, where
 * before the change they carried the root card by inheritance. Replacing the
 * parent object drops the inherited image, and a parent segment's file-convention
 * image does not refill it. Hence SITE_OG_CARD below.
 */
/**
 * The site card, for a route with an identity of its own but no per-slug image.
 *
 * `/opengraph-image.png` rather than the file-convention `/opengraph-image` route:
 * `scripts/sync-static-assets.mjs` writes the extensioned copy precisely because
 * Facebook and X prefer a real `.png`, and it is the same 132,202 bytes.
 */
export const SITE_OG_CARD: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: `${BIZ.name} — Metro Detroit painting company`,
  },
];

export function openGraphFor({
  path,
  title,
  description,
  images,
}: {
  path: string;
  title: string;
  description: string;
  images?: NonNullable<Metadata["openGraph"]>["images"];
}): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    siteName: BIZ.name,
    locale: "en_US",
    // Relative — Next resolves it against metadataBase and applies the
    // trailingSlash config, exactly as it already does for alternates.canonical.
    url: path,
    title,
    description,
    ...(images ? { images } : {}),
  };
}
