import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'

interface ResultState {
  score: number
  lessonId: string
}

export function LessonResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()
  const state = location.state as ResultState | null

  const [currentStreak, setCurrentStreak] = useState<number | null>(null)

  useEffect(() => {
    if (!state) {
      navigate('/inicio', { replace: true })
      return
    }

    if (!user) return

    supabase
      .from('user_streak')
      .select('current_streak')
      .eq('user_id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        setCurrentStreak(data?.current_streak ?? 1)
      })
  }, [state, user, navigate])

  if (!state) return null

  const { score } = state

  const feedback =
    score >= 80
      ? '¡Excelente! 🎉'
      : score >= 50
        ? '¡Bien hecho! 👍'
        : 'Seguí practicando 💪'

  return (
    <div className="min-h-screen bg-quechua-background flex flex-col">
      {/* Header */}
      <div className="bg-quechua-primary px-6 pt-14 pb-10 flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-white">Lección completada</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-5 px-5 pt-8 pb-10 max-w-sm mx-auto w-full">
        {/* Score */}
        <div className="bg-quechua-surface border border-quechua-border rounded-2xl px-6 py-6 w-full flex flex-col items-center gap-1">
          <p className="text-xs font-semibold text-quechua-text-tertiary uppercase tracking-wide">Puntuación</p>
          <p className="text-5xl font-bold text-quechua-text-primary">{score}</p>
          <p className="text-sm text-quechua-text-secondary">de 100</p>
        </div>

        {/* Feedback */}
        <p className="text-lg font-semibold text-quechua-text-primary text-center">{feedback}</p>

        {/* Racha */}
        {currentStreak !== null && (
          <div className="bg-quechua-surface border border-quechua-border rounded-2xl px-5 py-4 w-full flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-base font-bold text-quechua-text-primary">
                {currentStreak} {currentStreak === 1 ? 'día' : 'días'} de racha
              </p>
              <p className="text-xs text-quechua-text-secondary">¡Seguí así!</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={() => navigate('/inicio', { replace: true })}
          className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold mt-2"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  )
}
