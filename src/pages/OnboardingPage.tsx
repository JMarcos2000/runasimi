import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'

const CHECKMARKS = [
  'Más extendido: 8 millones de hablantes',
  'Base académica sólida',
  'Material educativo disponible',
]

export function OnboardingPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [saving, setSaving] = useState(false)

  const handleEntendido = async () => {
    if (!user) return
    setSaving(true)
    await supabase
      .from('profiles')
      .update({ onboarding_completed: true })
      .eq('id', user.id)
    navigate('/inicio', { replace: true })
  }

  return (
    <div className="min-h-screen bg-quechua-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md flex flex-col gap-8">
        {/* Ícono decorativo */}
        <div className="flex justify-center">
          <span className="text-7xl">🌿</span>
        </div>

        {/* Encabezado */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-bold text-quechua-text-primary">
            Quechua Sureño (Perú)
          </h1>
          <p className="text-base text-quechua-text-secondary">
            La variante que aprenderás en esta app
          </p>
        </div>

        {/* Checkmarks */}
        <div className="bg-quechua-surface border border-quechua-border rounded-2xl px-5 py-5 flex flex-col gap-4">
          {CHECKMARKS.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-quechua-primary flex items-center justify-center shrink-0">
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm text-quechua-text-primary leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* Nota de variantes */}
        <p className="text-xs text-quechua-text-tertiary text-center leading-relaxed">
          Existen más de 40 variantes regionales del quechua. Esta app se enfoca en el{' '}
          <span className="font-semibold">Quechua Sureño (Qusqu-Qullaw)</span>.
        </p>

        {/* Botón */}
        <button
          onClick={handleEntendido}
          disabled={saving}
          className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold disabled:opacity-50 transition-opacity"
        >
          {saving ? 'Guardando...' : 'Entendido'}
        </button>
      </div>
    </div>
  )
}
