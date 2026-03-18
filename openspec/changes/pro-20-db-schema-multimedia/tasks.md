## 1. Migración: Ampliar tablas existentes

- [x] 1.1 Crear archivo `supabase/migrations/001_multimedia_schema.sql`
- [x] 1.2 Agregar columnas a `lessons`: `day_number`, `topic`, `example_quechua`, `example_translation`, `phrase_of_day` (todas nullable)
- [x] 1.3 Agregar columna `onboarding_completed boolean default false` a `profiles`

## 2. Migración: Crear tabla exercises

- [x] 2.1 Crear tabla `exercises` con campos: `id`, `lesson_id` (FK), `type` (check constraint), `order`, `content` (jsonb), `created_at`
- [x] 2.2 Agregar índice en `exercises(lesson_id, order)`
- [x] 2.3 Habilitar RLS en `exercises`
- [x] 2.4 Agregar policy: usuarios autenticados pueden leer (`SELECT`)
- [x] 2.5 Agregar policy: solo `service_role` puede insertar/actualizar/eliminar

## 3. Migración: Crear tabla user_streak

- [x] 3.1 Crear tabla `user_streak` con campos: `id`, `user_id` (FK único), `current_streak`, `longest_streak`, `last_activity_date`, `updated_at`
- [x] 3.2 Habilitar RLS en `user_streak`
- [x] 3.3 Agregar policy: usuario puede leer su propio registro
- [x] 3.4 Agregar policy: usuario puede insertar/actualizar su propio registro

## 4. Migración: Crear tabla community_likes

- [x] 4.1 Crear tabla `community_likes` con campos: `id`, `from_user_id` (FK), `to_user_id` (FK), `created_at`
- [x] 4.2 Agregar unique constraint en `(from_user_id, to_user_id, DATE(created_at))`
- [x] 4.3 Habilitar RLS en `community_likes`
- [x] 4.4 Agregar policy: usuarios autenticados pueden leer todos los likes
- [x] 4.5 Agregar policy: usuario puede insertar solo con su propio `from_user_id`

## 5. Aplicar migración en Supabase

- [x] 5.1 Aplicar la migración via Supabase MCP (`apply_migration`)
- [x] 5.2 Verificar que las 4 tablas nuevas/modificadas existen en Supabase
- [x] 5.3 Verificar que RLS está activo en todas las tablas nuevas

## 6. Actualizar schema.sql y tipos TypeScript

- [x] 6.1 Actualizar `supabase/schema.sql` para reflejar el estado final completo
- [x] 6.2 Generar tipos TypeScript actualizados (`supabase/types.ts`) via Supabase MCP
- [x] 6.3 Actualizar `src/types/index.ts` con los nuevos tipos: `Exercise`, `UserStreak`, `CommunityLike`, y los campos nuevos en `Lesson` y `Profile`
