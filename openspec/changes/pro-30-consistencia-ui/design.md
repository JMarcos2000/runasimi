## Context

El sistema de diseño usa tokens Tailwind en `tailwind.config.js` bajo el namespace `quechua.*`. La Navbar y varios componentes nunca fueron migrados al rediseño y conservan clases genéricas de Tailwind (`violet-600`, `gray-*`). El cambio es puramente de presentación — no afecta lógica ni estructura.

## Goals / Non-Goals

**Goals:**
- Reemplazar todos los colores violeta y grises genéricos por tokens `quechua-*`
- Asegurar que `max-w-sm mx-auto` envuelva el contenido en InicioPage y LessonPage
- Mantener todos los tamaños y espaciados actuales

**Non-Goals:**
- Rediseñar el layout de ninguna pantalla
- Cambiar tipografía, iconografía ni estructura de componentes
- Agregar nuevas funcionalidades

## Decisions

### 1. Card sin sombra
Eliminar `shadow-sm` del componente Card para consistencia con el login, que usa solo bordes (`border-quechua-border`) sin sombras.

### 2. Avatar en ProfilePage
Reemplazar `bg-violet-100` por `bg-quechua-surface` y el emoji de avatar por un ícono SVG de persona con color `quechua-primary`.

### 3. max-w-sm solo en contenido, no en header
En InicioPage y LessonPage, el `max-w-sm mx-auto` se aplica al contenedor de contenido scrolleable, no al header naranja (que debe ocupar el ancho completo).

## Risks / Trade-offs

- [Card es un componente compartido] → Los cambios afectan todas las pantallas que lo usen. Verificar que no rompa ningún layout.
