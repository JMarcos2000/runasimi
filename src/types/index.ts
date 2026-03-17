export interface Profile {
  id: string
  username: string
  avatar_url: string | null
  created_at: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  order: number
  created_at: string
}

export interface UserProgress {
  id: string
  user_id: string
  lesson_id: string
  completed: boolean
  score: number
  updated_at: string
}
