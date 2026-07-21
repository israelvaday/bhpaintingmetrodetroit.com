export type FAQ = { q: string; a: string };

export type FAQSection = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  items: FAQ[];
};

export const FAQ_HERO_IMAGE = "/photos/branding-generated--hero-painting-metro-detroit.png";
export const FAQ_HERO_ALT =
  "BH Painting Metro Detroit painter reviewing an interior color sample with a homeowner";

export const FAQ_SECTIONS: FAQSection[] = [
  {
    id: "pricing",
    title: "Pricing & estimates",
    emoji: "💰",
    description: "How painting scopes, materials, and written estimates are prepared.",
    items: [
      {
        q: "How much does professional painting cost in Metro Detroit?",
        a: "Pricing depends on surface area, condition, ceiling height, access, color changes, coating system, and the amount of protection and preparation required. We provide a written estimate after reviewing the property so the scope is based on the actual project rather than an unreliable one-size-fits-all rate.",
      },
      {
        q: "Do you provide free painting estimates?",
        a: "Yes. We provide free estimates for residential and commercial painting in Wayne, Oakland, and Macomb counties. Photos can help us understand the project, but larger or more detailed scopes may require an on-site walkthrough before final pricing.",
      },
      {
        q: "Are paint and supplies included in the estimate?",
        a: "The proposal identifies whether coatings and standard supplies are included, along with the planned product type, finish, and number of coats. Specialty products, major color changes, or added work are listed clearly so comparisons between bids are meaningful.",
      },
      {
        q: "How are changes handled after work begins?",
        a: "If you request another room, a different coating, or work outside the original scope, we document the price and schedule impact before proceeding. We do not rely on surprise extras at the end of a project.",
      },
    ],
  },
  {
    id: "process",
    title: "Painting process",
    emoji: "🖌️",
    description: "What happens from the first walkthrough through the final inspection.",
    items: [
      {
        q: "What does your painting process include?",
        a: "A typical project includes a scope review, color and finish confirmation, room protection, surface preparation, primer where needed, finish coats, cleanup, and a final walkthrough. The exact sequence is written into the proposal for your property.",
      },
      {
        q: "How long will my painting project take?",
        a: "A single room may be completed quickly, while whole-home, cabinet, exterior, and commercial projects require more time for preparation and curing. We provide an estimated start window and duration after seeing the scope, then communicate if weather or discovered conditions affect the schedule.",
      },
      {
        q: "Can you paint while we live or work in the property?",
        a: "Yes. We can phase many occupied home and business projects by room or zone. We discuss access, ventilation, drying time, children, pets, customer traffic, and daily cleanup before scheduling so the plan fits normal operations.",
      },
      {
        q: "Who will perform the work?",
        a: "BH Painting Metro Detroit provides insured professional painters and direct project communication. The written scope identifies the work being performed, and you can raise questions with our team throughout the project.",
      },
    ],
  },
  {
    id: "products",
    title: "Paints & finishes",
    emoji: "🎨",
    description: "How primers, coatings, colors, and sheens are selected.",
    items: [
      {
        q: "Which paint brands do you use?",
        a: "We select professional coating lines based on the surface, environment, performance requirements, availability, and customer preference. Product line matters as much as the brand name, so the proposal specifies the intended system instead of promising one product for every situation.",
      },
      {
        q: "How do I choose the right paint sheen?",
        a: "Lower sheens help soften surface variation, while higher sheens generally improve washability but reflect more light. We recommend finishes by room use, moisture, traffic, desired appearance, and the condition of the surface.",
      },
      {
        q: "Do you offer low-odor or low-VOC options?",
        a: "Yes. Low-odor and low-VOC products are available for many occupied homes, offices, and rental turnovers. Ventilation and cure time still matter, so we review product guidance and occupancy needs before work begins.",
      },
      {
        q: "When is primer necessary?",
        a: "Primer may be needed over bare material, glossy surfaces, difficult stains, strong color changes, or areas with adhesion concerns. We choose a primer for the specific condition rather than adding or skipping it automatically.",
      },
    ],
  },
  {
    id: "preparation",
    title: "Preparation & protection",
    emoji: "🧰",
    description: "How the property and each surface are readied for a lasting finish.",
    items: [
      {
        q: "What should I do before the painters arrive?",
        a: "Remove small valuables, wall decorations, and fragile items, and provide a clear path into the work area. We will confirm whether larger furniture should be moved, centered, or handled as part of the scope before the start date.",
      },
      {
        q: "How do you protect floors, furniture, and fixtures?",
        a: "We use appropriate floor coverings, plastic, masking materials, and controlled work zones based on the room and application method. Fixtures and hardware are removed or protected as the scope requires, and work areas are cleaned at agreed milestones.",
      },
      {
        q: "What surface preparation is included?",
        a: "Preparation may include cleaning, light sanding, caulking paintable gaps, stabilizing minor imperfections, dulling glossy finishes, and spot priming. The estimate states the preparation level because a durable finish depends on what happens before the first finish coat.",
      },
      {
        q: "How are cabinets and wallpaper handled before painting?",
        a: "Cabinets require labeling, degreasing, sanding, bonding primer, and suitable cabinet-grade coatings. Wallpaper removal begins with a test area, followed by controlled removal, adhesive cleanup, surface preparation, and primer selection before repainting.",
      },
    ],
  },
  {
    id: "weather",
    title: "Michigan weather",
    emoji: "🌦️",
    description: "How temperature, moisture, rain, and seasonal conditions affect painting.",
    items: [
      {
        q: "When is the best season for exterior painting in Metro Detroit?",
        a: "Exterior work is best scheduled when surface temperature, air temperature, moisture, and the forecast stay within the coating manufacturer's limits. The practical season often runs from spring through fall, but daily conditions determine whether application should proceed.",
      },
      {
        q: "Can you paint an exterior after rain?",
        a: "Only after the surface has dried sufficiently and the upcoming weather provides a safe application and cure window. We check conditions rather than relying only on how dry a surface looks from a distance.",
      },
      {
        q: "How do humidity and temperature affect paint?",
        a: "High humidity and low temperatures can slow drying and curing, while excessive heat or direct sun can make a coating set too quickly. We adjust timing, sequence, and product selection to the manufacturer's published conditions.",
      },
      {
        q: "Can interior painting be done during a Michigan winter?",
        a: "Yes. Interior painting can be completed year-round when the space is heated, ventilated, and kept within product requirements. Winter projects benefit from a clear ventilation plan that balances fresh air with stable indoor temperature.",
      },
    ],
  },
];

export const ALL_FAQ_ITEMS = FAQ_SECTIONS.flatMap((section) => section.items);
