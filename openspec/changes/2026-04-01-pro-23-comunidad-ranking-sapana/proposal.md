## Why

La app no tiene componente social. El sistema de racha existe en la DB pero no se comparte entre usuarios. La pantalla Comunidad introduce el ranking y el sistema de "sapaña" (corazón en quechua), que da motivación extrínseca: los usuarios se animan entre sí y compiten sanamente por la racha más larga.

## What Changes

- Nueva ruta `/community` → `CommunityPage`
- Ranking top usuarios por `current_streak` + corazones recibidos
- Botón "Dar sapaña" (❤️) — inserta en `community_likes` con límite 1 por par de usuarios por día
- La fila del usuario actual siempre se muestra (aunque no esté en el top 10)
- Link "Comunidad" en Navbar

## Capabilities

### New Capabilities
- `community-page`: Ranking social + sistema de sapaña (corazones entre usuarios)

### Modified Capabilities
- `navbar`: Agrega link a /community
