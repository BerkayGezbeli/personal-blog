import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import { routes } from './routes.js';
import { store } from './store/store.js' //main dosyada import edilir. 

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
