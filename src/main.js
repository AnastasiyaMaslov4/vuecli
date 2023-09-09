import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'
import store from './assets/store'
import router from '@/router'

createApp(App).use(store).use(router).mount('#app')
