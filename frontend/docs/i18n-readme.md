# i18n Setup with SSR

This project uses **remix-i18next** for server-side rendering (SSR) with centralized translation registration. Each widget/feature/page owns its translations but registers them through a central configuration file.

## Architecture Overview

**Key features:**

- Centralized registration in `app/locales/index.ts`
- Multi-language support (en/uk) configured upfront
- SSR-ready with `remix-i18next/middleware`
- Type-safe with centralized TypeScript definitions
- URL-based locale detection (`/en/*`, `/uk/*`)
- Cookie-based locale persistence

## How It Works

1. **Translation content** lives in `config/translations/` (en.ts, uk.ts, index.ts)
2. **Export** translations from slice's `index.ts`
3. **Register** all translations in central `app/locales/index.ts`
4. **Type definitions** are auto-generated in `app/middleware/i18next.ts`
5. **Components** use `useTranslation("namespace")`

## File Structure

### Per-Slice Structure

```
widgets/your-slice/
├── config/
│   └── translations/
│       ├── en.ts          # English translations
│       ├── uk.ts          # Ukrainian translations
│       └── index.ts       # Export object with both locales
├── ui/
│   └── component.tsx      # Component using translations
└── index.ts               # Slice's public api - export with translations
```

### Central Configuration

```
app/
├── locales/
│   └── index.ts           # Central registration point
└── middleware/
    └── i18next.ts         # SSR middleware + TypeScript types
```

## Adding Translations to a Slice

### Step 1: Create English Translation (en.ts)

```typescript
import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  title: "Title",
  description: "Description",
  buttons: {
    submit: "Submit",
    cancel: "Cancel",
  },
} as const;

export type Translation = DeepString<typeof en>;

export default en;
```

**Important:**

- Always use `as const` for type inference
- Export `Translation` type for other locales
- Use `DeepString` utility for structural type safety

### Step 2: Create Ukrainian Translation (uk.ts)

```typescript
import type { Translation } from "./en";

const uk = {
  title: "Заголовок",
  description: "Опис",
  buttons: {
    submit: "Надіслати",
    cancel: "Скасувати",
  },
} as const satisfies Translation;

export default uk;
```

**Important:** Use `satisfies Translation` to ensure structure matches English.

### Step 3: Create Index File (translations/index.ts)

```typescript
import en from "./en";
import uk from "./uk";

const yourSliceTranslations = {
  en,
  uk,
} as const;

export default yourSliceTranslations;
```

### Step 4: Export from Slice (index.ts)

```typescript
export { YourComponent } from "./ui/your-component";

export { default as yourSliceTranslations } from "./config/translations";
```

**Important:** Use the name of the slice "yourSlice" + "Translations" suffix

### Step 5: Register in Central Configuration

Add to `app/locales/index.ts`:

```typescript
import type { Resource } from "i18next";

import { yourSliceTranslations } from "@widgets/your-slice";
import { headerTranslations } from "@widgets/header";
// ... other imports

export default {
  en: {
    yourSlice: yourSliceTranslations.en,
    header: headerTranslations.en,
    // ... other slices
    shared: {},
  },
  uk: {
    yourSlice: yourSliceTranslations.uk,
    header: headerTranslations.uk,
    // ... other slices
    shared: {},
  },
} as const satisfies Resource;
```

**Important:** The namespace key (e.g., `yourSlice`) must match what you pass to `useTranslation()`.

### Step 6: Use in Components

```typescript
import { useTranslation } from "react-i18next";

export const YourComponent = () => {
  const { t } = useTranslation("yourSlice");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <button>{t("buttons.submit")}</button>
    </div>
  );
};
```

TypeScript provides full autocomplete and type checking.

## Advanced Usage

### Working with Arrays

```typescript
// Translation file
const en = {
  heading: ["Leave us a request", "And we'll do the rest!"],
} as const;

// Component
const { t } = useTranslation("seoSection");
const headingLines = t("heading", { returnObjects: true });

return (
  <h2>
    {headingLines.map((line, i) => (
      <span key={i}>{line}</span>
    ))}
  </h2>
);
```

### Working with Objects

```typescript
// Translation file
const en = {
  countries: {
    tabs: [
      { id: "ukraine", name: "Ukraine" },
      { id: "poland", name: "Poland" },
    ],
  },
} as const;

// Component
const tabs = t("countries.tabs", { returnObjects: true });
```

### Dynamic Nested Keys

```typescript
const [selectedCountry, setSelectedCountry] = useState("ukraine");

// Dynamically access nested translations
const contacts = t(`countries.contacts.${selectedCountry}`, {
  returnObjects: true,
});
```

## Type Safety

The `DeepString<T>` utility enforces:

- Identical structure across all locales
- String values for all leaf nodes
- Exception: Keys named "id" preserve literal types (for consistency)

```typescript
// This ensures uk.ts has the exact same structure as en.ts
const uk = { ... } as const satisfies Translation;
```

## SSR Configuration

The i18n middleware handles:

- **Locale detection** from URL pathname (`/en/`, `/uk/`)
- **Cookie persistence** with `lng` cookie
- **Fallback language** to English
- **Server-side instance** creation per request

Configuration in `app/middleware/i18next.ts` uses `remix-i18next`
