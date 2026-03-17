## Context

Proyecto nuevo sin código existente. El usuario es nuevo en desarrollo y necesita una base sólida pero simple para construir una app de aprendizaje de Quechua estilo Duolingo. El stack fue elegido por ser moderno, bien documentado y tener tier gratuito generoso (Supabase, Vercel).

## Goals / Non-Goals

**Goals:**
- Repositorio GitHub funcional con proyecto Vite + React + TypeScript
- Supabase configurado con tablas base y autenticación lista
- Deploy automático en Vercel al hacer push a main
- Estructura de carpetas escalable para las siguientes fases
- Componentes base reutilizables con Tailwind CSS

**Non-Goals:**
- Lógica de lecciones o ejercicios (Fase 2)
- App móvil / APK (Fase 2)
- Pagos o suscripciones
- Internacionalización (i18n) por ahora

## Decisions

### 1. Vite sobre Create React App
Vite es significativamente más rápido en desarrollo y tiene mejor soporte actual. CRA está deprecado.

### 2. Tailwind CSS sobre CSS Modules o styled-components
Tailwind permite construir UI rápido sin cambiar de archivo. Ideal para un proyecto en etapa inicial donde la velocidad importa. Alternativa considerada: styled-components (más verboso para prototipado).

### 3. Supabase Auth sobre solución custom
Supabase incluye auth completo (email/password + OAuth) sin necesidad de implementar JWT, hash de passwords, etc. Reduce complejidad para un desarrollador nuevo. Alternativa: Firebase Auth (más costoso a escala).

### 4. React Router v6 sobre Next.js
El proyecto es una SPA simple por ahora. Next.js agrega complejidad de SSR que no es necesaria en esta fase. Se puede migrar luego si se necesita SEO.

### 5. GitHub Actions para CI/CD
Integración nativa con el repositorio GitHub ya existente. Vercel también tiene deploy automático nativo desde GitHub, por lo que CI/CD se limita a lint + test antes del deploy.

## Risks / Trade-offs

- **Supabase tier gratuito tiene límites** → Suficiente para desarrollo y primeros usuarios. Escalar a Pro cuando sea necesario.
- **TypeScript puede ser intimidante para un desarrollador nuevo** → Se usarán tipos simples y se evitará complejidad innecesaria de tipos en esta fase.
- **Sin tests unitarios en esta fase** → Se agrega estructura para tests pero no se implementan en el setup inicial. Riesgo: deuda técnica. Mitigación: agregar en PRO-10.
