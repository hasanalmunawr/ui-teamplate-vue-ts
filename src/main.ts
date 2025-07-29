import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initializeTheme } from '@/composable/useAppearance';

initializeTheme(); // pastikan ini jalan dulu, supaya <html> dapat class `dark`

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
