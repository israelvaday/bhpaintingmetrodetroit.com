import type { MetadataRoute } from "next";
import { BIZ } from "@/lib/business";
import { SERVICES } from "@/content/services";
import { AREAS } from "@/lib/areas";
import { BLOG_POSTS } from "@/content/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
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
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1.0 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: loc(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: loc(`/blog/${p.slug}`),
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...AREAS
      .filter((a) => a.kind !== "zip-area") // exclude noindex zip-area pages from sitemap for first 30 days
      .map((a) => ({
        url: loc(`/service-areas/${a.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: a.main ? 0.8 : 0.6,
      })),
  ];
}
