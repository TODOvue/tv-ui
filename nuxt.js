
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-ui',
    configKey: 'tvUi'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-ui/style.css';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
