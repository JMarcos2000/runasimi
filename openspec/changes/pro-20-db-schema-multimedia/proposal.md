## Why

El schema actual de Supabase (3 tablas simples) no soporta el plan de contenido A1 de 60 días: no hay estructura para ejercicios con tipos variables (choice, text_input, audio, video), ni tracking de racha diaria, ni funcionalidades de comunidad. Sin este rediseño, ninguna de las pantallas core de la app puede conectarse a datos reales.

## What Changes

- Ampliar tabla `lessons` con campos de contenido quechua: `day_number`, `topic`, `example_quechua`, `example_translation`, `phrase_of_day`
- Nueva tabla `exercises` con campo JSONB `content` para soportar 4 tipos de ejercicio sin romper el schema
- Nueva tabla `user_streak` para tracking de racha diaria y racha máxima
- Nueva tabla `community_likes` para el sistema de "sapaña" (corazones entre usuarios)
- Agregar `onboarding_completed` a tabla `profiles` para el flujo de primer login
- RLS policies para todas las tablas nuevas
- Migración versionada en `supabase/`

## Capabilities

### New Capabilities
- `exercise-engine`: Estructura de datos para ejercicios tipados (choice, text_input, audio, video) con contenido variable via JSONB
- `user-streak`: Tracking de racha diaria y racha máxima por usuario
- `community-likes`: Sistema de sapaña — likes entre usuarios con límite diario

### Modified Capabilities
- `lessons`: Agrega campos de contenido quechua real (`day_number`, `topic`, `example_quechua`, `example_translation`, `phrase_of_day`)
- `profiles`: Agrega `onboarding_completed` para controlar el flujo de primer login

## Impact

- **Supabase**: Nuevas tablas y columnas, nuevas RLS policies
- **`supabase/schema.sql`**: Ampliado con todas las nuevas definiciones
- **`supabase/seed.sql`**: Requiere actualización (PRO-22) para aprovechar los nuevos campos
- **Frontend**: Las páginas Inicio, Lecciones y Comunidad dependen de este schema para conectar datos reales
- **Sin breaking changes en auth**: La tabla `profiles` solo agrega una columna nullable
