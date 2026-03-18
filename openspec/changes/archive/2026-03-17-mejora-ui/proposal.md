## Why

La app funciona correctamente pero su diseño visual es genérico. Mejorar el Login y el Dashboard con un logo propio y una paleta de colores coherente establece la identidad visual de Quechua App antes de construir las funcionalidades del Mes 2.

## What Changes

- Nuevo logo de Quechua App en la pantalla de Login
- Nueva paleta de colores aplicada a Login y Dashboard
- Rediseño visual de `LoginPage.tsx`: layout, colores, tipografía y logo
- Rediseño visual de `DashboardPage.tsx`: cards de lecciones, header y colores
- Nuevas variables CSS / Tailwind para la paleta de colores definida en Pencil

## Capabilities

### New Capabilities

- `design-system-colors`: Paleta de colores oficial de Quechua App definida en Pencil y trasladada a variables Tailwind/CSS
- `login-ui`: Pantalla de login rediseñada con logo y nueva paleta
- `dashboard-ui`: Dashboard rediseñado con nueva paleta y jerarquía visual mejorada

### Modified Capabilities

(ninguna — los cambios son visuales, no de comportamiento)

## Impact

- `src/pages/LoginPage.tsx` — rediseño completo visual
- `src/pages/DashboardPage.tsx` — rediseño completo visual
- `tailwind.config.js` — nuevos colores de la paleta
- `src/index.css` — variables CSS de la paleta
- `design/ui.pen` — diseños de referencia en Pencil
