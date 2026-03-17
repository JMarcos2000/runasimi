import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'

export function LoginPage() {
  const { login, loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await login(email, password)
    if (error) {
      setError('Email o contraseña incorrectos')
    } else {
      navigate('/dashboard')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-sm" padding="lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          🌿 Quechua App
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />
          <Input
            label="Contraseña"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Ingresando...' : 'Iniciar sesión'}
          </Button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">o</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => loginWithGoogle()}
        >
          Continuar con Google
        </Button>

        <p className="text-center text-sm text-gray-500 mt-4">
          ¿No tenés cuenta?{' '}
          <Link to="/register" className="text-violet-600 hover:underline">
            Registrate
          </Link>
        </p>
      </Card>
    </div>
  )
}
