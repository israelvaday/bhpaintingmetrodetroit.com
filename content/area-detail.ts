/**
 * Per-city substance for the service-area pages.
 *
 * WHY THIS FILE EXISTS. All 101 area pages render from one template, so after
 * the city token is stripped they measure 0.925 median 8-gram Jaccard against
 * each other - near-identical. They hold roughly 40% of this domain's unswept
 * impressions and sit at positions 30-50, which is where a page has been found
 * but has nothing of its own to be ranked on. The meta-description template is
 * not the fix: a snippet nobody scrolls to is worth nothing at position 40. The
 * fix is substance that is true of that city and of no other.
 *
 * `content/area-insights.json` is NOT the source for this. It carries 14 distinct
 * templates behind 101 "neighborhood notes" and at least one factual error; the
 * DO-NOT-WIRE verdict of 2026-08-17 stands. Entries here are written and checked
 * one city at a time, and a city with nothing verifiable to say gets no entry
 * rather than a generated one.
 *
 * RULES FOR AN ENTRY. Facts only, and checkable ones. No credential, no licence,
 * no insurance, no price, no promise, no hours. Naming a regulation as a
 * constraint on how a scope is written is fine; implying we hold a certification
 * under it is not.
 */

export type AreaDetail = { heading: string; body: string };

export const AREA_DETAIL: Record<string, AreaDetail[]> = {
  dearborn: [
    {
      heading: "Dearborn is a brick city, and that decides what an exterior job actually covers",
      body:
        "The residential core here went up for Ford employees, most of it between roughly 1910 and 1940, and the dominant form is the brick bungalow, joined by Cape Cods, colonials, Tudors and the post-war ranches that filled in afterwards. On a full-masonry house the phrase exterior painting almost never means the walls. It means the wood wrapped around them: soffit and fascia, the frieze under the eaves, rake edges on the gable ends, porch ceilings, posts and rails, window sash and casings, storm and entry doors, and the detached garage that often carries more exposed wood than the house does. Those parts are narrow, high off the ground and take weather from every direction, so they fail years before the masonry needs anything at all, and they carry most of what a front elevation looks like from the sidewalk. Painting the brick itself is a separate question and close to a permanent one. Masonry has to be able to dry outward, and a film that seals the face can hold moisture inside the wall, which through a Michigan freeze-and-thaw winter is how the face of a brick pops off. Where a Dearborn house has already been coated at some point, the useful questions are what is underneath it and whether it is still bonded; where the brick is bare, leaving it bare and spending the work on the wood is usually the better answer. Mortar joints, the masonry sill course and the caps on porch walls are worth a look in the same walk, because no coating repairs a joint that is letting water in behind it.",
    },
    {
      heading: "The age of the housing settles the preparation before anything is sanded",
      body:
        "A house that was standing before 1978 may carry coatings that contain lead, and federal renovation rules govern how those painted surfaces may be disturbed, so in a city built out this early the year of construction is established while the scope is being written rather than once a scraper is already on a window sill. Most of Dearborn's housing predates that date by decades, and exterior work on those houses lands on exactly the surfaces the rules speak to: sash, sills, porch rails, door casings and the eaves. The effect is on sequence and on how a surface is taken back, not on whether the work can be done. Age has a second consequence. Wood on a century-old bungalow has usually been coated many times over, oil-based for the first several decades of that, so a waterborne finish is going onto a surface that wants de-glossing and an adhesion check rather than only a wash. Coating build-up along the edges of sash and casing is normal on a house of that vintage, and those edges are feathered back so the trim profile reads the way it was milled instead of drowning under one more layer. Bare wood uncovered under a failed coat is spot-primed the same day it is exposed, because Michigan humidity gets into open grain overnight and takes the new primer with it when it goes.",
    },
    {
      heading: "One part of Dearborn has its exterior appearance written into a city resolution",
      body:
        "Between 1919 and 1921 Ford Motor Company built 250 houses just west of downtown Dearborn for employees of the nearby tractor plant, in six repeating designs by the architect Albert Wood. The first 94 went up on Park and Nona in 1919; the remaining 156 followed on Beech, Edison, Francis, Gregory and Military, inside the area bounded by the Michigan Central Railroad tracks, Military, Nowlin and Monroe. That neighborhood is the Ford Homes Historic District, and Dearborn City Council established it by resolution in 1979 specifically to preserve the exterior appearance of the houses. For a painting project the consequence is a scheduling one rather than a design one: inside the district, exterior color and anything that alters a detail a passer-by can see are worth confirming against the district's own preservation guidance before materials are ordered, not after the first elevation has been coated. That belongs at the estimate stage, which is why the address matters as much as the surface list when a quote is requested. Beyond the boundary the same six designs continue across the surrounding streets with no such review, so it is the boundary rather than the style of the house that decides whether the question needs asking.",
    },
  ],
};
