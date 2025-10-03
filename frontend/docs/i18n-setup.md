# Internationalization (i18n) Setup

## Overview

This document describes the internationalization implementation using `react-i18next` with custom path-based language detection, designed to work with React Router Framework Mode.

## Architecture

### Language URL Structure

```
/ → redirects to /uk/ (default language)
/uk/ → Ukrainian content
/en/ → English content (planned)
```

### Translation File Organization

```
src/shared/lib/i18n/
├── index.ts                    # Main i18n configuration
└── locales/
    ├── uk/                     # Ukrainian translations
    │   ├── shared.json         # Common UI elements
    │   ├── widgets.json        # Layout components
    │   └── features.json       # Interactive features
    └── en/                     # English translations (future)
        ├── shared.json
        ├── widgets.json
        └── features.json
```

## Configuration

### Core Setup (`src/shared/lib/i18n/index.ts`)

```typescript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Custom path-based language detector
const customPathDetector = {
  name: "customPath",
  lookup() {
    const path = window.location.pathname;
    if (path.startsWith("/uk/")) return "uk";
    return "uk"; // Default fallback
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uk: {
        shared: ukShared,
        widgets: ukWidgets,
        features: ukFeatures,
      },
    },
    fallbackLng: "uk",
    defaultNS: "shared",

    detection: {
      order: ["customPath", "localStorage", "navigator"],
      caches: ["localStorage"],
    },

    react: {
      useSuspense: false, // Required for Framework Mode
    },

    interpolation: {
      escapeValue: false, // React handles XSS protection
    },
  });

// Register custom detector after initialization
i18n.services.languageDetector.addDetector(customPathDetector);
```

### Integration with Framework Mode

#### Root Layout Language Attribute

```typescript
// src/root.tsx
export function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language}> {/* Dynamic language attribute */}
      {/* ... */}
    </html>
  );
}
```

#### Route-Level Language Setting

```typescript
// src/routes/uk._index.tsx
export default function UkIndex() {
  const { i18n } = useTranslation();

  // Ensure Ukrainian language is active
  if (i18n.language !== 'uk') {
    i18n.changeLanguage('uk');
  }

  return <PageHome />;
}
```

## Translation File Structure

### Namespace Organization

#### `shared.json` - Common UI Elements

```json
{
  "buttons": {
    "startProject": "Почати проект",
    "close": "Закрити",
    "submit": "Відправити"
  },
  "navigation": {
    "home": "Головна",
    "about": "Про нас",
    "services": "Послуги",
    "portfolio": "Портфоліо",
    "contact": "Контакти"
  }
}
```

#### `widgets.json` - Layout Components

```json
{
  "hero": {
    "title": "Отримайте більше клієнтів з сайтом, який продає 24/7",
    "subtitle": "Розробляємо сайти на чистому коді без конструкторів",
    "cta": "Обговорити проект"
  },
  "footer": {
    "copyright": "© 2024 Aster Craft. Всі права захищені."
  }
}
```

#### `features.json` - Interactive Features

```json
{
  "contactForm": {
    "title": "Почати проект",
    "fields": {
      "firstName": "Ім'я",
      "lastName": "Прізвище",
      "email": "Електронна пошта",
      "phone": "Телефон",
      "message": "Повідомлення"
    }
  }
}
```

## Usage Patterns

### Basic Translation Hook

```typescript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation('widgets'); // Specify namespace

  return (
    <h1>{t('hero.title')}</h1>
  );
}
```

### Cross-Namespace Translation

```typescript
function MyComponent() {
  const { t } = useTranslation(['shared', 'widgets']);

  return (
    <div>
      <h1>{t('widgets:hero.title')}</h1>
      <button>{t('shared:buttons.submit')}</button>
    </div>
  );
}
```

## Language Detection Flow

### 1. Path-Based Detection

- User visits `/uk/about` → Language detected as `uk`
- User visits `/en/about` → Language detected as `en`
- User visits `/` → Redirected to `/uk/` → Language detected as `uk`

### 2. Fallback Chain

1. **Custom Path Detector** - Extract from URL path
2. **LocalStorage** - Previously saved language preference
3. **Browser Navigator** - Browser's preferred language
4. **Fallback Language** - Ukrainian (`uk`)

### 3. Persistence

- Selected language saved to localStorage
- Survives browser refresh and revisits
- Used as fallback for future visits

## Framework Mode Integration

### SPA Mode Compatibility

The i18n setup is designed for SPA mode:

- **Client-side only** - No server-side rendering concerns
- **Dynamic language switching** - Works with client-side navigation
- **Route-based detection** - Integrates with Framework Mode routing

### Route Module Meta Tags

```typescript
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  // Note: Meta functions are static, can't use hooks
  // Language-specific meta tags should be set per route file
  return [
    { title: "Aster Craft - Розробка сайтів в Україні" },
    { name: "description", content: "Створюємо сайти..." },
  ];
};
```

## Adding New Languages

### 1. Create Translation Files

```bash
mkdir -p src/shared/lib/i18n/locales/en
touch src/shared/lib/i18n/locales/en/shared.json
touch src/shared/lib/i18n/locales/en/widgets.json
touch src/shared/lib/i18n/locales/en/features.json
```

### 2. Update i18n Configuration

```typescript
// Add English resources
const resources = {
  uk: {
    /* Ukrainian translations */
  },
  en: {
    /* English translations */
  },
};

// Update path detector
const customPathDetector = {
  name: "customPath",
  lookup() {
    const path = window.location.pathname;
    if (path.startsWith("/uk/")) return "uk";
    if (path.startsWith("/en/")) return "en";
    return "uk";
  },
};
```

### 3. Create English Routes

```typescript
// src/routes.ts
export default [
  index("./routes/_index.tsx"),
  route("uk", "./routes/uk._index.tsx"),
  route("en", "./routes/en._index.tsx"), // New English route
] satisfies RouteConfig;
```

### 4. Create English Route Module

```typescript
// src/routes/en._index.tsx
export const meta: MetaFunction = () => {
  return [
    { title: "Aster Craft - Website Development in Ukraine" },
    { name: "description", content: "We create websites..." },
  ];
};

export default function EnIndex() {
  const { i18n } = useTranslation();

  if (i18n.language !== 'en') {
    i18n.changeLanguage('en');
  }

  return <PageHome />;
}
```

### Development Tips - (might work?)

1. **Browser DevTools**: Use React Developer Tools i18n extension
2. **Console Logging**: Add `debug: true` to i18n config for detailed logs
3. **Fallback Keys**: Always provide fallback text for missing translations

