import type { Metadata } from "next";
import { AREAS, CITIES } from "@/lib/areas";
import { AreaSearch } from "@/components/site/AreaSearch";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BIZ } from "@/lib/business";
import { openGraphFor, SITE_OG_CARD } from "@/lib/meta";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";

const TITLE = "Service Areas — Metro Detroit Painting";
const DESCRIPTION = `${BIZ.name} serves ${AREAS.length} Metro Detroit cities, communities, and neighborhoods. Search your area and request a painting quote.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${BIZ.url}/service-areas` },
  // Without an openGraph of its own this route inherited the root layout's object
  // wholesale, so the card announced the homepage headline two lines under a
  // canonical that named this page. Same wholesale-inheritance defect aa7acb5
  // closed for the 111 dynamic routes and b88e4df closed for og:url. og:title
  // mirrors the rendered <title>, which takes the layout's ` — ${BIZ.name}`
  // template; openGraph.title does not, so the suffix is spelled out.
  openGraph: openGraphFor({
    path: "/service-areas",
    title: `${TITLE} — ${BIZ.name}`,
    description: DESCRIPTION,
    // This route owns no opengraph-image of its own, and replacing the parent
    // object drops the inherited card, so the site card is restated here.
    images: SITE_OG_CARD,
  }),
};

export default function AreasPage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Service Areas</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Every corner of <span className="text-brass-gradient">Metro Detroit</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-ink-200">
            We cover {AREAS.length} cities, communities, and neighborhoods — from {CITIES[0]?.name} to {CITIES[CITIES.length - 1]?.name}.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <AreaSearch areas={AREAS} />
        </div>
      </section>
      <LongFormFaq subject="Metro Detroit Painting" kind="service" />
      <BuyersGuide />
      <FinalCTA />
    </>
  );
}
