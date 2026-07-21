import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { SERVICES } from "@/content/services";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";
import { PaintingGlossary } from "@/components/site/PaintingGlossary";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: "Painting Project Inspiration",
  description: `Explore painting project inspiration from ${BIZ.name} for interiors, exteriors, cabinets, commercial spaces, trim, ceilings, decks, and fences.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const servicePhotos = SERVICES.map((service) => ({
    id: service.slug,
    src: `${base}/photos/service-hero-${service.slug}.png`,
    alt: `${service.name} project inspiration from ${BIZ.name}`,
    width: 1600,
    height: 900,
  }));
  const inGroup = (slugs: string[]) => servicePhotos.filter((photo) => slugs.includes(photo.id));

  const groups = [
    { key: "all", label: "All inspiration", photos: servicePhotos },
    {
      key: "interior",
      label: "Interiors",
      photos: inGroup(["interior-painting", "ceiling-painting", "wallpaper-removal", "color-consultation"]),
    },
    {
      key: "exterior",
      label: "Exteriors",
      photos: inGroup(["exterior-painting", "deck-fence-staining"]),
    },
    {
      key: "cabinets-trim",
      label: "Cabinets & trim",
      photos: inGroup(["cabinet-painting", "trim-door-painting"]),
    },
    {
      key: "commercial",
      label: "Commercial & rentals",
      photos: inGroup(["commercial-painting", "rental-turnover-painting"]),
    },
  ].filter((group) => group.photos.length > 0);

  return (
    <>
      <section className="border-b border-ink-800 bg-aurora py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Gallery</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Metro Detroit <span className="text-brass-gradient">painting inspiration</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-ink-200">
            Visual references for the kind of interior, exterior, cabinet, commercial, trim, ceiling, and wood-finishing
            work we perform.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-ink-400">
            Images are illustrative project inspiration and are not presented as completed customer projects.
          </p>
          <div className="mt-6">
            <ContactCTA size="md" />
          </div>
        </div>
      </section>

      <GalleryClient groups={groups} />

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm text-ink-200 md:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Using inspiration well</h2>
            <p className="mt-3">
              Save examples of colors, sheen, contrast, trim details, cabinet finishes, or exterior combinations you
              like. We can use them as a starting point, then account for your actual surfaces and lighting.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Before color approval</h2>
            <p className="mt-3">
              Review physical samples at the project under its real daylight and artificial light. Record the
              manufacturer, color number, product, and sheen before materials are ordered.
            </p>
          </div>
        </div>
      </section>

      <LongFormFaq subject="Painting Project Inspiration" kind="service" />
      <BuyersGuide />
      <PaintingGlossary />
    </>
  );
}
