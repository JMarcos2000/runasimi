## 1. Metadata y configuración

- [ ] 1.1 Actualizar `package.json`: campo `name` a `runasimi` y `description` al nuevo nombre
- [ ] 1.2 Actualizar `index.html`: `<title>` y metatags SEO (og:title, og:description, twitter:title, twitter:description)

## 2. Branding en la UI

- [ ] 2.1 Buscar con grep todas las ocurrencias de "Quechua App" / "quechua-app" / "quechua app" en `src/`
- [ ] 2.2 Actualizar textos de branding en componentes del header/navbar (nombre visible "Runasimi")
- [ ] 2.3 Actualizar textos de bienvenida en `LoginPage.tsx` (reemplazar referencias al nombre de la app)
- [ ] 2.4 Actualizar cualquier otra referencia al nombre en componentes de la landing o dashboard

## 3. Verificación

- [ ] 3.1 Correr `npm run build` y confirmar que no hay errores
- [ ] 3.2 Revisar visualmente en el browser que el nombre "Runasimi" aparece correctamente en header, login y title de la tab
