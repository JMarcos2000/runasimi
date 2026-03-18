## ADDED Requirements

### Requirement: Deploy automático en Vercel
El sistema SHALL desplegarse automáticamente en Vercel cada vez que se haga push a la rama `main`.

#### Scenario: Push a main dispara deploy
- **WHEN** se hace `git push origin main`
- **THEN** Vercel detecta el cambio y despliega la nueva versión en menos de 3 minutos

#### Scenario: URL de producción accesible
- **WHEN** el deploy termina exitosamente
- **THEN** la app es accesible en la URL de Vercel asignada al proyecto

### Requirement: GitHub Actions para validación
El repositorio SHALL tener un workflow de GitHub Actions que valide el código antes del merge.

#### Scenario: Workflow ejecuta lint y build
- **WHEN** se abre un Pull Request o se hace push a cualquier rama
- **THEN** GitHub Actions ejecuta `npm run lint` y `npm run build` y reporta el resultado

#### Scenario: Build fallido bloquea merge
- **WHEN** el build falla en GitHub Actions
- **THEN** el PR muestra el check en rojo y no se puede mergear sin forzarlo

### Requirement: Variables de entorno en Vercel
El sistema SHALL tener las variables de entorno de Supabase configuradas en Vercel para producción.

#### Scenario: Variables configuradas en Vercel
- **WHEN** la app desplegada intenta conectarse a Supabase
- **THEN** usa las variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` configuradas en el dashboard de Vercel
