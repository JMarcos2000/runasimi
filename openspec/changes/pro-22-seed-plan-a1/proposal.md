## Why

Sin contenido quechua real, la app no puede cumplir su propósito: el seed actual tiene 5 lecciones genéricas sin vocabulario, ejercicios ni estructura pedagógica. Este issue puebla la base de datos con las 60 lecciones del Plan A1 completo, haciendo la app funcional para usuarios reales.

## What Changes

- **BREAKING** Reemplazar las 5 lecciones genéricas del `seed.sql` actual con las 60 lecciones del Plan A1
- Nuevo archivo `supabase/seed_a1.sql` con contenido quechua sureño real para los 60 días
- 1 ejercicio tipo `choice` por lección (60 ejercicios en total) insertados en la tabla `exercises`
- Cada lección incluye: `day_number`, `topic`, `example_quechua`, `example_translation`, `phrase_of_day`
- El `seed.sql` existente se actualiza para limpiar lecciones viejas antes de insertar las nuevas

## Capabilities

### New Capabilities
- `plan-a1-content`: Las 60 lecciones del Plan A1 con contenido quechua sureño real, organizadas por día, tema y con ejercicios de opción múltiple

### Modified Capabilities
- ninguna a nivel de spec (el schema ya soporta estos campos desde PRO-20)

## Impact

- **`supabase/seed.sql`**: Se limpia y redirige a `seed_a1.sql`
- **`supabase/seed_a1.sql`**: Archivo nuevo con 60 INSERTs en `lessons` y 60 INSERTs en `exercises`
- **Supabase DB**: Las 5 lecciones genéricas son reemplazadas por las 60 reales
- **Frontend**: El dashboard mostrará las 60 lecciones reales automáticamente (sin cambios de código)
- **PRO-19 (Pantalla Inicio)** y **PRO-27 (Pantalla Lecciones)** dependen de este seed para mostrar datos reales
