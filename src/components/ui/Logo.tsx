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
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="white"
      >
        {/* Body */}
        <path d="M3 12 Q3 10 5 10 L15 10 Q17 10 17 12 L17 18 Q17 19.5 15 19.5 L5 19.5 Q3 19.5 3 18 Z" />
        {/* Neck */}
        <path d="M13 10.5 L13 5.5 L16 5.5 L16 10.5 Z" />
        {/* Head */}
        <ellipse cx="14.5" cy="4.5" rx="2.5" ry="2" />
        {/* Left ear */}
        <polygon points="13.2,2.8 13.8,0.8 14.8,2.8" />
        {/* Right ear */}
        <polygon points="15.2,2.8 15.8,0.8 16.8,2.8" />
        {/* Legs */}
        <rect x="5" y="19" width="2" height="3.5" rx="1" />
        <rect x="8.5" y="19" width="2" height="3.5" rx="1" />
        <rect x="12" y="19" width="2" height="3.5" rx="1" />
        <rect x="15" y="19" width="2" height="3.5" rx="1" />
        {/* Tail */}
        <path d="M3 12 Q1 11 1.5 9 Q2 7 3 10" />
      </svg>
    </div>
  )
}
