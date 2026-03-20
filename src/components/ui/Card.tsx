interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

const paddingClasses = {
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
}

export function Card({ children, className = '', padding = 'md' }: CardProps) {
  return (
    <div className={`bg-quechua-surface rounded-2xl border border-quechua-border ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}
