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

// HOLIDAY-NOTICE:START simchat-torah-2026 homepage lastmod pin
// The temporary closure notice is a component rendered from app/page.tsx, so the
// homepage group's git date would move to the day the notice shipped. Nothing the
// homepage says about painting changes, and a lastmod Google finds inaccurate is
// ignored site-wide, so the homepage keeps the lastmod it is already serving
// (1a90b43e, 2026-09-27 21:36 ET), or a later GLOBAL file date if one lands while
// the notice is up. Delete this block and the marked override below together with
// the notice, which puts the homepage back on lastChanged().
const SIMCHAT_TORAH_2026_HOME_PIN = new Date(
  Math.max(Date.parse("2026-09-28T01:36:10.000Z"), lastChanged(...GLOBAL).getTime()),
);
// HOLIDAY-NOTICE:END

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
      // answer. Previously all twelve claimed the build timestamp. The blog
      // index also lists every post from content/blog.ts, so a new post changes
      // /blog/ and that file counts toward its date.
      lastModified: lastChanged(
        ...GLOBAL,
        `app${p}/page.tsx`,
        ...(p === "/blog" ? ["content/blog.ts"] : []),
      ),
      // HOLIDAY-NOTICE:START simchat-torah-2026 homepage lastmod override
      ...(p === "" ? { lastModified: SIMCHAT_TORAH_2026_HOME_PIN } : {}),
      // HOLIDAY-NOTICE:END
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
      // A real content date, not a build stamp: the publication date, or the
      // post's own `updated` once its title or body changed after publishing.
      lastModified: new Date(p.updated ?? p.date),
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
          "content/area-detail.ts",
          "components/site/LongFormFaq.tsx",
          "components/site/Breadcrumbs.tsx",
        ),
        changeFrequency: "monthly" as const,
        priority: a.main ? 0.8 : 0.6,
      })),
  ];
}
