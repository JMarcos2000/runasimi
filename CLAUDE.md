# Instrucciones para Claude Code

## Al inicio de cada conversación

Siempre revisar Linear con `mcp__claude_ai_Linear__list_issues` y mostrar un resumen de los issues abiertos (excluir Done y Cancelled) antes de responder al usuario.

## Flujo de desarrollo y deploy

**Todo desarrollo ocurre en ramas**, nunca directamente en `main`:
- Cada feature o fix → rama propia (`feature/nombre`, `fix/nombre`)
- Commits y pushes en la rama libremente, sin confirmación

**Merge a `main` requiere confirmación explícita del usuario**, porque dispara el deploy automático a Vercel.

Preguntar: "¿Confirmás el merge a main y el deploy a Vercel?" y esperar respuesta antes de proceder.

**Nunca usar `npx vercel --prod` ni el CLI de Vercel directamente**, salvo que el usuario lo solicite explícitamente como caso de emergencia.
