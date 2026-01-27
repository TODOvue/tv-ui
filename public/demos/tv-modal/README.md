<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Modal (TvModal)
A flexible, customizable Vue 3 modal component with multiple variants (success, error, warning, info), animations, theme support, and accessibility features. Works seamlessly in Single Page Apps and Server-Side Rendered (SSR) environments like Nuxt 3.

[![npm](https://img.shields.io/npm/v/@todovue/tv-modal.svg)](https://www.npmjs.com/package/@todovue/tv-modal)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-modal.svg)](https://www.npmjs.com/package/@todovue/tv-modal)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-modal.svg)](https://www.npmjs.com/package/@todovue/tv-modal)
![License](https://img.shields.io/github/license/TODOvue/tv-modal)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-modal)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-modal)
![Node Version](https://img.shields.io/node/v/@todovue/tv-modal)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-modal)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-modal?style=social)

> Demo: https://ui.todovue.blog/modal

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 4 / SSR Usage](#nuxt-4--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Configuration Object](#configuration-object)
- [Theme Support](#theme-support)
- [Theme Support](#theme-support)
- [Slots](#slots)
- [Usage Examples](#usage-examples)
- [Animations](#animations)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- Multiple visual variants: success, error, warning, info
- Configurable title, description, and action buttons
- Built-in animations (scale-up, scale-down, rotate shake on overlay click)
- Theme support: auto-detect dark/light mode or manual override
- Uses Vue Teleport for proper modal rendering
- Keyboard navigation (ESC to close)
- Focus management and restoration
- Accessible (ARIA attributes, role="dialog")
- Works in SPA and SSR (Nuxt 3) contexts
- Integrates with @todovue/tv-button for action buttons
- Tree-shake friendly (Vue marked external in library build)

## Installation
Using npm:
```bash
npm install @todovue/tv-modal
```
Using yarn:
```bash
yarn add @todovue/tv-modal
```
Using pnpm:
```bash
pnpm add @todovue/tv-modal
```

### Importing Styles
**Important:** Starting from version 1.0.0+, TvModal no longer injects CSS automatically. You must explicitly import the stylesheet in your application.

#### For Vue/Vite SPA:
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@todovue/tv-modal/style.css'
import '@todovue/tv-button/style.css'
import { TvModal } from '@todovue/tv-modal'

const app = createApp(App)
app.component('TvModal', TvModal)
app.mount('#app')
```

#### For Nuxt 3/4:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-modal/nuxt'
  ]
})
```

Then register the component in a plugin as shown in the [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage) section.

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import '@todovue/tv-modal/style.css'
import TvModal from '@todovue/tv-modal'

createApp(App)
  .use(TvModal) // enables <TvModal /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()

const modalConfig = {
  title: "Confirm Action",
  description: "Are you sure you want to proceed?",
  confirmButtonText: "Yes",
  cancelButtonText: "No",
  icon: "warning"
}

const openModal = () => {
  modal.value.openModal()
}

const handleAccepted = () => {
  console.log('User confirmed')
}

const handleCanceled = () => {
  console.log('User canceled')
}
</script>

<template>
  <button @click="openModal">Open Modal</button>
  
  <TvModal
    :config-modal="modalConfig"
    @accepted="handleAccepted"
    @canceled="handleCanceled"
    ref="modal"
  />
</template>
```
**Note:** Don't forget to import the CSS in your main entry file as shown above.

## Nuxt 4 / SSR Usage
First, add the CSS to your `nuxt.config.ts`:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@todovue/tv-modal/style.css'],
})
```

Then create a plugin file: `plugins/tv-modal.client.ts`:
```ts
import { defineNuxtPlugin } from '#app'
import TvModal from '@todovue/tv-modal'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvModal)
})
```
Use anywhere in your Nuxt app:
```vue
<template>
  <button @click="modal.openModal()">Show Modal</button>
  
  <TvModal
    :config-modal="config"
    @accepted="handleAccept"
    ref="modal"
  />
</template>

<script setup>
import { ref } from 'vue'

const modal = ref()
const config = {
  title: "Success!",
  description: "Operation completed",
  confirmButtonText: "OK",
  icon: "success"
}

const handleAccept = () => {
  // Handle acceptance
}
</script>
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvModal } from '@todovue/tv-modal'
</script>
```

## Component Registration Options
| Approach                                                        | When to use                                    |
|-----------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvModal)`                                   | Many usages across app / design system install |
| Local named import `{ TvModal }`                                | Isolated / code-split contexts                 |
| Direct default import `import TvModal from '@todovue/tv-modal'` | Single usage or manual registration            |

## Props
| Prop            | Type    | Default | Description                                                                   |
|-----------------|---------|---------|-------------------------------------------------------------------------------|
| configModal     | Object  | —       | **Required.** Configuration object for modal content and buttons (see below). |
| theme           | String  | ''      | Theme override: `''` (auto-detect), `'dark-mode'`, or `'light-mode'`.         |
| closeOnBackdrop | Boolean | `false` | If `true`, clicking the backdrop closes the modal. Default is `false`.        |

## Events
| Event name | Payload | Description                                      |
|------------|---------|--------------------------------------------------|
| `accepted` | —       | Emitted when user clicks the confirm button.     |
| `canceled` | —       | Emitted when user clicks cancel or presses ESC.  |

Usage:
```vue
<TvModal
  :config-modal="config"
  @accepted="onAccept"
  @canceled="onCancel"
  ref="modal"
/>
```

## Configuration Object
The `configModal` prop accepts an object with the following properties:

| Property             | Type   | Required | Description                                                            |
|----------------------|--------|----------|------------------------------------------------------------------------|
| title                | String | No*      | Modal title text.                                                      |
| description          | String | No*      | Modal description/body text.                                           |
| confirmButtonText    | String | No       | Text for the confirm button. If omitted, button won't show.            |
| confirmButtonVariant | String | No       | Variant for confirm button (e.g. `success`, `danger`). Def: `success`. |
| cancelButtonText     | String | No       | Text for the cancel button. If omitted, button won't show.             |
| cancelButtonVariant  | String | No       | Variant for cancel button. (e.g. `success`, `danger`). Def: `success`. |
| icon                 | String | No       | Icon variant: `'success'`, `'error'`, `'warning'`, or `'info'`.        |

\* At least one of `title` or `description` is required (validated by prop validator).

Example:
```js
const modalConfig = {
  title: "Delete Item",
  description: "This action cannot be undone. Are you sure?",
  confirmButtonText: "Delete",
  cancelButtonText: "Cancel",
  icon: "warning"
}
```

## Theme Support
TvModal automatically detects the theme from your application:
- Checks `document.body` for `.dark-mode` or `.light-mode` classes
- Checks `#app` element for theme classes
- Falls back to searching for any `.dark-mode` or `.light-mode` element
- Observes DOM changes to update theme dynamically

Manual override:
```vue
<TvModal :config-modal="config" theme="dark-mode" ref="modal" />
```

<TvModal :config-modal="config" theme="dark-mode" ref="modal" />
```

## Slots
TvModal provides slots for full content customization, allowing you to go beyond simple text and standard structures.

| Slot Name | Description                                                                  |
|-----------|------------------------------------------------------------------------------|
| `header`  | Replaces the default icon and title area.                                    |
| `default` | The main body of the modal. Replaces the standard description text.          |
| `footer`  | Replaces the default action buttons. You must handle closing logic manually. |

*Note: You can mix and match configuration props with slots. For example, use `configModal.title` for the title and the `default` slot for a custom form body.*

## Usage Examples

### Success Modal
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()
const config = {
  title: "Success!",
  description: "Your operation was completed successfully",
  confirmButtonText: "Great!",
  icon: "success"
}
</script>

<template>
  <button @click="modal.openModal()">Show Success</button>
  <TvModal :config-modal="config" @accepted="() => {}" ref="modal" />
</template>
```

### Error Modal
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()
const config = {
  title: "Error occurred",
  description: "Something went wrong. Please try again later.",
  confirmButtonText: "OK",
  cancelButtonText: "Cancel",
  icon: "error"
}
</script>

<template>
  <button @click="modal.openModal()">Show Error</button>
  <TvModal
    :config-modal="config"
    @accepted="handleRetry"
    @canceled="handleCancel"
    ref="modal"
  />
</template>
```

### Warning Modal
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()
const config = {
  title: "Are you sure?",
  description: "If you delete it there is no step back",
  confirmButtonText: "Yes, delete it",
  cancelButtonText: "No, keep it",
  icon: "warning"
}
</script>

<template>
  <button @click="modal.openModal()">Delete Item</button>
  <TvModal
    :config-modal="config"
    @accepted="deleteItem"
    @canceled="() => {}"
    ref="modal"
  />
</template>
```

### Info Modal
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'

const modal = ref()
const config = {
  title: "Information",
  description: "Here is some important information you should know about.",
  confirmButtonText: "Got it",
  icon: "info"
}
</script>

<template>
  <button @click="modal.openModal()">Show Info</button>
  <TvModal :config-modal="config" @accepted="() => {}" ref="modal" />
</template>
```

### With Slots (Custom Content)
```vue
<script setup>
import { ref } from 'vue'
import { TvModal } from '@todovue/tv-modal'
import { TvButton } from '@todovue/tv-button'

const modal = ref()
// Config is minimal if using full slots, or you can mix them
const config = { title: "Custom Form" }

const handleSave = () => {
  // Logic here
  modal.value.acceptModal() // Manually trigger close/animate
}
</script>

<template>
  <button @click="modal.openModal()">Open Custom Modal</button>
  
  <TvModal :config-modal="config" ref="modal">
    <template #header>
      <h3 class="custom-title">My Custom Header</h3>
    </template>
    
    <div class="my-form">
      <input type="text" placeholder="Enter name" />
    </div>

    <template #footer>
      <TvButton @click="handleSave">Save</TvButton>
      <TvButton variant="danger" @click="modal.cancelModal()">Close</TvButton>
    </template>
  </TvModal>
</template>
```

## Animations
TvModal includes built-in animations:
- **Scale up**: When modal opens
- **Scale down**: When modal closes
- **Rotate shake**: When user clicks the overlay (attention grabber)

Animations are managed internally via the `useModal` composable and applied via CSS classes.

## Accessibility
- Uses Vue `<Teleport>` to render modal at the body level
- Proper ARIA attributes: `role="dialog"`, `aria-modal="true"`
- Dynamic `aria-labelledby` and `aria-describedby` based on title/description
- Keyboard support: ESC key to close/cancel
- Focus management:
  - Focuses modal on open
  - Restores focus to triggering element on close
- Action buttons use the accessible `@todovue/tv-button` component

## SSR Notes
- Safe for SSR (no direct `window`/`document` access during module evaluation)
- Uses `onMounted` for theme detection and DOM observers
- Teleport target is `body` (ensure it exists in SSR context)
- Theme detection gracefully handles `typeof document === 'undefined'`
- Works seamlessly with Nuxt 3

## Development
```bash
git clone https://github.com/TODOvue/tv-modal.git
cd tv-modal
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` and demo examples in `src/demo`.

## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

### Dependencies
- **Runtime**: `@todovue/tv-button` (for action buttons)
- **Peer**: `vue@^3.0.0`

## License
MIT © TODOvue

### Attributions
Crafted for the TODOvue component ecosystem
