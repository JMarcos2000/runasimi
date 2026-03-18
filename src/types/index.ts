export interface Profile {
  id: string
  username: string
  avatar_url: string | null
  created_at: string
  onboarding_completed: boolean | null
}

export interface Lesson {
  id: string
  title: string
  description: string | null
  order: number
  created_at: string
  day_number: number | null
  topic: string | null
  example_quechua: string | null
  example_translation: string | null
  phrase_of_day: string | null
}

export interface UserProgress {
  id: string
  user_id: string
  lesson_id: string
  completed: boolean
  score: number | null
  updated_at: string
}

export type ExerciseType = 'choice' | 'text_input' | 'audio' | 'video'

export interface ChoiceContent {
  question: string
  options: string[]
  correct_index: number
}

export interface TextInputContent {
  prompt: string
  answer: string
  hint?: string
}

export interface AudioContent {
  word: string
  audio_url: string
  question: string
}

export interface VideoContent {
  video_url: string
  duration_seconds: number
  caption: string
}

export interface Exercise {
  id: string
  lesson_id: string
  type: ExerciseType
  order: number
  content: ChoiceContent | TextInputContent | AudioContent | VideoContent
  created_at: string | null
}

export interface UserStreak {
  id: string
  user_id: string
  current_streak: number
  longest_streak: number
  last_activity_date: string | null
  updated_at: string | null
}

export interface CommunityLike {
  id: string
  from_user_id: string
  to_user_id: string
  like_date: string
  created_at: string | null
}
