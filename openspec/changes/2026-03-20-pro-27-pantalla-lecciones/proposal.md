## Why

PRO-24 (LessonPage) y PRO-25 (ExercisePage) están implementados y el flujo técnico funciona. Sin embargo, quedan dos gaps de UX que dejan la experiencia incompleta:

1. Al terminar los ejercicios, `ExercisePage` navega silenciosamente a `/inicio` sin mostrar el resultado ni actualizar visualmente la racha.
2. El botón "Repasar" en `InicioPage` navega a `/repaso` que no tiene ruta — cae en el catch-all y redirige al login.

## What Changes

- Nueva ruta `/lesson/:id/resultado` → `LessonResultPage`: pantalla de celebración con score, racha actualizada y CTA para volver al inicio
- `ExercisePage`: al terminar navega a `/lesson/:id/resultado` en vez de `/inicio`
- Nueva ruta `/repaso` → `RepasoPage`: placeholder que muestra las lecciones completadas para repasar

## Capabilities

### New Capabilities
- `lesson-result`: Pantalla de resultado post-ejercicios con score, feedback y CTA
- `repaso-page`: Pantalla de repaso con listado de lecciones completadas

### Modified Capabilities
- `exercise-engine`: Al terminar, navega a resultado en vez de inicio directo
