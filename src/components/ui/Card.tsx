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
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}
