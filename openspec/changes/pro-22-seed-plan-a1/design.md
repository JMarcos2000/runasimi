## Context

El schema de Supabase ya tiene las tablas `lessons` y `exercises` con todos los campos necesarios (PRO-20). El seed actual tiene 5 lecciones genéricas. Este issue reemplaza ese contenido con las 60 lecciones reales del Plan A1 en Quechua Sureño (Perú), la variante más extendida y con mayor material académico disponible.

## Goals / Non-Goals

**Goals:**
- 60 lecciones con contenido quechua real, correcto y pedagógicamente ordenado
- 1 ejercicio `choice` por lección (3 opciones, 1 correcta)
- `phrase_of_day` relevante al tema de cada lección
- Seed idempotente: se puede correr múltiples veces sin duplicar datos

**Non-Goals:**
- Ejercicios de tipo `audio` o `video` (eso es PRO-26)
- Ejercicios de tipo `text_input` (se agregan en PRO-25)
- Traducción a otros idiomas o variantes del quechua
- Más de 1 ejercicio por lección en esta iteración

## Decisions

### 1. Estructura del SQL: DELETE + INSERT (no UPSERT)

**Decisión:** El seed limpia las lecciones existentes con `DELETE FROM lessons` (cascade elimina exercises) y luego inserta las 60 nuevas.

**Rationale:** Las 5 lecciones genéricas no tienen IDs conocidos en el seed, y hacer UPSERT por `title` sería frágil. El DELETE cascade es limpio y el seed es solo para entorno de desarrollo/staging.

**Nota:** En producción con usuarios reales hay que migrar con cuidado. Para el MVP se asume que no hay usuarios con progreso real aún.

### 2. Un archivo separado: `seed_a1.sql`

**Decisión:** El contenido del Plan A1 va en `supabase/seed_a1.sql`. El `seed.sql` existente se actualiza para llamar a este archivo o simplemente se reemplaza.

**Rationale:** Mantener el seed base separado del contenido curricular facilita agregar A2, B1, etc. en el futuro sin tocar el archivo base.

### 3. Contenido en Quechua Sureño (Cusco-Collao)

**Decisión:** Usar la variante Quechua Sureño de Cusco-Collao, la más documentada académicamente.

**Rationale:** Es la variante definida en el documento de producto. Tiene mayor material de referencia disponible.

### 4. Ejercicios choice con distractores plausibles

**Decisión:** Cada ejercicio tiene 3 opciones donde los distractores son semánticamente relacionados pero incorrectos (no absurdos).

**Rationale:** Los distractores plausibles generan mayor aprendizaje que opciones obviamente incorrectas.

## Risks / Trade-offs

- **Exactitud del quechua** → El contenido es generado con conocimiento de Quechua Sureño estándar. Recomendable revisión por hablante nativo antes de producción masiva.
- **DELETE en producción** → El seed elimina lecciones existentes. Mitigación: solo aplicar en entorno de desarrollo; en producción usar migración incremental.
- **60 INSERTs en una transacción** → Performance no es problema para este volumen.
