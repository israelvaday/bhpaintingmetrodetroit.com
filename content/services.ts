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
};

export const SERVICES: Service[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortName: "Interior",
    icon: PaintRoller,
    tagline: "Clean lines, even coverage, and comfortable rooms from prep through final walk.",
    description:
      "Refresh one room or coordinate a whole-home repaint with insured professional painters serving Wayne, Oakland, and Macomb counties. We protect floors and furnishings, prepare each surface, apply the right primer and finish, and keep occupied Metro Detroit homes orderly throughout the project.",
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
      "Give sound kitchen, bathroom, or built-in cabinetry a durable new look with a controlled preparation and coating process. Our Metro Detroit cabinet painting service includes labeling, careful removal, degreasing, sanding, bonding primer, finish application, and organized reassembly.",
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
      "Property managers and business owners use our commercial painting crews for offices, retail spaces, restaurants, common areas, and light-industrial interiors across Metro Detroit. We coordinate access, protection, work zones, and cure times around operations, with clear scopes and progress communication.",
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
  },
  {
    slug: "deck-fence-staining",
    name: "Deck & Fence Staining",
    shortName: "Decks & Fences",
    icon: Fence,
    tagline: "Preparation-first staining for outdoor wood exposed to Michigan seasons.",
    description:
      "Protect decks, fences, pergolas, and other exterior wood with a stain system suited to the wood condition, prior finish, and desired appearance. We clean, allow proper dry time, test absorption, and schedule application around Metro Detroit rain, temperature, and direct-sun conditions.",
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
  },
  {
    slug: "rental-turnover-painting",
    name: "Rental Turnover Painting",
    shortName: "Turnovers",
    icon: RefreshCw,
    tagline: "Reliable repaint schedules for rentals, apartments, and move-ready properties.",
    description:
      "Owners and managers need vacant units ready on a predictable date. We provide Metro Detroit rental turnover painting with room-by-room scopes, practical finish recommendations, minor surface preparation, coordinated access, and clear completion updates for single-family rentals and multifamily properties.",
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
