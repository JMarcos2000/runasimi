## ADDED Requirements

### Requirement: Paleta oficial en Dashboard
El Dashboard SHALL usar exclusivamente colores de la paleta `quechua`, reemplazando todos los colores genéricos anteriores.

#### Scenario: Cards de lecciones con nueva paleta
- **WHEN** el usuario accede al Dashboard
- **THEN** las cards de lecciones muestran los colores de la paleta `quechua`

### Requirement: Jerarquía visual mejorada en Dashboard
El Dashboard SHALL tener una jerarquía visual clara con header, sección de lecciones y estado de progreso diferenciados visualmente.

#### Scenario: Header diferenciado
- **WHEN** el usuario accede al Dashboard
- **THEN** el header con saludo y nombre de usuario es visualmente distinto del contenido de lecciones

#### Scenario: Diseño coincide con Pencil
- **WHEN** se compara el Dashboard en el browser con el frame de Dashboard en `design/ui.pen`
- **THEN** los colores, layout y jerarquía visual son equivalentes
