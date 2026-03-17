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
        width={size * 0.72}
        height={size * 0.72}
        viewBox="0 0 60 70"
        fill="white"
      >
        {/* Body */}
        <ellipse cx="26" cy="46" rx="21" ry="13" />

        {/* Neck */}
        <path d="M33 35 C35 27 39 21 41 17 L46 19 C44 23 40 29 38 37 Z" />

        {/* Head */}
        <ellipse cx="45" cy="14" rx="7" ry="5.5" transform="rotate(-10 45 14)" />

        {/* Ears */}
        <polygon points="39,10 41,3 44,10" />
        <polygon points="45,9 47,2 50,9" />

        {/* Snout bump */}
        <ellipse cx="51" cy="17" rx="3" ry="2" transform="rotate(-10 51 17)" />

        {/* Eye */}
        <circle cx="46" cy="13" r="1.2" fill={color} />

        {/* Front legs */}
        <rect x="37" y="57" width="6" height="11" rx="3" />
        <rect x="29" y="57" width="6" height="11" rx="3" />

        {/* Back legs */}
        <rect x="11" y="57" width="6" height="11" rx="3" />
        <rect x="3" y="57" width="6" height="11" rx="3" />

        {/* Tail */}
        <ellipse cx="5" cy="43" rx="4" ry="6" transform="rotate(20 5 43)" />

        {/* Andean geometric pattern — rombos (cutouts del color del fondo) */}
        <polygon points="26,38 30,43 26,48 22,43" fill={color} />
        <polygon points="17,44 20,47 17,50 14,47" fill={color} opacity="0.7" />
        <polygon points="34,43 36.5,45.5 34,48 31.5,45.5" fill={color} opacity="0.7" />
      </svg>
    </div>
  )
}
