# supabase-db Specification

## Purpose
TBD - created by archiving change setup-inicial. Update Purpose after archive.
## Requirements
### Requirement: Proyecto Supabase creado y conectado
El sistema SHALL tener un proyecto Supabase configurado con las credenciales disponibles en variables de entorno del frontend.

#### Scenario: Variables de entorno configuradas
- **WHEN** se revisa el archivo `.env.local`
- **THEN** existen `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` con valores válidos

#### Scenario: Cliente Supabase inicializado
- **WHEN** se importa el cliente desde `src/lib/supabase.ts`
- **THEN** el cliente puede hacer una consulta simple a la base de datos sin errores

### Requirement: Esquema de base de datos base
La base de datos SHALL tener las tablas necesarias para la Fase 1 de la app.

#### Scenario: Tabla profiles existe
- **WHEN** se consulta la tabla `profiles` en Supabase
- **THEN** tiene columnas: `id` (uuid, FK a auth.users), `username` (text), `avatar_url` (text), `created_at` (timestamp)

#### Scenario: Tabla lessons existe
- **WHEN** se consulta la tabla `lessons` en Supabase
- **THEN** tiene columnas: `id` (uuid), `title` (text), `description` (text), `order` (int), `created_at` (timestamp)

#### Scenario: Tabla user_progress existe
- **WHEN** se consulta la tabla `user_progress` en Supabase
- **THEN** tiene columnas: `id` (uuid), `user_id` (uuid, FK a profiles), `lesson_id` (uuid, FK a lessons), `completed` (boolean), `score` (int), `updated_at` (timestamp)

### Requirement: Row Level Security habilitado
Las tablas SHALL tener RLS habilitado para proteger los datos de los usuarios.

#### Scenario: Usuario solo ve su propio progreso
- **WHEN** un usuario autenticado consulta `user_progress`
- **THEN** solo recibe las filas donde `user_id` coincide con su propio ID

