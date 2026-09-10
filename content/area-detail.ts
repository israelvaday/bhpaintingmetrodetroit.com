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
  southfield: [
    {
      heading:
        "Southfield has more office space than most downtowns, and that is what a commercial repaint here is scoped around",
      body:
        "The city puts 76,618 residents against a business daytime population of 175,000, inside 26.6 square miles holding more than 27 million square feet of office space and over 7 million square feet of retail and industrial space. That is more office space than the central business districts of Cleveland, Cincinnati, Detroit, Indianapolis or Kansas City, and more than 10,000 businesses including over 100 Fortune 500 companies sit in it. For painting the consequence is that almost nothing here is an empty building. A Southfield commercial repaint is normally a tenanted floor, a shared corridor, an elevator lobby, a stairwell or a garage-level entry that people walk through on a working morning, so the access window is the first thing a walkthrough settles and the surface list is the second. Which suites are occupied, which areas can be closed off in sections, where materials can be staged, how a loading dock and a freight elevator are booked, whether a floor is furnished or empty between leases: those answers move the sequence far more than the wall color does. Product choice follows from the same constraint rather than from preference, because a low-odor waterborne coating in an occupied corridor is a different specification from a solvent-borne enamel on a service door nobody stands next to. None of that is settled from a photograph, which is why an address and a floor plan are worth more than a square-footage number when a proposal is requested.",
    },
    {
      heading:
        "Thirty-seven thousand residential units and 126 associations change what a color decision is",
      body:
        "Southfield counts more than 37,650 residential units against those 76,618 residents, running from single-family houses and townhouses to condominiums and urban high rises, and it has 126 active neighborhood and condominium associations. A large share of the residential painting in a city built that way is not one owner picking a color for one house. It is a turnover unit that has to come back looking like the others in the building, a corridor or stairwell that belongs to the association rather than to any resident, a condominium exterior where the association's own approval sits ahead of the color, or a rental unit whose walls are expected to meet a standard somebody already wrote down. The practical effect is that the opening question on these jobs is what the existing specification is rather than what shade is wanted: the product, the sheen and the color used last time, whether a labelled sample survives on site, whether the association keeps an approved palette, and whether that finish is still sold under the same name. Matching an existing wall usually means matching sheen as much as color, because one color in two sheens reads as two colors under corridor lighting. Where nothing was ever written down, recording what goes on now is what makes the next turnover a repaint rather than a fresh specification.",
    },
    {
      heading:
        "Southfield doubled in a decade, so the build year here is a real question rather than a formality",
      body:
        "The city was incorporated on April 28, 1958, and the census counted 31,531 people in 1960, 69,298 in 1970 and 75,608 in 1980. The bulk of its housing therefore went up inside a band that opens in the late 1950s and is largely finished by 1980, and that band straddles 1978. This matters because federal renovation rules govern how painted surfaces may be disturbed in housing built before that year, and in Southfield the answer genuinely varies from street to street and from a 1962 ranch to a building finished in the early 1980s, where in an older city it would be a foregone conclusion. So the year a Southfield property went up is established while the scope is written rather than once a sander is already against a window sill, and on a multi-unit property it is established for the building rather than assumed from one unit. The same vintage carries a second consequence that has nothing to do with regulation. A kitchen or a bathroom in a house of this age has rarely survived untouched, so what sits on a cabinet door or a vanity is seldom the original factory finish and is often a later coating over it. Whether that surface will take another one is settled by cutting back an out-of-sight area and testing adhesion, not by looking at the door. Degreasing comes before any of it, because cooking residue on a cabinet face and soap film on a bathroom trim run are the two commonest reasons a sound product lets go of a surface that looked ready.",
    },
  ],
};
