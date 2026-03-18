import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import type { Lesson } from '../types'

export function LessonPage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [alreadyCompleted, setAlreadyCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id || !user) return

    async function fetchLesson() {
      const [lessonRes, progressRes] = await Promise.all([
        supabase.from('lessons').select('*').eq('id', id!).single(),
        supabase
          .from('user_progress')
          .select('completed')
          .eq('user_id', user!.id)
          .eq('lesson_id', id!)
          .maybeSingle(),
      ])

      setLesson(lessonRes.data as Lesson)
      setAlreadyCompleted(progressRes.data?.completed ?? false)
      setLoading(false)
    }

    fetchLesson()
  }, [id, user])

  const handleComplete = () => {
    navigate(`/lesson/${id}/ejercicios`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-quechua-background flex items-center justify-center">
        <p className="text-quechua-text-secondary">Cargando lección...</p>
      </div>
    )
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-quechua-background flex items-center justify-center">
        <p className="text-quechua-text-secondary">Lección no encontrada.</p>
      </div>
    )
  }

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
        <div>
          <p className="text-sm font-medium text-white opacity-80">
            {lesson.day_number ? `Día ${lesson.day_number}` : 'Lección'}
          </p>
          <h1 className="text-xl font-bold text-white">
            {lesson.topic ?? lesson.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-8 flex flex-col gap-5">
        {/* Ejemplo quechua */}
        {lesson.example_quechua && (
          <div className="bg-quechua-surface border border-quechua-border rounded-2xl px-5 py-5">
            <p className="text-xs font-semibold text-quechua-text-tertiary uppercase tracking-wide mb-3">
              Ejemplo
            </p>
            <p className="text-2xl font-bold text-quechua-text-primary mb-2">
              {lesson.example_quechua}
            </p>
            {lesson.example_translation && (
              <p className="text-base text-quechua-text-secondary">
                {lesson.example_translation}
              </p>
            )}
          </div>
        )}

        {/* Frase del día */}
        {lesson.phrase_of_day && (
          <div className="bg-quechua-surface border border-quechua-border rounded-2xl px-5 py-4">
            <p className="text-xs font-semibold text-quechua-text-tertiary uppercase tracking-wide mb-2">
              Frase del día
            </p>
            <p className="text-base font-semibold text-quechua-text-primary">
              {lesson.phrase_of_day}
            </p>
          </div>
        )}

        {/* Descripción */}
        {lesson.description && (
          <p className="text-sm text-quechua-text-secondary leading-relaxed px-1">
            {lesson.description}
          </p>
        )}

        {/* Botón completar */}
        <button
          onClick={handleComplete}
          disabled={alreadyCompleted}
          className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold disabled:opacity-50 transition-opacity mt-2"
        >
          {alreadyCompleted ? 'Ya completada ✓' : 'Iniciar ejercicios'}
        </button>
      </div>
    </div>
  )
}
