import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueResponsiveness } from 'vue-responsiveness'
import { vue3Spinner } from 'vue3-spinner'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueResponsiveness, {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1260,
  xl: 1920
})
app.use(vue3Spinner)

app.mount('#app')
