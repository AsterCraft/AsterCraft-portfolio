# i18n Setup

This project uses per-slice translation namespaces. Each widget or feature owns its translations and registers them independently.

## How It Works

Every slice that needs translations follows this pattern:

1. Translation content lives in `config/translation/uk.ts`
2. Registration happens in `model/i18n.ts`
3. Side-effect import in `index.ts` triggers auto-registration
4. Export translation type from slice's `index.ts`
5. Import and register in central `app/types/i18next.d.ts`
6. Components use `useTranslation("namespace")` to access translations

TypeScript provides autocomplete and type checking for all translation keys.

## Adding Translations to a Slice

### File Structure

```
widgets/your-slice/
├── config/
│   └── translation/
│       └── uk.ts          # Translation content
├── model/
│   └── i18n.ts            # Registration + TypeScript types
├── ui/
│   └── component.tsx      # Usage
└── index.ts               # Barrel export with side-effect
```

### Step 1: Create Translation File

Create `config/translation/uk.ts`:

```typescript
export const yourSliceTranslationUk = {
  title: "Заголовок",
  description: "Опис",
  buttons: {
    submit: "Надіслати",
    cancel: "Скасувати",
  },
} as const;
```

**Important:** Always use `as const` to enable TypeScript inference.

### Step 2: Create Registration File

Create `model/i18n.ts`:

```typescript
import i18n from "@shared/i18n";
import { yourSliceTranslationUk } from "../config/translation/uk";

i18n.addResourceBundle(
  "uk",
  "yourSlice", // namespace name
  yourSliceTranslationUk
);
```

This registers translations at runtime with `addResourceBundle`.

### Step 3: Export Translation and Import Side-Effect

Update `index.ts`:

```typescript
export { YourComponent } from "./ui/your-component";

export { yourSliceTranslationUk } from "./config/translation/uk";

import "./model/i18n"; // Side-effect triggers registration
```

The side-effect import runs when your slice is first used. The export allows the central type file to import the translation type.

### Step 4: Register in Central Type File

Add to `app/types/i18next.d.ts`:

```typescript
import "i18next";

import { yourSliceTranslationUk } from "@widgets/your-slice";
import { headerTranslationUk } from "@widgets/header";
// ... other imports

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      yourSlice: typeof yourSliceTranslationUk;
      header: typeof headerTranslationUk;
      // ... other slices
    };
  }
}
```

This central file aggregates all translation types for TypeScript autocomplete.

### Step 5: Use in Components

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

TypeScript will autocomplete keys and catch typos.

## Interpolation (not yet sure it works)

For dynamic values in translations:

```typescript
// In translation file
export const translationsUk = {
  greeting: "Привіт, {{name}}!",
  itemCount: "У вас {{count}} товарів",
} as const;

// In component
const { t } = useTranslation("yourSlice");
t("greeting", { name: "Антон" }); // "Привіт, Антон!"
t("itemCount", { count: 5 }); // "У вас 5 товарів"
```

TypeScript will infer required interpolation variables from the translation string.
