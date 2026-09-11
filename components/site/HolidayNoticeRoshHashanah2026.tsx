"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";

// HOLIDAY-NOTICE rosh-hashanah-2026. Temporary homepage notice, owner request
// 2026-09-11. Delete this file together with its import and the marked JSX in
// app/page.tsx once the holiday is over.
//
// Server and client both render the notice on the first pass, so hydration
// always matches. After mount, a visitor whose clock is past the reopening time
// no longer sees it, in case the removal commit has not shipped yet.
const REOPENS_AT = Date.parse("2026-09-14T09:00:00-04:00");

export function RoshHashanahNotice2026() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (Date.now() >= REOPENS_AT) setShow(false);
  }, []);

  if (!show) return null;

  return (
    <aside
      aria-label="Rosh Hashanah holiday closure"
      className="border-b border-brass-500/30 bg-brass-500/10"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-2 px-4 py-3 text-sm text-ink-100 md:px-6">
        <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
        <p className="leading-relaxed">
          <strong className="font-semibold text-white">Closed for Rosh Hashanah.</strong>{" "}
          We are closed Saturday, September 12 and Sunday, September 13, and reopen Monday, September 14 at 9:00 AM. Shana Tova!{" "}
          <Link
            href="/blog/happy-rosh-hashanah-2026/"
            className="font-semibold text-brass-300 underline-offset-4 hover:text-brass-200 hover:underline"
          >
            Holiday hours
          </Link>
        </p>
      </div>
    </aside>
  );
}
