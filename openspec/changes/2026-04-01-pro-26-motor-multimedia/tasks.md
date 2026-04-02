# Tasks — PRO-26 Motor Multimedia — Audio y Video

## 1. AudioPlayer
- [x] Crear `src/components/exercises/AudioPlayer.tsx`
  - Props: word, audio_url, question, onNext
  - HTMLAudioElement para reproducción
  - Botón play/pause, botón repetir, botón Continuar (habilita tras primer play)

## 2. VideoPlayer
- [x] Crear `src/components/exercises/VideoPlayer.tsx`
  - Props: video_url, duration_seconds, caption, onNext
  - `<video controls preload="metadata">` nativo
  - Botón Continuar (habilita tras onEnded o 5 segundos reproducidos)

## 3. Integrar en ExercisePage
- [x] En `ExercisePage.tsx`: agregar casos `audio` y `video` en el switch de tipos
