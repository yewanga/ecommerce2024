import './assets/main.css'

import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'virtual:windi.css'
import router from "@/router/index.js";

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

