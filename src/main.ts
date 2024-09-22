import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import App from './App.vue'
import router from './router';


const app = createApp(App);
const pinia = createPinia();
app.use(router)

app.use(naive)
app.use(pinia)
app.mount('#app')
