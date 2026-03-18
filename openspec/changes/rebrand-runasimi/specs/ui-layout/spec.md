## MODIFIED Requirements

### Requirement: Layout principal con navegación
El sistema SHALL tener un layout base con barra de navegación visible en todas las páginas autenticadas.

#### Scenario: Navbar visible en dashboard
- **WHEN** el usuario autenticado está en cualquier página del app
- **THEN** la barra de navegación muestra el logo, links principales y avatar del usuario, y el nombre de la app mostrado es "Runasimi"

#### Scenario: Layout responsivo
- **WHEN** el usuario accede desde un móvil (viewport < 768px)
- **THEN** la navegación colapsa a un menú hamburguesa
