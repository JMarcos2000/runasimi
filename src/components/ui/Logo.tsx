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
        width={size * 0.78}
        height={size * 0.78}
        viewBox="0 0 80 96"
        fill="white"
      >
        {/* Cuerpo */}
        <polygon points="8,42 8,68 65,68 65,42 57,36 15,36" />

        {/* Cuello */}
        <polygon points="47,36 47,18 57,15 62,36" />

        {/* Cabeza */}
        <polygon points="48,18 48,10 65,10 68,18 62,22 52,22" />

        {/* Oreja izquierda */}
        <polygon points="50,10 53,3 57,10" />

        {/* Oreja derecha */}
        <polygon points="61,10 64,3 67,10" />

        {/* Hocico angular */}
        <rect x="62" y="14" width="8" height="7" />

        {/* Ojo (corte en fondo) */}
        <rect x="57" y="12" width="4" height="4" fill={color} />

        {/* Cola angular */}
        <polygon points="8,42 3,38 3,53 8,56" />

        {/* Patas */}
        <rect x="10" y="67" width="9" height="18" />
        <rect x="23" y="67" width="9" height="18" />
        <rect x="42" y="67" width="9" height="18" />
        <rect x="55" y="67" width="9" height="18" />

        {/* Rombo central andino */}
        <polygon points="33,44 41,51 33,58 25,51" fill={color} />
      </svg>
    </div>
  )
}
