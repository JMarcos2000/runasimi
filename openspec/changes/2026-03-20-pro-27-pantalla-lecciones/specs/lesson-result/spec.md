# Spec: lesson-result

## Responsibility

Pantalla de resultado post-ejercicios. Muestra score, feedback y racha actualizada. Cierra el loop del flujo de aprendizaje.

## Interface

```tsx
// src/pages/LessonResultPage.tsx
export function LessonResultPage(): JSX.Element

// Recibe via navigate state:
// { score: number, lessonId: string }
```

## Behavior

1. Al montar: lee `location.state` para obtener `score` y `lessonId`. Si no hay state (acceso directo), navigate('/inicio').
2. Consulta `user_streak` WHERE `user_id = auth.uid()` para mostrar `current_streak`.
3. Renderiza layout según diseño.
4. Botón "Volver al inicio" → `navigate('/inicio', { replace: true })`.

## Data

```sql
-- Lee racha actualizada
SELECT current_streak, longest_streak
FROM user_streak
WHERE user_id = $uid
```

## Files

- `src/pages/LessonResultPage.tsx` (nuevo)
- `src/App.tsx`: agregar ruta `/lesson/:id/resultado`
- `src/pages/ExercisePage.tsx`: cambiar `navigate('/inicio')` → `navigate(\`/lesson/\${id}/resultado\`, { state: { score, lessonId: id } })`
