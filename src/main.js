import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'
import store from './assets/store'

createApp(App).use(store).mount('#app')
