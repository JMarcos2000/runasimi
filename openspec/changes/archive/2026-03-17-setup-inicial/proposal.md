## Why

La Quechua App no tiene repositorio ni infraestructura base. Para empezar a desarrollar, necesitamos el proyecto inicializado con el stack definido (React + Vite + TypeScript + Supabase + Vercel) y el repositorio publicado en GitHub.

## What Changes

- Creación del repositorio GitHub `quechua-app` bajo el usuario JMarcos2000
- Inicialización del proyecto con Vite + React + TypeScript
- Configuración de Supabase con esquema inicial de base de datos (usuarios, lecciones, progreso)
- Configuración de autenticación (registro, login, Google OAuth) con Supabase Auth
- Deploy en Vercel con CI/CD via GitHub Actions
- Layout principal y componentes base de la UI
- Página de perfil con seed de datos iniciales

## Capabilities

### New Capabilities

- `repo-setup`: Repositorio GitHub inicializado con Vite + React + TypeScript, estructura de carpetas y configuración base
- `supabase-db`: Conexión a Supabase y esquema de base de datos (tablas: users, lessons, progress, vocabulary)
- `user-auth`: Registro, login y Google OAuth usando Supabase Auth
- `ui-layout`: Layout principal con navegación, componentes base (Button, Card, Input) y estilos globales
- `ci-cd`: Pipeline GitHub Actions + deploy automático en Vercel
- `user-profile`: Página de perfil de usuario con seed de datos de lecciones de Quechua

### Modified Capabilities

## Impact

- Creación del repositorio en GitHub (nuevo)
- Dependencias: React 18, Vite 5, TypeScript 5, Supabase JS client, React Router v6, Tailwind CSS
- Servicios externos: Supabase (base de datos + auth), Vercel (hosting), GitHub Actions (CI/CD)
- No hay código existente — todo es nuevo
