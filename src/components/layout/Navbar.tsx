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
    <nav className="bg-white border-b border-quechua-border px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/inicio" className="text-xl font-bold text-quechua-primary">
          🌿 Runasimi
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/inicio" className="text-sm text-quechua-text-secondary hover:text-quechua-primary">
            Inicio
          </Link>
          <Link to="/community" className="text-sm text-quechua-text-secondary hover:text-quechua-primary">
            Comunidad
          </Link>
          <Link to="/profile" className="text-sm text-quechua-text-secondary hover:text-quechua-primary">
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
