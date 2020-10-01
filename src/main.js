import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

// eslint-disable-next-line vue/require-name-property
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
