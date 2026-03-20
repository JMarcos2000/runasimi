import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'

interface CompletedLesson {
  id: string
  day_number: number | null
  topic: string | null
  title: string
  score: number | null
}

export function RepasoPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [lessons, setLessons] = useState<CompletedLesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    supabase
      .from('user_progress')
      .select('score, lesson_id, lessons(id, day_number, topic, title)')
      .eq('user_id', user.id)
      .eq('completed', true)
      .order('lesson_id')
      .then(({ data }) => {
        const mapped = (data ?? [])
          .map((row: any) => ({
            id: row.lessons?.id ?? row.lesson_id,
            day_number: row.lessons?.day_number ?? null,
            topic: row.lessons?.topic ?? null,
            title: row.lessons?.title ?? '',
            score: row.score,
          }))
          .sort((a: CompletedLesson, b: CompletedLesson) =>
            (a.day_number ?? 0) - (b.day_number ?? 0)
          )
        setLessons(mapped)
        setLoading(false)
      })
  }, [user])

  return (
    <div className="min-h-screen bg-quechua-background">
      {/* Header */}
      <div className="bg-quechua-primary px-6 pt-14 pb-6 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-white">Repasar</h1>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-8 flex flex-col gap-3 max-w-sm mx-auto">
        {loading && (
          <p className="text-quechua-text-secondary text-center pt-8">Cargando lecciones...</p>
        )}

        {!loading && lessons.length === 0 && (
          <div className="flex flex-col items-center gap-2 pt-12">
            <p className="text-2xl">📖</p>
            <p className="text-base font-semibold text-quechua-text-primary text-center">
              Todavía no completaste ninguna lección
            </p>
            <p className="text-sm text-quechua-text-secondary text-center">
              Completá tu primera lección para poder repasar
            </p>
            <button
              onClick={() => navigate('/inicio')}
              className="mt-4 h-12 px-6 rounded-2xl bg-quechua-primary text-white font-bold text-sm"
            >
              Ir al inicio
            </button>
          </div>
        )}

        {!loading && lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-quechua-surface border border-quechua-border rounded-2xl px-5 py-4 flex items-center justify-between gap-3"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-quechua-text-tertiary uppercase tracking-wide">
                {lesson.day_number ? `Día ${lesson.day_number}` : 'Lección'}
              </p>
              <p className="text-base font-bold text-quechua-text-primary truncate">
                {lesson.topic ?? lesson.title}
              </p>
              {lesson.score !== null && (
                <p className="text-xs text-quechua-text-secondary mt-0.5">
                  Puntuación: {lesson.score}/100
                </p>
              )}
            </div>
            <button
              onClick={() => navigate(`/lesson/${lesson.id}`)}
              className="shrink-0 h-9 px-4 rounded-xl bg-quechua-primary text-white text-sm font-bold"
            >
              Repasar
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
