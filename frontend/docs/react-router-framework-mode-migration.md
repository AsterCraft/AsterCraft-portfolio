# React Router Framework Mode Migration

## Overview

This document describes the migration from traditional React Router setup to React Router Framework Mode, implemented to modernize the frontend architecture and add comprehensive internationalization (i18n) support.

## Migration Summary

### Before: Traditional Setup

```
Vite + React + react-router-dom (Data Mode)
├── index.html (static HTML shell)
├── src/main.tsx (client entry)
├── src/App.tsx (application layout)
└── Manual route configuration
```

### After: Framework Mode

```
React Router Framework Mode + SPA configuration
├── react-router.config.ts (Framework Mode config)
├── src/root.tsx (dynamic HTML shell)
├── src/entry.client.tsx (client entry)
├── src/routes.ts (declarative route config)
└── src/routes/ (route modules)
```

## Key Benefits

### 1. SEO Improvements

- **Language-specific URLs**: `/uk/`, `/en/` for better search engine indexing
- **Meta tag management**: Dynamic `<title>` and `<meta>` tags per route
- **Hreflang support**: Ready for multilingual SEO implementation

### 2. Performance Enhancements

- **Automatic code splitting**: Each route becomes a separate bundle
- **Lazy loading**: Routes load only when needed
- **Better caching**: Framework Mode optimizes resource loading

### 3. Developer Experience

- **Type-safe routing**: Auto-generated TypeScript types for routes
- **Hot module replacement**: Faster development with route-level HMR
- **Declarative configuration**: Clear route structure in `routes.ts`

## File Structure Changes

### New Files Added

```
frontend/
├── react-router.config.ts          # Framework Mode configuration
├── src/
│   ├── root.tsx                    # HTML document shell
│   ├── entry.client.tsx            # Client application entry
│   ├── routes.ts                   # Route configuration
│   └── routes/
│       ├── _index.tsx              # Root route (redirects to /uk/)
│       └── uk._index.tsx           # Ukrainian homepage
```

### Files Removed

```
frontend/
├── index.html                      # → Replaced by src/root.tsx
├── src/
│   ├── main.tsx                    # → Replaced by src/entry.client.tsx
│   └── app/
│       └── App.tsx                 # → Logic moved to src/root.tsx
```

## Architecture Components

### 1. `react-router.config.ts`

Framework Mode configuration file:

```typescript
import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false, // SPA mode for client-side rendering
} satisfies Config;
```

### 2. `src/root.tsx`

Replaces `index.html` with dynamic HTML document:

```typescript
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <Meta />    {/* Dynamic meta tags */}
        <Links />   {/* CSS and preload links */}
      </head>
      <body>
        {children}
        <Scripts />            {/* JavaScript bundles */}
        <ScrollRestoration /> {/* Scroll position memory */}
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />  {/* Route components render here */}
      <Footer />
      {/* Global modals */}
    </>
  );
}
```

### 3. `src/routes.ts`

Declarative route configuration:

```typescript
export default [
  index("./routes/_index.tsx"), // "/" → redirects to "/uk/"
  route("uk", "./routes/uk._index.tsx"), // "/uk/" → Ukrainian homepage
] satisfies RouteConfig;
```

### 4. Route Modules

Each route file can export:

- `default` - React component to render
- `meta` - Dynamic meta tags for SEO
- `loader` - Data loading (SSR mode only)
- `action` - Form handling (SSR mode only)

Example route module:

```typescript
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Aster Craft - Розробка сайтів в Україні" },
    { name: "description", content: "..." },
  ];
};

export default function UkIndex() {
  return <PageHome />;
}
```

## Troubleshooting

### Common Issues

**Issue**: `Cannot find module 'virtual:react-router/routes'`
**Solution**: Ensure `@react-router/dev` is installed and Vite config uses `reactRouter()` plugin

**Issue**: Routes not found
**Solution**: Check `routes.ts` configuration and ensure route files exist in correct paths

### Development Tips

1. **Route Generation**: Framework Mode auto-generates TypeScript types in `.react-router/` directory
2. **Nested Routes**: Use route arrays in `routes.ts` for hierarchical structure

## Performance Considerations

### Bundle Splitting

Framework Mode automatically creates separate bundles for:

- Root layout (`root.tsx`)
- Each route module
- Shared dependencies

### Loading Optimization

- Routes load lazily when accessed
- Critical CSS inlined automatically
- JavaScript bundles preloaded for better UX

### SEO Benefits

- Meta tags generated per route
- Language-specific URLs for search engines
- Clean HTML structure for crawlers

## Resources

- [Route Module API](https://reactrouter.com/start/framework/route-module)
- [SPA Mode Guide](https://reactrouter.com/how-to/spa)

