import { useState, useEffect, useRef, useCallback } from 'react'

const slides = [
  { icon: '🏆', title: 'Gana recompensas', subtitle: 'XP, rachas y logros' },
  { icon: '📚', title: 'Aprende a tu ritmo', subtitle: 'Lecciones cortas de 5 minutos' },
  { icon: '🎯', title: 'Ejercicios interactivos', subtitle: 'Opción múltiple y texto libre' },
  { icon: '🌎', title: 'Quechua Sureño', subtitle: 'La variante más hablada del Perú' },
]

export function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStartX = useRef<number | null>(null)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex(i => (i + 1) % slides.length)
    }, 3000)
  }, [])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const goTo = (index: number) => {
    setActiveIndex(index)
    resetTimer()
  }

  const handleDragStart = (x: number) => { dragStartX.current = x }

  const handleDragEnd = (x: number) => {
    if (dragStartX.current === null) return
    const delta = dragStartX.current - x
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        goTo((activeIndex + 1) % slides.length)
      } else {
        goTo((activeIndex - 1 + slides.length) % slides.length)
      }
    }
    dragStartX.current = null
  }

  return (
    <div
      className="w-full max-w-sm select-none"
      onTouchStart={e => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={e => handleDragEnd(e.changedTouches[0].clientX)}
      onMouseDown={e => handleDragStart(e.clientX)}
      onMouseUp={e => handleDragEnd(e.clientX)}
    >
      {/* Slide */}
      <div className="bg-white/15 rounded-3xl px-6 py-5 flex items-center gap-4 min-h-[88px]">
        <span className="text-4xl">{slides[activeIndex].icon}</span>
        <div>
          <p className="text-white font-bold text-base leading-tight">{slides[activeIndex].title}</p>
          <p className="text-white/80 text-sm mt-0.5">{slides[activeIndex].subtitle}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
