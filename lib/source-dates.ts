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

/**
 * A commit whose message carries the trailer line `Sitemap-Lastmod: keep` is skipped
 * here. It is for commits that change no page's main content: sitewide chrome such as
 * a button label, metadata, or an unused field in lib/business.ts. Without it, an edit
 * to any GLOBAL file in app/sitemap.ts redates every static, service and area url at
 * once although no page body changed, which is the inaccurate lastmod this file exists
 * to prevent. A commit that rewrites what a page says must NOT carry the trailer.
 * Added 2026-09-30 (the owner's contact-forms-only change); not part of the bh-kitchen
 * port. With no commit carrying it, every date is exactly what it was before.
 *
 * THE RULE, tightened 2026-09-30 after review: the trailer is allowed only when the
 * commit's diff changes no sentence that any page shows in its main content. One body
 * sentence on one page is enough to forbid it; split such a commit into a chrome commit
 * (with the trailer) and a copy commit (without it). The skip is silent, so a wrong
 * trailer hides a real edit from every url its files date. The first commit to carry it,
 * 3dfe2973, broke this rule: besides chrome it changed the service-page cost paragraph
 * and insurance sentence, area-page sentences, the Dearborn and fence details and blog
 * closers. The service pages were redated by the commit that fixed the cost sentence;
 * the area pages kept their earlier date. Recorded in gotham-ops clients.json (bh-painting
 * notes) and the bh-painting routine SKILL.md.
 */
const KEEP_LASTMOD_TRAILER = "^Sitemap-Lastmod: keep$";

/** Build time. The fallback whenever git cannot answer — never worse than the old behaviour. */
const BUILD_TIME = new Date();

function gitDate(paths: string[]): Date | null {
  try {
    const out = execFileSync(
      "git",
      [
        "log", "-1", "--format=%cI",
        "--invert-grep", `--grep=${KEEP_LASTMOD_TRAILER}`,
        "--", ...paths.map((p) => `:(literal)${p}`),
      ],
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
