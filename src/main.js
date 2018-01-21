import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router: router
})
