## ADDED Requirements

### Requirement: Repositorio GitHub inicializado
El sistema SHALL tener un repositorio público en GitHub bajo el usuario JMarcos2000 con el nombre `quechua-app`, inicializado con Vite + React + TypeScript.

#### Scenario: Proyecto creado con Vite
- **WHEN** se ejecuta `npm create vite@latest` con template `react-ts`
- **THEN** el proyecto tiene `src/`, `public/`, `vite.config.ts`, `tsconfig.json` y `package.json`

#### Scenario: Repositorio publicado en GitHub
- **WHEN** se hace `git push` al repositorio remoto
- **THEN** el código es accesible en `github.com/JMarcos2000/quechua-app`

### Requirement: Estructura de carpetas escalable
El proyecto SHALL tener una estructura de carpetas que soporte el crecimiento de la app.

#### Scenario: Carpetas base creadas
- **WHEN** se revisa el directorio `src/`
- **THEN** existen las carpetas `components/`, `pages/`, `hooks/`, `lib/`, `types/`

### Requirement: Tailwind CSS configurado
El proyecto SHALL tener Tailwind CSS instalado y funcional.

#### Scenario: Tailwind disponible en componentes
- **WHEN** se usa una clase de Tailwind en un componente (ej: `className="bg-blue-500"`)
- **THEN** el estilo se aplica correctamente en el navegador
