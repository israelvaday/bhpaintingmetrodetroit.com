import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { openGraphFor, SITE_OG_CARD } from "@/lib/meta";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";

// Owner, 2026-09-30: contact forms only, no quotes and no prices. The URL stays /quote/
// (links, sentinel and search history all point here); the page is the contact form.
const TITLE = "Painting Project Contact Form";
const DESCRIPTION = `Send ${BIZ.name} a message about your painting project. Choose a service and property type, describe the project, and optionally upload photos or documents.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/quote" },
  // Without an openGraph of its own this route inherited the root layout's object
  // wholesale, so the card announced the homepage headline two lines under a
  // canonical that named this page. Same wholesale-inheritance defect aa7acb5
  // closed for the 111 dynamic routes and b88e4df closed for og:url. og:title
  // mirrors the rendered <title>, which takes the layout's ` — ${BIZ.name}`
  // template; openGraph.title does not, so the suffix is spelled out.
  openGraph: openGraphFor({
    path: "/quote",
    title: `${TITLE} — ${BIZ.name}`,
    description: DESCRIPTION,
    // This route owns no opengraph-image of its own, and replacing the parent
    // object drops the inherited card, so the site card is restated here.
    images: SITE_OG_CARD,
  }),
};

export default function QuotePage() {
  return (
    <>
      <section className="relative bg-aurora py-14 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Contact form</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Send us a message, one step at a <span className="text-brass-gradient">time</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Choose the painting service and property type, then share the surfaces, colors, condition, and timing.
          </p>
          <div className="mt-6 flex justify-center">
            <ContactCTA size="md" />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <QuoteWizard />
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm text-ink-200 md:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">How the contact form works</h2>
            <p className="mt-3">
              The picture-driven wizard collects the basic information needed to understand a Metro Detroit painting
              request. There is no account to create and no obligation to proceed.
            </p>
            <p className="mt-3">
              You can attach wide photos and close-ups of walls, ceilings, trim, cabinets, exterior surfaces, wood,
              wallpaper, damage, or plans. Photos can clarify condition and scope, though some projects still need an
              on-site review.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Services you can ask about</h2>
            <p className="mt-3">
              Choose interior painting, exterior painting, cabinet painting, commercial painting, deck and fence
              staining, trim and door painting, ceiling painting, rental turnover painting, wallpaper removal, or
              color consultation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What happens next</h2>
            <p className="mt-3">
              We review what you send and follow up using the contact details you provide. Surfaces, preparation,
              products, colors, sheen, protection, exclusions, and timing are the details worth settling before work
              begins, and any change in scope should be confirmed in writing. You can also text project photos to{" "}
              {BIZ.phone}.
            </p>
          </div>
        </div>
      </section>
      <LongFormFaq subject="Metro Detroit Painting" kind="service" />
    </>
  );
}
