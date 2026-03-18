## MODIFIED Requirements

### Requirement: Tabla profiles con flag de onboarding
La tabla `profiles` SHALL incluir el campo `onboarding_completed` (boolean, default false). Este campo controla si se muestra la pantalla "Sobre el Quechua" al usuario.

#### Scenario: Usuario nuevo tiene onboarding_completed en false
- **WHEN** se crea un nuevo perfil via el trigger `handle_new_user`
- **THEN** `onboarding_completed` es false por default

#### Scenario: Usuario completa el onboarding
- **WHEN** el usuario toca "Entendido" en la pantalla "Sobre el Quechua"
- **THEN** se actualiza `onboarding_completed = true` en su perfil

#### Scenario: Usuario existente no se ve afectado
- **WHEN** se aplica la migración ALTER TABLE
- **THEN** los perfiles existentes tienen `onboarding_completed = false` (default aplicado)
