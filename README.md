# Aster Craft Portfolio

> A bilingual, SEO-focused portfolio site for Aster Craft that turns web-development enquiries into qualified project leads.

The site serves businesses in Ukraine and abroad looking for landing pages, corporate sites, and e-commerce work. It is built around fast server-rendered pages, responsive custom design, localized content, and a small API that delivers contact-form submissions.

## Quick Start

```bash
git clone https://github.com/AsterCraft/AsterCraft-portfolio.git
cd AsterCraft-portfolio
nix develop .#frontend
cd frontend && npm ci && npm run dev
```

This starts the frontend development server, normally at `http://localhost:5173`.

## What It Does

The frontend presents Aster Craft's services, process, portfolio, and conversion-focused calls to action in English and Ukrainian. A separate Express API validates, rate-limits, and forwards contact requests by email.

- **Localized routes** - English and Ukrainian pages use URL-based locale detection and SSR-ready translations.
- **Conversion flow** - Project-start forms collect lead details and submit them through the contact API.
- **Search visibility** - Server rendering, route metadata, canonical URLs, and structured data support discoverability.

See [`website content`](docs/website-content.md) for the site's service, audience, and messaging vocabulary.

## Status

The project is an active agency website and internal development codebase. It is ready for local frontend work and deployed backend operation; product content and visual development continue to evolve.

Current state:

- Localized React Router frontend with SSR, responsive sections, and contact-form UI is implemented.
- Bun/Express API exposes health, OpenAPI, and email-submission endpoints.
- Automated tests are not configured.
- Frontend API types are generated from the deployed development API, so API contract changes can affect local development and builds.

## Features

- **English and Ukrainian experiences** - Visitors receive localized routes and persistent language selection.
- **Project enquiry form** - Prospects can send project details through a validated, rate-limited contact flow.
- **SEO-ready rendering** - SSR route metadata and structured data give public pages a solid search-engine baseline.
- **Design-token system** - Material Design 3 tokens and SCSS modules keep visual work consistent and responsive.
- **API documentation** - Swagger UI describes the backend endpoints at `/api-docs`.

## Requirements

Recommended:

- [Nix](https://nixos.org/download/) with flakes enabled
- Git

Provided by `nix develop`:

- Node.js in the `frontend` shell
- Bun in the `backend` shell
- Google Cloud SDK in the `devops` shell

The Nix shells avoid manually matching runtime versions. Without them, install a current Node.js release with npm for the frontend and Bun for the backend.

## Development

Enter the frontend development environment:

```bash
nix develop .#frontend
```

Install frontend dependencies:

```bash
cd frontend
npm ci
```

Run the primary client:

```bash
npm run dev
```

Run the backend in a separate terminal:

```bash
nix develop .#backend
bun install
bun run dev
```

The backend shell opens in `backend/`; its API listens on `http://localhost:7979` by default. Browse `http://localhost:7979/api-docs` for Swagger UI.

Run frontend checks:

```bash
cd frontend
npm run lint
npm run typecheck
npm run build
```

`typecheck` fetches the deployed development OpenAPI schema. No automated test suite is configured.

## Secrets

The backend reads configuration from environment variables. Keep local values in `backend/.env`; it is ignored by Git. Deployment values are supplied as GitHub Actions secrets to Cloud Run.

Create `backend/.env` with the required values before starting the API:

```bash
touch backend/.env
```

Check the required keys:

```bash
grep -E '^(PORT|NODE_ENV|EMAIL_USER|EMAIL_PASS|UPSTASH_REDIS_REST_URL|UPSTASH_REDIS_REST_TOKEN)=' backend/.env
```

| Variable | Purpose | Development default |
| -------- | ------- | ------------------- |
| `PORT` | HTTP port for the API | `7979` |
| `NODE_ENV` | Runtime mode | `development` |
| `EMAIL_USER` | Gmail account used to send enquiries | None |
| `EMAIL_PASS` | Gmail app password | None |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis endpoint for rate limits | None |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token for rate limits | None |

## Manual Setup Notes

Use the Nix shells when possible. They are the supported local setup path.

Without Nix:

- Install Node.js and npm, then run `npm ci` from `frontend/`.
- Install Bun, then run `bun install` from `backend/`.
- Configure the backend variables listed above before running the contact API.

## Project Structure

```text
frontend/               React Router SSR client
frontend/src/app/       Routes, locale middleware, and application setup
frontend/src/widgets/   Composed site sections and forms
frontend/src/shared/    Design tokens, UI primitives, and shared utilities
backend/src/features/   Vertical API features, including email delivery
backend/src/lib/        API infrastructure, environment validation, and rate limits
backend/docs/           Backend deployment and architecture references
```

## Architecture

The frontend follows Feature-Sliced Design: application setup, pages, widgets, features, entities, and shared code have explicit dependency boundaries. React Router framework mode provides server-side rendering and route metadata, while per-slice translations are centrally registered for type-safe English and Ukrainian content.

The backend is a compact Express service organized around vertical features. It validates runtime configuration with Zod, applies shared CORS and rate-limit middleware, and exposes the contact flow through a documented HTTP API consumed by the frontend.

For details, read [`React Router framework mode`](frontend/docs/react-router-framework-mode.md).

## Documentation

- [`React Router framework mode`](frontend/docs/react-router-framework-mode.md) - SSR routing and metadata architecture.
- [`i18n setup`](frontend/docs/i18n-readme.md) - Translation ownership, registration, and locale handling.
- [`design tokens`](frontend/docs/design-tokens.md) - Material Design 3 token usage in SCSS.
- [`backend deployment`](backend/docs/github-actions-deployment.md) - Cloud Run deployment and required GitHub secrets.
- [`commit rules`](docs/commit-rules.md) - Conventional commit prefixes.

## Troubleshooting

### Frontend API schema generation fails

The frontend development and typecheck commands fetch the OpenAPI schema from the deployed development backend. Check your network connection and retry; use the API URL in `frontend/package.json` if the development service has moved.

```bash
cd frontend
npm run generate:api:dev
```

### Backend fails on startup with an environment validation error

Email and Upstash Redis configuration are required by the API. Add every required value to `backend/.env` and start it again.

```bash
nix develop .#backend
bun run dev
```

## Contributing

Use conventional commits and keep changes within the existing frontend slices or backend feature boundaries. Open an issue or discuss larger content, architecture, deployment, or public API changes before implementing them.

Before changing product content, frontend architecture, or translations, read:

- [`website content`](docs/website-content.md)
- [`React Router framework mode`](frontend/docs/react-router-framework-mode.md)
- [`i18n setup`](frontend/docs/i18n-readme.md)

Open a [GitHub issue](https://github.com/AsterCraft/AsterCraft-portfolio/issues) for bugs or proposed work.

## AI Policy

No repository-specific AI policy exists. AI tools may assist with code and documentation, but contributors remain responsible for validating changes, avoiding secrets in prompts or commits, and preserving the project's architecture and content standards.

## License

Aster Craft Portfolio is a private project. No open-source license is currently provided.
