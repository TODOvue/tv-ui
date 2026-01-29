import { createApp } from 'vue'
import { router } from './router/index.js'

import { TvMenu } from '@todovue/tv-menu'
import { TvCard } from '@todovue/tv-card'
import { TvScrollTop } from '@todovue/tv-scroll-top'
import { TvFooter } from '@todovue/tv-footer'
import { TvProgressBar } from '@todovue/tv-progress-bar'

import './style.scss'
import TvUi from './App.vue'

const app = createApp(TvUi)
app.use(router)
app.component('tv-menu', TvMenu)
app.component('tv-card', TvCard)
app.component('tv-scroll-top', TvScrollTop)
app.component('tv-footer', TvFooter)
app.component('tv-progress-bar', TvProgressBar)
app.mount('#tv-ui')
