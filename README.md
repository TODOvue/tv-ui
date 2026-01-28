<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue UI (TvUi)
An **umbrella** package for Vue 3 that installs and re-exports the official `@todovue/*` components.

> Important: **this is NOT a monorepo**. `@todovue/tv-ui` is a library that declares dependencies on each `@todovue/tv-*` component (by the version published on npm), and re-exports them for unified consumption.

[![npm](https://img.shields.io/npm/v/@todovue/tv-ui.svg)](https://www.npmjs.com/package/@todovue/tv-ui)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-ui.svg)](https://www.npmjs.com/package/@todovue/tv-ui)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-ui.svg)](https://www.npmjs.com/package/@todovue/tv-ui)
![License](https://img.shields.io/github/license/TODOvue/tv-ui)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-ui)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-ui)
![Node Version](https://img.shields.io/node/v/@todovue/tv-ui)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-ui)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-ui?style=social)

> Demo / docs: https://ui.todovue.blog

## Table of contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Using styles](#using-styles)
- [Nuxt (SSR) / Nuxt Module](#nuxt-ssr--nuxt-module)
- [Exported components](#exported-components)
- [Registration options](#registration-options)
- [SSR notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- **One-time install** to get TODOvue components available.
- **Vue plugin**: `app.use(TvUi)` registers components globally.
- **Re-exports**: you can import specific components from `@todovue/tv-ui`.
- Compatible with **SPA** (Vite/Vue CLI) and **SSR** (Nuxt) as long as your app imports the styles.
- **Does not bundle Vue nor the `@todovue/*` packages** into the build: they remain external dependencies (great for ecosystems and tree-shaking).

## Installation
With npm:
```bash
npm install @todovue/tv-ui
```
With yarn:
```bash
yarn add @todovue/tv-ui
```
With pnpm:
```bash
pnpm add @todovue/tv-ui
```

> Node requirement for this repo: `>= 20.19.0`.

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'

// Styles (see “Using styles” section)
import '@todovue/tv-ui/style.css'

import TvUi from '@todovue/tv-ui'

createApp(App)
  .use(TvUi) // enables <TvButton />, <TvCard />, etc. globally
  .mount('#app')
```

Usage in a component:
```vue
<template>
  <TvButton variant="success" icon="check">Save</TvButton>
</template>
```

Local import (named export) if you prefer granular control:
```vue
<script setup>
import '@todovue/tv-ui/style.css'
import { TvButton, TvCard } from '@todovue/tv-ui'
</script>

<template>
  <TvCard>
    <TvButton>Action</TvButton>
  </TvCard>
</template>
```

## Using styles
`@todovue/tv-ui` exposes a styles entry:

- Recommended import:
```js
import '@todovue/tv-ui/style.css'
```

This points to `./dist/tv-ui.css` (via `exports["./style.css"]`).

### What about per-component styles?
You can also import styles from each package:
```js
import '@todovue/tv-button/style.css'
import '@todovue/tv-card/style.css'
```

This is useful if you:
- only use 1–2 components,
- want to control exactly what CSS gets into your bundle,
- or are migrating gradually.

## Nuxt (SSR) / Nuxt Module
This package publishes a Nuxt module at `@todovue/tv-ui/nuxt` that **injects the CSS** of `@todovue/*` packages into `nuxt.options.css`.

### Setup
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-ui/nuxt'
  ]
})
```

### Plugin registration (optional)
You can register all components globally:
```ts
// plugins/tv-ui.ts
import { defineNuxtPlugin } from '#app'
import TvUi from '@todovue/tv-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TvUi)
})
```

Or import them locally:
```vue
<script setup>
import { TvButton } from '@todovue/tv-ui'
</script>

<template>
  <TvButton>Hello</TvButton>
</template>
```

## Exported components
Currently `@todovue/tv-ui` re-exports:

- `TvAlert` - [GitHub](https://github.com/TODOvue/tv-alert) | [Demo](https://ui.todovue.blog/alert)
- `TvArticle` - [GitHub](https://github.com/TODOvue/tv-article) | [Demo](https://ui.todovue.blog/article)
- `TvBreadcrumbs` - [GitHub](https://github.com/TODOvue/tv-breadcrumbs) | [Demo](https://ui.todovue.blog/breadcrumbs)
- `TvButton` - [GitHub](https://github.com/TODOvue/tv-button) | [Demo](https://ui.todovue.blog/button)
- `TvCard` - [GitHub](https://github.com/TODOvue/tv-card) | [Demo](https://ui.todovue.blog/card)
- `TvDemo` - [GitHub](https://github.com/TODOvue/tv-demo) | [Demo](https://ui.todovue.blog/demo)
- `TvFooter` - [GitHub](https://github.com/TODOvue/tv-footer) | [Demo](https://ui.todovue.blog/footer)
- `TvHero` - [GitHub](https://github.com/TODOvue/tv-hero) | [Demo](https://ui.todovue.blog/hero)
- `TvLabel` - [GitHub](https://github.com/TODOvue/tv-label) | [Demo](https://ui.todovue.blog/label)
- `TvMenu` - [GitHub](https://github.com/TODOvue/tv-menu) | [Demo](https://ui.todovue.blog/menu)
- `TvModal` - [GitHub](https://github.com/TODOvue/tv-modal) | [Demo](https://ui.todovue.blog/modal)
- `TvPagination` - [GitHub](https://github.com/TODOvue/tv-pagination) | [Demo](https://ui.todovue.blog/pagination)
- `TvProgressBar` - [GitHub](https://github.com/TODOvue/tv-progress-bar) | [Demo](https://ui.todovue.blog/progressbar)
- `TvRelativeTime` - [GitHub](https://github.com/TODOvue/tv-relative-time) | [Demo](https://ui.todovue.blog/relativetime)
- `TvScrollTop` - [GitHub](https://github.com/TODOvue/tv-scroll-top) | [Demo](https://ui.todovue.blog/scrolltop)
- `TvSearch` - [GitHub](https://github.com/TODOvue/tv-search) | [Demo](https://ui.todovue.blog/search)
- `TvSettings` - [GitHub](https://github.com/TODOvue/tv-settings) | [Demo](https://ui.todovue.blog/settings)
- `TvSidebar` - [GitHub](https://github.com/TODOvue/tv-sidebar) | [Demo](https://ui.todovue.blog/sidebar)
- `TvThemeButton` - [GitHub](https://github.com/TODOvue/tv-theme-button) | [Demo](https://ui.todovue.blog/themebutton)
- `TvToc` - [GitHub](https://github.com/TODOvue/tv-toc) | [Demo](https://ui.todovue.blog/toc)

## Registration options
| Approach            | Example                                     | When to use                                          |
|---------------------|---------------------------------------------|------------------------------------------------------|
| Global via plugin   | `app.use(TvUi)`                             | You use many components across the whole app         |
| Local import        | `import { TvButton } from '@todovue/tv-ui'` | Isolated views, code-splitting, fine-grained control |
| Individual packages | `import TvButton from '@todovue/tv-button'` | If you want to install/update components separately  |

## SSR notes
- This package does not assume a DOM during plugin installation.
- Still, SSR compatibility depends on each `@todovue/*` component not accessing `window/document` at render time.
- In Nuxt, the `@todovue/tv-ui/nuxt` module takes care of registering global CSS for you.

## Development
Available scripts:
- `dev`: copies `README.md`/`CHANGELOG.md` from `node_modules/@todovue/*` into `public/demos/*` and starts Vite.
- `build`: library build (ESM + CJS) + types.
- `build:demo`: builds the demo (target `demo`) and copies `README.md`/`CHANGELOG.md` to `public/`.

Commands:
```bash
npm run dev
npm run build
npm run build:demo
```

## Contributing
PRs and issues are welcome. See:
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`

## License
MIT © TODOvue
