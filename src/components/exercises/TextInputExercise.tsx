import { useState } from 'react'

interface Props {
  prompt: string
  answer: string
  hint?: string
  onNext: (correct: boolean) => void
}

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export function TextInputExercise({ prompt, answer, hint, onNext }: Props) {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)

  const isCorrect = normalize(value) === normalize(answer)

  const handleCheck = () => {
    if (value.trim()) setChecked(true)
  }

  return (
    <div className="flex flex-col gap-5">
      <p className="text-lg font-bold text-quechua-text-primary">{prompt}</p>

      {hint && (
        <p className="text-sm text-quechua-text-tertiary">Pista: {hint}</p>
      )}

      <input
        type="text"
        value={value}
        onChange={e => !checked && setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && !checked && handleCheck()}
        placeholder="Escribí tu respuesta..."
        className={`w-full h-14 px-4 rounded-2xl border-2 text-base outline-none transition-colors ${
          !checked
            ? 'bg-quechua-surface border-quechua-border text-quechua-text-primary focus:border-quechua-primary'
            : isCorrect
            ? 'bg-green-50 border-green-500 text-green-800'
            : 'bg-red-50 border-red-400 text-red-800'
        }`}
      />

      {!checked ? (
        <button
          onClick={handleCheck}
          disabled={!value.trim()}
          className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold disabled:opacity-40"
        >
          Verificar
        </button>
      ) : (
        <div className="flex flex-col gap-3">
          <p className={`text-sm font-semibold text-center ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
            {isCorrect ? '¡Correcto! 🎉' : `Incorrecto. Era: "${answer}"`}
          </p>
          <button
            onClick={() => onNext(isCorrect)}
            className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  )
}
