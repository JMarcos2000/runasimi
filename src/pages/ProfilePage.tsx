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
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mi perfil</h1>

      <Card className="max-w-md">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <p className="font-semibold text-gray-800">{user?.email}</p>
            {createdAt && (
              <p className="text-sm text-gray-500">Miembro desde {createdAt}</p>
            )}
          </div>
        </div>
      </Card>
    </Layout>
  )
}
