## Context

Stack: React + Vite + TypeScript + Tailwind CSS. Tokens: `quechua-primary`, `quechua-background`, `quechua-surface`. `ExercisePage` ya maneja `choice` y `text_input`. Los tipos `AudioContent` y `VideoContent` ya están definidos en `src/types/index.ts`. Los assets de audio estarán en URLs públicas de Supabase Storage.

## Goals / Non-Goals

**Goals:**
- `AudioPlayer`: reproduce audio desde `audio_url`, botón de play/stop y repetir, muestra la palabra/frase quechua y la pregunta contextual
- `VideoPlayer`: reproduce video desde `video_url` usando `<video>` nativo con `preload="metadata"`, muestra el caption
- Integración en `ExercisePage`: casos `audio` y `video` llaman a `handleNext(true)` (ejercicios multimedia se consideran correctos al completarse)

**Non-Goals:**
- Streaming adaptativo (HLS)
- Subtítulos o transcripciones automáticas
- Subida de assets (eso es operación manual en Supabase Storage)

## Decisions

### 1. AudioPlayer usa Web Audio API via HTMLAudioElement
`new Audio(url)` es suficiente. No se necesita librería externa. Estado: `playing: boolean`.

### 2. VideoPlayer usa `<video>` nativo
`controls` nativo del browser. `preload="metadata"` para no bloquear el hilo. `onEnded` → habilita el botón "Continuar".

### 3. Multimedia se marca como correcto automáticamente
No tiene sentido "fallar" un ejercicio de audio/video. `handleNext(true)` al presionar "Continuar".

## Component: AudioPlayer

Props: `{ word: string, audio_url: string, question: string, onNext: (correct: boolean) => void }`

Layout (flex col, items-center, gap-6, pt-8):
1. **Texto de la palabra**: `text-3xl font-bold text-quechua-text-primary text-center`
2. **Botón de reproducción**: círculo grande naranja, ícono play/pause SVG blanco
3. **Texto de pregunta**: `text-quechua-text-secondary text-center`
4. **Botón "Repetir"**: outline pequeño, aparece después de reproducir por primera vez
5. **Botón "Continuar"**: primario naranja, habilitado después de reproducir al menos una vez

## Component: VideoPlayer

Props: `{ video_url: string, duration_seconds: number, caption: string, onNext: (correct: boolean) => void }`

Layout (flex col, gap-4):
1. **Video**: `<video controls preload="metadata" className="w-full rounded-2xl">`
2. **Caption**: `text-quechua-text-secondary text-sm text-center`
3. **Botón "Continuar"**: habilitado después de `onEnded` o si el video ya fue reproducido parcialmente (5 segundos)
