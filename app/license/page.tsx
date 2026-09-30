import type { Metadata } from "next";
import { Info } from "lucide-react";
import { BIZ } from "@/lib/business";
import { openGraphFor, SITE_OG_CARD } from "@/lib/meta";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LogoMark } from "@/components/site/Logo";

// Owner, 2026-09-30: there is no licence. The URL keeps answering 200 because it has
// been in the sitemap and in search since July, but the page claims nothing: no licence,
// no insurance, no bond, no credential. It only invites questions about the business.
// It is noindex, it is out of app/sitemap.ts, and nothing in the nav or footer links it.
const TITLE = "Business Details";
const DESCRIPTION = `Questions about ${BIZ.name} as a business? Call or email and ask us directly.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${BIZ.url}/license` },
  robots: { index: false, follow: true },
  // Without an openGraph of its own this route inherited the root layout's object
  // wholesale, so the card announced the homepage headline two lines under a
  // canonical that named this page. og:title mirrors the rendered <title>, which
  // takes the layout's title template; openGraph.title does not, so the suffix is
  // spelled out.
  openGraph: openGraphFor({
    path: "/license",
    title: `${TITLE} — ${BIZ.name}`,
    description: DESCRIPTION,
    // This route owns no opengraph-image of its own, and replacing the parent
    // object drops the inherited card, so the site card is restated here.
    images: SITE_OG_CARD,
  }),
};

export default function BusinessDetailsPage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <Info className="mx-auto h-10 w-10 text-brass-400" />
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Business details
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Have a question about {BIZ.name} as a business, or need details for a property or commercial project?
            Ask us directly and we will answer it.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-brass-500/30 bg-ink-900/50 p-6 text-center">
            <LogoMark className="mx-auto h-24 w-24 text-2xl" />
            <p className="mt-4 text-sm text-ink-300">
              Call {BIZ.phone} or email {BIZ.email}.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
