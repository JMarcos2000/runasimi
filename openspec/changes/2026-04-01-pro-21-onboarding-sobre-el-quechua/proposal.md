## Why

Los usuarios nuevos ingresan directamente al dashboard sin ningún contexto sobre el idioma que van a aprender. "Quechua" puede referirse a múltiples variantes regionales y la app usa una específica (Sureño, Perú). Esta pantalla de onboarding aclara eso en el primer login y no vuelve a molestar al usuario recurrente.

## What Changes

- Nueva ruta `/onboarding/sobre-el-quechua` → `OnboardingPage`
- Lógica de redirección en `InicioPage`: si `onboarding_completed` es false/null, redirigir a onboarding antes de mostrar inicio
- Botón "Entendido" → hace upsert `onboarding_completed = true` en `profiles` → navega a `/inicio`

## Capabilities

### New Capabilities
- `onboarding-page`: Pantalla de bienvenida al quechua sureño con checkmarks de contexto cultural

### Modified Capabilities
- `inicio-page`: Agrega redirección a onboarding si el usuario no lo completó
