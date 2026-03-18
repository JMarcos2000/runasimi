## ADDED Requirements

### Requirement: Logo en pantalla de Login
La pantalla de Login SHALL mostrar el logo oficial de Quechua App como componente SVG (`src/components/ui/Logo.tsx`) en la parte superior del formulario.

#### Scenario: Logo visible al cargar Login
- **WHEN** el usuario navega a `/login`
- **THEN** el logo de Quechua App es visible en la parte superior del formulario

### Requirement: Paleta oficial en Login
La pantalla de Login SHALL usar exclusivamente colores de la paleta `quechua` definida en Tailwind, reemplazando todos los colores genéricos anteriores.

#### Scenario: Sin colores hardcodeados
- **WHEN** se inspecciona `LoginPage.tsx`
- **THEN** no existen clases de color Tailwind genéricas (ej. `blue-600`, `gray-100`) sino únicamente clases `quechua-*`

#### Scenario: Diseño coincide con Pencil
- **WHEN** se compara la pantalla de Login en el browser con el frame de Login en `design/ui.pen`
- **THEN** los colores, tipografía y layout son equivalentes
