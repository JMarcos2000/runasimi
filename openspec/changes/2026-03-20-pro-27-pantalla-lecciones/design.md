## Context

Stack: React + Vite + TypeScript + Tailwind CSS. Tokens de color: `quechua-primary` (#FF6B35), `quechua-background`, `quechua-surface`, `quechua-border`, `quechua-text-primary/secondary/tertiary`. Las rutas protegidas usan `<ProtectedRoute>`. La lógica de completado y racha ya está en `useLessonComplete`.

## Goals / Non-Goals

**Goals:**
- `LessonResultPage`: pantalla de resultado que muestra score (0–100), si la racha se actualizó, y un botón "Volver al inicio"
- `RepasoPage`: lista de lecciones completadas (`user_progress.completed = true`) con link a cada lección
- Conectar `ExercisePage` → `LessonResultPage` pasando el score via state de navigate

**Non-Goals:**
- Animaciones complejas (sin framer-motion)
- Lógica de ranking ni gamificación avanzada (eso es PRO-23)
- Implementar audio/video (PRO-26)

## Decisions

### 1. Pasar score via navigate state
`navigate(\`/lesson/\${id}/resultado\`, { state: { score, lessonId: id } })` — evita llamada extra a DB y es simple.
**Alternativa descartada:** parámetros de query — menos limpio y expuesto en URL.

### 2. LessonResultPage lee racha desde Supabase
Al montar, hace un SELECT de `user_streak` para mostrar el streak actualizado. El upsert ya lo hizo `completeLesson` en ExercisePage.

### 3. RepasoPage: listado simple
`SELECT lessons.*, user_progress.score FROM lessons JOIN user_progress ON ...` filtrado por `user_id` y `completed = true`, ordenado por `day_number`. Sin paginación por ahora.

### 4. Emoji de feedback según score
- ≥ 80: "¡Excelente! 🎉"
- 50–79: "¡Bien hecho! 👍"
- < 50: "Seguí practicando 💪"

## Component: LessonResultPage

Layout (fondo `quechua-background`, centrado):
1. **Header naranja** (`quechua-primary`): icono de trofeo o check grande en blanco
2. **Score**: número grande en el centro (ej. "85/100") + label "Puntuación"
3. **Feedback text** según rango de score
4. **Racha badge**: "🔥 N días de racha" — dato de `user_streak.current_streak`
5. **Botón primario**: "Volver al inicio" → navigate('/inicio')

## Component: RepasoPage

Layout (fondo `quechua-background`):
1. **Header naranja**: back button + título "Repasar"
2. **Lista de lecciones completadas**: cards con `day_number`, `topic`, score obtenido, botón "Repasar" → `/lesson/:id`
3. **Estado vacío**: si no hay lecciones completadas, mensaje "Completá tu primera lección"

## Routing

Agregar a `App.tsx`:
```tsx
<Route path="/lesson/:id/resultado" element={<ProtectedRoute><LessonResultPage /></ProtectedRoute>} />
<Route path="/repaso" element={<ProtectedRoute><RepasoPage /></ProtectedRoute>} />
```
