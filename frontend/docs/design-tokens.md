# Design Tokens

Material Design 3 token implementation. All tokens in `shared/styles/tokens/`.

```
shared/styles/tokens/
├── colors/       - CSS custom properties (runtime themes)
├── typography/   - SCSS mixins (type scales)
├── spacing/      - SCSS variables (layout spacing)
├── shape/        - SCSS variables (border radius)
├── elevation/    - SCSS mixin (box shadows)
├── motion/       - SCSS mixins (animation timing)
├── state-layer/  - SCSS variables (interaction states)
└── breakpoints/  - SCSS variables (responsive layout)
```

---

## Importing

To import all tokens at once:

```scss
@use "../../../styles/tokens/" as t;

.startProjectBtn {
  @include t.typescale("title-medium");
  font-weight: 500;

  padding-inline: t.$md-sys-spacing-4;
```

You can also import only specific tokens as described bellow. But importing all tokens will be a better solution in most cases.

## Colors

CSS custom properties. Use directly.

```scss
.card {
  background: var(--md-sys-color-surface-container);
  color: var(--md-sys-color-on-surface);
}
```

**Surface colors** (backgrounds):

- `--md-sys-color-surface`
- `--md-sys-color-surface-container-lowest/low/normal/high/highest`
- `--md-sys-color-on-surface` (text)
- `--md-sys-color-on-surface-variant` (secondary text)

**Accent colors** (actions):

- `--md-sys-color-primary` / `--md-sys-color-on-primary`
- `--md-sys-color-secondary` / `--md-sys-color-on-secondary`
- `--md-sys-color-tertiary` / `--md-sys-color-on-tertiary`

**States**:

- `--md-sys-color-error` / `--md-sys-color-on-error`
- `--md-sys-color-outline` (borders)
- `--md-sys-color-outline-variant` (subtle borders)

**Theme switching**: Set `data-theme="light"` or `data-theme="dark"` on `<html>`.

---

## Typography

Import: `@use '@shared/styles/tokens/typography' as typo;`

Two mixins available:

```scss
.title {
  @include typo.typescale("display-large");
}

.active-item {
  @include typo.typescale-emphasized("label-large");
}
```

**Scales**: `display-large/medium/small`, `headline-large/medium/small`, `title-large/medium/small`, `body-large/medium/small`, `label-large/medium/small`

Use emphasized for active states or extra emphasis.

---

## Spacing

Import: `@use '@shared/styles/tokens/spacing' as spacing;`

SCSS variables, 4px base unit:

```scss
.card {
  padding: spacing.$md-sys-spacing-4; // 16px
  margin-bottom: spacing.$md-sys-spacing-6; // 24px
}
```

**Available**: `$md-sys-spacing-1/2/3/4/5/6/8/10/12/16/20/24/32/40`

---

## Shape

Import: `@use '@shared/styles/tokens/shape' as shape;`

SCSS variables for corner radius:

```scss
.card {
  border-radius: shape.$md-sys-shape-corner-value-medium; // 12px
}
```

**Available**: `$md-sys-shape-corner-value-none/extra-small/small/medium/large/large-increased/extra-large/extra-large-increased/extra-extra-large`

---

## Elevation

Import: `@use '@shared/styles/tokens/elevation' as elev;`

Mixin for box shadows:

```scss
.card {
  @include elev.elevation(1);

  &:hover {
    @include elev.elevation(2);
  }
}
```

**Levels**: `0-5` (0 = no shadow, 5 = highest)

---

## Motion

Import: `@use '@shared/styles/tokens/motion' as motion;`

Two mixins: `spatial()` for movement (has bounce), `effects()` for properties (no bounce).

```scss
.button {
  transition-property: transform;
  @include motion.spatial("fast");
}

.menu {
  transition-property: opacity;
  @include motion.effects("default");
}
```

**Speeds**: `'fast'`, `'default'`, `'slow'`

Use spatial for transform/position/size. Use effects for color/opacity.

---

## State Layer

Import: `@use '@shared/styles/tokens/state-layer' as sl;`

SCSS variables for state layer:

```scss
@use "../../../styles/tokens/" as t;

.startProjectBtn {
  position: relative;

  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    opacity: 0;
    background: var(--md-sys-color-on-primary);

    @include t.effects("fast");
    transition-property: opacity;
  }

  &:hover {
    &::before {
      opacity: t.$md-sys-state-hover-state-layer-opacity;
    }
  }
}
```

Read more about [state layers](https://m3.material.io/foundations/interaction/states/applying-states).

---

## Breakpoints

Import: `@use '@shared/styles/tokens/breakpoints' as brp;`

MD3 window size classes. Use these for media queries:

```scss
.hero {
  font-size: 36px;
  
  @media (min-width: brp.$md-ref-breakpoint-medium-min) {
    font-size: 48px;
  }
  
  @media (min-width: brp.$md-ref-breakpoint-large-min) {
    font-size: 64px;
  }
}
```

**Breakpoint ranges** (for media queries):
- `$md-ref-breakpoint-compact-max`: `599px` (phones)
- `$md-ref-breakpoint-medium-min/max`: `600px - 839px` (tablets portrait)
- `$md-ref-breakpoint-expanded-min/max`: `840px - 1199px` (tablets landscape)
- `$md-ref-breakpoint-large-min/max`: `1200px - 1599px` (desktop)
- `$md-ref-breakpoint-extra-large-min`: `1600px+` (wide screens)

**Viewport widths** (for fluid scaling):
- `$md-sys-viewport-compact`: `280px`
- `$md-sys-viewport-medium`: `720px`
- `$md-sys-viewport-expanded`: `1024px`
- `$md-sys-viewport-large`: `1440px`
- `$md-sys-viewport-extra-large`: `1920px`

Use viewport tokens with `fluid-scale()` function. See [fluid-scale.md](./fluid-scale.md) for details.
