import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/main'
import store from './store/main'
import './permission' // permission  权限控制
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app=createApp(App)

app.use(ElementPlus)
app.use(router);
app.use(store)

app.mount('#app')