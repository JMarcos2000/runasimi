## Context

El proyecto usa Supabase (PostgreSQL) como backend completo. El schema actual tiene 3 tablas: `profiles`, `lessons` y `user_progress`. Las lecciones no tienen contenido quechua real, no existe estructura para ejercicios, y no hay tracking de racha ni comunidad.

Este rediseño debe ser no destructivo: las tablas existentes solo reciben columnas nuevas (nullable o con default), no se elimina nada. El frontend ya está en producción en Vercel con usuarios reales.

## Goals / Non-Goals

**Goals:**
- Agregar soporte para ejercicios con contenido variable (4 tipos) via JSONB
- Habilitar tracking de racha diaria por usuario
- Habilitar sistema de comunidad (sapaña)
- Preparar `lessons` para recibir el seed de 60 días del Plan A1
- Mantener RLS activo en todas las tablas nuevas
- Migración aplicable sin downtime (solo ALTER TABLE y CREATE TABLE)

**Non-Goals:**
- Seed del contenido A1 (eso es PRO-22)
- Cambios en el frontend (PRO-19, PRO-23, PRO-27)
- Sistema de audio/video storage (PRO-26)
- Múltiples variantes de quechua en el schema

## Decisions

### 1. JSONB para contenido de ejercicios (no tabla por tipo)

**Decisión:** Una sola tabla `exercises` con columna `content jsonb` y discriminador `type`.

**Rationale:** Los 4 tipos de ejercicio tienen estructuras distintas. JSONB en PostgreSQL es indexable y queryable, evita el antipatrón EAV y evita tener 4 tablas separadas con joins complejos. Es la misma flexibilidad que MongoDB pero con integridad relacional.

**Alternativa descartada:** Tablas separadas por tipo (`choice_exercises`, `audio_exercises`, etc.) — genera joins innecesarios y complica agregar tipos nuevos.

**Estructura por tipo:**
```json
// choice
{ "question": "¿Qué significa Rimaykullayki?", "options": ["Hola", "Adiós", "Gracias"], "correct_index": 0 }

// text_input
{ "prompt": "Escribí el saludo formal en quechua", "answer": "Rimaykullayki", "hint": "Rima..." }

// audio
{ "word": "Rimaykullayki", "audio_url": "storage/audio/rimaykullayki.mp3", "question": "¿Qué escuchás?" }

// video
{ "video_url": "storage/video/saludos-intro.mp4", "duration_seconds": 45, "caption": "Saludos básicos" }
```

### 2. `user_streak` como tabla separada (no columna en `profiles`)

**Decisión:** Tabla propia `user_streak` con `last_activity_date` y lógica de racha calculada en el cliente/edge function.

**Rationale:** La racha requiere lógica de fecha (¿fue ayer?) que es mejor calcular al momento de actualizar que almacenar precalculada. Tabla separada permite índices específicos y evita que `profiles` crezca indefinidamente.

**Alternativa descartada:** Columnas en `profiles` — mezcla concerns de perfil con gamificación.

### 3. `community_likes` con constraint de un like por día

**Decisión:** Unique constraint en `(from_user_id, to_user_id, DATE(created_at))` para limitar 1 sapaña por usuario por día.

**Rationale:** Más simple que una tabla de "tokens diarios". La constraint vive en la DB, no requiere lógica en el cliente.

### 4. Migración aditiva (no destructiva)

**Decisión:** Solo `ALTER TABLE ... ADD COLUMN` y `CREATE TABLE`. Sin `DROP`, sin `ALTER COLUMN`.

**Rationale:** Hay usuarios en producción. Los nuevos campos en `lessons` y `profiles` son nullable o tienen defaults, por lo que el frontend actual sigue funcionando sin cambios.

## Risks / Trade-offs

- **JSONB sin schema fijo** → Si el frontend envía un tipo de contenido mal formado, la DB lo acepta igual. Mitigación: validar en el frontend antes de insertar; agregar check constraint básico sobre el campo `type`.
- **Racha calculada en cliente** → Si el usuario no abre la app por exactamente 1 día, podría perder la racha por desfase de timezone. Mitigación: usar `DATE` en UTC consistentemente en cliente y DB.
- **Migración en producción** → Un `ALTER TABLE` en una tabla con datos puede lockear brevemente. Mitigación: las tablas actuales tienen pocos registros (5 lecciones, usuarios de prueba), el impacto es despreciable.

## Migration Plan

1. Aplicar `ALTER TABLE lessons ADD COLUMN ...` (nuevos campos, todos nullable)
2. Aplicar `ALTER TABLE profiles ADD COLUMN onboarding_completed boolean default false`
3. Crear tabla `exercises` con RLS
4. Crear tabla `user_streak` con RLS
5. Crear tabla `community_likes` con unique constraint y RLS
6. Versionar todo en `supabase/migrations/001_multimedia_schema.sql`

**Rollback:** Cada `ADD COLUMN` y `CREATE TABLE` es reversible con `DROP COLUMN` / `DROP TABLE`. Sin pérdida de datos existentes.
