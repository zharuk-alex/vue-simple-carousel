import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

const components = import.meta.globEager('@/components/Base*.vue')

Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  app.component(componentName, definition.default)
})

app.mount('#app')


