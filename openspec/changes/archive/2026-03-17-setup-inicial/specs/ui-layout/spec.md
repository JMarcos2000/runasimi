## ADDED Requirements

### Requirement: Layout principal con navegación
El sistema SHALL tener un layout base con barra de navegación visible en todas las páginas autenticadas.

#### Scenario: Navbar visible en dashboard
- **WHEN** el usuario autenticado está en cualquier página del app
- **THEN** la barra de navegación muestra el logo, links principales y avatar del usuario

#### Scenario: Layout responsivo
- **WHEN** el usuario accede desde un móvil (viewport < 768px)
- **THEN** la navegación colapsa a un menú hamburguesa

### Requirement: Componentes base reutilizables
El sistema SHALL tener un conjunto de componentes base con Tailwind CSS.

#### Scenario: Componente Button disponible
- **WHEN** se importa `Button` desde `src/components/ui/Button.tsx`
- **THEN** acepta props `variant` (primary, secondary, outline) y `size` (sm, md, lg)

#### Scenario: Componente Card disponible
- **WHEN** se importa `Card` desde `src/components/ui/Card.tsx`
- **THEN** renderiza un contenedor con sombra, bordes redondeados y padding configurable

#### Scenario: Componente Input disponible
- **WHEN** se importa `Input` desde `src/components/ui/Input.tsx`
- **THEN** acepta props estándar de input HTML más `label` y `error`

### Requirement: Páginas base creadas
El sistema SHALL tener las páginas mínimas del flujo de usuario.

#### Scenario: Páginas existentes
- **WHEN** se revisa `src/pages/`
- **THEN** existen: `LoginPage.tsx`, `RegisterPage.tsx`, `DashboardPage.tsx`, `ProfilePage.tsx`
