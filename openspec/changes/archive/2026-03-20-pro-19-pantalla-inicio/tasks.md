## 1. Renombrar pantalla y actualizar rutas

- [x] 1.1 Renombrar `src/pages/DashboardPage.tsx` → `src/pages/InicioPage.tsx` y el export (`DashboardPage` → `InicioPage`)
- [x] 1.2 Actualizar `src/App.tsx`: importar `InicioPage`, cambiar ruta `/dashboard` → `/inicio`
- [x] 1.3 Actualizar `src/components/layout/Navbar.tsx`: link "Lecciones" → "Inicio", href `/dashboard` → `/inicio`
- [x] 1.4 Actualizar `src/pages/LoginPage.tsx`: `navigate('/dashboard')` → `navigate('/inicio')`
- [x] 1.5 Actualizar `src/pages/RegisterPage.tsx`: `navigate('/dashboard')` → `navigate('/inicio')` (si aplica)

## 2. Hook de datos

- [x] 2.1 Crear `src/hooks/useInicioData.ts` con queries paralelas a `user_streak`, `user_progress` y lección actual

## 3. UI con datos reales

- [x] 3.1 Reemplazar badge de racha hardcodeado ("3 días") con dato real del hook
- [x] 3.2 Agregar sección "Nivel A1 · Día N" calculado desde `completedCount`
- [x] 3.3 Agregar barra de progreso (`completedCount / 60`)
- [x] 3.4 Agregar card de frase del día desde `currentDayLesson.phrase_of_day`
- [x] 3.5 Agregar botón "Continuar lección" → `/lesson/${currentDayLesson?.id}`
- [x] 3.6 Agregar botón "Repasar vocabulario" → `/repaso`

## 4. Mejora de UI

- [x] 4.1 Revisar y mejorar el diseño visual de la pantalla Inicio
