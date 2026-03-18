## ADDED Requirements

### Requirement: Página de perfil del usuario
El sistema SHALL mostrar una página de perfil con la información del usuario autenticado.

#### Scenario: Perfil muestra datos del usuario
- **WHEN** el usuario navega a `/profile`
- **THEN** se muestra su avatar (o placeholder), username y fecha de registro

#### Scenario: Perfil es ruta protegida
- **WHEN** un usuario no autenticado intenta acceder a `/profile`
- **THEN** es redirigido a `/login`

### Requirement: Seed de datos de lecciones
La base de datos SHALL tener datos iniciales de lecciones de Quechua para poder mostrar contenido desde el primer día.

#### Scenario: Lecciones disponibles en base de datos
- **WHEN** se consulta la tabla `lessons` en Supabase
- **THEN** existen al menos 5 lecciones con títulos en Quechua (ej: "Saludos", "Números", "Colores", "Familia", "Comida")

#### Scenario: Dashboard muestra lecciones disponibles
- **WHEN** el usuario autenticado accede al dashboard
- **THEN** ve una lista o grilla con las lecciones disponibles del seed
