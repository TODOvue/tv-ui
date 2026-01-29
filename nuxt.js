import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-ui',
    configKey: 'tvUi'
  },
  async setup(_options, nuxt) {
    const {createRequire} = await import('module');
    const require = createRequire(import.meta.url);
    
    nuxt.options.vite.resolve = nuxt.options.vite.resolve || {};
    nuxt.options.vite.resolve.alias = nuxt.options.vite.resolve.alias || {};
    
    Object.assign(nuxt.options.vite.resolve.alias, {
      'highlight.js': require.resolve('highlight.js').replace('index.js', 'common.js'),
      'markdown-it': require.resolve('markdown-it').replace('index.js', 'dist/markdown-it.min.js'),
      'vue3-markdown-it': require.resolve('vue3-markdown-it')
    });
    
    const alertCss = '@todovue/tv-alert/style.css';
    const articleCss = '@todovue/tv-article/style.css';
    const breadcrumbsCss = '@todovue/tv-breadcrumbs/style.css';
    const cardCss = '@todovue/tv-card/style.css';
    const footerCss = '@todovue/tv-footer/style.css';
    const labelCss = '@todovue/tv-label/style.css';
    const modalCss = '@todovue/tv-modal/style.css';
    const buttonCss = '@todovue/tv-button/style.css';
    const demoCss = '@todovue/tv-demo/style.css';
    const heroCss = '@todovue/tv-hero/style.css';
    const menuCss = '@todovue/tv-menu/style.css';
    const paginationCss = '@todovue/tv-pagination/style.css';
    const progressBarCss = '@todovue/tv-progress-bar/style.css';
    const scrollTopCss = '@todovue/tv-scroll-top/style.css';
    const searchCss = '@todovue/tv-search/style.css';
    const settingsCss = '@todovue/tv-settings/style.css';
    const sidebarCss = '@todovue/tv-sidebar/style.css';
    const themeButtonCss = '@todovue/tv-theme-button/style.css';
    const tocCss = '@todovue/tv-toc/style.css';
    
    const pushUnique = (path) => {
      if (!nuxt.options.css.includes(path)) {
        nuxt.options.css.push(path);
      }
    };
    
    [
      alertCss,
      articleCss,
      breadcrumbsCss,
      cardCss,
      footerCss,
      labelCss,
      modalCss,
      buttonCss,
      demoCss,
      heroCss,
      menuCss,
      paginationCss,
      progressBarCss,
      scrollTopCss,
      searchCss,
      settingsCss,
      sidebarCss,
      themeButtonCss,
      tocCss
    ].forEach(pushUnique);
  }
})
