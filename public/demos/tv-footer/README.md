<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Footer (TvFooter)
A simple, customizable, and responsive Vue 3 footer component with support for branding, navigation sections, social links, legal links, and SSR compatibility. Perfect for building professional footers in Single Page Apps and Server-Side Rendered environments like Nuxt 3.

[![npm](https://img.shields.io/npm/v/@todovue/tv-footer.svg)](https://www.npmjs.com/package/@todovue/tv-footer)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-footer.svg)](https://www.npmjs.com/package/@todovue/tv-footer)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-footer.svg)](https://www.npmjs.com/package/@todovue/tv-footer)
![License](https://img.shields.io/github/license/TODOvue/tv-footer)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-footer)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-footer)
![Node Version](https://img.shields.io/node/v/@todovue/tv-footer)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-footer)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-footer?style=social)

> Demo: https://ui.todovue.blog/footer

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 4 / SSR Usage](#nuxt-4--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Configuration Object](#configuration-object)
- [Composable API](#composable-api)
- [Usage Examples](#usage-examples)
- [Styling](#styling)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- Fully responsive grid layout (1 column on mobile, 2 on tablet, 4 on desktop)
- Customizable brand section with logo and version display
- Multiple navigation sections with titles and links
- Social media links with icon support
- Legal links section (Privacy, Terms, etc.)
- Dynamic copyright with automatic year replacement
- Light/Dark mode support built-in
- SSR-safe (works with Nuxt 3 and other SSR frameworks)
- Composable API (`useFooter`) for custom implementations
- Accessible and semantic HTML
- Lightweight and tree-shakeable
- TypeScript support

## Installation
Using npm:
```bash
npm install @todovue/tv-footer
```
Using yarn:
```bash
yarn add @todovue/tv-footer
```
Using pnpm:
```bash
pnpm add @todovue/tv-footer
```

### Importing Styles
**Important:** You must explicitly import the stylesheet in your application.

#### For Vue/Vite SPA:
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@todovue/tv-footer/style.css'
import { TvFooter } from '@todovue/tv-footer'

const app = createApp(App)
app.component('TvFooter', TvFooter)
app.mount('#app')
```

#### For Nuxt 3/4:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-footer/nuxt'
  ]
})
```

Then register the component in a plugin as shown in the [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage) section.

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import '@todovue/tv-footer/style.css'
import TvFooter from '@todovue/tv-footer'

createApp(App)
  .use(TvFooter) // enables <TvFooter /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { TvFooter } from '@todovue/tv-footer'
import '@todovue/tv-footer/style.css'

const footerConfig = {
  brand: {
    logo: 'https://example.com/logo.png',
    name: 'My Company',
    url: '/'
  },
  navigation: [
    {
      title: 'Product',
      items: [
        { label: 'Features', url: '/features' },
        { label: 'Pricing', url: '/pricing' }
      ]
    }
  ],
  copyright: '© {year} My Company. All rights reserved.'
}
</script>

<template>
  <div>
    <!-- Your page content -->
    
    <!-- Footer at the bottom -->
    <TvFooter :config="footerConfig" />
  </div>
</template>
```
**Note:** Don't forget to import the CSS in your main entry file as shown above.

## Nuxt 4 / SSR Usage
First, add the module to your `nuxt.config.ts`:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@todovue/tv-footer/nuxt']
})
```

Alternatively, you can manually add the CSS:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@todovue/tv-footer/style.css'],
})
```

Then create a plugin file: `plugins/tv-footer.client.ts`:
```ts
import { defineNuxtPlugin } from '#app'
import TvFooter from '@todovue/tv-footer'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvFooter)
})
```
Use anywhere in your Nuxt app:
```vue
<template>
  <div>
    <NuxtPage />
    
    <!-- Footer -->
    <TvFooter :config="footerConfig" />
  </div>
</template>

<script setup>
const footerConfig = {
  brand: {
    logo: 'https://example.com/logo.png',
    url: '/'
  },
  navigation: [
    {
      title: 'Product',
      items: [
        { label: 'Features', url: '/features' }
      ]
    }
  ],
  copyright: '© {year} My Company. All rights reserved.'
}
</script>
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvFooter } from '@todovue/tv-footer'
</script>
```

## Component Registration Options
| Approach                                                                 | When to use                                    |
|--------------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvFooter)`                                           | Many usages across app / design system install |
| Local named import `{ TvFooter }`                                        | Isolated / code-split contexts                 |
| Direct default import `import TvFooter from '@todovue/tv-footer'`        | Single usage or manual registration            |

## Props
| Prop   | Type   | Default | Description                                                    |
|--------|--------|---------|----------------------------------------------------------------|
| config | Object | `{}`    | Configuration object containing all footer data and settings.  |

### Prop Details

#### `config`
The main configuration object that defines all footer content including brand, navigation, social links, legal links, and copyright information. See [Configuration Object](#configuration-object) for detailed structure.

Example:
```vue
<TvFooter :config="myFooterConfig" />
```

## Events

| Event Name  | Payload | Description                                                                     |
|:------------|:--------|:--------------------------------------------------------------------------------|
| `subscribe` | `email` | Emitted when the user submits the newsletter form. Payload is the email string. |

## Slots
TvFooter provides slots to allow custom content injection for specific sections.

| Slot Name    | Props (Scope)                  | Description                                      |
|:-------------|:-------------------------------|:-------------------------------------------------|
| `brand`      | `{ brand, version }`           | Replace the brand/logo section                   |
| `newsletter` | `{ newsletter }`               | Replace the newsletter subscription section      |
| `bottom`     | `{ copyright, legal }`         | Replace the bottom section (copyright + legal)   |

Example Usage:
```vue
<TvFooter :config="config">
  <template #brand="{ brand }">
    <div class="custom-brand">
       <h1>{{ brand.name }}</h1>
    </div>
  </template>
</TvFooter>
```

## Configuration Object
The `config` prop accepts an object with the following structure:

### Brand Section
```ts
{
  brand: {
    logo: string,      // URL to logo image (optional)
    name: string,      // Brand name (optional, shown if no logo or alongside logo)
    url: string        // URL for brand link (default: '/')
  }
}
```

### Version Display
```ts
{
  version: string      // Version string to display (e.g., 'v2.4.0')
}
```

### Navigation Sections
```ts
{
  navigation: [
    {
      title: string,   // Section title
      items: [
        {
          label: string,  // Link text
          url: string     // Link URL
        }
      ]
    }
  ]
}
```

### Social Links
```ts
{
  social: [
    {
      label: string,     // Accessible label for the link
      url: string,       // Social media URL
      iconUrl: string,   // URL to icon image (optional)
      icon: string       // CSS class for icon (e.g., 'fab fa-github') (optional)
    }
  ]
}
```

### Legal Links
```ts
{
  legal: [
    {
      label: string,     // Link text (e.g., 'Privacy Policy')
      url: string        // Link URL
    }
  ]
}
```

### Copyright
```ts
{
  copyright: string    // Copyright text. Use {year} for automatic year replacement
}
```

### Newsletter Section
```ts
{
  newsletter: {
    title: string,       // Newsletter Title (optional)
    description: string, // Newsletter Description (optional)
    placeholder: string, // Input placeholder (optional)
    buttonText: string   // Button text (optional)
  }
}
```

### Back To Top
```ts
{
  backToTop: boolean   // Show back to top button (default: false)
}
```

### Complete Configuration Example
```js
const footerConfig = {
  brand: {
    logo: 'https://example.com/logo.png',
    name: 'MyApp',
    url: '/'
  },
  version: 'v2.4.0',
  navigation: [
    {
      title: 'Product',
      items: [
        { label: 'Features', url: '/features' },
        { label: 'Pricing', url: '/pricing' },
        { label: 'Showcase', url: '/showcase' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', url: '/docs' },
        { label: 'API Reference', url: '/api' },
        { label: 'Community', url: '/community' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', url: '/about' },
        { label: 'Blog', url: '/blog' },
        { label: 'Careers', url: '/careers' }
      ]
    }
  ],
  social: [
    {
      label: 'GitHub',
      url: 'https://github.com/mycompany',
      iconUrl: '/icons/github.svg'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/mycompany',
      icon: 'fab fa-twitter'
    }
  ],
  legal: [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
    { label: 'Cookie Policy', url: '/cookies' }
  ],
  copyright: '© {year} MyApp. All rights reserved.'
}
```

## Composable API
TvFooter includes a composable `useFooter` that you can use to process footer configuration and build custom footer implementations.

### `useFooter(config)`
```js
import { useFooter } from '@todovue/tv-footer'

const { brand, navigation, social, legal, version, copyright } = useFooter(config)
```

**Parameters:**
- `config` (Object): Footer configuration object

**Returns:**
- `brand` (ComputedRef): Processed brand configuration
- `navigation` (ComputedRef): Array of navigation sections
- `social` (ComputedRef): Array of social links
- `legal` (ComputedRef): Array of legal links
- `version` (ComputedRef): Version string
- `copyright` (ComputedRef): Copyright text with {year} replaced by current year

**Example:**
```vue
<script setup>
import { useFooter } from '@todovue/tv-footer'

const config = {
  brand: { name: 'MyApp', url: '/' },
  copyright: '© {year} MyApp. All rights reserved.'
}

const { brand, copyright } = useFooter(config)
</script>

<template>
  <footer>
    <div>
      <a :href="brand.url">{{ brand.name }}</a>
    </div>
    <div>{{ copyright }}</div>
  </footer>
</template>
```

**Features:**
- Automatic current year replacement in copyright text
- Safe defaults for missing configuration
- Reactive computed properties
- Type-safe array validation

## Usage Examples

### Minimal Footer
```vue
<script setup>
import { TvFooter } from '@todovue/tv-footer'
import '@todovue/tv-footer/style.css'

const config = {
  copyright: '© {year} My Company. All rights reserved.'
}
</script>

<template>
  <TvFooter :config="config" />
</template>
```

### Footer with Brand and Navigation
```vue
<script setup>
import { TvFooter } from '@todovue/tv-footer'
import '@todovue/tv-footer/style.css'

const config = {
  brand: {
    logo: 'https://example.com/logo.png',
    name: 'MyApp',
    url: '/'
  },
  version: 'v1.0.0',
  navigation: [
    {
      title: 'Product',
      items: [
        { label: 'Features', url: '/features' },
        { label: 'Pricing', url: '/pricing' }
      ]
    },
    {
      title: 'Support',
      items: [
        { label: 'Help Center', url: '/help' },
        { label: 'Contact', url: '/contact' }
      ]
    }
  ],
  copyright: '© {year} MyApp. All rights reserved.'
}
</script>

<template>
  <TvFooter :config="config" />
</template>
```

### Complete Footer with Social & Legal Links
```vue
<script setup>
import { TvFooter } from '@todovue/tv-footer'
import '@todovue/tv-footer/style.css'
import GitHubIcon from './assets/github.svg'
import TwitterIcon from './assets/twitter.svg'

const config = {
  brand: {
    logo: 'https://example.com/logo.png',
    name: 'MyApp',
    url: '/'
  },
  version: 'v2.4.0',
  navigation: [
    {
      title: 'Product',
      items: [
        { label: 'Features', url: '/features' },
        { label: 'Pricing', url: '/pricing' },
        { label: 'Showcase', url: '/showcase' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { label: 'Documentation', url: '/docs' },
        { label: 'API Reference', url: '/api' },
        { label: 'Community', url: '/community' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', url: '/about' },
        { label: 'Blog', url: '/blog' },
        { label: 'Careers', url: '/careers' }
      ]
    }
  ],
  social: [
    {
      label: 'GitHub',
      url: 'https://github.com/mycompany',
      iconUrl: GitHubIcon
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/mycompany',
      iconUrl: TwitterIcon
    }
  ],
  legal: [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
    { label: 'Cookie Policy', url: '/cookies' }
  ],
  copyright: '© {year} MyApp. All rights reserved.'
}
</script>

<template>
  <div>
    <!-- Your page content -->
    <main>
      <!-- ... -->
    </main>
    
    <!-- Footer -->
    <TvFooter :config="config" />
  </div>
</template>
```

### Using Icon Libraries (Font Awesome, etc.)
```vue
<script setup>
import { TvFooter } from '@todovue/tv-footer'
import '@todovue/tv-footer/style.css'

const config = {
  social: [
    {
      label: 'GitHub',
      url: 'https://github.com/mycompany',
      icon: 'fab fa-github'  // Font Awesome class
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/mycompany',
      icon: 'fab fa-twitter'  // Font Awesome class
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/company/mycompany',
      icon: 'fab fa-linkedin'  // Font Awesome class
    }
  ],
  copyright: '© {year} MyApp. All rights reserved.'
}
</script>

<template>
  <TvFooter :config="config" />
</template>
```

### Custom Implementation with Composable
```vue
<script setup>
import { useFooter } from '@todovue/tv-footer'

const config = {
  brand: {
    name: 'MyApp',
    url: '/'
  },
  navigation: [
    {
      title: 'Links',
      items: [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about' }
      ]
    }
  ],
  copyright: '© {year} MyApp. All rights reserved.'
}

const { brand, navigation, copyright } = useFooter(config)
</script>

<template>
  <footer class="custom-footer">
    <div class="custom-footer__brand">
      <a :href="brand.url">{{ brand.name }}</a>
    </div>
    
    <nav v-for="(section, index) in navigation" :key="index">
      <h4>{{ section.title }}</h4>
      <ul>
        <li v-for="(link, i) in section.items" :key="i">
          <a :href="link.url">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
    
    <div class="custom-footer__copyright">
      {{ copyright }}
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  /* Your custom styles */
}
</style>
```

## Styling
TvFooter comes with built-in responsive styles and light/dark mode support.

### Built-in Features
- **Responsive Grid Layout**:
  - Mobile (< 640px): 1 column
  - Tablet (≥ 640px): 2 columns
  - Desktop (≥ 1024px): 4 columns
- **Dark Mode Support**: Automatically adapts to `.dark-mode` class on parent
- **Light Mode Support**: Adapts to `.light-mode` class on parent
- **Hover Effects**: Smooth transitions on links and social icons
- **Backdrop Blur**: Modern glassmorphism effect on social icons

### Customization
You can override the default styles by targeting the CSS classes:

```css
/* Override brand logo size */
.tv-footer__logo img {
  height: 80px;
}

/* Change link colors */
.tv-footer__link {
  color: #your-color;
}

.tv-footer__link:hover {
  color: #your-hover-color;
}

/* Customize social icons */
.tv-footer__social-link {
  background-color: #your-background;
}

/* Adjust spacing */
.tv-footer {
  padding: 3rem 1rem;
}

/* Customize container max-width */
.tv-footer__container {
  max-width: 1400px;
}
```

### Available CSS Classes
- `.tv-footer` - Main footer container
- `.tv-footer__container` - Inner grid container
- `.tv-footer__brand` - Brand section
- `.tv-footer__logo` - Brand logo/name link
- `.tv-footer__version` - Version display
- `.tv-footer__section` - Navigation or social section
- `.tv-footer__section-title` - Section title
- `.tv-footer__links` - List of links
- `.tv-footer__link` - Individual link
- `.tv-footer__social` - Social links container
- `.tv-footer__social-link` - Individual social link
- `.tv-footer__social-icon-img` - Social icon image
- `.tv-footer__bottom` - Bottom section with copyright and legal
- `.tv-footer__legal` - Legal links container

## Accessibility
- **Semantic HTML**: Uses proper `<footer>`, `<nav>`, `<ul>`, and `<a>` elements
- **ARIA Labels**: Social links include accessible labels
- **External Link Safety**: Social links include `rel="noopener noreferrer"` for security
- **Keyboard Navigation**: All links are keyboard accessible
- **Focus States**: Clear focus indicators for keyboard navigation
- **Screen Reader Friendly**: Proper heading hierarchy and semantic structure
- **Alternative Text**: Images include alt attributes

## SSR Notes
- **SSR-Safe**: No direct `window`/`document` access during module evaluation
- **Nuxt 3 Compatible**: Works seamlessly with Nuxt 3 out of the box
- **Hydration Safe**: No hydration mismatches
- **Universal Rendering**: Works in both client and server contexts
- **Vue 3 Composition API**: Uses modern Vue 3 composables

## Development
```bash
git clone https://github.com/TODOvue/tv-footer.git
cd tv-footer
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
