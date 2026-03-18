import { useState } from 'react'

interface Props {
  question: string
  options: string[]
  correctIndex: number
  onNext: (correct: boolean) => void
}

export function MultipleChoice({ question, options, correctIndex, onNext }: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  const answered = selected !== null
  const isCorrect = selected === correctIndex

  const getOptionStyle = (index: number) => {
    if (!answered) {
      return 'bg-quechua-surface border-quechua-border text-quechua-text-primary hover:border-quechua-primary'
    }
    if (index === correctIndex) return 'bg-green-50 border-green-500 text-green-800'
    if (index === selected) return 'bg-red-50 border-red-400 text-red-800'
    return 'bg-quechua-surface border-quechua-border text-quechua-text-tertiary opacity-50'
  }

  return (
    <div className="flex flex-col gap-5">
      <p className="text-lg font-bold text-quechua-text-primary">{question}</p>

      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !answered && setSelected(index)}
            className={`w-full px-5 py-4 rounded-2xl border-2 text-left font-semibold text-base transition-colors ${getOptionStyle(index)}`}
          >
            {option}
          </button>
        ))}
      </div>

      {answered && (
        <div className="flex flex-col gap-3">
          <p className={`text-sm font-semibold text-center ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
            {isCorrect ? '¡Correcto! 🎉' : 'Incorrecto'}
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
