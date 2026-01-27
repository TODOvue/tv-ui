import { createApp } from 'vue'
import { router } from './router/index.js'
import './style.scss'
import TvUi from './App.vue'

import '@todovue/tv-demo/style.css'

const app = createApp(TvUi)
app.use(router)
app.mount('#tv-ui')
