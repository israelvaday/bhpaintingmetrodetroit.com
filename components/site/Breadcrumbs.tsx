import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BIZ } from "@/lib/business";
import { breadcrumbJsonLd } from "@/lib/schema";

export type Crumb = { name: string; href: string };

/**
 * next.config sets trailingSlash: true, so every canonical on this site ends in
 * a slash. next/link rewrites its own hrefs, but the JSON-LD `item` values are
 * plain strings and have to match the canonical exactly or the two disagree.
 */
function absolute(href: string): string {
  const path = href.endsWith("/") ? href : `${href}/`;
  return `${BIZ.url}${path}`;
}

/**
 * Visible breadcrumb trail plus the BreadcrumbList JSON-LD for the same trail,
 * built from one list so the markup and the structured data cannot drift apart.
 *
 * "Home" is prepended here; callers pass only the levels below it. The last
 * crumb is the current page and is not a link.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  const lastIndex = trail.length - 1;

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-ink-800 bg-ink-950">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-1.5 gap-y-1 px-4 py-3 text-xs text-ink-400 md:px-6">
          {trail.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-ink-600" />}
              {i === lastIndex ? (
                <span aria-current="page" className="font-semibold text-ink-200">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="transition-colors hover:text-brass-400">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(trail.map((c) => ({ name: c.name, url: absolute(c.href) })))
          ),
        }}
      />
    </>
  );
}
