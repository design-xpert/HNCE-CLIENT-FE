import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface BrandStarProps {
  className?: string;
  size?: number;
  variant?: "filled" | "outline";
}

export function BrandStar({
  className,
  size = 48,
  variant = "filled",
}: BrandStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={cn("text-primary", className)}
      aria-hidden="true"
    >
      {variant === "filled" ? (
        <path
          d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z"
          fill="currentColor"
        />
      ) : (
        <path
          d="M50 2C50 28.5097 28.5097 50 2 50C28.5097 50 50 71.4903 50 98C50 71.4903 71.4903 50 98 50C71.4903 50 50 28.5097 50 2Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      )}
    </svg>
  );
}

/**
 * Section "eyebrow" label flanked by a BrandStar on each side.
 * Use for the small labels above section headings, e.g.:
 *   <SectionBadge>Facilities</SectionBadge>
 *
 * - `badgeClassName` — extra classes for the inner Badge (e.g. dark-section colors)
 * - `starClassName`  — override star color (default teal/40; use a light value on dark sections)
 * - `className`      — extra classes for the wrapper (alignment etc.); `mb-4` is built in
 */
export function SectionBadge({
  children,
  badgeClassName,
  starClassName = "text-primary/40",
  className,
}: {
  children: React.ReactNode;
  badgeClassName?: string;
  starClassName?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-4 inline-flex items-center gap-3", className)}>
      <BrandStar size={12} className={starClassName} />
      <Badge variant="secondary" className={badgeClassName}>
        {children}
      </Badge>
      <BrandStar size={12} className={starClassName} />
    </div>
  );
}

export function BrandPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none opacity-[0.18]",
        className,
      )}
      style={{
        backgroundImage: "url('/images/brand-pattern.png')",
        backgroundSize: "280px 280px",
        backgroundRepeat: "repeat",
        mixBlendMode: "soft-light",
      }}
      aria-hidden="true"
    />
  );
}
