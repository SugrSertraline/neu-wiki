import './assets/main.css'

import { createApp, h, type VNode  } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
import App from './App.vue'
import router from './router';
import 'animate.css';

const app = createApp(App);
const pinia = createPinia();
app.use(naive)
app.use(pinia)
app.use(router)
app.mount('#app')
