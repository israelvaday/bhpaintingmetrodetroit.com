"use client";
import { Phone, ClipboardList, Mail } from "lucide-react";
import { BIZ } from "@/lib/business";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/** Sitewide CTA cluster — no plaintext phone/email shown, just action buttons. */
export function ContactCTA({
  className,
  size = "lg",
  showLabels = true,
  showEmail = false,
}: { className?: string; size?: "sm" | "md" | "lg"; showLabels?: boolean; showEmail?: boolean }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      <LinkButton href={BIZ.phoneHref} variant="danger" size={size} aria-label="Call now">
        <Phone className="h-5 w-5" />
        {showLabels && "Call Now"}
      </LinkButton>
      {/* Slashed on purpose. LinkButton renders a raw <a>, which next/link's trailingSlash
          normalisation never reaches, and the export serves the page at /quote/, so the bare
          "/quote" sent every quote click on every page through a 301 first. */}
      <LinkButton href="/quote/" variant="primary" size={size} aria-label="Request a free quote">
        <ClipboardList className="h-5 w-5" />
        {showLabels && "Free Quote"}
      </LinkButton>
      {showEmail && (
        <LinkButton href={BIZ.emailHref} variant="ghost" size={size} aria-label="Email us">
          <Mail className="h-5 w-5" />
          {showLabels && "Email"}
        </LinkButton>
      )}
    </div>
  );
}
