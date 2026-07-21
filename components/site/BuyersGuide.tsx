import { BIZ } from "@/lib/business";

export function BuyersGuide() {
  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">Buyer&apos;s guide</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            How to compare painting estimates in Metro Detroit
          </h2>
          <p className="mt-3 text-ink-300">
            A useful painting estimate identifies the surfaces, preparation, coating system, and exclusions. Use this
            checklist before approving a scope.
          </p>
        </header>

        <p>
          <strong className="text-white">1. Compare the same surfaces.</strong> Confirm which walls, ceilings, trim,
          doors, cabinets, siding, decks, or fences are included and which are excluded.
        </p>
        <p>
          <strong className="text-white">2. Define surface preparation.</strong> Washing, scraping, sanding, filling,
          caulking, spot repairs, and protection should be described instead of grouped into a vague &ldquo;prep&rdquo; line.
        </p>
        <p>
          <strong className="text-white">3. Record primer and paint.</strong> Note the manufacturer, product line,
          color, sheen, and where primer is planned. Product selection can matter as much as coat count.
        </p>
        <p>
          <strong className="text-white">4. Clarify coats and coverage.</strong> Ask whether the quote defines a planned
          number of coats, a finished-appearance standard, or both, especially for dramatic color changes.
        </p>
        <p>
          <strong className="text-white">5. Plan color approval.</strong> Confirm who supplies samples, who gives final
          approval, and when colors must be locked to protect the schedule.
        </p>
        <p>
          <strong className="text-white">6. Review weather, access, and cleanup.</strong> Exterior work needs
          product-appropriate conditions. Interior and commercial work should address occupied spaces, daily reset,
          final cleanup, and the walkthrough.
        </p>
        <p>
          {BIZ.name} serves Wayne, Oakland, and Macomb counties and answers project questions at {BIZ.phone}. Compare
          estimates only after the surfaces, preparation, products, and closeout expectations are aligned.
        </p>
      </div>
    </section>
  );
}
