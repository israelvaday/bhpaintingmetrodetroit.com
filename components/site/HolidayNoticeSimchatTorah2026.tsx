"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

// HOLIDAY-NOTICE simchat-torah-2026. Temporary homepage notice, owner request
// 2026-09-30. Delete this file together with its import, the marked JSX in
// app/page.tsx, and the two marked homepage lastmod blocks in app/sitemap.ts
// once the holiday is over.
//
// Server and client both render the notice on the first pass, so hydration
// always matches. After mount, a visitor whose clock is past the reopening time
// no longer sees it, in case the removal commit has not shipped yet.
const REOPENS_AT = Date.parse("2026-10-05T09:00:00-04:00");

export function SimchatTorahNotice2026() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (Date.now() >= REOPENS_AT) setShow(false);
  }, []);

  if (!show) return null;

  return (
    <aside
      aria-label="Shemini Atzeret and Simchat Torah holiday closure"
      data-holiday-notice="simchat-torah-2026"
      className="border-b border-brass-500/30 bg-brass-500/10"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-2 px-4 py-3 text-sm text-ink-100 md:px-6">
        <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
        <p className="leading-relaxed">
          <strong className="font-semibold text-white">Closed for Shemini Atzeret and Simchat Torah.</strong>{" "}
          We are closed Saturday, October 3 and Sunday, October 4, and reopen Monday, October 5 at 9:00 AM. Chag Sameach!
        </p>
      </div>
    </aside>
  );
}
