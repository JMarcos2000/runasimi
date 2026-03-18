## Context

La app usa Tailwind CSS con colores por defecto (azul genérico). No tiene logo propio ni identidad visual. El rediseño parte de Pencil.dev (`design/ui.pen`) donde se definen las pantallas de referencia antes de tocar código.

## Goals / Non-Goals

**Goals:**
- Definir la paleta oficial en `tailwind.config.js` como custom colors
- Rediseñar Login con logo SVG y nueva paleta
- Rediseñar Dashboard con nueva paleta y mejor jerarquía visual
- Usar Pencil como fuente de verdad del diseño

**Non-Goals:**
- Cambiar lógica de autenticación o rutas
- Rediseñar otras páginas (Register, Profile)
- Implementar modo oscuro
- Animaciones o transiciones

## Decisions

**Paleta de colores → variables Tailwind**
La paleta definida en Pencil se traduce a colores custom en `tailwind.config.js` bajo una clave `quechua`. Esto permite usar clases como `bg-quechua-primary` en todos los componentes. Alternativa considerada: CSS variables en `index.css` — descartado porque Tailwind custom colors tienen mejor integración con IntelliSense y purging.

**Logo → SVG inline en componente React**
El logo se crea como `src/components/ui/Logo.tsx` exportando un SVG como componente. Alternativa: archivo `.svg` importado como imagen — descartado porque el SVG como componente permite cambiar colores con props.

**Diseño en Pencil primero**
Antes de editar código, se diseñan las pantallas en `design/ui.pen`. Esto permite iterar visualmente sin tocar React. El diseño en Pencil es la fuente de verdad.

## Risks / Trade-offs

- [Paleta no validada visualmente] → Mitigación: diseñar en Pencil primero y tomar screenshot antes de implementar
- [Logo SVG complejo] → Mitigación: empezar con un logo simple basado en texto + ícono, iterable después
