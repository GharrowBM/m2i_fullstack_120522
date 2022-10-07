import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import router from './routing.js'

import App from './App.vue'

createApp(App).use(router).mount('#app')
