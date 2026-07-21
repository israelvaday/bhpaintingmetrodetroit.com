import { cn } from "@/lib/cn";
import { BIZ } from "@/lib/business";

/**
 * BH Painting Metro Detroit brand mark.
 */
export function LogoMark({
  className,
  title = BIZ.name,
}: { className?: string; title?: string; priority?: boolean }) {
  return (
    <span
      role="img"
      aria-label={title}
      className={cn(
        "relative grid h-10 w-10 select-none place-items-center overflow-hidden rounded-xl border border-brass-400/70 bg-gradient-to-br from-brass-300 via-brass-500 to-brass-700 font-display text-[11px] font-black tracking-[-0.08em] text-ink-950 shadow-lg shadow-brass-500/20",
        className
      )}
    >
      BH
      <span aria-hidden className="absolute bottom-1.5 h-0.5 w-4 rounded-full bg-ink-950/70" />
    </span>
  );
}

export function Logo({
  className,
  showWordmark = true,
  size = "md",
}: { className?: string; showWordmark?: boolean; size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-12 w-12" : "h-10 w-10";
  const text = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";
  const wordmark = BIZ.name.replace(/\s+Metro Detroit$/i, "");
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={dim} />
      {showWordmark && (
        <span className={cn("font-display font-extrabold tracking-tight leading-none flex flex-col", text)}>
          <span>{wordmark}</span>
          <span className="mt-1 text-[9px] font-semibold tracking-[0.25em] text-brass-400/80 uppercase">
            Metro Detroit
          </span>
        </span>
      )}
    </span>
  );
}
