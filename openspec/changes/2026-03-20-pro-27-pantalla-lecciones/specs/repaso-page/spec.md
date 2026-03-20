# Spec: repaso-page

## Responsibility

Pantalla que lista las lecciones completadas por el usuario para repasar. Resuelve el botón "Repasar" roto en InicioPage.

## Interface

```tsx
// src/pages/RepasoPage.tsx
export function RepasoPage(): JSX.Element
```

## Behavior

1. Carga lecciones completadas del usuario con su score.
2. Si lista vacía: muestra estado vacío.
3. Cada item: navega a `/lesson/:id` al hacer click.

## Data

```sql
-- Lecciones completadas con score
SELECT l.id, l.day_number, l.topic, l.title, up.score
FROM lessons l
JOIN user_progress up ON up.lesson_id = l.id
WHERE up.user_id = $uid AND up.completed = true
ORDER BY l.day_number ASC
```

## Files

- `src/pages/RepasoPage.tsx` (nuevo)
- `src/App.tsx`: agregar ruta `/repaso`
