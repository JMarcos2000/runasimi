import { useAuth } from '../hooks/useAuth'
import { Card } from '../components/ui/Card'
import { Layout } from '../components/layout/Layout'

export function ProfilePage() {
  const { user } = useAuth()

  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-quechua-text-primary mb-6">Mi perfil</h1>

      <Card className="max-w-md">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-quechua-surface border border-quechua-border flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-quechua-primary">
              <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-quechua-text-primary">{user?.email}</p>
            {createdAt && (
              <p className="text-sm text-quechua-text-secondary">Miembro desde {createdAt}</p>
            )}
          </div>
        </div>
      </Card>
    </Layout>
  )
}
