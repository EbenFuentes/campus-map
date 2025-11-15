import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
