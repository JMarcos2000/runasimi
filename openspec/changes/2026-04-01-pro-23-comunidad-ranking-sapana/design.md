## Context

Stack: React + Vite + TypeScript + Tailwind CSS. Tokens: `quechua-primary`, `quechua-background`, `quechua-surface`, `quechua-border`, `quechua-text-*`. Tablas disponibles: `profiles` (id, username), `user_streak` (user_id, current_streak), `community_likes` (from_user_id, to_user_id, like_date, unique per pair per day). `useAuth` provee `user.id`.

## Goals / Non-Goals

**Goals:**
- Ranking top 10 por `current_streak` DESC + total corazones recibidos DESC (desempate)
- Mostrar fila del usuario actual siempre (aunque no esté en top 10)
- Botón "Dar sapaña" → insert en `community_likes`; disabled si ya se dio hoy o si es el propio usuario
- Link "Comunidad" en Navbar

**Non-Goals:**
- Paginación del ranking (top 10 es suficiente para MVP)
- Notificaciones push de sapaña recibida
- Animaciones complejas

## Decisions

### 1. Query rankig con JOIN manual en cliente
Supabase no soporta GROUP BY en el cliente JS fácilmente. Se hace:
1. SELECT de `user_streak` JOIN `profiles` (top 10 por current_streak)
2. Contar likes recibidos por usuario desde `community_likes` donde `like_date = today`... No, contar likes totales no por día.

Revisión: Se hace query de `community_likes` sin filtro de fecha para contar total de corazones históricos por `to_user_id`. Luego merge en cliente.

### 2. Verificar si ya diste sapaña hoy
Query: `community_likes` donde `from_user_id = me` AND `like_date = today`. Si tiene resultado, el botón está disabled.

### 3. Estructura de datos en estado
```ts
interface RankingEntry {
  userId: string
  username: string
  streak: number
  hearts: number
  isCurrentUser: boolean
  givenHeart: boolean // si el usuario actual ya le dio sapaña hoy
}
```

## Component: CommunityPage

Layout (bg `quechua-background`):
1. **Header naranja** (`quechua-primary`, px-6 pt-14 pb-5): título "Comunidad" + subtítulo "Ranking de racha"
2. **Lista de ranking** (px-4 py-4, gap-3):
   - Cada fila: card bg `quechua-surface`, rounded-2xl, flex items-center, px-4 py-3
   - Posición: número bold naranja
   - Username: text-quechua-text-primary font-semibold
   - Racha: "🔥 N días"
   - Corazones: "❤️ N"
   - Botón "Dar sapaña": pequeño, naranja o gris si ya se dio / si es el propio usuario
3. **Fila del usuario actual** si no está en top 10: separador + card resaltada (border naranja)
4. **Estado vacío**: "Aún no hay usuarios en el ranking"

## Navbar

Agregar entre "Inicio" y "Perfil":
```tsx
<Link to="/community" className="text-sm text-quechua-text-secondary hover:text-quechua-primary">
  Comunidad
</Link>
```
