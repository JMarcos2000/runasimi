import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../ui/Button'

export function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/dashboard" className="text-xl font-bold text-violet-600">
          🌿 Runasimi
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-sm text-gray-600 hover:text-violet-600">
            Lecciones
          </Link>
          <Link to="/profile" className="text-sm text-gray-600 hover:text-violet-600">
            Perfil
          </Link>
          {user && (
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
