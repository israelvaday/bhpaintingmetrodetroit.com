import type { MetadataRoute } from "next";
import { BIZ } from "@/lib/business";
import { SERVICES } from "@/content/services";
import { AREAS } from "@/lib/areas";
import { BLOG_POSTS } from "@/content/blog";
import { lastChanged } from "@/lib/source-dates";

export const dynamic = "force-static";

// Files that render into every page, so a change to any of them genuinely changes
// every url's html. Folded into every group's date rather than special-cased.
// Footer.tsx was missing and belongs here on the list's own stated criterion: the
// layout renders it on all 135 pages, so a footer edit changes all 135 and none of
// them got a refetch signal for it.
const GLOBAL = ["app/layout.tsx", "lib/business.ts", "components/site/Footer.tsx"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BIZ.url;
  // next.config.ts sets trailingSlash: true on export, so every page is served at
  // /path/ and its canonical carries the slash. Emitting /path here made all 128
  // non-homepage entries 301 redirects that disagreed with their own canonical.
  const loc = (p: string) => `${base}${p}/`;
  const staticPages = [
    "", "/services", "/service-areas", "/about", "/license",
    "/gallery", "/reviews", "/contact", "/hours", "/quote",
    "/blog", "/faq",
  ];
  return [
    ...staticPages.map((p) => ({
      url: loc(p),
      // Each of these routes is one file, so its own commit date is the honest
      // answer. Previously all twelve claimed the build timestamp.
      lastModified: lastChanged(...GLOBAL, `app${p}/page.tsx`),
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1.0 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: loc(`/services/${s.slug}`),
      lastModified: lastChanged(
        ...GLOBAL,
        "app/services/[slug]/page.tsx",
        "content/services.ts",
        "components/site/LongFormFaq.tsx",
        "components/site/Breadcrumbs.tsx",
      ),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: loc(`/blog/${p.slug}`),
      // Already a real content date, not a build stamp. Left alone.
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...AREAS
      .filter((a) => a.kind !== "zip-area") // exclude noindex zip-area pages from sitemap for first 30 days
      .map((a) => ({
        url: loc(`/service-areas/${a.slug}`),
        // No lib/area-insights.ts on this clone — kitchen has one, painting reads
        // content/area-insights.json directly. Listing an absent path would make
        // the whole pathspec group fail, so it is left out rather than carried over.
        lastModified: lastChanged(
          ...GLOBAL,
          "app/service-areas/[slug]/page.tsx",
          "lib/areas.ts",
          "content/area-insights.json",
          "components/site/LongFormFaq.tsx",
          "components/site/Breadcrumbs.tsx",
        ),
        changeFrequency: "monthly" as const,
        priority: a.main ? 0.8 : 0.6,
      })),
  ];
}
