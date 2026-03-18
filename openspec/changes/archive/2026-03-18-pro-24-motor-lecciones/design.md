## Approach

Página simple que carga la lección por ID, muestra el contenido y permite marcarla como completada. PRO-25 agregará los componentes de ejercicio; esta página deja el espacio para eso.

## Data Layer

### `LessonPage` — queries
- `lessons` WHERE `id = :id` → datos de la lección
- `user_progress` WHERE `user_id = auth.uid() AND lesson_id = :id` → saber si ya está completada

### Hook: `useLessonComplete`
Ubicación: `src/hooks/useLessonComplete.ts`

```ts
async function completeLesson(lessonId: string, userId: string): Promise<void>
```

1. Upsert `user_progress`: `{ user_id, lesson_id, completed: true, score: 100 }`
2. Upsert `user_streak`:
   - Si no existe: insert con `current_streak: 1, longest_streak: 1, last_activity_date: today`
   - Si existe y `last_activity_date` es ayer → `current_streak + 1`
   - Si existe y `last_activity_date` es hoy → sin cambio
   - Si existe y más viejo → reset a 1
3. Return (la página navega a `/inicio`)

## Component: `LessonPage`

Layout:
1. **Header con back button** → `navigate(-1)`
2. **Badge "Día N"** + título del tema
3. **Card ejemplo quechua**: `example_quechua` en grande + `example_translation` abajo
4. **Frase del día** si existe
5. **Botón "Completar lección"** (o "Ya completada" si `completed = true`, disabled)
   - Al presionar: llama `completeLesson`, navega a `/inicio`
   - Estado loading mientras procesa

## Routing

Agregar a `App.tsx`:
```tsx
<Route path="/lesson/:id" element={<ProtectedRoute><LessonPage /></ProtectedRoute>} />
```
