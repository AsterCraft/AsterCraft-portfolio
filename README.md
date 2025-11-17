# Web Agency Portfolio

Modern web agency portfolio with guaranteed deadlines and prices.

## Tech Stack

**Frontend**

- React 19 + React Router v7
- TypeScript (strict mode)
- Material Design 3 (migrating from Tailwind)
- SCSS Modules
- Feature-Sliced Design architecture
- i18next for internationalization

**Backend**

- Go 1.24
- Domain-Driven Design architecture
- RESTful API

## Quick Start

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

**Backend**

```bash
cd backend
go run main.go
```

## Documentation

**Design System**: [SCSS Design Tokens](https://astercraft.github.io/AsterCraft-portfolio/)

Auto-generated documentation for Material Design 3 tokens including spacing, typography, colors, elevation, motion, and responsive utilities.

## Project Structure

```
├── frontend/          React application
│   ├── src/
│   │   ├── app/       App configuration & routing
│   │   ├── pages/     Page components
│   │   ├── widgets/   Complex UI blocks
│   │   ├── features/  Reusable features
│   │   └── shared/    Shared utilities & design tokens
│   └── docs/          Documentation
├── backend/           Go API server
│   ├── domain/        Business logic
│   ├── application/   Use cases
│   ├── presentation/  HTTP handlers
│   └── infrastructure/ External services
└── docs/              Project documentation
```

## Development

**Code Style**

- Frontend: Prettier (2 spaces, semicolons, double quotes)
- Files/dirs: kebab-case
- Commits: Conventional commits (`feat:`, `fix:`, `docs:`, etc.)

**Design System**

- SCSS modules (`.module.scss`)
- Material Design 3 tokens
- Fluid responsive scaling
- See [design tokens docs](https://astercraft.github.io/AsterCraft-portfolio/)

## Scripts

**Frontend**

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # ESLint
npm run docs:scss    # Generate design tokens docs
```

**Backend**

```bash
go run main.go                  # Run server
go build -o server main.go      # Build binary
```

## License

Private project
