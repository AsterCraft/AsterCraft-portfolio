# Agent Guidelines for web-agency-portfolio

## Commands (Frontend: /frontend)

- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Dev**: `npm run dev`
- **No test framework configured** - do not assume testing commands

## Code Style

- **TypeScript**: Strict mode enabled, uses React 19 + React Router v7
- **Formatting**: Prettier (2 spaces, semicolons, double quotes, trailing commas ES5)
- **Imports**: Use path aliases: `@shared`, `@widgets`, `@pages` (defined in tsconfig)
- **Architecture**: Transitioning to Feature-Sliced Design (entities/features/widgets/pages/shared)
- **Naming**: **Migrating from PascalCase to kebab-case** for files/directories; use kebab-case for new code
- **Components**: named exports; types defined inline or in separate files
- **State**: Zustand for global state (see `isContactFormModalOpen.ts` example)
- **Validation**: Zod schemas with i18n error messages
- **Styling**: **Migrating from Tailwind to .module.scss**; use SCSS modules for new components
- **i18n**: react-i18next with `useTranslation` hook

## Commit Convention

Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`

## Migration in Progress

- **Old conventions**: PascalCase file naming, inconsistent architecture, Tailwind CSS
- **New conventions**: kebab-case naming, strict FSD architecture, SCSS modules
- When adding new code, use kebab-case and follow FSD structure
- Use .module.scss for styling instead of Tailwind CSS
- Gradually refactor old code to match new conventions

## Important Notes

- Always run `npm run lint` after changes
- Component props use `type Props` pattern, not interfaces
