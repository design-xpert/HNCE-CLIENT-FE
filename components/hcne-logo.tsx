interface HCNELogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export function HCNELogo({ className = "", size = "md", showText = true }: HCNELogoProps) {
  const sizes = {
    sm: { logo: "h-8 w-8", text: "text-xs", subtext: "text-[10px]" },
    md: { logo: "h-10 w-10", text: "text-sm", subtext: "text-xs" },
    lg: { logo: "h-12 w-12", text: "text-base", subtext: "text-xs" },
  }

  const s = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <div className={`relative ${s.logo} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-label="HCNE Logo">
          {/* Outer Circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          
          {/* Inner decorative circle */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/30"
          />

          {/* Center Square with letters */}
          <rect
            x="30"
            y="30"
            width="40"
            height="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary"
          />

          {/* Cross dividers */}
          <line x1="50" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="1" className="text-primary/50" />
          <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary/50" />

          {/* Letters H C N E */}
          <text x="40" y="46" textAnchor="middle" className="fill-primary text-[12px] font-bold">H</text>
          <text x="60" y="46" textAnchor="middle" className="fill-primary text-[12px] font-bold">C</text>
          <text x="40" y="66" textAnchor="middle" className="fill-primary text-[12px] font-bold">N</text>
          <text x="60" y="66" textAnchor="middle" className="fill-primary text-[12px] font-bold">E</text>

          {/* Rod of Asclepius (simplified) */}
          <line x1="50" y1="38" x2="50" y2="62" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <path
            d="M47 42 Q50 44 53 42 Q50 46 47 44 Q50 48 53 46 Q50 50 47 48 Q50 52 53 50 Q50 54 47 52 Q50 56 53 54"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary"
          />

          {/* Top arc text - HERITAGE CENTRE */}
          <path id="topArc" d="M15 50 A35 35 0 0 1 85 50" fill="none" />
          <text className="fill-primary text-[6px] font-medium tracking-wider">
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
              HERITAGE CENTRE
            </textPath>
          </text>

          {/* Bottom arc text - FOR NURSING EXCELLENCE */}
          <path id="bottomArc" d="M85 50 A35 35 0 0 1 15 50" fill="none" />
          <text className="fill-primary text-[5px] font-medium tracking-wider">
            <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
              FOR NURSING EXCELLENCE
            </textPath>
          </text>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-semibold leading-tight ${s.text}`}>
            Heritage Centre for Nursing Excellence
          </span>
          <span className={`text-muted-foreground ${s.subtext}`}>
            A Global Knowledge Initiative
          </span>
        </div>
      )}
    </div>
  )
}

export function HCNELogoMark({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-label="HCNE Logo">
      {/* Background Circle */}
      <circle cx="50" cy="50" r="48" className="fill-primary" />
      
      {/* Inner Circle Border */}
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary-foreground/30"
      />

      {/* Center Square with letters */}
      <rect
        x="32"
        y="32"
        width="36"
        height="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary-foreground"
      />

      {/* Cross dividers */}
      <line x1="50" y1="32" x2="50" y2="68" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/50" />
      <line x1="32" y1="50" x2="68" y2="50" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/50" />

      {/* Letters H C N E */}
      <text x="41" y="46" textAnchor="middle" className="fill-primary-foreground text-[11px] font-bold">H</text>
      <text x="59" y="46" textAnchor="middle" className="fill-primary-foreground text-[11px] font-bold">C</text>
      <text x="41" y="64" textAnchor="middle" className="fill-primary-foreground text-[11px] font-bold">N</text>
      <text x="59" y="64" textAnchor="middle" className="fill-primary-foreground text-[11px] font-bold">E</text>

      {/* Top arc text */}
      <path id="topArcMark" d="M12 50 A38 38 0 0 1 88 50" fill="none" />
      <text className="fill-primary-foreground text-[7px] font-medium tracking-wider">
        <textPath href="#topArcMark" startOffset="50%" textAnchor="middle">
          HERITAGE CENTRE
        </textPath>
      </text>

      {/* Bottom arc text */}
      <path id="bottomArcMark" d="M88 50 A38 38 0 0 1 12 50" fill="none" />
      <text className="fill-primary-foreground text-[6px] font-medium tracking-wide">
        <textPath href="#bottomArcMark" startOffset="50%" textAnchor="middle">
          FOR NURSING EXCELLENCE
        </textPath>
      </text>
    </svg>
  )
}
