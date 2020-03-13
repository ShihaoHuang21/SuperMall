import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Axios,
  render: h => h(App)
}).$mount('#app')