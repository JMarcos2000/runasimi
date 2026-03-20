## Why

La pantalla principal (DashboardPage) muestra datos hardcodeados y no refleja el progreso real del usuario. Reemplazarla con datos reales de racha, nivel, progreso y frase del día es la funcionalidad central de la app para retención diaria.

## What Changes

- Renombrar `DashboardPage` → `InicioPage` (archivo, ruta `/dashboard` → `/inicio`, navbar)
- Actualizar redirects post-login en `LoginPage` y `RegisterPage`
- Conectar racha real desde tabla `user_streak`
- Calcular nivel A1 y día actual desde `user_progress`
- Barra de progreso real: lecciones completadas / 60
- Frase del día desde campo `phrase_of_day` de la lección del día actual del usuario
- Botón "Continuar lección" → navega a la próxima lección no completada (`/lesson/:id`)
- Botón "Repasar vocabulario" → navega a repaso de lecciones completadas (`/repaso`)

## Capabilities

### New Capabilities
- `pantalla-inicio`: Pantalla Inicio con datos reales de racha, progreso, nivel y frase del día

### Modified Capabilities
<!-- ninguna -->

## Impact

- `src/pages/DashboardPage.tsx` → renombrado a `InicioPage.tsx`
- `src/App.tsx`: ruta `/dashboard` → `/inicio`
- `src/components/layout/Navbar.tsx`: link actualizado
- `src/pages/LoginPage.tsx` y `RegisterPage.tsx`: redirect post-login
- Nueva query a `user_streak` y `user_progress` en Supabase
