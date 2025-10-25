# React Router Framework Mode

Migrated from traditional `react-router-dom` to framework mode. The main reason was wanting proper meta tag control per route for SEO, plus the type-safe routing is nice to have.

## What Framework Mode Actually Is

Traditional React Router is just a client-side routing library. Framework mode turns it into something closer to Next.js or Remix - it handles the entire app lifecycle, manages your HTML shell, and gives you SSR if you want it.

The key difference: instead of writing an `index.html` file, you write a `root.tsx` component that generates the HTML. Routes become file-based modules that can export data loaders, meta tags, and other server-side concerns.

## Core Files

### `react-router.config.ts`

Main config file. Two important settings:

```typescript
export default {
  appDirectory: "src/app", // where your routes live
  ssr: true, // server-side rendering on/off
  presets: [vercelPreset()], // deployment platform preset
} satisfies Config;
```

**SSR modes:**

- `ssr: true` - Server renders HTML, sends to client, then hydrates. Better for SEO, slower dev server.
- `ssr: false` - Sends empty HTML shell, JavaScript does everything client-side. SPA mode.

We're using SSR because the site needs good search engine visibility.

### `src/app/root.tsx`

Replaces `index.html`. Two exports:

```typescript
// Wraps everything, generates the <html> document
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={i18n.language}>
      <head>
        <Meta />   // route meta tags go here
        <Links />  // CSS bundles
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />  // JS bundles
      </body>
    </html>
  );
}

// Your actual app layout (header, footer, etc)
export default function Root() {
  return (
    <>
      <Header />
      <Outlet />  // routes render here
      <Footer />
    </>
  );
}
```

### `src/app/routes.ts`

Declarative route config:

```typescript
export default [
  index("./routes/_index.tsx"), // "/"
  route("uk", "./routes/uk._index.tsx"), // "/uk/"
] satisfies RouteConfig;
```

### Route modules (`src/app/routes/*.tsx`)

Each route file can export:

```typescript
// SEO meta tags (runs on server if SSR enabled)
export const meta: MetaFunction = () => {
  return [
    { title: "Page Title" },
    { name: "description", content: "..." },
  ];
};

// Server-side redirect (SSR only)
export async function loader({ request }: Route.LoaderArgs) {
  return redirect("/somewhere/");
}

// The actual component
export default function MyRoute() {
  return <div>Content</div>;
}
```

**Type safety:** React Router generates types for each route at `.react-router/types/`. Import with `import type { Route } from "./+types/my-route"`.

## SSR Gotchas

When SSR is enabled, your code runs on the server first. Watch out for browser APIs:

```typescript
// BAD - crashes on server
const width = window.innerWidth;

// GOOD - check environment first
const width = typeof window === "undefined" ? 0 : window.innerWidth;
```

Common culprits: `window`, `document`, `localStorage`, `navigator`.

Use `useEffect` for browser-only code - it only runs client-side:

```typescript
useEffect(() => {
  // safe to use window here
  window.addEventListener("resize", handler);
}, []);
```

## TypeScript Config

Framework mode needs special TypeScript setup to find generated types:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "rootDirs": ["./src", "./.react-router/types/src"],
    "types": ["node", "vite/client"]
  },
  "include": ["src", ".react-router/types/**/*"]
}
```

The `rootDirs` trick makes TypeScript treat both directories as one, so relative imports like `"./+types/route"` work.

## Vite Config

Minimal setup with framework mode:

```typescript
export default defineConfig({
  plugins: [
    reactRouter(), // handles React Router compilation
    tsconfigPaths(), // respects tsconfig path aliases
  ],
});
```

Don't add `@vitejs/plugin-react` - React Router plugin handles React compilation internally.

## Development

**Start dev server:**

```bash
npm run dev
```

**Generate types manually:**

```bash
npx react-router typegen
```

Types regenerate automatically during dev, but sometimes the language server needs a restart to pick them up.

## Deployment (Vercel)

The `vercelPreset()` in config handles everything. Vercel detects React Router automatically and deploys as Node.js serverless functions when SSR is enabled.

Build output goes to `build/` directory (add to `.gitignore`).

## Common Issues

**"Cannot find module './+types/route'"**  
Types haven't generated yet. Run `npx react-router typegen` or restart dev server.

**"window is not defined" error on page load**  
You're accessing browser APIs during SSR. Add `typeof window === "undefined"` checks.

**Redirect warning in console about `<Navigate>` in StaticRouter**  
Use loader redirects instead of `<Navigate>` component for initial page loads:

```typescript
export async function loader() {
  return redirect("/somewhere/");
}
```

## References

- [React Router Framework Docs](https://reactrouter.com/start/framework/installation)
- [Vercel Deployment Template](https://vercel.com/templates/react-router/react-router-boilerplate)
