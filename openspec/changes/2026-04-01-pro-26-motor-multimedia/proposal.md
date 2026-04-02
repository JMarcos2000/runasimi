## Why

El schema de ejercicios soporta tipos `audio` y `video` desde PRO-20, y el motor de ejercicios (PRO-25) ya los detecta pero muestra "Tipo de ejercicio no soportado aún." para ambos. Este issue cierra ese gap implementando los componentes de reproducción.

## What Changes

- Nuevo componente `AudioPlayer`: reproduce audio desde URL (Supabase Storage o externo), con botón de repetir
- Nuevo componente `VideoPlayer`: reproduce video con controles nativos del browser, carga lazy
- `ExercisePage`: integra ambos componentes en el switch de tipos de ejercicio

## Capabilities

### New Capabilities
- `audio-player`: Componente de reproducción de audio con botón de repetir y feedback visual
- `video-player`: Componente de reproducción de video con controles nativos y carga lazy

### Modified Capabilities
- `exercise-engine`: Maneja tipos `audio` y `video` además de `choice` y `text_input`
