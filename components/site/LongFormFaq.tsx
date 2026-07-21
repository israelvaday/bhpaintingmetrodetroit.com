"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { BIZ } from "@/lib/business";

function CollapsibleQ({ q, children }: { q: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-ink-900/60 md:px-6"
      >
        <span className="font-display text-base font-bold text-white md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brass-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 px-5 pb-5 text-ink-200 md:px-6 md:text-base">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function LongFormFaq({ subject, kind }: { subject: string; kind: "area" | "service" }) {
  const place = kind === "area" ? subject : "Metro Detroit";
  const topic =
    kind === "area" ? `painting in ${subject}` : `${subject.toLowerCase()} across Metro Detroit`;

  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl space-y-4 px-4 md:px-6">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">In depth</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            Questions about {topic}
          </h2>
          <p className="mt-3 text-sm text-ink-200 md:text-base">
            Practical answers from {BIZ.name} to help you compare painting scopes in {place}. Tap a question to expand.
          </p>
        </header>

        <CollapsibleQ q="What surface preparation should be included?">
          <p>
            Preparation depends on the surface and its condition. A clear scope may include washing, scraping loose
            coating, sanding glossy areas, filling minor holes, caulking selected gaps, and protecting adjacent
            finishes. Existing damage or repairs outside the painting scope should be identified before work begins.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="When is primer needed?">
          <p>
            Primer is commonly used on bare or repaired surfaces, difficult stains, major color changes, and areas
            where adhesion needs help. A previously painted surface in sound condition may only need spot primer.
            The written scope should identify where primer is planned and why.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="Which paint sheen should I choose?">
          <p>
            Flat and matte finishes reduce reflection but can be less washable. Eggshell and satin add washability and
            highlight more surface variation. Semi-gloss is often considered for trim, doors, and moisture-prone
            areas. Product-specific performance matters, so sheen should be selected with the room and substrate in
            mind.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="How many coats will my project need?">
          <p>
            Coat count depends on the existing color, new color, paint product, application method, and surface
            porosity. Strong color changes may require primer or additional finish coats. We recommend defining the
            planned coating system and the expected finished appearance instead of relying on a blanket promise.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="How should I confirm a color?">
          <p>
            Review a physical sample in the actual room or exterior area at different times of day. Light, surrounding
            finishes, and sheen all affect perception. Record the manufacturer, color name, color number, product, and
            sheen before materials are ordered.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="How does Metro Detroit weather affect exterior painting?">
          <p>
            Temperature, surface moisture, rain, wind, and direct sun can change application and drying conditions.
            Exterior dates may move when conditions fall outside the selected product&apos;s requirements. A responsible
            schedule protects the coating system instead of promising work in unsuitable weather.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="What should cleanup and the final walkthrough include?">
          <p>
            The closeout plan should cover removal of masking and project debris, orderly storage or removal of labeled
            touch-up paint, and a walkthrough against the written scope. Any agreed touch-ups should be documented
            before the project is considered complete. Call {BIZ.phone} to discuss your project in {place}.
          </p>
        </CollapsibleQ>
      </div>
    </section>
  );
}
