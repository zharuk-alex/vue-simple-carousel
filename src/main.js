import { createApp } from 'vue'
import App from './App.vue'
import lazyload from './directives/lazyload'
import Vue3TouchEvents from "vue3-touch-events";


import "@/scss/app.scss"


const app = createApp(App)
const components = import.meta.globEager('@/components/Base/Base*.vue')

Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  app.component(componentName, definition.default)
})

app.directive('lazyload', lazyload)
app.use(Vue3TouchEvents)
app.mount('#app')


