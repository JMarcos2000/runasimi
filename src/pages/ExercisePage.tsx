import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import { useLessonComplete } from '../hooks/useLessonComplete'
import { MultipleChoice } from '../components/exercises/MultipleChoice'
import { TextInputExercise } from '../components/exercises/TextInputExercise'
import { AudioPlayer } from '../components/exercises/AudioPlayer'
import { VideoPlayer } from '../components/exercises/VideoPlayer'
import type { Exercise, ChoiceContent, TextInputContent, AudioContent, VideoContent } from '../types'

export function ExercisePage() {
  const { id } = useParams<{ id: string }>()
  const { user } = useAuth()
  const navigate = useNavigate()
  const { completeLesson, loading: completing } = useLessonComplete()

  const [exercises, setExercises] = useState<Exercise[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    supabase
      .from('exercises')
      .select('*')
      .eq('lesson_id', id)
      .order('order')
      .then(({ data }) => {
        setExercises((data ?? []) as Exercise[])
        setLoading(false)
      })
  }, [id])

  const handleNext = async (correct: boolean) => {
    const newCorrect = correctCount + (correct ? 1 : 0)
    const nextIndex = currentIndex + 1

    if (nextIndex >= exercises.length) {
      const score = exercises.length > 0
        ? Math.round((newCorrect / exercises.length) * 100)
        : 100
      await completeLesson(id!, user!.id, score)
      navigate(`/lesson/${id}/resultado`, { state: { score, lessonId: id } })
    } else {
      setCorrectCount(newCorrect)
      setCurrentIndex(nextIndex)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-quechua-background flex items-center justify-center">
        <p className="text-quechua-text-secondary">Cargando ejercicios...</p>
      </div>
    )
  }

  if (exercises.length === 0) {
    return (
      <div className="min-h-screen bg-quechua-background flex items-center justify-center px-5">
        <div className="flex flex-col items-center gap-4">
          <p className="text-quechua-text-secondary">No hay ejercicios para esta lección.</p>
          <button
            onClick={async () => { await completeLesson(id!, user!.id, 100); navigate(`/lesson/${id}/resultado`, { state: { score: 100, lessonId: id } }) }}
            disabled={completing}
            className="h-14 px-8 rounded-2xl bg-quechua-primary text-white font-bold"
          >
            {completing ? 'Guardando...' : 'Completar lección'}
          </button>
        </div>
      </div>
    )
  }

  const exercise = exercises[currentIndex]
  const progressPercent = Math.round((currentIndex / exercises.length) * 100)

  return (
    <div className="min-h-screen bg-quechua-background">
      {/* Header */}
      <div className="bg-quechua-primary px-6 pt-14 pb-5">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className="text-sm font-semibold text-white opacity-80">
            {currentIndex + 1} / {exercises.length}
          </span>
        </div>
        {/* Barra de progreso */}
        <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Exercise */}
      <div className="px-5 pt-8 pb-8">
        {exercise.type === 'choice' && (() => {
          const content = exercise.content as ChoiceContent
          return (
            <MultipleChoice
              key={currentIndex}
              question={content.question}
              options={content.options}
              correctIndex={content.correct_index}
              onNext={handleNext}
            />
          )
        })()}

        {exercise.type === 'text_input' && (() => {
          const content = exercise.content as TextInputContent
          return (
            <TextInputExercise
              key={currentIndex}
              prompt={content.prompt}
              answer={content.answer}
              hint={content.hint}
              onNext={handleNext}
            />
          )
        })()}

        {exercise.type === 'audio' && (() => {
          const content = exercise.content as AudioContent
          return (
            <AudioPlayer
              key={currentIndex}
              word={content.word}
              audio_url={content.audio_url}
              question={content.question}
              onNext={handleNext}
            />
          )
        })()}

        {exercise.type === 'video' && (() => {
          const content = exercise.content as VideoContent
          return (
            <VideoPlayer
              key={currentIndex}
              video_url={content.video_url}
              duration_seconds={content.duration_seconds}
              caption={content.caption}
              onNext={handleNext}
            />
          )
        })()}
      </div>
    </div>
  )
}
