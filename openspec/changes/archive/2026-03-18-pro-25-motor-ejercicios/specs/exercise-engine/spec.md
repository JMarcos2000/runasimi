## Capability: Exercise Engine

### Requirement: Flujo secuencial de ejercicios
`ExercisePage` SHALL presentar los ejercicios de una lección uno por uno en orden. El usuario no puede avanzar sin responder el ejercicio actual.

#### Scenario: Lección con 3 ejercicios
- **GIVEN** una lección tiene 3 ejercicios
- **WHEN** el usuario entra a `/lesson/:id/ejercicios`
- **THEN** ve el ejercicio 1, luego 2, luego 3, y al terminar es redirigido a `/inicio`

### Requirement: MultipleChoice con feedback inmediato
Al seleccionar una opción SHALL mostrarse feedback visual: verde si correcta, rojo si incorrecta.

#### Scenario: Respuesta correcta
- **GIVEN** el ejercicio tiene `correct_index = 1`
- **WHEN** el usuario selecciona la opción 1
- **THEN** esa opción se muestra en verde

#### Scenario: Respuesta incorrecta
- **GIVEN** el ejercicio tiene `correct_index = 0`
- **WHEN** el usuario selecciona la opción 2
- **THEN** la opción 2 se muestra en rojo, la opción 0 en verde

### Requirement: TextInput con validación flexible
La validación SHALL ignorar mayúsculas, tildes y espacios extra.

#### Scenario: Variación con tilde
- **GIVEN** la respuesta correcta es "Allianchu"
- **WHEN** el usuario escribe "allianchu"
- **THEN** se marca como correcta

### Requirement: Score calculado y guardado
Al completar todos los ejercicios SHALL calcularse `score = correctas/total * 100` y guardarse en `user_progress`.

#### Scenario: 2 de 3 correctas
- **GIVEN** el usuario respondió 2 de 3 correctamente
- **WHEN** termina el último ejercicio
- **THEN** `user_progress.score = 67` (redondeado)
