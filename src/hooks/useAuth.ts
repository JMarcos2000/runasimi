import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const register = (email: string, password: string) =>
    supabase.auth.signUp({ email, password })

  const login = (email: string, password: string) =>
    supabase.auth.signInWithPassword({ email, password })

  const loginWithGoogle = () =>
    supabase.auth.signInWithOAuth({ provider: 'google' })

  const logout = () => supabase.auth.signOut()

  return { user, loading, register, login, loginWithGoogle, logout }
}
