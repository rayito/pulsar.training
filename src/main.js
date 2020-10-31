import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import { MdField, MdButton } from 'vue-material/dist/components';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vue-material/dist/vue-material.min.css';
import App from './App.vue';

Vue.use(MdField);
Vue.use(MdButton);

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  // set observer to true
  observer: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
