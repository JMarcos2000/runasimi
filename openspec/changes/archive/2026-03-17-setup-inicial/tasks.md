## 1. Repositorio y proyecto base

- [x] 1.1 Crear repositorio `quechua-app` en GitHub con `gh repo create`
- [x] 1.2 Inicializar proyecto con `npm create vite@latest` usando template `react-ts`
- [x] 1.3 Crear estructura de carpetas: `src/components/`, `src/pages/`, `src/hooks/`, `src/lib/`, `src/types/`
- [x] 1.4 Instalar y configurar Tailwind CSS
- [x] 1.5 Hacer primer commit y push a GitHub

## 2. Supabase y base de datos

- [x] 2.1 Crear proyecto en Supabase (dashboard web)
- [x] 2.2 Crear tabla `profiles` con columnas: id, username, avatar_url, created_at
- [x] 2.3 Crear tabla `lessons` con columnas: id, title, description, order, created_at
- [x] 2.4 Crear tabla `user_progress` con columnas: id, user_id, lesson_id, completed, score, updated_at
- [x] 2.5 Habilitar Row Level Security en las tres tablas y crear políticas básicas
- [x] 2.6 Guardar `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en archivo `.env.local`
- [x] 2.7 Crear `src/lib/supabase.ts` con el cliente de Supabase inicializado

## 3. Autenticación

- [x] 3.1 Habilitar Email/Password y Google OAuth en Supabase Auth (dashboard)
- [x] 3.2 Crear `src/hooks/useAuth.ts` con lógica de sesión (login, register, logout, currentUser)
- [x] 3.3 Crear `src/components/ProtectedRoute.tsx` para rutas privadas
- [x] 3.4 Crear `src/pages/LoginPage.tsx` con formulario de login y botón Google
- [x] 3.5 Crear `src/pages/RegisterPage.tsx` con formulario de registro
- [x] 3.6 Configurar rutas en `src/App.tsx` con React Router v6

## 4. UI Layout y componentes base

- [x] 4.1 Crear `src/components/ui/Button.tsx` con variantes primary, secondary, outline
- [x] 4.2 Crear `src/components/ui/Card.tsx` con padding y sombra configurables
- [x] 4.3 Crear `src/components/ui/Input.tsx` con soporte para label y error
- [x] 4.4 Crear `src/components/layout/Navbar.tsx` con logo, links y avatar
- [x] 4.5 Crear `src/components/layout/Layout.tsx` que envuelve páginas autenticadas

## 5. Páginas y seed de datos

- [x] 5.1 Crear `src/pages/DashboardPage.tsx` que lista las lecciones disponibles
- [x] 5.2 Crear `src/pages/ProfilePage.tsx` que muestra datos del usuario
- [x] 5.3 Insertar seed de datos: 5 lecciones en tabla `lessons` (Saludos, Números, Colores, Familia, Comida)

## 6. CI/CD y deploy

- [x] 6.1 Crear `.github/workflows/ci.yml` con jobs de lint y build
- [x] 6.2 Conectar repositorio GitHub a Vercel (dashboard web)
- [x] 6.3 Agregar variables de entorno `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en Vercel
- [x] 6.4 Verificar que el deploy automático funciona haciendo un push a main
