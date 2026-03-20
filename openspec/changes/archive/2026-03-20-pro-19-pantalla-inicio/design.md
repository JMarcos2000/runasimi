## Approach

Renombrar el componente existente y reemplazar datos hardcodeados con queries reales a Supabase. Usar un hook `useInicioData` para encapsular la lógica de datos.

## Data Layer

### Hook: `useInicioData`
Ubicación: `src/hooks/useInicioData.ts`

Queries en paralelo:
1. `user_streak` → `current_streak` del usuario autenticado
2. `user_progress` → count de lecciones completadas (JOIN con lessons donde `day_number IS NOT NULL`)
3. Lección del día actual: la próxima lección no completada con el menor `day_number`

Retorna:
```ts
{
  streak: number           // días de racha, 0 si no existe
  completedCount: number   // lecciones completadas (0-60)
  totalLessons: 60
  currentDayLesson: Lesson | null  // próxima lección no completada
  loading: boolean
}
```

La `phrase_of_day` se toma de `currentDayLesson.phrase_of_day`.

## Component Structure

### `InicioPage` (renombrado de `DashboardPage`)

Layout (mismo estilo visual existente):
1. **Header**: saludo + badge racha (`streak` días o "Sin racha")
2. **Sección nivel**: "Nivel A1 · Día N" donde N = `completedCount + 1`
3. **Barra de progreso**: `completedCount / 60 * 100%`
4. **Frase del día**: card con `currentDayLesson.phrase_of_day`
5. **Botones de acción**:
   - "Continuar lección" → `/lesson/${currentDayLesson.id}` (disabled si null)
   - "Repasar vocabulario" → `/repaso` (link preparado para PRO-27)

## Routing Changes

| Antes | Después |
|-------|---------|
| `/dashboard` | `/inicio` |
| `DashboardPage` | `InicioPage` |
| Navbar "Lecciones" → `/dashboard` | Navbar "Inicio" → `/inicio` |
| `navigate('/dashboard')` en Login/Register | `navigate('/inicio')` |

## Notes

- Las rutas `/lesson/:id` y `/repaso` no existen aún (PRO-24/27). Los botones navegarán pero mostrarán 404 hasta que se implementen.
- No crear `user_streak` automáticamente — si no existe, mostrar 0.
- El schema ya tiene `user_streak` con RLS, la query debe usar el userId del usuario autenticado.
