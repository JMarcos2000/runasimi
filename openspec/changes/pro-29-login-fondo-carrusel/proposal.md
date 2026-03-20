## Why

La pantalla de login actual tiene fondo blanco/beige genérico que no comunica la identidad de la app. Incorporar el fondo naranja-marrón oscuro y un carrusel de features mejora la primera impresión y prepara al usuario antes de ingresar sus credenciales.

## What Changes

- Reemplazar el fondo blanco de la pantalla de login por naranja-marrón oscuro (`#C17520`)
- Adaptar colores de textos, inputs y elementos del formulario para mantener legibilidad sobre fondo oscuro
- Agregar un componente `FeatureCarousel` encima del formulario de login con:
  - 4 slides con ícono, título y subtítulo
  - Auto-avance cada 3 segundos
  - Dots de paginación interactivos
  - Swipe manual (touch y mouse)

## Capabilities

### New Capabilities

- `login-feature-carousel`: Carrusel animado de features que se muestra en la pantalla de login encima del formulario

### Modified Capabilities

- `login-ui`: El fondo cambia a naranja-marrón oscuro y los colores de los elementos se adaptan para legibilidad

## Impact

- `src/pages/LoginPage.tsx` — cambio de fondo y colores
- `src/components/ui/FeatureCarousel.tsx` — nuevo componente (o en features/auth/)
- `tailwind.config.js` — posible adición del color `#C17520` como token
- Sin cambios en lógica de autenticación ni otras pantallas
