import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Pricing from '../views/Pricing.vue';
import PulsarOnline from '../views/PulsarOnline.vue';
import OnlineLogin from '../views/OnlineLogin.vue';
import RequestAccount from '../views/RequestAccount.vue';

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
    path: '/online',
    name: 'Pūlsar Online',
    component: PulsarOnline,
  },
  {
    path: '/online-login',
    name: 'Pūlsar Online Login',
    component: OnlineLogin,
  },
  {
    path: '/nueva-cuenta',
    name: 'Pūlsar Online - Nueva Cuenta',
    component: RequestAccount,
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
