<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Alert (TvAlert)
A flexible, framework‑agnostic Vue 3 alert/notification component with multiple positions, types, progress bar, pause on hover, and customization utilities. Ship it in Single Page Apps or Server-Side Rendered (SSR) environments (e.g. Nuxt 3) with zero DOM assumptions.

[![npm](https://img.shields.io/npm/v/@todovue/tv-alert.svg)](https://www.npmjs.com/package/@todovue/tv-alert)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-alert.svg)](https://www.npmjs.com/package/@todovue/tv-alert)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-alert.svg)](https://www.npmjs.com/package/@todovue/tv-alert)
![License](https://img.shields.io/github/license/TODOvue/tv-alert)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-alert)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-alert)
![Node Version](https://img.shields.io/node/v/@todovue/tv-alert)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-alert)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-alert?style=social)

> Demo: https://ui.todovue.blog/alert

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 4 / SSR Usage](#nuxt-4--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Alert Options](#alert-options)
- [Composable API (useAlert)](#composable-api-usealert)
- [Positions](#positions)
- [Alert Types](#alert-types)
- [Customization (Styles / Theming)](#customization-styles--theming)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- Multiple alert types: info, success, warning, error
- Six position options: top-right, top-center, top-left, bottom-right, bottom-center, bottom-left
- Auto-dismiss with customizable duration
- Progress bar showing remaining time
- Pause on hover (configurable)
- Optional close button
- Stack multiple alerts in the same position (with max limit)
- Programmatic API via composable (`useAlert`)
- Smooth slide-in/slide-out transitions
- Works in SPA and SSR (Nuxt 3) contexts
- Tree-shake friendly (Vue marked external in library build)

## Installation
Using npm:
```bash
npm install @todovue/tv-alert
```
Using yarn:
```bash
yarn add @todovue/tv-alert
```
Using pnpm:
```bash
pnpm add @todovue/tv-alert
```

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'

import '@todovue/tv-alert/style.css'
import { TvAlert } from '@todovue/tv-alert'

const app = createApp(App)
app.component('TvAlert', TvAlert)
app.mount('#app')
```

In your root component (App.vue):
```vue
<template>
  <div id="app">
    <TvAlert />
    <router-view />
  </div>
</template>
```

Using the alert in any component:
```vue
<script setup>
import { useAlert } from '@todovue/tv-alert'

const { api } = useAlert()
const alert = api()

function showNotification() {
  alert.success('Operation completed successfully!')
}
</script>

<template>
  <button @click="showNotification">Show Alert</button>
</template>
```

## Nuxt 4 / SSR Usage

**Step 1:** Add the stylesheet to your `nuxt.config.ts`:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-alert/nuxt'
  ]
})
```

**Step 2:** Create a plugin file: `plugins/tv-alert.client.ts` (client-only is fine, or without suffix for SSR as it is safe):
```ts
import { defineNuxtPlugin } from '#app'
import { TvAlert } from '@todovue/tv-alert'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('TvAlert', TvAlert)
})
```

**Step 3:** Add the component to your app.vue or layout:
```vue
<template>
  <div>
    <TvAlert />
    <NuxtPage />
  </div>
</template>
```

Use anywhere:
```vue
<script setup>
import { useAlert } from '@todovue/tv-alert'

const { api } = useAlert()
const alert = api()

function notify() {
  alert.info('Welcome to our app!')
}
</script>
```

## Component Registration Options
| Approach                                                          | When to use                                    |
|-------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvAlert)`                                     | Recommended - single instance across app       |
| Local named import `{ TvAlert }`                                  | When you need multiple alert containers        |
| Direct default import `import TvAlert from '@todovue/tv-alert'`   | Single usage or manual registration            |

## Props
The `TvAlert` component accepts the following props:

| Prop | Type   | Default | Description                                      |
|------|--------|---------|--------------------------------------------------|
| max  | Number | 8       | Maximum number of alerts to display per position |

Example:
```vue
<TvAlert :max="5" />
```

## Alert Options
When calling `alert.open()` or type-specific methods, you can pass an options object:

| Option        | Type    | Default      | Description                                           |
|---------------|---------|--------------|-------------------------------------------------------|
| title         | String  | null         | Optional bold title above the message                 |
| message       | String  | ''           | The message to display in the alert                   |
| type          | String  | 'info'       | Alert type: 'info', 'success', 'warning', or 'error'  |
| position      | String  | 'top-right'  | Position of the alert (see Positions section)         |
| duration      | Number  | 4000         | Duration in milliseconds (0 = never auto-dismiss)     |
| showClose     | Boolean | true         | Show/hide close button                                |
| pauseOnHover  | Boolean | true         | Pause auto-dismiss timer on mouse hover               |
| showProgress  | Boolean | true         | Show/hide progress bar                                |
| icon          | String  | null         | Custom icon implementation (not widely used)          |
| customIcon    | String  | null         | SVG/HTML string for a custom icon replacing default   |
| actions       | Array   | []           | Array of action buttons: `{ label, handler(item) }`   |
| allowHtml     | Boolean | false        | Allow HTML content in the message                     |

Example:
```js
alert.open({
  message: 'Custom alert',
  type: 'warning',
  position: 'bottom-center',
  duration: 6000,
  showClose: true,
  pauseOnHover: true,
  showProgress: true
})
```

## Composable API (useAlert)
The `useAlert` composable provides methods to manage alerts programmatically:

```js
import { useAlert } from '@todovue/tv-alert'

const { api, addAlert, removeAlert, clearAll, alerts } = useAlert()

// Get the simplified API
const alert = api()

// Type-specific methods
alert.info('Information message')
alert.success('Success message')
alert.warning('Warning message')
alert.error('Error message')

// Generic method with full options
alert.open({
  message: 'Custom alert',
  type: 'info',
  position: 'top-center',
  duration: 5000
})

// Direct methods
addAlert({ message: 'Direct call', type: 'success' })
clearAll() // Remove all alerts

// Access reactive alerts array
console.log(alerts.value) // Array of current alerts
```

### API Methods

| Method          | Parameters       | Returns | Description                          |
|-----------------|------------------|---------|--------------------------------------|
| api()           | none             | Object  | Returns simplified alert API         |
| alert.info()    | message, options | Number  | Show info alert, returns alert ID    |
| alert.success() | message, options | Number  | Show success alert, returns alert ID |
| alert.warning() | message, options | Number  | Show warning alert, returns alert ID |
| alert.error()   | message, options | Number  | Show error alert, returns alert ID   |
| alert.open()    | options          | Number  | Show alert with custom options       |
| addAlert()      | options          | Number  | Add alert directly                   |
| removeAlert()   | id               | void    | Remove specific alert by ID          |
| clearAll()      | none             | void    | Remove all alerts                    |

## Positions
TvAlert supports six different positions:

- `top-right` (default)
- `top-center`
- `top-left`
- `bottom-right`
- `bottom-center`
- `bottom-left`

Example:
```js
alert.success('Top left notification', { position: 'top-left' })
alert.warning('Bottom center notification', { position: 'bottom-center' })
```

## Alert Types
Four alert types are available, each with its own color scheme:

- `info` - Blue themed (informational messages)
- `success` - Green themed (success/completion messages)
- `warning` - Orange/Yellow themed (warning messages)
- `error` - Red themed (error/critical messages)

Examples:
```js
alert.info('This is an information alert')
alert.success('Operation completed successfully!')
alert.warning('Please review your input')
alert.error('An error occurred')
```

## Customization (Styles / Theming)
The component uses SCSS variables for theming. You can customize the appearance by overriding the CSS variables or by modifying the SCSS variables:

Colors are automatically applied based on the alert type. The component includes:
- Type-specific background colors
- Progress bar animations
- Smooth slide transitions
- Hover effects

For advanced customization, you can override the CSS classes:
```css
.tv-alert {
  /* Custom styles */
}

.tv-alert--success {
  /* Custom success styles */
}

.tv-alert__progress-bar {
  /* Custom progress bar */
}
```

## Accessibility
- Each alert container has `aria-live="polite"` for screen reader announcements
- Individual alerts have `role="status"` for proper ARIA semantics
- Close buttons include `aria-label` for accessibility
- Keyboard navigation supported (close button is focusable)

## SSR Notes
- No direct DOM (`window` / `document`) access in source → safe for SSR
- Styles are automatically applied when you import the library
- Works seamlessly with Nuxt 3 and other SSR frameworks
- The composable uses Vue's reactivity system, compatible with SSR

## Development
```bash
git clone https://github.com/TODOvue/tv-alert.git
cd tv-alert
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` + `src/demo` examples.

## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License
MIT © TODOvue

### Attributions
Crafted for the TODOvue component ecosystem
