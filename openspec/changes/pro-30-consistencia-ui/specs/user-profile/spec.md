## MODIFIED Requirements

### Requirement: Página de perfil del usuario
El sistema SHALL mostrar una página de perfil con la información del usuario autenticado, usando exclusivamente tokens del sistema de diseño `quechua-*`.

#### Scenario: Perfil sin colores violeta
- **WHEN** se inspecciona `ProfilePage.tsx`
- **THEN** no existe ninguna clase `violet-*` — el avatar y elementos de acento usan `quechua-primary` o `quechua-surface`

#### Scenario: Perfil con tokens de texto correctos
- **WHEN** se renderiza la página de perfil
- **THEN** los textos usan `text-quechua-text-primary` y `text-quechua-text-secondary` (no `text-gray-800` ni `text-gray-500`)

#### Scenario: Perfil muestra datos del usuario
- **WHEN** el usuario navega a `/profile`
- **THEN** se muestra su avatar (o placeholder), username y fecha de registro
