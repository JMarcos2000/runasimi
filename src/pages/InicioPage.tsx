import { useAuth } from '../hooks/useAuth'
import { useInicioData } from '../hooks/useInicioData'
import { useNavigate } from 'react-router-dom'

export function InicioPage() {
  const { user } = useAuth()
  const { streak, completedCount, totalLessons, currentDayLesson, loading } = useInicioData()
  const navigate = useNavigate()

  const username = user?.user_metadata?.username || user?.email?.split('@')[0] || 'Estudiante'
  const currentDay = completedCount + 1
  const progressPercent = Math.round((completedCount / totalLessons) * 100)

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
          <span className="text-sm font-bold text-quechua-primary">
            {streak > 0 ? `${streak} días` : 'Sin racha'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pt-6 pb-8 flex flex-col gap-5">
        {/* Nivel y progreso */}
        <div className="bg-quechua-surface border border-quechua-border rounded-2xl px-5 py-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-quechua-text-secondary">
              Nivel A1 · Día {loading ? '–' : currentDay}
            </span>
            <span className="text-sm font-bold text-quechua-primary">
              {loading ? '–' : completedCount}/{totalLessons}
            </span>
          </div>
          <div className="w-full h-3 bg-quechua-border rounded-full overflow-hidden">
            <div
              className="h-full bg-quechua-primary rounded-full transition-all duration-500"
              style={{ width: loading ? '0%' : `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Frase del día */}
        {!loading && currentDayLesson?.phrase_of_day && (
          <div className="bg-quechua-surface border border-quechua-border rounded-2xl px-5 py-4">
            <p className="text-xs font-semibold text-quechua-text-tertiary uppercase tracking-wide mb-2">
              Frase del día
            </p>
            <p className="text-base font-bold text-quechua-text-primary">
              {currentDayLesson.phrase_of_day}
            </p>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => currentDayLesson && navigate(`/lesson/${currentDayLesson.id}`)}
            disabled={loading || !currentDayLesson}
            className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold disabled:opacity-50 transition-opacity"
          >
            Continuar lección
          </button>
          <button
            onClick={() => navigate('/repaso')}
            disabled={loading || completedCount === 0}
            className="w-full h-14 rounded-2xl bg-quechua-surface border border-quechua-border text-quechua-text-primary text-base font-semibold disabled:opacity-40 transition-opacity"
          >
            Repasar vocabulario
          </button>
        </div>
      </div>
    </div>
  )
}
