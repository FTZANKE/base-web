import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import components from '@/components'
import pinia from '@/stores'
import 'normalize.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'virtual:svg-icons-register'
import '@/assets/styles/index.scss'
import i18n from '@/i18n'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(components)
app.use(pinia)
app.mount('#app')
