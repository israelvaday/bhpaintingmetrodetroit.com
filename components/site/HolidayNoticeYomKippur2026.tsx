"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";

// HOLIDAY-NOTICE yom-kippur-2026. Temporary homepage notice, owner request
// 2026-09-20. Delete this file together with its import, the marked JSX in
// app/page.tsx, and the homepage lastmod pin in app/sitemap.ts once the holiday
// is over.
//
// Server and client both render the notice on the first pass, so hydration
// always matches. After mount, a visitor whose clock is past the reopening time
// no longer sees it, in case the removal commit has not shipped yet.
const REOPENS_AT = Date.parse("2026-09-22T09:00:00-04:00");

export function YomKippurNotice2026() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (Date.now() >= REOPENS_AT) setShow(false);
  }, []);

  if (!show) return null;

  return (
    <aside
      aria-label="Yom Kippur holiday closure"
      className="border-b border-brass-500/30 bg-brass-500/10"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-2 px-4 py-3 text-sm text-ink-100 md:px-6">
        <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
        <p className="leading-relaxed">
          <strong className="font-semibold text-white">Closed for Yom Kippur.</strong>{" "}
          We are closed Sunday, September 20 and Monday, September 21, and reopen Tuesday, September 22 at 9:00 AM. Wishing an easy and meaningful fast.{" "}
          <Link
            href="/blog/yom-kippur-2026/"
            className="font-semibold text-brass-300 underline-offset-4 hover:text-brass-200 hover:underline"
          >
            Holiday hours
          </Link>
        </p>
      </div>
    </aside>
  );
}
