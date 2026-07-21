// Single source of truth for NAP, hours, insurance wording, and links.
export const BIZ = {
  name: "BH Painting Metro Detroit",
  legalName: "BH Painting Metro Detroit",
  tagline: "Insured Professional Painters — Free Estimates Across Metro Detroit",
  phone: "(313) 236-4558",
  phoneE164: "+13132364558",
  phoneHref: "tel:+13132364558",
  smsHref: "sms:+13132364558",
  email: "info@bhpaintingmetrodetroit.com",
  emailHref: "mailto:info@bhpaintingmetrodetroit.com",
  /** Routed via Cloudflare Email Routing → your personal inbox (see Cloudflare dashboard). */
  quotesEmail: "quotes@bhpaintingmetrodetroit.com",
  /** Quote form notifications (Railway + Resend). Override with QUOTE_TO_EMAIL env (comma-separated). */
  quoteNotifyEmails: ["israelvaday97@gmail.com", "oren.siyonov@gmail.com"],
  /** Compatibility field for existing trust components; no license is asserted. */
  licenseId: "Insured",
  /** Legacy compatibility field used by existing templates. */
  bsis: "Insured",
  url: "https://bhpaintingmetrodetroit.com",
  address: {
    street: "Metro Detroit Service Area",
    locality: "Detroit",
    region: "MI",
    postalCode: "48201",
    country: "US",
    full: "Metro Detroit, MI",
  },
  geo: { lat: 42.3314, lng: -83.0458 },
  /** Wayne / Oakland / Macomb — geolocation + map bounds */
  metroBounds: {
    minLat: 42.15,
    maxLat: 42.75,
    minLng: -83.65,
    maxLng: -82.45,
  },
  /** Default embed map center (full tri-county view) */
  metroMap: { lat: 42.45, lng: -83.05, zoom: 10 },
  hours247: false,
  hours: [
    { day: 0, open: "00:00", close: "00:00", label: "Sunday", closed: true },
    { day: 1, open: "07:00", close: "18:00", label: "Monday" },
    { day: 2, open: "07:00", close: "18:00", label: "Tuesday" },
    { day: 3, open: "07:00", close: "18:00", label: "Wednesday" },
    { day: 4, open: "07:00", close: "18:00", label: "Thursday" },
    { day: 5, open: "07:00", close: "18:00", label: "Friday" },
    { day: 6, open: "08:00", close: "14:00", label: "Saturday" },
  ] as const,
  social: {
    google: "",
    yelp: "",
    facebook: "",
    instagram: "",
    tiktok: "",
  },
};
