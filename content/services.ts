import {
  PaintRoller,
  Home,
  PanelsTopLeft,
  Building2,
  Fence,
  DoorOpen,
  Square,
  RefreshCw,
  Wallpaper,
  Palette,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: typeof PaintRoller;
  tagline: string;
  description: string;
  bullets: string[];
  intent: "emergency" | "service" | "trust";
  keywords: string[];
  /** Optional in-depth article for this service, linked from the service page body. */
  relatedArticle?: { slug: string; anchor: string };
  /**
   * Optional absolute <title>, replacing `name` plus the layout's ` — ${BIZ.name}`
   * template.
   *
   * The template is right for a page nobody has found yet and wrong for a page that
   * already ranks: it spends the first 24 characters on a bare service label and
   * pushes the geography into the brand suffix, where Google truncates it. Set this
   * only where the SERP shows the title is what costs the click — read the
   * competitors' titles out of serp_ranking_snapshots first, do not guess.
   */
  seoTitle?: string;
  /**
   * Optional service-specific depth, rendered under the shared "More about" section.
   * Use it where the search demand for a service is narrower than the service name —
   * the template copy is deliberately generic, so anything substrate-specific goes here.
   */
  detail?: { heading: string; body: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortName: "Interior",
    icon: PaintRoller,
    tagline: "Clean lines, even coverage, and comfortable rooms from prep through final walk.",
    description:
      "Refresh one room or coordinate a whole-home repaint with experienced professional painters serving Wayne, Oakland, and Macomb counties. We protect floors and furnishings, prepare each surface, apply the right primer and finish, and keep occupied Metro Detroit homes orderly throughout the project.",
    bullets: [
      "Walls, ceilings, hallways, and stairwells",
      "Bedrooms, kitchens, baths, and living spaces",
      "Surface preparation, caulking, and spot priming",
      "Low-odor coating options for occupied homes",
      "Detailed cleanup and final touch-up walk",
    ],
    intent: "service",
    keywords: [
      "interior painters metro detroit",
      "interior painting detroit mi",
      "house painters wayne county",
      "room painting oakland county",
      "home painting macomb county",
    ],
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortName: "Exterior",
    icon: Home,
    tagline: "Weather-aware preparation and durable curb appeal for Michigan homes.",
    description:
      "Metro Detroit exteriors face freeze-thaw cycles, humid summers, wind, and strong seasonal sun. We plan around temperature and moisture, prepare brick, siding, stucco, wood, and composite surfaces carefully, and apply exterior coatings selected for the substrate and Michigan conditions.",
    bullets: [
      "Siding, brick, stucco, and masonry coatings",
      "Scraping, sanding, cleaning, and adhesion checks",
      "Primer selected for bare or weathered surfaces",
      "Caulk renewal at paintable joints and openings",
      "Weather-window scheduling and daily site cleanup",
    ],
    intent: "service",
    keywords: [
      "exterior painters metro detroit",
      "house painting detroit mi",
      "exterior painting oakland county",
      "brick painting wayne county",
      "siding painters macomb county",
    ],
  },
  {
    slug: "cabinet-painting",
    name: "Cabinet Painting",
    shortName: "Cabinets",
    icon: PanelsTopLeft,
    tagline: "A refined cabinet finish without the cost and disruption of full replacement.",
    description:
      "Cabinet painting across Metro Detroit gives sound kitchen, bathroom, or built-in cabinetry a durable new look in Oakland, Wayne, and Macomb County. Our controlled preparation and coating process includes labeling, careful removal, degreasing, sanding, bonding primer, finish application, and organized reassembly.",
    bullets: [
      "Kitchen, bath, laundry, and built-in cabinets",
      "Door and drawer labeling for accurate reassembly",
      "Degreasing, sanding, and bonding-primer preparation",
      "Durable cabinet-grade finish systems",
      "Color coordination with counters and flooring",
    ],
    intent: "service",
    keywords: [
      "cabinet painting metro detroit",
      "kitchen cabinet painters detroit",
      "cabinet refinishing oakland county",
      "paint cabinets wayne county",
      "cabinet color update macomb county",
    ],
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    shortName: "Commercial",
    icon: Building2,
    tagline: "Phased, professional painting that keeps customers, tenants, and teams moving.",
    description:
      "Commercial painting across Oakland, Wayne and Macomb County: offices, retail spaces, restaurants, common areas, and light-industrial interiors. Property managers and business owners across Metro Detroit use our commercial painting crews. We coordinate access, protection, work zones, and cure times around operations, with clear scopes and progress communication.",
    bullets: [
      "Offices, retail, restaurants, and common areas",
      "After-hours and phased scheduling when arranged",
      "Occupied-space protection and low-odor options",
      "Brand-color and multi-location consistency",
      "Written scopes for managers and ownership teams",
    ],
    intent: "service",
    keywords: [
      "commercial painters metro detroit",
      "office painting detroit mi",
      "retail painting contractor michigan",
      "commercial painting oakland county",
      "property manager painters metro detroit",
    ],
    detail: [
      {
        heading: "Commercial interior repainting while the space stays in use",
        body:
          "Most commercial interior work is a repaint rather than a first coat, and the wall tells you what it has been through. Corridors and lobbies collect scuffs and cart impact at hip height, suites carry patched anchor holes where shelving and monitors moved, and the wall areas beside entries hold grime that will telegraph through a fresh coat if it is painted over rather than washed off first. Long runs of linear ceiling lighting rake across a commercial wall and show every skim that was not feathered, so patching here is judged under the building's own lights rather than by daylight. Sheen matters more than it does in a house: a flat wall in a busy corridor cannot be cleaned without burnishing, which is why washable eggshell and satin finishes carry most commercial wall areas while semi-gloss goes on the doors, frames, and trim that hands actually touch. Device plates, data drops, thermostats, sprinkler heads, and signage are masked or removed rather than cut around, because the cut line is the part a tenant looks at from a desk all day.",
      },
      {
        heading: "Office buildings, retail, and multi-tenant common areas",
        body:
          "A building with tenants in it is a sequencing problem before it is a painting problem. Common areas run on the building's traffic rather than on ours, so corridors, stairwells, elevator lobbies, and restrooms are usually broken into zones that can be closed one at a time and handed back in service. Suite turnover between leases is the opposite case, an empty space with a hard date on it, where the work is wall repair, a repaint to the building standard color, and doors and frames returned to their original finish. Where a property already has a standard, we match the existing specification rather than proposing a new one; where it does not, the color and sheen schedule is written down so the next repaint has something to follow. Stairwells, atrium walls, and high retail ceilings need their elevated access planned before the crew arrives rather than improvised on the day. Scope, zones, and the order of work are agreed with property management or the building engineer before the first area is protected, and progress is reported against that plan.",
      },
      {
        heading: "Commercial exteriors across Oakland, Wayne, and Macomb counties",
        body:
          "Commercial exteriors in Michigan are mostly masonry, block, and metal rather than the wood and lap siding on a house, and each substrate wants its own system. Split-face and concrete block are porous and take a block filler or masonry primer before any finish coat, or the texture drinks the material and dries patchy. Painted brick and stucco hold moisture and want a breathable coating so vapor can leave the wall instead of pushing the film off in spring. Doors, frames, railings, canopies, and dock surrounds need rust taken back to sound metal and a primer suited to what is underneath, because a topcoat laid over scale lets go at the first freeze cycle. The season is set by surface temperature and dew point rather than by the calendar: a fifty degree October afternoon can still be too cold on a north elevation that never sees sun, and coating a wall that is about to drop below its dew point traps moisture under the film. That is why commercial exterior dates here are confirmed close to the day rather than months ahead. The commercial work we see runs through Pontiac and the Woodward corridor, the Southfield office parks, Farmington Hills, and Detroit, all inside the Wayne, Oakland, and Macomb county area we cover.",
      },
    ],
  },
  {
    slug: "deck-fence-staining",
    name: "Deck & Fence Staining",
    shortName: "Decks & Fences",
    icon: Fence,
    tagline: "Preparation-first staining for outdoor wood exposed to Michigan seasons.",
    description:
      "Deck and fence staining across Metro Detroit protects wood in Wayne, Oakland, and Macomb County from Michigan sun, rain, and freeze-thaw damage. We match the stain system to the wood condition, prior finish, and desired appearance, then clean, allow proper dry time, test absorption, and schedule application around local rain, temperature, and direct-sun conditions.",
    bullets: [
      "Decks, fences, railings, and pergolas",
      "Cleaning and removal of loose prior finish",
      "Moisture and absorption checks before application",
      "Transparent, semi-transparent, and solid-color options",
      "Maintenance guidance for Michigan weather exposure",
    ],
    intent: "service",
    keywords: [
      "deck staining metro detroit",
      "fence staining detroit mi",
      "wood staining oakland county",
      "deck painters wayne county",
      "exterior wood coating macomb county",
    ],
    relatedArticle: {
      slug: "deck-staining-michigan-climate",
      anchor: "deck staining for Michigan's climate",
    },
    detail: [
      {
        heading: "Fence staining is not deck staining",
        body:
          "A deck is one broad horizontal surface you can see while you work. A fence is two vertical faces, and the shaded face dries at a different rate than the sun face, so a single pass applied to both at once can cure unevenly. Fence staining also has far more edge than surface: every picket carries exposed end grain at the top, which drinks stain and is the first place a finish fails, and the posts sit in ground contact where moisture arrives from below rather than from the weather. Board-on-board and shadowbox fences overlap, so the covered strips have to be reached before the neighboring board is coated rather than after. We work the fence face by face, back-brush what is sprayed so the stain is pushed into the grain instead of sitting on it, and treat post bases and picket tops as their own step.",
      },
      {
        heading: "New pressure-treated pine, weathered cedar, and previously coated fences",
        body:
          "The wood decides the schedule. New pressure-treated pine leaves the yard carrying mill and treatment moisture, and it will reject stain until it dries down — sometimes weeks, sometimes a full season, and no product claim changes that. A few drops of water on the rail answers it: beading means the wood is not ready, absorption means it is. Weathered cedar and spruce usually need cleaning and often brightening to pull back the gray before color goes on, because stain applied over a dull mill-glazed or gray surface reads muddy. A fence already carrying a solid stain is a different job again: solid coatings do not accept a semi-transparent over the top, so the honest options are stripping back or recoating solid, and that is a decision to make at the estimate rather than on the day.",
      },
      {
        heading: "Fence staining across Wayne, Oakland, and Macomb counties",
        body:
          "Wood fence work reaches further out than interior painting does, and a good share of it sits past the built-up ring — Armada, Romeo, and Shelby Township in northern Macomb, Lake Orion, Clarkston, Bingham Farms, and Pleasant Ridge in Oakland, alongside the Southfield, Farmington Hills, Warren, Royal Oak, Eastpointe, and Detroit neighborhoods we cover every week. Those outer communities run long runs of privacy and split-rail fence with real exposure on both sides, which is a different measurement and a different amount of prep than a city back yard. Scheduling is set around rain and dry-down rather than around distance.",
      },
    ],
  },
  {
    slug: "trim-door-painting",
    name: "Trim & Door Painting",
    shortName: "Trim & Doors",
    icon: DoorOpen,
    tagline: "Crisp, durable finishes for the details people see and touch every day.",
    description:
      "Update baseboards, crown molding, window trim, interior doors, entry doors, and other high-contact features with smooth, washable finishes. We prepare edges and profiles carefully, contain sanding residue, and select a sheen that balances cleanability with the look of your Metro Detroit property.",
    bullets: [
      "Baseboards, crown molding, and window trim",
      "Interior, entry, closet, and French doors",
      "Careful sanding, caulking, and spot priming",
      "Brush, roll, or controlled spray application",
      "Durable finishes for high-contact surfaces",
    ],
    intent: "service",
    keywords: [
      "trim painting metro detroit",
      "door painters detroit mi",
      "baseboard painting oakland county",
      "interior door painting wayne county",
      "crown molding painters macomb county",
    ],
  },
  {
    slug: "ceiling-painting",
    name: "Ceiling Painting",
    shortName: "Ceilings",
    icon: Square,
    tagline: "Uniform, bright ceilings with careful protection below every work area.",
    description:
      "Ceiling color and sheen affect how an entire room feels, yet overhead application demands disciplined masking and coverage. We paint flat, vaulted, tray, and previously coated ceilings throughout Metro Detroit, using stain-blocking primer where appropriate after the underlying source has been corrected.",
    bullets: [
      "Flat, vaulted, tray, and basement ceilings",
      "Water-mark and discoloration sealing when appropriate",
      "Protection for floors, fixtures, and furnishings",
      "Low-spatter application and consistent coverage",
      "Ceiling-to-wall cut lines and final inspection",
    ],
    intent: "service",
    keywords: [
      "ceiling painters metro detroit",
      "ceiling painting detroit mi",
      "vaulted ceiling painting oakland county",
      "stain blocking ceiling paint michigan",
      "professional ceiling painting macomb county",
    ],
    relatedArticle: {
      slug: "painting-popcorn-ceiling-metro-detroit",
      anchor: "painting a popcorn ceiling in Metro Detroit",
    },
  },
  {
    slug: "rental-turnover-painting",
    name: "Rental Turnover Painting",
    // The one page on this domain that holds a page-1 position (organic 2 on
    // "rental turnover painting detroit", 2026-08-25 and 08-26) and takes zero
    // clicks. Every rival around it leads with the city and with the words a
    // landlord uses for the job — #1 "Turnover & Move-In/Out Painting in Metro
    // Detroit", #4 "Rental Turnover Cleaning Metro Detroit | Make-Ready", #5
    // "Rental Turnovers & Investor Rehab Detroit, MI". Both halves are already in
    // this entry's own copy (bullet 2, and "Metro Detroit" opening the
    // description), so nothing here is a new claim.
    seoTitle: "Rental Turnover & Move-Out Painting in Metro Detroit",
    shortName: "Turnovers",
    icon: RefreshCw,
    tagline: "Reliable repaint schedules for rentals, apartments, and move-ready properties.",
    description:
      "Metro Detroit rental turnover painting for owners and managers who need a vacant unit repainted and move-in ready between tenants. Scopes are written room by room, with minor surface preparation, durable washable finishes, coordinated access, and clear completion updates for single-family rentals and multifamily properties. Dates are set once we understand the scope and your current schedule.",
    bullets: [
      "Apartments, condos, and single-family rentals",
      "Move-out repainting and color standardization",
      "Room-by-room scopes and completion updates",
      "Durable, washable finishes for repeated occupancy",
      "Coordination with cleaners and maintenance teams",
    ],
    intent: "service",
    keywords: [
      "rental turnover painting metro detroit",
      "apartment painters detroit mi",
      "property management painting michigan",
      "move out painting wayne county",
      "multifamily painters macomb county",
    ],
  },
  {
    slug: "wallpaper-removal",
    name: "Wallpaper Removal",
    shortName: "Wallpaper",
    icon: Wallpaper,
    tagline: "Methodical removal and paint-ready preparation without rushed shortcuts.",
    description:
      "Wallpaper age, adhesive, wall condition, and prior installation method all influence removal. We test a small area, protect the room, remove coverings in controlled sections, clean residual adhesive, prepare the exposed surface, and recommend the right primer before repainting.",
    bullets: [
      "Paper, vinyl, and removable wallcoverings",
      "Small-area testing before full removal",
      "Adhesive cleanup and surface washing",
      "Sanding and primer recommendations before paint",
      "Orderly debris removal and room protection",
    ],
    intent: "service",
    keywords: [
      "wallpaper removal metro detroit",
      "remove wallpaper detroit mi",
      "wallcovering removal oakland county",
      "wallpaper removal and painting michigan",
      "wallpaper adhesive cleanup wayne county",
    ],
  },
  {
    slug: "color-consultation",
    name: "Color Consultation",
    shortName: "Color",
    icon: Palette,
    tagline: "Confident color and sheen choices grounded in your light, finishes, and goals.",
    description:
      "A successful palette needs to work with daylight, evening lighting, flooring, counters, furniture, and neighboring rooms. Our Metro Detroit color consultation helps narrow undertones, coordinate transitions, compare sample areas, and choose practical sheens before crews and materials are scheduled.",
    bullets: [
      "Interior and exterior palette planning",
      "Undertone review with fixed finishes",
      "Sample-area placement and light evaluation",
      "Room-to-room color flow recommendations",
      "Sheen guidance for use and cleanability",
    ],
    intent: "trust",
    keywords: [
      "paint color consultation metro detroit",
      "interior color consultant detroit",
      "exterior paint colors michigan homes",
      "paint palette help oakland county",
      "professional color selection metro detroit",
    ],
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service])
);
