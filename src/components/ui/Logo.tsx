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
      <img
        src="/logo.png"
        alt="Runasimi logo"
        style={{ width: size * 0.95, height: size * 0.95, objectFit: 'contain' }}
      />
    </div>
  )
}
