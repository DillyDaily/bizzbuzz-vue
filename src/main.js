import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';
import VueRouter from 'vue-router';
import Routes from './routes';
import Vuetify from 'vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://localhost:8000';

const router = new VueRouter({
  routes: Routes
});

new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router: router
})
