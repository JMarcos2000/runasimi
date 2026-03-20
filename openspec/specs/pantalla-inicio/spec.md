## Capability: Pantalla Inicio

### Requirement: Racha real del usuario
La pantalla Inicio SHALL mostrar la racha de días consecutivos del usuario desde la tabla `user_streak.current_streak`. Si no existe registro, SHALL mostrar 0.

#### Scenario: Usuario con racha activa
- **GIVEN** el usuario tiene `user_streak.current_streak = 5`
- **WHEN** visita `/inicio`
- **THEN** ve "5 días" en el badge de racha

#### Scenario: Usuario sin racha
- **GIVEN** el usuario no tiene registro en `user_streak`
- **WHEN** visita `/inicio`
- **THEN** ve "Sin racha" o "0 días"

### Requirement: Nivel y día actual
La pantalla Inicio SHALL mostrar "Nivel A1 · Día N" donde N = cantidad de lecciones completadas + 1.

#### Scenario: Usuario en día 3
- **GIVEN** el usuario tiene 2 lecciones completadas en `user_progress`
- **WHEN** visita `/inicio`
- **THEN** ve "Nivel A1 · Día 3"

### Requirement: Barra de progreso
La pantalla SHALL mostrar una barra de progreso que refleje `lecciones_completadas / 60`.

#### Scenario: Progreso al 50%
- **GIVEN** el usuario completó 30 lecciones
- **WHEN** visita `/inicio`
- **THEN** la barra muestra 50% de relleno

### Requirement: Frase del día
La pantalla SHALL mostrar la `phrase_of_day` de la próxima lección no completada del usuario.

#### Scenario: Frase del día presente
- **GIVEN** la próxima lección del usuario tiene `phrase_of_day = "Allianchu"`
- **WHEN** visita `/inicio`
- **THEN** ve "Allianchu" como frase del día

### Requirement: Ruta y nombre correctos
La pantalla SHALL estar disponible en `/inicio` (no `/dashboard`). El navbar SHALL tener un link "Inicio" apuntando a `/inicio`.

#### Scenario: Redirección post-login
- **GIVEN** el usuario inicia sesión exitosamente
- **WHEN** el login completa
- **THEN** es redirigido a `/inicio`
