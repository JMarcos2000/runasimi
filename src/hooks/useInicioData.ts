import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'
import type { Lesson } from '../types'

interface InicioData {
  streak: number
  completedCount: number
  totalLessons: number
  currentDayLesson: Lesson | null
  loading: boolean
}

export function useInicioData(): InicioData {
  const { user } = useAuth()
  const [data, setData] = useState<InicioData>({
    streak: 0,
    completedCount: 0,
    totalLessons: 60,
    currentDayLesson: null,
    loading: true,
  })

  useEffect(() => {
    if (!user) return

    async function fetchData() {
      const [streakRes, progressRes, lessonsRes] = await Promise.all([
        supabase
          .from('user_streak')
          .select('current_streak')
          .eq('user_id', user!.id)
          .maybeSingle(),
        supabase
          .from('user_progress')
          .select('lesson_id')
          .eq('user_id', user!.id)
          .eq('completed', true),
        supabase
          .from('lessons')
          .select('*')
          .not('day_number', 'is', null)
          .order('day_number'),
      ])

      const streak = streakRes.data?.current_streak ?? 0
      const completedIds = new Set((progressRes.data ?? []).map(p => p.lesson_id))
      const lessons = (lessonsRes.data ?? []) as Lesson[]
      const completedCount = lessons.filter(l => completedIds.has(l.id)).length
      const currentDayLesson = lessons.find(l => !completedIds.has(l.id)) ?? null

      setData({
        streak,
        completedCount,
        totalLessons: 60,
        currentDayLesson,
        loading: false,
      })
    }

    fetchData()
  }, [user])

  return data
}
