## MODIFIED Requirements

### Requirement: Tabla lessons con contenido quechua
La tabla `lessons` SHALL incluir los campos adicionales: `day_number` (integer, 1–60), `topic` (text), `example_quechua` (text), `example_translation` (text), `phrase_of_day` (text). Todos los campos nuevos son nullable para compatibilidad con registros existentes.

#### Scenario: Lección existente no se rompe tras la migración
- **WHEN** se aplica la migración ALTER TABLE
- **THEN** las 5 lecciones existentes siguen siendo consultables con los nuevos campos en NULL

#### Scenario: Nueva lección con contenido quechua completo
- **WHEN** se inserta una lección con `day_number = 18`, `topic = 'Rutina tarde'`, `example_quechua = 'Puñuni tutamanta'`, `example_translation = 'Duermo en la noche'`, `phrase_of_day = 'Allin p'unchay'`
- **THEN** el registro se guarda y es consultable por `day_number`
