import { execFileSync } from "node:child_process";

/**
 * Last-commit date for the source files that actually render a route group.
 *
 * WHY THIS EXISTS. `app/sitemap.ts` stamped `lastModified: new Date()` on 123 of
 * the 131 urls, so every build told Google that every page had changed that
 * minute — and this site rebuilds daily, so the claim was made daily. Google's
 * sitemap documentation is explicit that a lastmod it finds to be inconsistently
 * accurate is ignored for the whole site. The pages that paid for it were the
 * ones that had genuinely not moved: seven static routes last edited 2026-07-21
 * were advertising a fresh change every morning for five weeks.
 *
 * Granularity is the file, not the url. All 101 area pages share one date
 * because one template and one data file render all 101 — when either changes,
 * all 101 genuinely did change. That is over-broad in the other direction (a
 * one-city edit to lib/areas.ts redates the group) but it is still a statement
 * about content rather than about build time.
 *
 * Ported from bh-kitchen's `lib/source-dates.ts` (402e157) unchanged, so the two
 * clones of this codebase keep one implementation between them.
 *
 * Pathspecs are passed with `:(literal)` because route paths contain `[slug]`,
 * which git would otherwise read as a character class. execFileSync takes an
 * argv array, so no shell sees these strings and no quoting can go wrong.
 */

const cache = new Map<string, Date>();

/** Build time. The fallback whenever git cannot answer — never worse than the old behaviour. */
const BUILD_TIME = new Date();

function gitDate(paths: string[]): Date | null {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...paths.map((p) => `:(literal)${p}`)],
      { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (!out) return null;
    const d = new Date(out);
    return Number.isNaN(d.getTime()) ? null : d;
  } catch {
    // No git binary, no repository, or a shallow clone with no history for the
    // path. All three mean "cannot tell", which is what the fallback is for.
    return null;
  }
}

/**
 * The most recent commit date across `paths`. Memoised per call site: a build
 * renders 101 area pages from one answer, so this shells out once per group.
 */
export function lastChanged(...paths: string[]): Date {
  const key = paths.join("\u0000");
  const hit = cache.get(key);
  if (hit) return hit;
  const d = gitDate(paths) ?? BUILD_TIME;
  cache.set(key, d);
  return d;
}
