import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { openGraphFor } from "@/lib/meta";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { PhotoMarquee } from "@/components/sections/PhotoMarquee";
import { AreaTeaser } from "@/components/sections/AreaTeaser";
import { CustomerExperience } from "@/components/sections/CustomerExperience";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServiceMap } from "@/components/site/ServiceMap";
import { AvailabilityChecker } from "@/components/site/HomeDispatchTracker";
import { Reveal } from "@/components/site/Reveal";
import { LazyParallax, LazyFloatOnScroll } from "@/components/site/LazyScrollFx";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";
import { PaintingGlossary } from "@/components/site/PaintingGlossary";
// HOLIDAY-NOTICE import: delete together with the marked JSX below (sukkot-2026)
import { SukkotNotice2026 } from "@/components/site/HolidayNoticeSukkot2026";

export const metadata: Metadata = {
  // The brand and the city lead. The old title named neither, and at least three
  // other businesses trade as "BH Painting" (New Jersey among them), so a brand
  // search had nothing in the title to tell this Metro Detroit company apart.
  // Every business title on page one for the Detroit head terms names its city.
  // The root layout template does not apply to the root page, so this renders as is.
  title: `${BIZ.name} | Interior, Exterior & Commercial`,
  description:
    `${BIZ.name} provides interior, exterior, cabinet, commercial, trim, ceiling, and staining services across Metro Detroit. Request a free estimate.`,
  // The root layout no longer carries a url, so the homepage states its own.
  // Title and description are the root layout's previous OG values verbatim:
  // the brand-forward pair reads better on a shared card than the page title.
  openGraph: openGraphFor({
    path: "/",
    title: `${BIZ.name} — Metro Detroit Painting Company`,
    description:
      "Interior, exterior, cabinet, commercial, trim, ceiling, and staining services across Wayne, Oakland & Macomb counties.",
  }),
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HOLIDAY-NOTICE:START sukkot-2026 */}
      <SukkotNotice2026 />
      {/* HOLIDAY-NOTICE:END */}
      <Hero />
      <section className="border-y border-ink-800 bg-ink-950/60 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal variant="zoom">
            <LazyFloatOnScroll>
              <AvailabilityChecker />
            </LazyFloatOnScroll>
          </Reveal>
        </div>
      </section>
      <ServiceGrid />
      <BrandShowcase />
      <PhotoMarquee />
      <Reveal variant="bounce">
        <AreaTeaser />
      </Reveal>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal variant="bounce">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Coverage</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                All of Metro Detroit — service coverage map.
              </h2>
            </div>
          </Reveal>
          <LazyParallax strength={-40}>
            <Reveal variant="zoom" delay={0.05}>
              <ServiceMap
                lat={BIZ.metroMap.lat}
                lng={BIZ.metroMap.lng}
                zoom={BIZ.metroMap.zoom}
                title="Metro Detroit, MI"
                height={420}
              />
            </Reveal>
          </LazyParallax>
        </div>
      </section>
      <Reveal variant="bounce">
        <CustomerExperience />
      </Reveal>
      <LongFormFaq subject="Metro Detroit Painting" kind="service" />
      <BuyersGuide />
      <PaintingGlossary />
      <Reveal variant="zoom">
        <FinalCTA />
      </Reveal>
    </>
  );
}
