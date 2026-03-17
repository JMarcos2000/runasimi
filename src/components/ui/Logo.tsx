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
        viewBox="0 0 80 80"
        fill="white"
      >
        {/* Cuerpo */}
        <polygon points="8,38 8,60 65,60 65,38 57,32 15,32" />

        {/* Cuello */}
        <polygon points="47,32 47,16 57,13 62,32" />

        {/* Cabeza */}
        <polygon points="48,16 48,8 65,8 68,16 62,20 52,20" />

        {/* Oreja izquierda */}
        <polygon points="50,8 53,2 57,8" />

        {/* Oreja derecha */}
        <polygon points="61,8 64,2 67,8" />

        {/* Hocico */}
        <rect x="62" y="12" width="8" height="7" />

        {/* Ojo */}
        <rect x="57" y="11" width="4" height="4" fill={color} />

        {/* Cola */}
        <polygon points="8,38 3,34 3,48 8,51" />

        {/* Patas */}
        <rect x="10" y="59" width="9" height="16" />
        <rect x="23" y="59" width="9" height="16" />
        <rect x="42" y="59" width="9" height="16" />
        <rect x="55" y="59" width="9" height="16" />

        {/* Rombo central andino */}
        <polygon points="33,40 41,47 33,54 25,47" fill={color} />
      </svg>
    </div>
  )
}
