## Why

El botón "Continuar lección" en la pantalla Inicio navega a `/lesson/:id` que no existe. Sin esta pantalla el flujo de aprendizaje está roto.

## What Changes

- Nueva ruta `/lesson/:id` → `LessonPage`
- Muestra: "Día N – Tema", ejemplo quechua + traducción, frase del día
- Botón "Iniciar ejercicios" (PRO-25 los renderizará; por ahora avanza directo a completar)
- Al completar: upsert en `user_progress` (completed=true), upsert/update `user_streak`, redirect a `/inicio`

## Capabilities

### New Capabilities
- `lesson-detail`: Vista de detalle de lección con contenido quechua y lógica de completado

### Modified Capabilities
<!-- ninguna -->

## Impact

- `src/pages/LessonPage.tsx` (nuevo)
- `src/hooks/useLessonComplete.ts` (nuevo — lógica de completado)
- `src/App.tsx`: agregar ruta `/lesson/:id`
