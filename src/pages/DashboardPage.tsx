import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Lesson } from '../types'
import { Card } from '../components/ui/Card'
import { Layout } from '../components/layout/Layout'

export function DashboardPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('lessons')
      .select('*')
      .order('order')
      .then(({ data }) => {
        setLessons(data ?? [])
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Lecciones</h1>

      {loading ? (
        <p className="text-gray-500">Cargando lecciones...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lessons.map(lesson => (
            <Card key={lesson.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-xl">
                  📖
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{lesson.title}</h3>
                  <p className="text-sm text-gray-500">{lesson.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  )
}
