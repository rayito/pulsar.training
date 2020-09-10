import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

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
