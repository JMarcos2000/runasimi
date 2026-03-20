## 1. Configuración de color

- [x] 1.1 Agregar token `'login-bg': '#C17520'` en `tailwind.config.js` dentro de `colors`

## 2. Componente FeatureCarousel

- [x] 2.1 Crear `src/components/ui/FeatureCarousel.tsx` con los 4 slides (ícono, título, subtítulo)
- [x] 2.2 Implementar estado `activeIndex` con `useState` y auto-avance con `useEffect` (3 segundos, reset al interactuar)
- [x] 2.3 Agregar dots de paginación que reflejan el slide activo y permiten click para navegar
- [x] 2.4 Implementar swipe manual (touchstart/touchend y mousedown/mouseup, umbral 50px)
- [x] 2.5 Estilizar slides: fondo semi-transparente/oscuro, texto blanco, ícono grande, transición CSS entre slides

## 3. Actualizar LoginPage

- [x] 3.1 Cambiar el fondo de `LoginPage.tsx` a `bg-login-bg` (toda la pantalla)
- [x] 3.2 Adaptar inputs: fondo blanco, texto oscuro para legibilidad
- [x] 3.3 Adaptar etiquetas, textos secundarios y links a color blanco o blanco/80
- [x] 3.4 Insertar `<FeatureCarousel />` encima del formulario de login
- [x] 3.5 Verificar que el botón de Google OAuth y demás elementos mantengan contraste adecuado

## 4. Verificación

- [ ] 4.1 Confirmar que la pantalla se ve correctamente en viewport 375px (mobile)
- [ ] 4.2 Confirmar que la pantalla se ve correctamente en desktop (1280px+)
- [ ] 4.3 Verificar que el auto-avance funciona y los dots responden
- [ ] 4.4 Verificar que el swipe funciona en mobile (touch)
- [ ] 4.5 Confirmar que el formulario de login sigue funcionando (submit, validaciones, OAuth)
- [ ] 4.6 Confirmar que ninguna otra pantalla de la app se vio afectada

