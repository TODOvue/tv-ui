<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Progress Bar (TvProgressBar)
A lightweight, customizable Vue 3 reading progress bar component that tracks scroll position through content. Features smooth animations, flexible target selection, configurable offsets, and SSR support. Works seamlessly in Single Page Apps and Server-Side Rendered (SSR) environments like Nuxt 3.

[![npm](https://img.shields.io/npm/v/@todovue/tv-progress-bar.svg)](https://www.npmjs.com/package/@todovue/tv-progress-bar)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-progress-bar.svg)](https://www.npmjs.com/package/@todovue/tv-progress-bar)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-progress-bar.svg)](https://www.npmjs.com/package/@todovue/tv-progress-bar)
![License](https://img.shields.io/github/license/TODOvue/tv-progress-bar)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-progress-bar)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-progress-bar)
![Node Version](https://img.shields.io/node/v/@todovue/tv-progress-bar)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-progress-bar)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-progress-bar?style=social)

> Demo: https://ui.todovue.blog/progressbar

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 4 / SSR Usage](#nuxt-4--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Composable API](#composable-api)
- [Usage Examples](#usage-examples)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- Real-time reading progress tracking based on scroll position
- Flexible target selection (CSS selector, element reference, or DOM element)
- Configurable height and color
- Support for Gradients: Pass multiple colors for a modern look
- Glow Effect: Optional neon glow that follows the progress bar
- Customizable Transitions: Configure duration and easing functions
- **Vertical Orientation**: Support for side progress bars (left/right)
- **Reading Checkpoints**: Display indicators at specific progress points (e.g., 25%, 50%, 75%)
- **Progress Labels**: Show percentage inside the bar or as a floating bubble
- **Flexible Positioning**: Fix the bar at the top, bottom, left, right, or use sticky behavior
- Top and bottom offset support for fixed headers/footers
- Smooth linear transitions with reduced motion support
- SSR-safe (works with Nuxt 3 and other SSR frameworks)
- Composable API (`useProgressBar`) for custom implementations
- ResizeObserver support for responsive content
- RequestAnimationFrame optimization for smooth performance
- Keyboard accessible with ARIA labels
- Lightweight and tree-shakeable
- TypeScript support

## Installation
Using npm:
```bash
npm install @todovue/tv-progress-bar
```
Using yarn:
```bash
yarn add @todovue/tv-progress-bar
```
Using pnpm:
```bash
pnpm add @todovue/tv-progress-bar
```

### Importing Styles
**Important:** You must explicitly import the stylesheet in your application.

#### For Vue/Vite SPA:
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@todovue/tv-progress-bar/style.css'
import { TvProgressBar } from '@todovue/tv-progress-bar'

const app = createApp(App)
app.component('TvProgressBar', TvProgressBar)
app.mount('#app')
```

#### For Nuxt 3/4:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-progress-bar/nuxt'
  ]
})
```

Then register the component in a plugin as shown in the [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage) section.

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import '@todovue/tv-progress-bar/style.css'
import TvProgressBar from '@todovue/tv-progress-bar'

createApp(App)
  .use(TvProgressBar) // enables <TvProgressBar /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <!-- Progress bar tracks the article container -->
    <TvProgressBar :target="articleContainer" />
    
    <!-- Your article content -->
    <article ref="articleContainer">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
      <!-- Long content here -->
    </article>
  </div>
</template>
```
**Note:** Don't forget to import the CSS in your main entry file as shown above.

## Nuxt 4 / SSR Usage
First, add the module to your `nuxt.config.ts`:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@todovue/tv-progress-bar/nuxt']
})
```

Alternatively, you can manually add the CSS:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@todovue/tv-progress-bar/style.css'],
})
```

Then create a plugin file: `plugins/tv-progress-bar.client.ts`:
```ts
import { defineNuxtPlugin } from '#app'
import TvProgressBar from '@todovue/tv-progress-bar'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvProgressBar)
})
```
Use anywhere in your Nuxt app:
```vue
<script setup>
import { ref } from 'vue'

const mainContent = ref(null)
</script>

<template>
  <div>
    <TvProgressBar :target="mainContent" :offset-top="60" />
    
    <main ref="mainContent">
      <NuxtPage />
    </main>
  </div>
</template>
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvProgressBar } from '@todovue/tv-progress-bar'
</script>
```

## Component Registration Options
| Approach                                                                     | When to use                                    |
|------------------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvProgressBar)`                                          | Many usages across app / design system install |
| Local named import `{ TvProgressBar }`                                       | Isolated / code-split contexts                 |
| Direct default import `import TvProgressBar from '@todovue/tv-progress-bar'` | Single usage or manual registration            |

## Props
| Prop          | Type             | Default                                          | Description                                                     |
|---------------|------------------|--------------------------------------------------|-----------------------------------------------------------------|
| target        | String \| Object | '.container-blog'                                | CSS selector or element reference to track scroll progress.     |
| offsetTop     | Number           | 0                                                | Top offset in pixels (useful for fixed headers).                |
| offsetBottom  | Number           | 0                                                | Bottom offset in pixels (useful for fixed footers).             |
| height        | String           | '4px'                                            | Height of horizontal progress bar (CSS value).                  |
| width         | String           | '4px'                                            | Width of vertical progress bar (CSS value).                     |
| zIndex        | Number           | 1200                                             | Z-index for the progress bar positioning.                       |
| disabled      | Boolean          | false                                            | Whether the progress bar is enabled and visible.                |
| color         | String           | ''                                               | Custom background color for the progress bar (CSS color value). |
| gradient      | Array            | []                                               | Array of colors for a linear gradient background.               |
| glow          | Boolean          | false                                            | Whether to enable the glow effect.                              |
| glowColor     | String           | ''                                               | Custom color for the glow effect.                               |
| duration      | String           | '120ms'                                          | Transition duration (e.g., '300ms', '0.5s').                    |
| easing        | String           | 'linear'                                         | Transition easing function (e.g., 'ease-in-out').               |
| orientation   | String           | 'horizontal'                                     | Bar orientation: 'horizontal' or 'vertical'.                    |
| position      | String           | 'top' (horiz) / 'left' (vert)                    | Positioning: 'top', 'bottom', 'left', 'right', or 'sticky'.     |
| showLabel     | Boolean          | false                                            | Whether to show the percentage label.                           |
| labelPosition | String           | 'inside'                                         | Label position: 'inside' or 'floating'.                         |
| checkpoints   | Array            | []                                               | Array of numbers (0-100) to show indicators on the bar.         |

### Prop Details

#### `target`
The element to track for reading progress. Can be:
- A CSS selector string (e.g., `'.article'`, `'#content'`)
- A template ref (e.g., `ref(null)`)
- An HTMLElement reference

Example:
```vue
<script setup>
import { ref } from 'vue'

const articleRef = ref(null)
</script>

<template>
  <!-- Using template ref -->
  <TvProgressBar :target="articleRef" />
  <article ref="articleRef">...</article>
  
  <!-- Using CSS selector -->
  <TvProgressBar target="#my-article" />
  <article id="my-article">...</article>
</template>
```

#### `offsetTop`
Accounts for fixed headers or navigation bars at the top of the page. The progress calculation will consider this offset.

Example:
```vue
<!-- 60px offset for fixed header -->
<TvProgressBar :target="articleRef" :offset-top="60" />
```

#### `offsetBottom`
Accounts for fixed footers or bottom bars. The progress calculation will consider this offset.

Example:
```vue
<!-- 80px offset for fixed footer -->
<TvProgressBar :target="articleRef" :offset-bottom="80" />
```

#### `height`
Controls the thickness of the progress bar. Accepts any CSS height value.

Example:
```vue
<TvProgressBar :target="articleRef" height="8px" />
<TvProgressBar :target="articleRef" height="0.5rem" />
```

#### `zIndex`
Controls the stacking order of the progress bar. Default is 1200 to ensure it appears above most content.

Example:
```vue
<TvProgressBar :target="articleRef" :z-index="9999" />
```

#### `disabled`
Allows you to conditionally enable/disable the progress bar. When disabled, the bar won't be rendered.

Example:
```vue
<script setup>
import { ref } from 'vue'

const showProgress = ref(true)
</script>

<template>
  <TvProgressBar :target="articleRef" :disabled="showProgress" />
</template>
```

#### `color`
Custom color for the progress bar. Accepts any CSS color value. If not provided, uses the default theme color.

Example:
```vue
<TvProgressBar :target="articleRef" color="#42b983" />
<TvProgressBar :target="articleRef" color="rgb(66, 185, 131)" />
<TvProgressBar :target="articleRef" color="var(--primary-color)" />
```

#### `gradient`
Array of colors to create a linear gradient background. When provided, it overrides the `color` prop.

Example:
```vue
<TvProgressBar :target="articleRef" :gradient="['#f093fb', '#f5576c']" />
<TvProgressBar :target="articleRef" :gradient="['#84fab0', '#8fd3f4']" />
```

#### `glow`
Enables a shadow effect that follows the progress bar, giving it a depth or "neon" look.

Example:
```vue
<TvProgressBar :target="articleRef" glow />
<TvProgressBar :target="articleRef" color="#00f2fe" glow />
```

#### `glowColor`
Customizes the color of the glow effect. If not provided, it defaults to the `color` prop or the last color in the `gradient`.

Example:
```vue
<TvProgressBar :target="articleRef" glow glow-color="#ff00ff" />
```

#### `duration`
Sets the duration of the progress bar transition.

Example:
```vue
<TvProgressBar :target="articleRef" duration="300ms" />
<TvProgressBar :target="articleRef" duration="0.5s" />
```

#### `easing`
Sets the easing function for the progress bar transition.

Example:
```vue
<TvProgressBar :target="articleRef" easing="ease-in-out" />
<TvProgressBar :target="articleRef" easing="cubic-bezier(0.4, 0, 0.2, 1)" />
```

## Composable API
TvProgressBar includes a composable `useProgressBar` that you can use to build custom progress tracking functionality.

### `useProgressBar(targetEl, options)`
```js
import { useProgressBar } from '@todovue/tv-progress-bar'

const targetEl = ref(null)
const { progress, progressPercent, recalculate } = useProgressBar(targetEl, {
  offsetTop: computed(() => 60),
  offsetBottom: computed(() => 0)
})
```

**Parameters:**
- `targetEl` (Ref<HTMLElement>): Reactive reference to the element to track
- `options` (Object): Configuration options
  - `offsetTop` (Number|Ref|ComputedRef): Top offset in pixels (default: 0)
  - `offsetBottom` (Number|Ref|ComputedRef): Bottom offset in pixels (default: 0)

**Returns:**
- `progress` (Ref<Number>): Reactive number between 0 and 1 representing scroll progress
- `progressPercent` (Ref<Number>): Reactive number between 0 and 100 (rounded)
- `recalculate` (Function): Function to manually trigger a progress recalculation

**Example:**
```vue
<script setup>
import { ref, computed } from 'vue'
import { useProgressBar } from '@todovue/tv-progress-bar'

const articleRef = ref(null)
const { progress, progressPercent, recalculate } = useProgressBar(articleRef, {
  offsetTop: computed(() => 60),
  offsetBottom: computed(() => 0)
})
</script>

<template>
  <div>
    <!-- Custom progress display -->
    <div class="custom-progress">
      Reading progress: {{ progressPercent }}%
    </div>
    
    <!-- Custom progress bar -->
    <div class="custom-bar">
      <div 
        class="custom-fill" 
        :style="{ width: `${progress * 100}%` }"
      />
    </div>
    
    <article ref="articleRef">
      <!-- Your content -->
    </article>
    
    <button @click="recalculate">Recalculate Progress</button>
  </div>
</template>

<style scoped>
.custom-progress {
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
}

.custom-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
}

.custom-fill {
  height: 100%;
  background: #42b983;
  transition: width 120ms linear;
}
</style>
```

## Usage Examples

### Default (CSS Selector)
```vue
<script setup>
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'
</script>

<template>
  <div>
    <TvProgressBar target=".article-content" />
    
    <article class="article-content">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
      <!-- Your long content -->
    </article>
  </div>
</template>
```

### Using Template Ref
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <TvProgressBar :target="articleContainer" />
    
    <article ref="articleContainer">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
      <!-- Your long content -->
    </article>
  </div>
</template>
```

### Custom Color
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <TvProgressBar 
      :target="articleContainer" 
      color="#42b983" 
    />
    
    <article ref="articleContainer">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </article>
  </div>
</template>
```

### Custom Height
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <TvProgressBar 
      :target="articleContainer" 
      height="8px" 
    />
    
    <article ref="articleContainer">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </article>
  </div>
</template>
```

### Gradient Support
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <TvProgressBar 
      :target="articleContainer" 
      :gradient="['#f093fb', '#f5576c']"
      height="6px"
    />
    
    <article ref="articleContainer">
      <h1>My Article with Gradient</h1>
      <p>Scroll to see the gradient progress bar...</p>
    </article>
  </div>
</template>
```

### Glow Effect
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <TvProgressBar 
      :target="articleContainer"
      color="#00f2fe"
      glow
      height="4px"
    />
    
    <article ref="articleContainer">
      <h1>Neon Glow Progress</h1>
      <p>Notice the subtle glow under the bar...</p>
    </article>
  </div>
</template>
```

### Custom Transitions
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <TvProgressBar 
      :target="articleContainer"
      duration="800ms"
      easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      color="#3f51b5"
    />
    
    <article ref="articleContainer">
      <h1>Bouncy Progress Bar</h1>
      <p>Scroll fast to see the custom easing effect...</p>
    </article>
  </div>
</template>

### Vertical Orientation
```vue
<template>
  <TvProgressBar 
    target=".content" 
    orientation="vertical" 
    position="left" 
    width="6px" 
    color="#4f46e5" 
  />
</template>
```

### Reading Checkpoints
```vue
<template>
  <TvProgressBar 
    target=".content" 
    :checkpoints="[25, 50, 75]" 
    color="#f59e0b" 
  />
</template>
```

### Floating Percentage Label
```vue
<template>
  <TvProgressBar 
    target=".content" 
    show-label 
    label-position="floating" 
    color="#10b981" 
    glow 
  />
</template>
```

### Sticky Position (Inside Container)
```vue
<template>
  <div class="relative-container">
    <TvProgressBar 
      target=".content" 
      position="sticky" 
      color="#ec4899" 
    />
    <div class="content">...</div>
  </div>
</template>
```
```

### With Fixed Header (Offset Top)
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <header style="position: fixed; top: 0; height: 60px;">
      <!-- Fixed header content -->
    </header>
    
    <TvProgressBar 
      :target="articleContainer" 
      :offset-top="60" 
    />
    
    <article ref="articleContainer" style="margin-top: 60px;">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </article>
  </div>
</template>
```

### With Fixed Header and Footer
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <header style="position: fixed; top: 0; height: 60px;">
      <!-- Fixed header -->
    </header>
    
    <TvProgressBar 
      :target="articleContainer" 
      :offset-top="60" 
      :offset-bottom="80" 
    />
    
    <article ref="articleContainer" style="margin: 60px 0 80px;">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </article>
    
    <footer style="position: fixed; bottom: 0; height: 80px;">
      <!-- Fixed footer -->
    </footer>
  </div>
</template>
```

### Conditional Rendering
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
const showProgress = ref(true)
</script>

<template>
  <div>
    <button @click="showProgress = !showProgress">
      Toggle Progress Bar
    </button>
    
    <TvProgressBar 
      :target="articleContainer" 
      :disabled="showProgress" 
    />
    
    <article ref="articleContainer">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </article>
  </div>
</template>
```

### All Props Combined
```vue
<script setup>
import { ref } from 'vue'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import '@todovue/tv-progress-bar/style.css'

const articleContainer = ref(null)
</script>

<template>
  <div>
    <TvProgressBar 
      :target="articleContainer"
      :offset-top="60"
      :offset-bottom="40"
      height="6px"
      color="#ff6b6b"
      :z-index="9999"
      disabled
    />
    
    <article ref="articleContainer">
      <h1>My Article</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </article>
  </div>
</template>
```

### Custom Implementation with Composable
```vue
<script setup>
import { ref, computed } from 'vue'
import { useProgressBar } from '@todovue/tv-progress-bar'

const contentRef = ref(null)
const { progress, progressPercent, recalculate } = useProgressBar(contentRef, {
  offsetTop: computed(() => 0),
  offsetBottom: computed(() => 0)
})
</script>

<template>
  <div>
    <!-- Circular progress indicator -->
    <div class="circular-progress">
      <svg width="60" height="60">
        <circle 
          cx="30" 
          cy="30" 
          r="25" 
          fill="none" 
          stroke="#e0e0e0" 
          stroke-width="5"
        />
        <circle 
          cx="30" 
          cy="30" 
          r="25" 
          fill="none" 
          stroke="#42b983" 
          stroke-width="5"
          :stroke-dasharray="`${progress * 157} 157`"
          transform="rotate(-90 30 30)"
        />
      </svg>
      <span class="percentage">{{ progressPercent }}%</span>
    </div>
    
    <article ref="contentRef">
      <h1>Custom Progress Indicator</h1>
      <p>Scroll to see the circular progress...</p>
      <!-- Your content -->
    </article>
  </div>
</template>

<style scoped>
.circular-progress {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.percentage {
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  color: #42b983;
}
</style>
```

## Accessibility
- **ARIA Attributes**: Progress bar includes proper ARIA attributes:
  - `role="progressbar"`
  - `aria-label="Reading progress"`
  - `aria-valuemin="0"`
  - `aria-valuemax="100"`
  - `aria-valuenow` (dynamically updated percentage)
- **Pointer Events**: Progress bar uses `pointer-events: none` to not interfere with page interactions
- **Reduced Motion**: Respects `prefers-reduced-motion` media query to disable transitions for users who prefer reduced motion
- **Semantic HTML**: Uses semantic div elements with proper ARIA roles
- **Visual Feedback**: Clear visual indication of reading progress

## SSR Notes
- **SSR-Safe**: No direct `window`/`document` access during module evaluation
- **Smart Guards**: Uses `typeof window !== 'undefined'` checks throughout
- **Lifecycle Hooks**: Scroll listeners and observers are added in `onMounted` hook
- **Cleanup**: Automatically removes event listeners and observers in `onBeforeUnmount`
- **Nuxt 3 Compatible**: Works seamlessly with Nuxt 3 out of the box
- **Hydration Safe**: No hydration mismatches
- **Performance**: Uses `requestAnimationFrame` for smooth updates
- **ResizeObserver**: Automatically recalculates on content resize
- **Passive Listeners**: Scroll event listeners use `passive: true` for better performance

## Development
```bash
git clone https://github.com/TODOvue/tv-progress-bar.git
cd tv-progress-bar
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` and demo examples in `src/demo`.

## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License
MIT © TODOvue

### Attributions
Crafted for the TODOvue component ecosystem
