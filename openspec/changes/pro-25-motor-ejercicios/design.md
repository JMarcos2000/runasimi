## Approach

`ExercisePage` carga los ejercicios de la lección y los presenta uno a uno. Cada tipo de ejercicio tiene su propio componente con feedback visual. Al terminar calcula el score y llama `completeLesson`.

## Components

### `MultipleChoice`
Props: `question: string`, `options: string[]`, `correctIndex: number`, `onNext: (correct: boolean) => void`

Estados:
- `idle`: muestra pregunta y opciones neutras
- `answered`: opción elegida en verde (correcta) o rojo (incorrecta), resto en gris, botón "Siguiente"

### `TextInputExercise`
Props: `prompt: string`, `answer: string`, `hint?: string`, `onNext: (correct: boolean) => void`

Validación: normalizar ambos strings (toLowerCase, sin tildes via `.normalize('NFD').replace(/[\u0300-\u036f]/g, '')`, trim)

Estados:
- `idle`: prompt + input + botón "Verificar"
- `answered`: feedback correcto/incorrecto + botón "Siguiente"

## ExercisePage

Ruta: `/lesson/:id/ejercicios`

1. Fetch `exercises` WHERE `lesson_id = :id` ORDER BY `order`
2. Si no hay ejercicios → completar directo y redirigir
3. Mostrar ejercicio actual según índice
4. Acumular `correctCount`
5. Al terminar todos:
   - `score = Math.round((correctCount / total) * 100)`
   - Llamar `completeLesson(lessonId, userId, score)`
   - Navegar a `/inicio`

### Progress bar
Barra superior: `currentIndex / total`

### Actualización a `useLessonComplete`
Aceptar `score` como parámetro opcional (default 100). Pasar al upsert de `user_progress`.

## LessonPage — cambio
El botón "Completar lección" navega a `/lesson/:id/ejercicios` en vez de llamar `completeLesson` directamente.
