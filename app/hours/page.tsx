import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { BIZ } from "@/lib/business";
import { openGraphFor, SITE_OG_CARD } from "@/lib/meta";
import { ContactCTA } from "@/components/site/ContactCTA";

const TITLE = "Business Hours";
const DESCRIPTION = `${BIZ.name} hours: Sunday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–12:00 PM, and Saturday closed.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hours" },
  // Without an openGraph of its own this route inherited the root layout's object
  // wholesale, so the card announced the homepage headline two lines under a
  // canonical that named this page. Same wholesale-inheritance defect aa7acb5
  // closed for the 111 dynamic routes and b88e4df closed for og:url. og:title
  // mirrors the rendered <title>, which takes the layout's ` — ${BIZ.name}`
  // template; openGraph.title does not, so the suffix is spelled out.
  openGraph: openGraphFor({
    path: "/hours",
    title: `${TITLE} — ${BIZ.name}`,
    description: DESCRIPTION,
    // This route owns no opengraph-image of its own, and replacing the parent
    // object drops the inherited card, so the site card is restated here.
    images: SITE_OG_CARD,
  }),
};

function displayTime(value: string) {
  const [hourText, minute] = value.split(":");
  const hour = Number(hourText);
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minute} ${period}`;
}

export default function HoursPage() {
  return (
    <section className="relative overflow-hidden bg-aurora py-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brass-500/40 bg-brass-500/10 px-4 py-2 text-sm font-semibold text-brass-300">
          <Clock className="h-4 w-4" /> Posted business hours
        </div>
        <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
          Painting project <span className="text-brass-gradient">hours</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
          Call {BIZ.name} at{" "}
          <a href={BIZ.phoneHref} className="font-semibold text-brass-300 underline-offset-2 hover:underline">
            {BIZ.phone}
          </a>{" "}
          during the schedule below. Quote requests received outside these hours can be reviewed during business
          hours.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {BIZ.hours.map((entry) => {
            const isClosed = "closed" in entry && entry.closed;
            return (
              <div
                key={entry.day}
                className={`rounded-2xl border px-3 py-4 text-center ${
                  isClosed
                    ? "border-ink-700 bg-ink-900/60"
                    : "border-emerald-500/30 bg-emerald-500/5"
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-wider ${isClosed ? "text-ink-400" : "text-emerald-300"}`}>
                  {entry.label}
                </p>
                <p className="mt-2 font-mono text-sm font-bold text-white">
                  {isClosed ? "Closed" : `${displayTime(entry.open)}–${displayTime(entry.close)}`}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <ContactCTA size="lg" />
        </div>
      </div>
    </section>
  );
}
