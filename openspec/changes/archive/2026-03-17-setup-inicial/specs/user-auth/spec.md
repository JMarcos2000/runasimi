## ADDED Requirements

### Requirement: Registro con email y contraseña
El sistema SHALL permitir a nuevos usuarios crear una cuenta con email y contraseña.

#### Scenario: Registro exitoso
- **WHEN** el usuario completa el formulario de registro con email válido y contraseña de al menos 6 caracteres
- **THEN** se crea la cuenta en Supabase Auth y se redirige al usuario al dashboard

#### Scenario: Email ya registrado
- **WHEN** el usuario intenta registrarse con un email que ya existe
- **THEN** se muestra un mensaje de error "Este email ya está registrado"

### Requirement: Login con email y contraseña
El sistema SHALL permitir a usuarios existentes iniciar sesión.

#### Scenario: Login exitoso
- **WHEN** el usuario ingresa credenciales correctas
- **THEN** se inicia la sesión y se redirige al dashboard

#### Scenario: Credenciales incorrectas
- **WHEN** el usuario ingresa email o contraseña incorrectos
- **THEN** se muestra un mensaje de error "Email o contraseña incorrectos"

### Requirement: Login con Google OAuth
El sistema SHALL permitir iniciar sesión con cuenta de Google.

#### Scenario: OAuth con Google exitoso
- **WHEN** el usuario hace clic en "Continuar con Google" y autoriza la app
- **THEN** se crea o vincula la cuenta y se redirige al dashboard

### Requirement: Cierre de sesión
El sistema SHALL permitir al usuario cerrar su sesión activa.

#### Scenario: Logout exitoso
- **WHEN** el usuario hace clic en "Cerrar sesión"
- **THEN** se destruye la sesión y se redirige a la página de login

### Requirement: Rutas protegidas
El sistema SHALL redirigir a usuarios no autenticados que intenten acceder a rutas privadas.

#### Scenario: Acceso sin sesión a ruta protegida
- **WHEN** un usuario sin sesión intenta acceder a `/dashboard`
- **THEN** es redirigido automáticamente a `/login`
