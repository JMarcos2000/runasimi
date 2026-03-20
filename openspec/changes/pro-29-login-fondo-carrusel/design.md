## Context

La pantalla de login (`LoginPage.tsx`) usa un fondo blanco con el formulario centrado. El stack es React + Vite + TypeScript con Tailwind CSS. Los colores están definidos como tokens en `tailwind.config.js` (primary: `#FF6B35`, surface: `#F8F7F4`, etc.). No hay carrusel ni ningún componente de presentación previo al formulario.

## Goals / Non-Goals

**Goals:**
- Cambiar el fondo de `LoginPage` a naranja-marrón oscuro (`#C17520`)
- Construir un componente `FeatureCarousel` autocontenido con 4 slides, auto-avance, dots y swipe
- Adaptar los colores del formulario para legibilidad sobre fondo oscuro
- Agregar el token de color al config de Tailwind

**Non-Goals:**
- Modificar la lógica de autenticación
- Cambiar otras pantallas de la app
- Agregar animaciones complejas (ej. framer-motion); usar CSS transitions nativas

## Decisions

### 1. Carrusel sin librería externa
Implementar el carrusel con estado React (`useState`, `useEffect`) y CSS transitions (`translate-x`). No agregar framer-motion ni swiper.js.
**Alternativa descartada:** librerías de carrusel (swiper, embla) — overhead innecesario para 4 slides estáticos.

### 2. Token de color en Tailwind
Agregar `'login-bg': '#C17520'` en `tailwind.config.js` en lugar de usar el valor inline. Mantiene consistencia con el sistema de tokens existente.

### 3. Ubicación del componente
`src/components/ui/FeatureCarousel.tsx` — componente UI genérico, no acoplado a auth.

### 4. Swipe manual
Detectar `touchstart`/`touchend` y `mousedown`/`mouseup` con diferencia de posición > 50px para avanzar/retroceder slide.

## Risks / Trade-offs

- [Legibilidad del formulario sobre fondo oscuro] → Usar inputs con fondo blanco/opaco y etiquetas en blanco. Verificar contraste visualmente.
- [Auto-avance interfiere con interacción] → Resetear el timer al hacer swipe o click en dot.
