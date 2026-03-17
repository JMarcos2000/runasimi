import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import type { Lesson } from '../types'

const lessonEmojis: Record<string, string> = {
  'Saludos': '👋',
  'Números': '🔢',
  'Colores': '🎨',
  'Familia': '👨‍👩‍👧',
  'Comida': '🍽️',
}

const lessonColors: Record<string, string> = {
  'Saludos': '#FFF0E8',
  'Números': '#E8FBF8',
  'Colores': '#FFF9E0',
  'Familia': '#F0F5FF',
  'Comida': '#F0FDF4',
}

export function DashboardPage() {
  const { user } = useAuth()
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('lessons')
      .select('*')
      .order('order')
      .then(({ data }) => {
        setLessons(data ?? [])
        setLoading(false)
      })
  }, [])

  const username = user?.user_metadata?.username || user?.email?.split('@')[0] || 'Estudiante'

  return (
    <div className="min-h-screen bg-quechua-background">
      {/* Header */}
      <div className="bg-quechua-primary px-6 pt-14 pb-6 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-white opacity-85">¡Allianchu! 👋</span>
          <span className="text-2xl font-bold text-white capitalize">{username}</span>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
          <span className="text-base">🔥</span>
          <span className="text-sm font-bold text-quechua-primary">3 días</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-8">
        <h2 className="text-lg font-bold text-quechua-text-primary mb-4">Lecciones</h2>

        {loading ? (
          <p className="text-quechua-text-secondary">Cargando lecciones...</p>
        ) : (
          <div className="flex flex-col gap-3">
            {lessons.map(lesson => (
              <div
                key={lesson.id}
                className="w-full flex items-center gap-4 bg-quechua-surface border border-quechua-border rounded-2xl px-4 py-4 cursor-pointer hover:border-quechua-primary transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ backgroundColor: lessonColors[lesson.title] ?? '#F8F7F4' }}
                >
                  {lessonEmojis[lesson.title] ?? '📖'}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-quechua-text-primary text-base">{lesson.title}</h3>
                  <p className="text-sm text-quechua-text-secondary truncate">{lesson.description}</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-quechua-text-tertiary shrink-0">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
