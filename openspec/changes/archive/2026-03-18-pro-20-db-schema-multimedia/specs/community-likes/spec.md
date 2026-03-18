## ADDED Requirements

### Requirement: Tabla community_likes para sistema de sapaña
La tabla `community_likes` SHALL existir con: `id` (uuid PK), `from_user_id` (uuid FK → profiles), `to_user_id` (uuid FK → profiles), `created_at` (timestamptz default now()). SHALL tener un unique constraint en `(from_user_id, to_user_id, DATE(created_at))` para limitar 1 sapaña por par de usuarios por día.

#### Scenario: Usuario da sapaña a otro usuario
- **WHEN** un usuario autenticado inserta un registro en `community_likes` con su `from_user_id` y el `to_user_id` del destinatario
- **THEN** el registro se guarda y el destinatario recibe el corazón

#### Scenario: Usuario no puede dar dos sapañas al mismo usuario el mismo día
- **WHEN** un usuario intenta insertar un segundo `community_likes` al mismo destinatario en el mismo día
- **THEN** la DB rechaza la inserción por violación del unique constraint

#### Scenario: Usuario puede dar sapaña al mismo usuario en un día diferente
- **WHEN** un usuario inserta un `community_likes` al mismo destinatario en un día distinto al anterior
- **THEN** el registro se guarda correctamente

### Requirement: RLS en community_likes
La tabla SHALL tener RLS activa. Usuarios autenticados PUEDEN insertar likes con su propio `from_user_id`. PUEDEN leer todos los likes (para el ranking). NO PUEDEN eliminar ni actualizar likes.

#### Scenario: Usuario inserta sapaña con su propio from_user_id
- **WHEN** un usuario autenticado inserta con `from_user_id = auth.uid()`
- **THEN** la inserción es aceptada

#### Scenario: Usuario no puede insertar con from_user_id ajeno
- **WHEN** un usuario intenta insertar con el `from_user_id` de otro usuario
- **THEN** RLS rechaza la operación
