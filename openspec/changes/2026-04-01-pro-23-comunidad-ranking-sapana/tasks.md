# Tasks — PRO-23 Pantalla Comunidad — Ranking y Sapaña

## 1. CommunityPage
- [x] Crear `src/pages/CommunityPage.tsx`
  - Query ranking: user_streak JOIN profiles, top 10 por current_streak DESC
  - Query corazones totales por usuario desde community_likes
  - Query si ya di sapaña hoy (community_likes donde from_user_id = me AND like_date = today)
  - Renderizar ranking con botones "Dar sapaña"
  - Mostrar fila del usuario actual si no está en top 10
- [x] Registrar ruta `/community` en `App.tsx`

## 2. Navbar
- [x] Agregar link "Comunidad" → `/community` en `Navbar.tsx`
