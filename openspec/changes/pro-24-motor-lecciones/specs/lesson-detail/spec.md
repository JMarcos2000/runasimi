## Capability: Lesson Detail

### Requirement: Vista de lección por ID
La ruta `/lesson/:id` SHALL mostrar el contenido de la lección: título con día y tema, ejemplo quechua, traducción y frase del día.

#### Scenario: Lección existente
- **GIVEN** existe una lección con `day_number=3` y `topic="Familia"`
- **WHEN** el usuario navega a `/lesson/<id>`
- **THEN** ve "Día 3 – Familia", el ejemplo quechua y su traducción

### Requirement: Marcar lección como completada
Al presionar "Completar lección" SHALL crearse un registro en `user_progress` con `completed=true` y actualizarse `user_streak`.

#### Scenario: Primera vez completando
- **GIVEN** no existe `user_progress` para este usuario y lección
- **WHEN** presiona "Completar lección"
- **THEN** se crea el registro y se actualiza la racha

#### Scenario: Lección ya completada
- **GIVEN** ya existe `user_progress.completed = true` para esta lección
- **WHEN** visita `/lesson/:id`
- **THEN** el botón muestra "Ya completada" y está deshabilitado

### Requirement: Navegación post-completado
- **WHEN** la lección se marca como completada exitosamente
- **THEN** el usuario es redirigido a `/inicio`
