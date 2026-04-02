# Tasks — PRO-21 Pantalla "Sobre el Quechua" — Onboarding

## 1. OnboardingPage
- [x] Crear `src/pages/OnboardingPage.tsx`
  - Mostrar título, checkmarks y nota de variantes
  - Botón "Entendido" → update `profiles.onboarding_completed = true` → navigate('/inicio')
- [x] Registrar ruta `/onboarding/sobre-el-quechua` en `App.tsx`

## 2. Redirección desde InicioPage
- [x] En `InicioPage.tsx`: al cargar el perfil, si `onboarding_completed` es false/null → navigate('/onboarding/sobre-el-quechua')
