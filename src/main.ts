import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/style.css'
import './assets/css/reset.css'
import 'element-plus/dist/index.css'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

const app = createApp(App)
app.use(router)

app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
