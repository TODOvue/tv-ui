import type { App, Plugin } from 'vue'
import './style.scss'

import { TvAlert } from '@todovue/tv-alert'
import { TvArticle } from '@todovue/tv-article'
import { TvBreadcrumbs } from '@todovue/tv-breadcrumbs'
import { TvButton } from '@todovue/tv-button'
import { TvCard } from '@todovue/tv-card'
import { TvDemo } from '@todovue/tv-demo'
import { TvFooter } from '@todovue/tv-footer'
import { TvHero } from '@todovue/tv-hero'
import { TvLabel } from '@todovue/tv-label'
import { TvMenu } from '@todovue/tv-menu'
import { TvModal } from '@todovue/tv-modal'
import { TvPagination } from '@todovue/tv-pagination'
import { TvProgressBar } from '@todovue/tv-progress-bar'
import { TvRelativeTime } from '@todovue/tv-relative-time'
import { TvScrollTop } from '@todovue/tv-scroll-top'
import { TvSearch } from '@todovue/tv-search'
import { TvSettings } from '@todovue/tv-settings'
import { TvSidebar } from '@todovue/tv-sidebar'
import { TvThemeButton } from '@todovue/tv-theme-button'
import { TvToc } from '@todovue/tv-toc'

const components = [
  TvAlert,
  TvArticle,
  TvBreadcrumbs,
  TvButton,
  TvCard,
  TvDemo,
  TvFooter,
  TvHero,
  TvLabel,
  TvMenu,
  TvModal,
  TvPagination,
  TvProgressBar,
  TvRelativeTime,
  TvScrollTop,
  TvSearch,
  TvSettings,
  TvSidebar,
  TvThemeButton,
  TvToc
]

const install = (app: App) => {
  components.forEach(component => {
    if (component.name) {
      app.component(component.name, component)
    }
  })
}

export {
  TvAlert,
  TvArticle,
  TvBreadcrumbs,
  TvButton,
  TvCard,
  TvDemo,
  TvFooter,
  TvHero,
  TvLabel,
  TvMenu,
  TvModal,
  TvPagination,
  TvProgressBar,
  TvRelativeTime,
  TvScrollTop,
  TvSearch,
  TvSettings,
  TvSidebar,
  TvThemeButton,
  TvToc
}

export const TvUi: Plugin = {
  install
}

export default TvUi

declare module 'vue' {
  export interface GlobalComponents {
    TvAlert: typeof TvAlert;
    TvArticle: typeof TvArticle;
    TvBreadcrumbs: typeof TvBreadcrumbs;
    TvButton: typeof TvButton;
    TvCard: typeof TvCard;
    TvDemo: typeof TvDemo;
    TvFooter: typeof TvFooter;
    TvHero: typeof TvHero;
    TvLabel: typeof TvLabel;
    TvMenu: typeof TvMenu;
    TvModal: typeof TvModal;
    TvPagination: typeof TvPagination;
    TvProgressBar: typeof TvProgressBar;
    TvRelativeTime: typeof TvRelativeTime;
    TvScrollTop: typeof TvScrollTop;
    TvSearch: typeof TvSearch;
    TvSettings: typeof TvSettings;
    TvSidebar: typeof TvSidebar;
    TvThemeButton: typeof TvThemeButton;
    TvToc: typeof TvToc;
  }
}
