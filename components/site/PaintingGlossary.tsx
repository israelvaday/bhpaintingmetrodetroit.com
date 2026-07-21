import { BIZ } from "@/lib/business";

export function PaintingGlossary() {
  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">Glossary</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            Painting terms, explained in plain language
          </h2>
          <p className="mt-3 text-ink-300">
            These are the terms {BIZ.name} uses when discussing scope, products, and finish expectations.
          </p>
        </header>

        <p>
          <strong className="text-white">Surface preparation</strong> &mdash; cleaning, scraping, sanding, filling,
          caulking, and spot repairs completed before paint is applied.
        </p>
        <p>
          <strong className="text-white">Primer</strong> &mdash; a preparatory coating selected for adhesion, stain
          blocking, color changes, or bare surfaces. Not every previously painted surface needs a full primer coat.
        </p>
        <p>
          <strong className="text-white">Sheen</strong> &mdash; how reflective the dried paint appears. Common choices
          include flat, matte, eggshell, satin, semi-gloss, and gloss.
        </p>
        <p>
          <strong className="text-white">Coat</strong> &mdash; one complete application of paint. Coverage depends on
          the existing color, new color, product, surface condition, and application method.
        </p>
        <p>
          <strong className="text-white">Cutting in</strong> &mdash; painting clean edges around ceilings, trim,
          corners, fixtures, and other areas a roller cannot reach precisely.
        </p>
        <p>
          <strong className="text-white">Dry time</strong> &mdash; when a coating can usually be recoated or lightly
          touched. <strong className="text-white">Cure time</strong> is longer and describes when it reaches fuller
          hardness and durability.
        </p>
        <p>
          <strong className="text-white">Color sample</strong> &mdash; a test area or sample board reviewed under the
          room&apos;s actual daylight and artificial light before the final color is confirmed.
        </p>
        <p>
          <strong className="text-white">Punch list</strong> &mdash; the final walkthrough items addressed before
          cleanup and project closeout.
        </p>
      </div>
    </section>
  );
}
