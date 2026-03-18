## Context

La app está construida con React + Vite + TypeScript y desplegada en Vercel. El nombre "Quechua App" aparece en múltiples lugares: `package.json`, `index.html`, componentes de UI y documentación. El cambio es cosmético/de branding — no afecta lógica de negocio, base de datos ni APIs.

## Goals / Non-Goals

**Goals:**
- Reemplazar todas las instancias del nombre visible "Quechua App" / "quechua-app" por "Runasimi" en el código fuente
- Actualizar metadatos SEO para reflejar el nuevo nombre
- Mantener consistencia del nombre en toda la UI

**Non-Goals:**
- Cambiar el nombre del repositorio en GitHub
- Cambiar el nombre del proyecto en Vercel o Supabase
- Cambiar el dominio (eso es una decisión separada)
- Modificar el nombre del proyecto en Linear

## Decisions

**Búsqueda exhaustiva antes de editar**: Usar grep para encontrar todas las ocurrencias antes de hacer cambios, para no dejar referencias huérfanas.

**No crear constante global de app name**: El nombre aparece en pocos lugares (< 10). Una constante centralizada sería over-engineering para este caso.

## Risks / Trade-offs

- [Riesgo mínimo] Podría haber ocurrencias en archivos generados o cacheados → Mitigation: correr `npm run build` después para verificar

## Migration Plan

1. Buscar todas las ocurrencias con grep
2. Editar archivo por archivo
3. Verificar build exitoso
4. Deploy a Vercel (con confirmación explícita del usuario)
