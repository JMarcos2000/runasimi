import { useState } from 'react'
import { supabase } from '../lib/supabase'

export function useLessonComplete() {
  const [loading, setLoading] = useState(false)

  async function completeLesson(lessonId: string, userId: string, score = 100): Promise<void> {
    setLoading(true)

    const today = new Date().toISOString().split('T')[0]

    await supabase.from('user_progress').upsert(
      { user_id: userId, lesson_id: lessonId, completed: true, score },
      { onConflict: 'user_id,lesson_id' }
    )

    const { data: existing } = await supabase
      .from('user_streak')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()

    if (!existing) {
      await supabase.from('user_streak').insert({
        user_id: userId,
        current_streak: 1,
        longest_streak: 1,
        last_activity_date: today,
      })
    } else {
      const last = existing.last_activity_date
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
      let newStreak = existing.current_streak

      if (last === today) {
        // ya registrado hoy, sin cambio
      } else if (last === yesterday) {
        newStreak += 1
      } else {
        newStreak = 1
      }

      await supabase.from('user_streak').update({
        current_streak: newStreak,
        longest_streak: Math.max(newStreak, existing.longest_streak),
        last_activity_date: today,
      }).eq('user_id', userId)
    }

    setLoading(false)
  }

  return { completeLesson, loading }
}
