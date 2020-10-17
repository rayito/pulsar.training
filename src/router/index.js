import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Pricing from '../views/Pricing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/precios',
    name: 'Precios',
    component: Pricing,
  },
  {
    path: '/building',
    name: 'Construcsió',
    component: () => import('../views/Construcsio.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
