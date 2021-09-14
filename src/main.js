import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './axios'
// import store from "./vuex";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import VueMeta from 'vue-meta'

Vue.config.productionTip = false
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.use(VueMeta)
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
