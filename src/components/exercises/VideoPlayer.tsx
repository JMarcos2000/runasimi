import { useRef, useState } from 'react'

interface VideoPlayerProps {
  video_url: string
  duration_seconds: number
  caption: string
  onNext: (correct: boolean) => void
}

export function VideoPlayer({ video_url, caption, onNext }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [canContinue, setCanContinue] = useState(false)

  const handleTimeUpdate = () => {
    if (!canContinue && videoRef.current && videoRef.current.currentTime >= 5) {
      setCanContinue(true)
    }
  }

  return (
    <div className="flex flex-col gap-4 pt-4">
      {/* Video */}
      <video
        ref={videoRef}
        src={video_url}
        controls
        preload="metadata"
        className="w-full rounded-2xl bg-black"
        onEnded={() => setCanContinue(true)}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Caption */}
      <p className="text-sm text-quechua-text-secondary text-center">{caption}</p>

      {/* Botón continuar */}
      <button
        onClick={() => onNext(true)}
        disabled={!canContinue}
        className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold disabled:opacity-40 transition-opacity mt-2"
      >
        Continuar
      </button>
    </div>
  )
}
