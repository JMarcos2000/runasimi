## ADDED Requirements

### Requirement: Tabla exercises con tipos de contenido variable
La tabla `exercises` SHALL existir en Supabase con los campos: `id` (uuid PK), `lesson_id` (uuid FK → lessons), `type` (text, CHECK en 'choice'|'text_input'|'audio'|'video'), `order` (integer), `content` (jsonb NOT NULL), `created_at` (timestamp).

#### Scenario: Insertar ejercicio tipo choice
- **WHEN** se inserta un ejercicio con `type = 'choice'` y `content = {"question": "...", "options": [...], "correct_index": 0}`
- **THEN** el registro se guarda correctamente y es consultable por `lesson_id`

#### Scenario: Insertar ejercicio tipo text_input
- **WHEN** se inserta un ejercicio con `type = 'text_input'` y `content = {"prompt": "...", "answer": "...", "hint": "..."}`
- **THEN** el registro se guarda correctamente

#### Scenario: Tipo inválido rechazado
- **WHEN** se intenta insertar un ejercicio con `type = 'imagen'` (no válido)
- **THEN** la DB rechaza la inserción con error de check constraint

### Requirement: RLS en exercises
La tabla `exercises` SHALL tener Row Level Security activa. Los usuarios autenticados PUEDEN leer todos los ejercicios. Solo el rol `service_role` puede insertar, actualizar o eliminar.

#### Scenario: Usuario autenticado lee ejercicios
- **WHEN** un usuario autenticado consulta `exercises` por `lesson_id`
- **THEN** recibe los ejercicios de esa lección

#### Scenario: Usuario no puede insertar ejercicios
- **WHEN** un usuario autenticado intenta insertar un ejercicio directamente
- **THEN** la operación es rechazada por RLS
