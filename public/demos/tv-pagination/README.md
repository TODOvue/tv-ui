<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo" /></p>

# TODOvue Pagination (TvPagination)

A pagination component for Vue 3, flexible and customizable, with support for smart ranges (sibling pages and boundaries), ellipsis, optional navigation buttons, icons, custom styles, and a slot for labels. Designed for SPAs and SSR environments (e.g. Nuxt 3) without assuming DOM details.

[![npm](https://img.shields.io/npm/v/@todovue/tv-pagination.svg)](https://www.npmjs.com/package/@todovue/tv-pagination)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-pagination.svg)](https://www.npmjs.com/package/@todovue/tv-pagination)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-pagination.svg)](https://www.npmjs.com/package/@todovue/tv-pagination)
![License](https://img.shields.io/github/license/TODOvue/tv-pagination)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-pagination)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-pagination)
![Node Version](https://img.shields.io/node/v/@todovue/tv-pagination)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-pagination)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-pagination?style=social)

> Demo: https://ui.todovue.blog/pagination

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Quick Start (SPA)](#quick-start-spa)
* [Usage in Nuxt 4 / SSR](#usage-in-nuxt-4--ssr)
* [Component Registration Options](#component-registration-options)
* [Props](#props)
* [Events](#events)
* [Slots](#slots)
* [Customization (Styles / Theming)](#customization-styles--theming)
* [Accessibility](#accessibility)
* [SSR Notes](#ssr-notes)
* [Development](#development)
* [Contribute](#contribute)
* [License](#license)
* [Attributions](#attributions)

## Features

* Automatic calculation of total pages from `totalItems` and `pageSize`.
* Dynamic range with sibling pages (`siblingCount`) and boundaries (`boundaryCount`).
* Conditional left / right ellipsis when large jumps exist.
* Optional buttons: first / last (`showFirstLast`) and previous / next (`showPrevNext`).
* Navigation icons (internally uses `@todovue/tv-button`).
* Custom styles for active / inactive pages (`activeStyle`, `inactiveStyle`).
* Slot to customize each page label (`page-label`).
* Controlled via `v-model` (current page) + semantic change event.
* Ready for SSR (no direct access to `window` / `document`).
* No heavy dependencies (only `vue` as peer + `@todovue/tv-button`).
* Easy integration in TODOvue design systems.

## Installation

Using npm:

```bash
npm install @todovue/tv-pagination
```

Using yarn:

```bash
yarn add @todovue/tv-pagination
```

Using pnpm:

```bash
pnpm add @todovue/tv-pagination
```

> Requires `vue@^3`. `@todovue/tv-button` installs as a dependency.

## Quick Start (SPA)

Global registration (main.js / main.ts):

```js
import { createApp } from 'vue'
import App from './App.vue'
import { TvPagination } from '@todovue/tv-pagination'
import '@todovue/tv-pagination/style.css' // import styles
import '@todovue/tv-button/style.css' // import styles

createApp(App)
  .use(TvPagination) // enables <TvPagination /> globally
  .mount('#app')
```

Local usage inside a component:

```vue
<script setup>
import { ref } from 'vue'
import { TvPagination } from '@todovue/tv-pagination'
import '@todovue/tv-pagination/style.css' // import styles
import '@todovue/tv-button/style.css' // import styles

const page = ref(1)
</script>

<template>
  <TvPagination v-model="page" :total-items="500" :sibling-count="2" :boundary-count="2" />
</template>
```

## Usage in Nuxt 4 / SSR
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-card/nuxt'
  ]
})
```

Use anywhere:

```vue
<TvPagination v-model="page" :total-items="120" />
```

## Component Registration Options

| Approach                                      | When to use                         |
|-----------------------------------------------|-------------------------------------|
| Global `app.use(TvPagination)`                | Frequent use in many views          |
| Local import `{ TvPagination }`               | Isolated contexts / code-splitting  |
| Default import `import TvPagination from ...` | Single usage or manual registration |
| Nuxt plugin                                   | SSR / design consistency            |

## Props

| Prop          | Type    | Default                                                    | Required | Description                                                    |
|---------------|---------|------------------------------------------------------------|----------|----------------------------------------------------------------|
| modelValue    | Number  | 1                                                          | No       | Current page (v-model). Normalized to valid range.             |
| totalItems    | Number  | —                                                          | Yes      | Total items being paginated.                                   |
| pageSize      | Number  | 10                                                         | No       | Page size to calculate `totalPages`.                           |
| siblingCount  | Number  | 1                                                          | No       | Number of visible pages next to the active one.                |
| boundaryCount | Number  | 1                                                          | No       | Number of always-visible starting and ending pages.            |
| showFirstLast | Boolean | true                                                       | No       | Shows first/last page buttons.                                 |
| showPrevNext  | Boolean | true                                                       | No       | Shows previous/next buttons.                                   |
| showIcons     | Boolean | false                                                      | No       | Uses icons on navigation buttons (arrows).                     |
| disabled      | Boolean | false                                                      | No       | Disables all interaction.                                      |
| ariaLabel     | String  | 'Pagination'                                               | No       | Accessible label for `<nav>`.                                  |
| labels        | Object  | `{ first:'First', prev:'Prev', next:'Next', last:'Last' }` | No       | Text for navigation buttons.                                   |
| buttonProps   | Object  | `{}`                                                       | No       | Additional props (and styles) passed to each `TvButton`.       |
| activeStyle   | Object  | `{}`                                                       | No       | Inline styles for active pages (`{ backgroundColor, color }`). |
| inactiveStyle | Object  | `{ backgroundColor:'#ffffff', color:'#000000' }`           | No       | Inline styles for inactive pages.                              |
| square        | Boolean | `false`                                                    | No       | Controls if buttons are square.                                |
| size          | String  | `'small'`                                                  | No       | Button size (`'small'`, `'md'`, `'large'`).                    |
| showSummary   | Boolean | `false`                                                    | No       | Displays text showing the current range of items.              |
| textSummary   | String  | `'Showing {from} to {to} of {total} items'`                | No       | Template for summary text (uses `{from}`, `{to}`, `{total}`).  |

> Note: If `activeStyle` is empty, TvButton default styling is used. `inactiveStyle` always provides white/black fallback if omitted.

## Events

| Name (kebab)        | Payload  | Description                                                         |
|---------------------|----------|---------------------------------------------------------------------|
| `update:modelValue` | `number` | Emits new page number for v-model.                                  |
| `change`            | `number` | Semantic event triggered when the page changes (only if different). |

Example:

```vue
<TvPagination v-model="page" :total-items="300" @change="onPage" />
```

```js
function onPage(newPage) {
  console.log('Current page:', newPage)
}
```

## Slots

| Slot         | Exposed props      | Description                            |
|--------------|--------------------|----------------------------------------|
| `page-label` | `{ page, active }` | Customize content of each page button. |

Example:

```vue
<TvPagination
  v-model="page"
  :total-items="100"
>
  <template #page-label="{ page, active }">
    <span :style="active ? 'font-weight:600' : ''">Pg {{ page }}</span>
  </template>
</TvPagination>
```

## Customization (Styles / Theming)

Active styles with `activeStyle`:

```vue
<TvPagination
  v-model="page"
  :total-items="300"
  :active-style="{ backgroundColor: '#10b981', color: '#ffffff' }"
/>
```

Inactive styles:

```vue
<TvPagination
  v-model="page"
  :total-items="300"
  :inactive-style="{ backgroundColor: '#f1f5f9', color: '#0f172a' }"
/>
```

Passing styles / variants to base button via `buttonProps`:

```vue
<TvPagination
  v-model="page"
  :total-items="120"
  :button-props="{ outlined: true, small: true }"
/>
```

> All `buttonProps` values are passed to each `TvButton` instance (including variants like `success`, `outlined`, `small`, etc.).

## Accessibility

* `nav` container with configurable `aria-label` (`ariaLabel`).
* Active page receives `aria-current="page"`.
* Ellipsis marked with `aria-hidden="true"` and are not focusable.
* Disabled buttons use `disabled` attribute (inherited from `TvButton`).
* If icons are used (`showIcons=true`) accessible text is preserved (or empty for icon-only). Ensure `labels.*` describe the action.

## SSR Notes

* No direct DOM access → safe for server rendering.
* Styles are served as a separate CSS file (`dist/tv-pagination.css`) that must be explicitly imported (see [Importing Styles](#importing-styles)).
* `vue` is marked as external in the library build (tree-shake friendly).
* Compatible with Nuxt 3/4 by adding the stylesheet to the `css` array in `nuxt.config.ts`.

## Development

```bash
git clone https://github.com/TODOvue/tv-pagination.git
cd tv-pagination
npm install
npm run dev        # runs playground demo (Vite)
npm run build      # builds the library
```

Build demo (uses environment variable):

```bash
npm run build:demo  # generates dist-demo with README in public/
```

Output structure:

* `dist/tv-pagination.es.js`
* `dist/tv-pagination.cjs.js`
* Types: `dist/tv-pagination.d.ts`

## Contribute

PRs and issues are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License

MIT © TODOvue

## Attributions

Created for the TODOvue component ecosystem.
