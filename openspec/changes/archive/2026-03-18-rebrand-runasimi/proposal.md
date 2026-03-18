## Why

El nombre actual "Quechua App" es genérico y no tiene identidad propia. "Runasimi" es el nombre original que los propios hablantes dan a su idioma (significa "lengua del pueblo"), lo cual da autenticidad cultural a la app y la diferencia claramente de cualquier competidor.

## What Changes

- Renombrar la app de "Quechua App" / "quechua.app" a **Runasimi** en todos los puntos de la interfaz
- Actualizar `package.json`: campo `name` y `description`
- Actualizar el `<title>` del HTML y las metatags SEO (og:title, og:description, twitter:title)
- Actualizar textos de branding visibles en la UI: header, landing page, footer
- Actualizar referencias al nombre en archivos de configuración y documentación

## Capabilities

### New Capabilities

*(ninguna — es un cambio de branding puro, no introduce nuevas funcionalidades)*

### Modified Capabilities

- `ui-layout`: El nombre visible en header y navegación cambia de "Quechua App" a "Runasimi"
- `login-ui`: Textos de bienvenida y branding en la pantalla de login actualizados

## Impact

- `package.json` — campo `name` y `description`
- `index.html` — `<title>` y metatags
- `src/` — componentes con texto hardcodeado "Quechua" como nombre de la app
- `CLAUDE.md` y documentación interna (referencias al nombre del proyecto)
