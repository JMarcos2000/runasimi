## Context

Stack: React + Vite + TypeScript + Tailwind CSS. Tokens: `quechua-primary` (#FF6B35), `quechua-background`, `quechua-surface`, `quechua-border`, `quechua-text-primary/secondary/tertiary`. El campo `onboarding_completed boolean default false` ya existe en `profiles` (PRO-20). `useAuth` provee el `user`.

## Goals / Non-Goals

**Goals:**
- `OnboardingPage`: pantalla estática informativa sobre Quechua Sureño (Perú), con checkmarks y botón "Entendido"
- Al hacer clic en "Entendido" → upsert `profiles.onboarding_completed = true` → navigate a `/inicio`
- En `InicioPage`: al montar, verificar si el perfil tiene `onboarding_completed = false/null` → redirect a `/onboarding/sobre-el-quechua`

**Non-Goals:**
- Multi-paso (no wizard, es una sola pantalla)
- Forzar onboarding para usuarios que ya lo completaron

## Decisions

### 1. Redirección desde InicioPage, no desde ProtectedRoute
InicioPage ya consulta el perfil para mostrar datos. Se aprovecha esa consulta para redirigir si `onboarding_completed` es false. Alternativa descartada: hacerlo en ProtectedRoute (agrega complejidad y queries extra a cada ruta protegida).

### 2. Upsert via supabase.from('profiles').update()
El perfil siempre existe (creado por trigger en auth). Se usa `.update({ onboarding_completed: true }).eq('id', user.id)`.

## Component: OnboardingPage

Layout (fondo `quechua-background`, flex col centrado verticalmente, max-w-md, px-6):
1. **Ícono/emoji decorativo**: texto grande "🌿" o mapa andino
2. **Título**: "Quechua Sureño (Perú)" — `text-2xl font-bold text-quechua-text-primary`
3. **Subtítulo**: "La variante que aprenderás en esta app" — `text-quechua-text-secondary`
4. **Lista de checkmarks** (3 ítems con check naranja):
   - ✓ Más extendido: 8 millones de hablantes
   - ✓ Base académica sólida
   - ✓ Material educativo disponible
5. **Nota de variantes**: texto pequeño secundario — "Existen más de 40 variantes regionales del quechua. Esta app se enfoca en el Quechua Sureño (Qusqu-Qullaw)."
6. **Botón "Entendido"**: primario naranja, ancho completo, al fondo

## Routing

```tsx
<Route path="/onboarding/sobre-el-quechua" element={<ProtectedRoute><OnboardingPage /></ProtectedRoute>} />
```
