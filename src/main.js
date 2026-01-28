import { createApp } from 'vue'
import { router } from './router/index.js'

import { TvMenu } from '@todovue/tv-menu'
import { TvCard } from '@todovue/tv-card'
import { TvScrollTop } from '@todovue/tv-scroll-top'
import { TvFooter } from '@todovue/tv-footer'

import "@todovue/tv-alert/style.css"
import "@todovue/tv-article/style.css"
import "@todovue/tv-breadcrumbs/style.css"
import "@todovue/tv-card/style.css"
import "@todovue/tv-footer/style.css"
import "@todovue/tv-label/style.css"
import "@todovue/tv-modal/style.css"
import '@todovue/tv-button/style.css'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-hero/style.css'
import '@todovue/tv-menu/style.css'
import '@todovue/tv-pagination/style.css'
import '@todovue/tv-progress-bar/style.css'
import '@todovue/tv-scroll-top/style.css'
import '@todovue/tv-search/style.css'
import '@todovue/tv-settings/style.css'
import '@todovue/tv-sidebar/style.css'
import '@todovue/tv-theme-button/style.css'
import '@todovue/tv-toc/style.css'

import './style.scss'
import TvUi from './App.vue'

const app = createApp(TvUi)
app.use(router)
app.component('tv-menu', TvMenu)
app.component('tv-card', TvCard)
app.component('tv-scroll-top', TvScrollTop)
app.component('tv-footer', TvFooter)
app.mount('#tv-ui')
