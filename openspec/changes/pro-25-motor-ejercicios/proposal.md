## Why

La LessonPage (PRO-24) tiene un botón "Completar lección" directo sin pasar por ejercicios. El aprendizaje requiere práctica activa: opción múltiple y texto libre.

## What Changes

- Componente `MultipleChoice`: pregunta + 3 opciones, feedback verde/rojo inmediato
- Componente `TextInput`: prompt + campo, validación flexible (ignora tildes y mayúsculas)
- Página `ExercisePage` (`/lesson/:id/ejercicios`): flujo secuencial de ejercicios de la lección
- Al terminar todos los ejercicios: guardar score en `user_progress`, llamar lógica de racha, redirigir a `/inicio`
- `LessonPage`: el botón "Completar lección" ahora navega a `/lesson/:id/ejercicios`

## Capabilities

### New Capabilities
- `exercise-engine`: Motor de ejercicios con tipos choice y text_input, flujo secuencial y score

### Modified Capabilities
- `lesson-detail`: El botón de completar ahora navega a ejercicios en vez de completar directamente

## Impact

- `src/components/exercises/MultipleChoice.tsx` (nuevo)
- `src/components/exercises/TextInputExercise.tsx` (nuevo)
- `src/pages/ExercisePage.tsx` (nuevo)
- `src/pages/LessonPage.tsx`: actualizar botón
- `src/App.tsx`: agregar ruta `/lesson/:id/ejercicios`
