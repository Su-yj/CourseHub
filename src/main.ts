import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import SvgIcon from '@/components/SvgIcon.vue'
import '@/assets/js/iconfont.js'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/css/style.css'
import './assets/css/reset.css'
import 'element-plus/dist/index.css'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

const app = createApp(App)
app.use(router)
app.component('SvgIcon', SvgIcon)

app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
