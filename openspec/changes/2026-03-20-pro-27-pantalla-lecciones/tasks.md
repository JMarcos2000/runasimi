# Tasks — PRO-27 Pantalla Lecciones

## 1. LessonResultPage
- [x] Crear `src/pages/LessonResultPage.tsx`
  - Leer score y lessonId de `location.state`; si no hay state → navigate('/inicio')
  - Consultar `user_streak` para mostrar `current_streak`
  - Layout: header naranja + score grande + feedback text + racha badge + botón volver
- [x] Registrar ruta `/lesson/:id/resultado` en `App.tsx`
- [x] Modificar `ExercisePage.tsx`: cambiar `navigate('/inicio')` → `navigate(\`/lesson/\${id}/resultado\`, { state: { score, lessonId: id } })`

## 2. RepasoPage
- [x] Crear `src/pages/RepasoPage.tsx`
  - Consultar lecciones completadas con score
  - Renderizar lista de cards; estado vacío si no hay
  - Cada card navega a `/lesson/:id`
- [x] Registrar ruta `/repaso` en `App.tsx`
