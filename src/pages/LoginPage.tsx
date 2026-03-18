import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Logo } from '../components/ui/Logo'

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
      navigate('/inicio')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-quechua-background flex flex-col items-center justify-center px-6">
      {/* Hero */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <Logo size={72} />
        <h1 className="text-3xl font-bold text-quechua-text-primary">Runasimi</h1>
        <p className="text-sm text-quechua-text-secondary text-center max-w-xs">
          Aprendé quechua, conectá con tus raíces andinas
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-quechua-text-primary">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="w-full h-13 px-4 rounded-2xl bg-quechua-surface border border-quechua-border text-quechua-text-primary placeholder-quechua-text-tertiary text-base outline-none focus:border-quechua-primary transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-quechua-text-primary">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full h-13 px-4 rounded-2xl bg-quechua-surface border border-quechua-border text-quechua-text-primary placeholder-quechua-text-tertiary text-base outline-none focus:border-quechua-primary transition-colors"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 rounded-2xl bg-quechua-primary text-white text-base font-bold disabled:opacity-60 transition-opacity"
        >
          {loading ? 'Ingresando...' : 'Iniciar sesión'}
        </button>
      </form>

      {/* Divider */}
      <div className="w-full max-w-sm flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-quechua-border" />
        <span className="text-xs text-quechua-text-tertiary">o</span>
        <div className="flex-1 h-px bg-quechua-border" />
      </div>

      {/* Google */}
      <button
        onClick={() => loginWithGoogle()}
        className="w-full max-w-sm h-14 rounded-2xl bg-quechua-surface border border-quechua-border flex items-center justify-center gap-3 text-quechua-text-primary font-semibold text-base transition-colors hover:bg-quechua-border"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-quechua-text-secondary">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        Continuar con Google
      </button>

      {/* Footer */}
      <p className="text-sm text-quechua-text-secondary mt-8">
        ¿No tenés cuenta?{' '}
        <Link to="/register" className="text-quechua-primary font-bold hover:underline">
          Registrate
        </Link>
      </p>
    </div>
  )
}
