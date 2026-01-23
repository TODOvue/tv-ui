import type { App, Plugin } from 'vue'
import _TvUi from './components/TvUi.vue'
import './style.scss'

const TvUi = _TvUi as typeof _TvUi & Plugin;
TvUi.install = (app: App) => {
  app.component('TvUi', TvUi)
};

export { TvUi }

export const TvUiPlugin: Plugin = {
  install: TvUi.install
};
export default TvUi;

declare module 'vue' {
  export interface GlobalComponents {
    TvUi: typeof TvUi;
  }
}
