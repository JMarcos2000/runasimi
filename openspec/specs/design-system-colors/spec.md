# design-system-colors Specification

## Purpose
TBD - created by archiving change mejora-ui. Update Purpose after archive.
## Requirements
### Requirement: Paleta de colores oficial en Tailwind
El sistema SHALL definir una paleta de colores custom `quechua` en `tailwind.config.js` con al menos: `primary`, `secondary`, `accent`, `background`, `surface`, `text-primary`, `text-secondary`.

#### Scenario: Clases disponibles en componentes
- **WHEN** un componente usa `bg-quechua-primary` o `text-quechua-text-primary`
- **THEN** Tailwind aplica el color correspondiente de la paleta oficial

#### Scenario: Paleta definida en Pencil
- **WHEN** se abre `design/ui.pen`
- **THEN** los colores de la paleta están definidos como variables en el documento Pencil y coinciden con los valores en `tailwind.config.js`

