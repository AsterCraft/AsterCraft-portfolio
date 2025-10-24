# Agent Guidelines for web-agency-portfolio

## Commands

**Frontend** (`/frontend`): `npm run dev` | `npm run build` | `npm run lint` (run after changes)  
**Backend** (`/backend`): `go run main.go` | `go build -o server main.go`  
**No test framework** - do not assume testing commands

## Frontend Style (TypeScript/React)

- **Stack**: React 19, React Router v7, TypeScript strict mode, Prettier (2sp, semicolons, double quotes)
- **Imports**: Path aliases `@shared`, `@widgets`, `@pages` from `./src`
- **Architecture**: Feature-Sliced Design (entities/features/widgets/pages/shared)
- **Naming**: **kebab-case** for files/dirs (migrating from PascalCase)
- **Components**: Named exports, `type Props` (not interfaces)
- **State**: Zustand `create<Type>()` pattern
- **Validation**: Zod `.safeParse()` with i18n errors via `i18n.t(key, {ns})`
- **Styling**: **SCSS modules** (`.module.scss`, migrating from Tailwind)
- **i18n**: react-i18next `useTranslation` hook

## Backend Style (Go)

- **Architecture**: DDD layers (domain/application/presentation/infrastructure)
- **Error handling**: `if err != nil`, `log.Printf/Fatalf`
- **Imports**: Group stdlib, external, internal packages

## Commits

Conventional: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
