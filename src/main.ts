import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './assets/mock'

Vue.use(VueLazyload, { preLoad: 1 })

Vue.config.productionTip = false

const app: Vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

export default app
