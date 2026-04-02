import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'

interface RankingEntry {
  userId: string
  username: string
  streak: number
  hearts: number
  isCurrentUser: boolean
  givenHeart: boolean
}

export function CommunityPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [ranking, setRanking] = useState<RankingEntry[]>([])
  const [currentUserEntry, setCurrentUserEntry] = useState<RankingEntry | null>(null)
  const [currentUserInTop, setCurrentUserInTop] = useState(false)
  const [loading, setLoading] = useState(true)
  const [givingHeart, setGivingHeart] = useState<string | null>(null)

  useEffect(() => {
    if (!user) return
    fetchRanking()
  }, [user])

  async function fetchRanking() {
    if (!user) return
    setLoading(true)

    const today = new Date().toISOString().split('T')[0]

    const [streakRes, heartsRes, myLikesTodayRes, myStreakRes, myProfileRes] = await Promise.all([
      // Top 10 racha con perfil
      supabase
        .from('user_streak')
        .select('user_id, current_streak, profiles(username)')
        .order('current_streak', { ascending: false })
        .limit(10),
      // Total de corazones recibidos por cada usuario
      supabase
        .from('community_likes')
        .select('to_user_id'),
      // Corazones que yo di hoy
      supabase
        .from('community_likes')
        .select('to_user_id')
        .eq('from_user_id', user.id)
        .eq('like_date', today),
      // Mi propia racha
      supabase
        .from('user_streak')
        .select('current_streak')
        .eq('user_id', user.id)
        .maybeSingle(),
      // Mi perfil
      supabase
        .from('profiles')
        .select('username')
        .eq('id', user.id)
        .maybeSingle(),
    ])

    const topStreaks = (streakRes.data ?? []) as Array<{
      user_id: string
      current_streak: number
      profiles: { username: string } | null
    }>

    const allHearts = heartsRes.data ?? []
    const heartCountMap: Record<string, number> = {}
    for (const like of allHearts) {
      heartCountMap[like.to_user_id] = (heartCountMap[like.to_user_id] ?? 0) + 1
    }

    const myLikesTodaySet = new Set((myLikesTodayRes.data ?? []).map((l) => l.to_user_id))

    const entries: RankingEntry[] = topStreaks.map((row) => ({
      userId: row.user_id,
      username: row.profiles?.username ?? 'Usuario',
      streak: row.current_streak,
      hearts: heartCountMap[row.user_id] ?? 0,
      isCurrentUser: row.user_id === user.id,
      givenHeart: myLikesTodaySet.has(row.user_id),
    }))

    const inTop = entries.some((e) => e.isCurrentUser)
    setCurrentUserInTop(inTop)

    if (!inTop) {
      setCurrentUserEntry({
        userId: user.id,
        username: myProfileRes.data?.username ?? 'Yo',
        streak: myStreakRes.data?.current_streak ?? 0,
        hearts: heartCountMap[user.id] ?? 0,
        isCurrentUser: true,
        givenHeart: false,
      })
    }

    setRanking(entries)
    setLoading(false)
  }

  async function handleGiveSapana(toUserId: string) {
    if (!user || givingHeart) return
    setGivingHeart(toUserId)

    const today = new Date().toISOString().split('T')[0]
    await supabase.from('community_likes').insert({
      from_user_id: user.id,
      to_user_id: toUserId,
      like_date: today,
    })

    setRanking((prev) =>
      prev.map((e) =>
        e.userId === toUserId ? { ...e, hearts: e.hearts + 1, givenHeart: true } : e
      )
    )
    if (currentUserEntry?.userId === toUserId) {
      setCurrentUserEntry((prev) => prev ? { ...prev, hearts: prev.hearts + 1, givenHeart: true } : prev)
    }

    setGivingHeart(null)
  }

  return (
    <div className="min-h-screen bg-quechua-background">
      {/* Header */}
      <div className="bg-quechua-primary px-6 pt-14 pb-6">
        <button
          onClick={() => navigate('/inicio')}
          className="mb-4 w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-white">Comunidad</h1>
        <p className="text-sm text-white/80 mt-1">Ranking de racha</p>
      </div>

      {/* Ranking */}
      <div className="px-4 py-5 flex flex-col gap-3 max-w-md mx-auto">
        {loading ? (
          <p className="text-center text-quechua-text-secondary py-8">Cargando ranking...</p>
        ) : ranking.length === 0 ? (
          <p className="text-center text-quechua-text-secondary py-8">
            Aún no hay usuarios en el ranking.
          </p>
        ) : (
          <>
            {ranking.map((entry, index) => (
              <RankingRow
                key={entry.userId}
                position={index + 1}
                entry={entry}
                onGiveSapana={handleGiveSapana}
                givingHeart={givingHeart === entry.userId}
              />
            ))}

            {!currentUserInTop && currentUserEntry && (
              <>
                <div className="flex items-center gap-2 my-1">
                  <div className="flex-1 border-t border-quechua-border" />
                  <span className="text-xs text-quechua-text-tertiary">Tu posición</span>
                  <div className="flex-1 border-t border-quechua-border" />
                </div>
                <RankingRow
                  position={null}
                  entry={currentUserEntry}
                  onGiveSapana={handleGiveSapana}
                  givingHeart={false}
                  highlighted
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

interface RankingRowProps {
  position: number | null
  entry: RankingEntry
  onGiveSapana: (userId: string) => void
  givingHeart: boolean
  highlighted?: boolean
}

function RankingRow({ position, entry, onGiveSapana, givingHeart, highlighted }: RankingRowProps) {
  const canGive = !entry.isCurrentUser && !entry.givenHeart

  return (
    <div
      className={`bg-quechua-surface rounded-2xl px-4 py-3 flex items-center gap-3 ${
        highlighted ? 'border-2 border-quechua-primary' : 'border border-quechua-border'
      }`}
    >
      {/* Posición */}
      <span className="w-7 text-center text-sm font-bold text-quechua-primary shrink-0">
        {position ?? '–'}
      </span>

      {/* Info usuario */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-quechua-text-primary truncate">
          {entry.username}
          {entry.isCurrentUser && (
            <span className="ml-1 text-xs text-quechua-text-tertiary font-normal">(tú)</span>
          )}
        </p>
        <div className="flex items-center gap-3 mt-0.5">
          <span className="text-xs text-quechua-text-secondary">🔥 {entry.streak} días</span>
          <span className="text-xs text-quechua-text-secondary">❤️ {entry.hearts}</span>
        </div>
      </div>

      {/* Botón sapaña */}
      {!entry.isCurrentUser && (
        <button
          onClick={() => canGive && onGiveSapana(entry.userId)}
          disabled={!canGive || givingHeart}
          className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
            entry.givenHeart
              ? 'bg-quechua-border text-quechua-text-tertiary cursor-default'
              : 'bg-quechua-primary text-white disabled:opacity-50'
          }`}
        >
          {givingHeart ? '...' : entry.givenHeart ? '❤️ Dado' : '❤️ Sapaña'}
        </button>
      )}
    </div>
  )
}
