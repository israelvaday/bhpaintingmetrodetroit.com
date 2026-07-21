import type { Metadata } from "next";
import Image from "next/image";
import { BIZ } from "@/lib/business";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";

const FAQ_SECTIONS = [
  {
    id: "scope",
    emoji: "📋",
    title: "Estimates & scope",
    description: "How painting projects are defined before work begins.",
    items: [
      {
        q: "What information helps you prepare an estimate?",
        a: "The property address, surfaces, approximate dimensions, current condition, desired colors, access, occupancy, and preferred timing are useful. Photos can help clarify the request, but some projects still require an on-site review.",
      },
      {
        q: "What should a painting scope include?",
        a: "It should identify included and excluded surfaces, preparation, primer where needed, paint products, colors, sheen, planned coats or finished-appearance expectations, protection, access, cleanup, and change-order handling.",
      },
      {
        q: "Do you work on homes, businesses, and rentals?",
        a: "Yes. The service menu includes residential interiors and exteriors, cabinets, trim, ceilings, commercial spaces, rental turnovers, decks and fences, wallpaper removal, and color consultation.",
      },
    ],
  },
  {
    id: "finish",
    emoji: "🎨",
    title: "Paint & finish",
    description: "Primer, colors, sheen, coats, and samples.",
    items: [
      {
        q: "Does every surface need primer?",
        a: "No. Primer is selected for the substrate and condition. Bare areas, repairs, stains, adhesion concerns, and major color changes are common reasons to use it, while sound previously painted surfaces may only need spot primer.",
      },
      {
        q: "How many coats will I need?",
        a: "Coverage depends on the existing color, new color, product, surface porosity, and application method. The coating system should be defined for your project instead of relying on a universal coat count.",
      },
      {
        q: "How do I choose a sheen?",
        a: "Consider washability, reflected light, surface condition, and room use. Flat and matte reduce reflection; eggshell and satin add washability; semi-gloss is often considered for trim, doors, and selected moisture-prone areas.",
      },
      {
        q: "How should I approve a color?",
        a: "Review a physical sample in the actual space or exterior area at different times of day. Record the manufacturer, color name and number, product, and sheen before materials are ordered.",
      },
    ],
  },
  {
    id: "process",
    emoji: "🖌️",
    title: "Preparation & process",
    description: "What happens before and during painting.",
    items: [
      {
        q: "What surface preparation may be needed?",
        a: "Depending on condition, preparation may include washing, scraping loose coating, sanding glossy areas, filling minor defects, caulking selected gaps, and spot priming. Repairs outside painting should be identified separately.",
      },
      {
        q: "How are floors, furniture, and landscaping protected?",
        a: "The protection plan depends on the project. It may include moving or covering furnishings, masking fixtures, protecting flooring, and planning for nearby landscaping and hardscape.",
      },
      {
        q: "Can exterior dates change because of weather?",
        a: "Yes. Temperature, moisture, rain, wind, direct sun, and the selected product's application requirements can affect exterior scheduling.",
      },
    ],
  },
  {
    id: "closeout",
    emoji: "✨",
    title: "Cleanup & closeout",
    description: "How the completed scope is reviewed.",
    items: [
      {
        q: "What happens during the final walkthrough?",
        a: "The completed work is reviewed against the agreed scope. Any agreed touch-ups or punch-list items should be documented before closeout.",
      },
      {
        q: "What happens to leftover paint?",
        a: "If usable touch-up paint remains, confirm whether it will be labeled and left at the property. Storage and disposal should follow the product label and local requirements.",
      },
      {
        q: "What are your business hours?",
        a: "Sunday is closed. Monday through Friday hours are 7:00 AM to 6:00 PM, and Saturday hours are 8:00 AM to 2:00 PM.",
      },
    ],
  },
];

const ALL_FAQ_ITEMS = FAQ_SECTIONS.flatMap((section) => section.items);

export const metadata: Metadata = {
  title: "Painting FAQ — Metro Detroit",
  description: `Answers from ${BIZ.name} about painting estimates, surface preparation, primer, sheen, coats, color, exterior weather, and cleanup.`,
  alternates: { canonical: `${BIZ.url}/faq` },
};

export default function FAQPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">FAQ</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Practical answers about <span className="text-brass-gradient">painting</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-ink-200 md:mx-0">
              Scope, preparation, primer, products, color, sheen, coats, weather, protection, and cleanup.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-brass-500/30">
            <Image
              src={`${base}/photos/branding-generated--hero-painting-metro-detroit.png`}
              alt="Metro Detroit painting project inspiration"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink-800 bg-ink-950 py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider md:text-sm">
            {FAQ_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-900/70 px-3 py-1.5 text-ink-200 transition hover:border-brass-500/60 hover:text-brass-300"
                >
                  <span>{section.emoji}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-12 px-4 md:px-6">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-28">
              <div className="mb-5 text-center">
                <div className="text-3xl">{section.emoji}</div>
                <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-ink-400">{section.description}</p>
              </div>
              <FAQAccordion items={[...section.items]} sectionId={section.id} />
            </div>
          ))}
        </div>
      </section>

      <LongFormFaq subject="Metro Detroit Painting" kind="service" />
      <FinalCTA />
    </>
  );
}
