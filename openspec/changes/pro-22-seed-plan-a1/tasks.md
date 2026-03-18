## 1. Preparar el archivo de seed

- [ ] 1.1 Crear `supabase/seed_a1.sql` con bloque de limpieza (DELETE FROM lessons CASCADE)
- [ ] 1.2 Insertar las 60 lecciones del Plan A1 (días 1–30) con todos los campos quechua
- [ ] 1.3 Insertar las 60 lecciones del Plan A1 (días 31–60) con todos los campos quechua
- [ ] 1.4 Insertar 1 ejercicio tipo `choice` por cada lección (días 1–30)
- [ ] 1.5 Insertar 1 ejercicio tipo `choice` por cada lección (días 31–60)
- [ ] 1.6 Actualizar `supabase/seed.sql` para referenciar el nuevo contenido A1

## 2. Aplicar seed en Supabase

- [ ] 2.1 Ejecutar el seed via Supabase MCP (`execute_sql`)
- [ ] 2.2 Verificar que existen exactamente 60 lecciones con `day_number` no nulo
- [ ] 2.3 Verificar que existen 60 ejercicios tipo `choice` asociados a las lecciones
