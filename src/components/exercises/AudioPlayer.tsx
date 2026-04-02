import { useRef, useState } from 'react'

interface AudioPlayerProps {
  word: string
  audio_url: string
  question: string
  onNext: (correct: boolean) => void
}

export function AudioPlayer({ word, audio_url, question, onNext }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  const handlePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audio_url)
      audioRef.current.onended = () => setPlaying(false)
    }
    if (playing) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
      setHasPlayed(true)
    }
  }

  const handleRepeat = () => {
    if (!audioRef.current) return
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    audioRef.current.play()
    setPlaying(true)
  }

  return (
    <div className="flex flex-col items-center gap-6 pt-8">
      {/* Palabra */}
      <p className="text-3xl font-bold text-quechua-text-primary text-center">{word}</p>

      {/* Botón play */}
      <button
        onClick={handlePlay}
        className="w-20 h-20 rounded-full bg-quechua-primary flex items-center justify-center shadow-lg active:scale-95 transition-transform"
      >
        {playing ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        )}
      </button>

      {/* Pregunta */}
      <p className="text-base text-quechua-text-secondary text-center">{question}</p>

      {/* Botón repetir */}
      {hasPlayed && (
        <button
          onClick={handleRepeat}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-quechua-border text-sm font-semibold text-quechua-text-primary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 .49-3.33" />
          </svg>
          Repetir
        </button>
      )}

      {/* Botón continuar */}
      <button
        onClick={() => onNext(true)}
        disabled={!hasPlayed}
        className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold disabled:opacity-40 transition-opacity mt-2"
      >
        Continuar
      </button>
    </div>
  )
}
