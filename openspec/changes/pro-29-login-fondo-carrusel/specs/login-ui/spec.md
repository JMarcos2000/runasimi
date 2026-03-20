## MODIFIED Requirements

### Requirement: Paleta oficial en Login
La pantalla de Login SHALL usar el color `login-bg` (`#C17520`) como fondo de toda la pantalla, con textos en blanco y elementos del formulario adaptados para legibilidad sobre fondo oscuro.

#### Scenario: Fondo naranja-marrón visible
- **WHEN** el usuario navega a `/login`
- **THEN** el fondo de toda la pantalla usa el color `#C17520` (token `login-bg`)

#### Scenario: Formulario legible sobre fondo oscuro
- **WHEN** el formulario de login se renderiza sobre el fondo oscuro
- **THEN** los inputs tienen fondo blanco u opaco, las etiquetas y textos secundarios son blancos o de alto contraste

#### Scenario: Sin colores hardcodeados
- **WHEN** se inspecciona `LoginPage.tsx`
- **THEN** no existen valores de color inline sino únicamente tokens Tailwind (`quechua-*` o `login-bg`)
