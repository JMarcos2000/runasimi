## ADDED Requirements

### Requirement: Tabla user_streak para tracking de racha diaria
La tabla `user_streak` SHALL existir con: `id` (uuid PK), `user_id` (uuid FK → profiles, UNIQUE), `current_streak` (integer default 0), `longest_streak` (integer default 0), `last_activity_date` (date), `updated_at` (timestamp).

#### Scenario: Racha se crea al completar primera lección
- **WHEN** un usuario completa su primera lección
- **THEN** se crea un registro en `user_streak` con `current_streak = 1` y `last_activity_date = hoy`

#### Scenario: Racha se incrementa al completar lección en día siguiente
- **WHEN** un usuario con `last_activity_date = ayer` completa una lección hoy
- **THEN** `current_streak` se incrementa en 1 y `last_activity_date` se actualiza a hoy

#### Scenario: Racha se resetea si pasa más de un día
- **WHEN** un usuario con `last_activity_date` hace más de 1 día completa una lección
- **THEN** `current_streak` vuelve a 1 y `last_activity_date` se actualiza a hoy

#### Scenario: longest_streak se actualiza cuando supera el máximo
- **WHEN** `current_streak` supera `longest_streak`
- **THEN** `longest_streak` se actualiza al valor de `current_streak`

### Requirement: RLS en user_streak
La tabla SHALL tener RLS activa. Cada usuario PUEDE leer y actualizar únicamente su propio registro.

#### Scenario: Usuario lee su propia racha
- **WHEN** un usuario autenticado consulta `user_streak`
- **THEN** solo recibe su propio registro

#### Scenario: Usuario no puede leer racha de otro
- **WHEN** un usuario intenta consultar `user_streak` de otro `user_id`
- **THEN** el resultado es vacío
