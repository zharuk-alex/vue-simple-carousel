import { createApp } from 'vue'
import App from './App.vue'
import lazyload from './directives/lazyload'
const app = createApp(App)

const components = import.meta.globEager('@/components/Base/Base*.vue')

Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  app.component(componentName, definition.default)
})

app.directive('lazyload', lazyload)

app.mount('#app')


