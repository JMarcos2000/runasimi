## Why

La auditoría de UI reveló que Navbar, Layout, Card y ProfilePage usan tokens de colores de una versión anterior del proyecto (violeta, grises genéricos Tailwind) que no corresponden al sistema de diseño naranja/beige establecido en el login. Esto genera una experiencia visualmente inconsistente al navegar entre pantallas.

## What Changes

- **Navbar**: reemplazar `text-violet-600` por `text-quechua-primary`; `border-gray-100` por `border-quechua-border`
- **Layout**: reemplazar `bg-gray-50` por `bg-quechua-background`
- **Card**: reemplazar tokens genéricos (`bg-white`, `rounded-xl`, `shadow-sm`, `border-gray-100`) por tokens del sistema (`bg-quechua-surface`, `rounded-2xl`, `border-quechua-border`)
- **ProfilePage**: avatar `bg-violet-100` → `bg-quechua-surface`; textos `gray-800/500` → tokens `quechua-text-*`
- **InicioPage + LessonPage**: agregar `max-w-sm mx-auto` al contenedor de contenido para consistencia en desktop

## Capabilities

### New Capabilities
_(ninguna)_

### Modified Capabilities

- `ui-layout`: Navbar y Layout actualizan colores al sistema de diseño quechua
- `user-profile`: ProfilePage migra colores violeta/gris a tokens quechua

## Impact

- `src/components/layout/Navbar.tsx`
- `src/components/layout/Layout.tsx`
- `src/components/ui/Card.tsx`
- `src/pages/ProfilePage.tsx`
- `src/pages/InicioPage.tsx`
- `src/pages/LessonPage.tsx`
- Sin cambios en lógica ni routing
