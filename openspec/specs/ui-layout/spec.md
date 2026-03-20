# ui-layout Specification

## Purpose
TBD - created by archiving change setup-inicial. Update Purpose after archive.
## Requirements
### Requirement: Layout principal con navegación
El sistema SHALL tener un layout base con barra de navegación visible en todas las páginas autenticadas, usando exclusivamente tokens del sistema de diseño `quechua-*`.

#### Scenario: Navbar visible en dashboard
- **WHEN** el usuario autenticado está en cualquier página del app
- **THEN** la barra de navegación muestra el logo, links principales y avatar del usuario, y el nombre de la app mostrado es "Runasimi"

#### Scenario: Layout responsivo
- **WHEN** el usuario accede desde un móvil (viewport < 768px)
- **THEN** la navegación colapsa a un menú hamburguesa

#### Scenario: Navbar sin colores violeta
- **WHEN** se inspecciona `Navbar.tsx`
- **THEN** no existe ninguna clase `violet-*` — los colores de texto activo y hover usan `text-quechua-primary`

#### Scenario: Navbar con borde del sistema de diseño
- **WHEN** se renderiza la Navbar
- **THEN** el borde inferior usa `border-quechua-border` (no `border-gray-100`)

#### Scenario: Layout con fondo del sistema de diseño
- **WHEN** se renderiza el componente Layout
- **THEN** el fondo de la página usa `bg-quechua-background` (no `bg-gray-50`)

### Requirement: Componentes base reutilizables
El sistema SHALL tener un conjunto de componentes base con Tailwind CSS usando tokens del sistema de diseño `quechua-*`.

#### Scenario: Componente Button disponible
- **WHEN** se importa `Button` desde `src/components/ui/Button.tsx`
- **THEN** acepta props `variant` (primary, secondary, outline) y `size` (sm, md, lg)

#### Scenario: Componente Card usa tokens quechua
- **WHEN** se renderiza el componente Card
- **THEN** usa `bg-quechua-surface`, `rounded-2xl`, `border-quechua-border` — sin clases genéricas `gray-*` ni `shadow-sm`

#### Scenario: Componente Input disponible
- **WHEN** se importa `Input` desde `src/components/ui/Input.tsx`
- **THEN** acepta props estándar de input HTML más `label` y `error`

### Requirement: Páginas base creadas
El sistema SHALL tener las páginas mínimas del flujo de usuario.

#### Scenario: Páginas existentes
- **WHEN** se revisa `src/pages/`
- **THEN** existen: `LoginPage.tsx`, `RegisterPage.tsx`, `DashboardPage.tsx`, `ProfilePage.tsx`

