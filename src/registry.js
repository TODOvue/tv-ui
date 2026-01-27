export const componentRegistry = {
  'alert': () => import('@todovue/tv-alert/demo'),
  'button': () => import('@todovue/tv-button/demo'),
  'demo': () => import('@todovue/tv-demo/demo'),
  'hero': () => import('@todovue/tv-hero/demo'),
  'label': () => import('@todovue/tv-label/demo'),
  'modal': () => import('@todovue/tv-modal/demo'),
  'relativetime': () => import('@todovue/tv-relative-time/demo'),
  'themebutton': () => import('@todovue/tv-theme-button/demo'),
};
