## ADDED Requirements

### Requirement: 60 lecciones del Plan A1 con contenido quechua real
La tabla `lessons` SHALL contener exactamente 60 registros correspondientes al Plan A1, cada uno con `day_number` (1–60), `title`, `topic`, `example_quechua`, `example_translation` y `phrase_of_day` no nulos.

#### Scenario: Todas las lecciones del Plan A1 están presentes
- **WHEN** se consulta `SELECT count(*) FROM lessons WHERE day_number IS NOT NULL`
- **THEN** el resultado es 60

#### Scenario: Lección del día 1 tiene contenido correcto
- **WHEN** se consulta la lección con `day_number = 1`
- **THEN** tiene `topic = 'Sonidos básicos y vocales'` y contenido quechua de vocales (a, e, i, o, u)

#### Scenario: Lección del día 2 tiene el saludo correcto
- **WHEN** se consulta la lección con `day_number = 2`
- **THEN** tiene `example_quechua` que incluye "Rimaykullayki"

#### Scenario: Todas las lecciones tienen phrase_of_day
- **WHEN** se consulta `SELECT count(*) FROM lessons WHERE phrase_of_day IS NULL AND day_number IS NOT NULL`
- **THEN** el resultado es 0

### Requirement: 1 ejercicio choice por lección del Plan A1
La tabla `exercises` SHALL contener al menos 60 registros de tipo `choice`, uno por cada lección del Plan A1. Cada ejercicio SHALL tener `content` con los campos `question`, `options` (array de 3 strings) y `correct_index` (0, 1 o 2).

#### Scenario: Cada lección tiene al menos un ejercicio
- **WHEN** se hace JOIN entre lessons y exercises para lecciones con day_number entre 1 y 60
- **THEN** todas las 60 lecciones tienen al menos 1 ejercicio asociado

#### Scenario: Ejercicio tiene estructura choice válida
- **WHEN** se consulta el content de un ejercicio tipo choice
- **THEN** contiene `question` (string), `options` (array de 3 strings) y `correct_index` (entero 0-2)

#### Scenario: Seed es idempotente
- **WHEN** se ejecuta el seed dos veces seguidas
- **THEN** la tabla lessons contiene exactamente 60 lecciones (sin duplicados)
