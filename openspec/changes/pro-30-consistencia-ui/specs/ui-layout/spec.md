## MODIFIED Requirements

### Requirement: Layout principal con navegación
El sistema SHALL tener un layout base con barra de navegación visible en todas las páginas autenticadas, usando exclusivamente tokens del sistema de diseño `quechua-*`.

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

#### Scenario: Componente Card usa tokens quechua
- **WHEN** se renderiza el componente Card
- **THEN** usa `bg-quechua-surface`, `rounded-2xl`, `border-quechua-border` — sin clases genéricas `gray-*` ni `shadow-sm`
