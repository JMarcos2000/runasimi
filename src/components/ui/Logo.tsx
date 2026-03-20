interface LogoProps {
  size?: number
  color?: string
}

export function Logo({ size = 64, color = '#FF6B35' }: LogoProps) {
  return (
    <div
      style={{ width: size, height: size, backgroundColor: color, borderRadius: size * 0.28 }}
      className="flex items-center justify-center"
    >
      <svg
        width={size * 0.86}
        height={size * 0.86}
        viewBox="0 0 100 100"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="miter"
        strokeLinecap="square"
      >
        {/* Body */}
        <polygon points="18,47 22,42 56,42 64,42 64,47 62,68 18,68" />

        {/* Neck */}
        <polygon points="56,42 64,42 74,20 66,20" />

        {/* Head */}
        <rect x="64" y="10" width="20" height="14" />

        {/* Ear */}
        <polygon points="68,10 70,4 75,10" />

        {/* Tail */}
        <path d="M18,50 L11,47 L10,54 L14,59 L18,59" />

        {/* Back-left leg */}
        <rect x="17" y="68" width="9" height="22" />
        {/* Back-right leg */}
        <rect x="29" y="68" width="9" height="22" />
        {/* Front-left leg */}
        <rect x="43" y="68" width="9" height="22" />
        {/* Front-right leg */}
        <rect x="53" y="68" width="9" height="22" />

        {/* Square spiral ornament (pre-Columbian style) */}
        <polyline points="28,46 50,46 50,64 28,64 28,48 48,48 48,62 30,62 30,50 46,50 46,60 32,60 32,52 44,52" />
      </svg>
    </div>
  )
}
