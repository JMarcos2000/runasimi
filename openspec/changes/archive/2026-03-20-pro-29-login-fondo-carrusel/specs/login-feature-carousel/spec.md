## ADDED Requirements

### Requirement: Carrusel de features en Login
La pantalla de login SHALL mostrar un componente `FeatureCarousel` encima del formulario con 4 slides que presentan las capacidades principales de la app.

#### Scenario: Slides visibles al cargar Login
- **WHEN** el usuario navega a `/login`
- **THEN** el carrusel es visible encima del formulario con el primer slide activo

#### Scenario: Auto-avance cada 3 segundos
- **WHEN** el carrusel está visible y el usuario no interactúa
- **THEN** el slide activo avanza automáticamente cada 3 segundos en ciclo continuo

#### Scenario: Dots reflejan slide activo
- **WHEN** el slide activo cambia (por auto-avance o interacción)
- **THEN** el dot correspondiente al slide activo se muestra resaltado y los demás en estado inactivo

### Requirement: Interacción manual del carrusel
El carrusel SHALL responder a interacciones manuales del usuario para cambiar de slide.

#### Scenario: Swipe hacia la izquierda avanza slide
- **WHEN** el usuario hace swipe hacia la izquierda (touch o mouse, desplazamiento > 50px)
- **THEN** el carrusel avanza al siguiente slide y el timer de auto-avance se resetea

#### Scenario: Swipe hacia la derecha retrocede slide
- **WHEN** el usuario hace swipe hacia la derecha (touch o mouse, desplazamiento > 50px)
- **THEN** el carrusel retrocede al slide anterior y el timer de auto-avance se resetea

#### Scenario: Click en dot navega al slide correspondiente
- **WHEN** el usuario hace click en un dot de paginación
- **THEN** el carrusel muestra el slide correspondiente al dot clickeado y el timer se resetea

### Requirement: Contenido de los 4 slides
El carrusel SHALL mostrar exactamente 4 slides con el contenido definido.

#### Scenario: Slide 1 — Gana recompensas
- **WHEN** el slide activo es el primero
- **THEN** se muestra el ícono 🏆, título "Gana recompensas" y subtítulo "XP, rachas y logros"

#### Scenario: Slide 2 — Aprende a tu ritmo
- **WHEN** el slide activo es el segundo
- **THEN** se muestra el ícono 📚, título "Aprende a tu ritmo" y subtítulo "Lecciones cortas de 5 minutos"

#### Scenario: Slide 3 — Ejercicios interactivos
- **WHEN** el slide activo es el tercero
- **THEN** se muestra el ícono 🎯, título "Ejercicios interactivos" y subtítulo "Opción múltiple y texto libre"

#### Scenario: Slide 4 — Quechua Sureño
- **WHEN** el slide activo es el cuarto
- **THEN** se muestra el ícono 🌎, título "Quechua Sureño" y subtítulo "La variante más hablada del Perú"
