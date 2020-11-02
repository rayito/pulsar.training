import Vue from 'vue';
import VueRouter from 'vue-router';
import userLog from '@/services/userLog';
import Home from '../views/Home.vue';
import Pricing from '../views/Pricing.vue';
import OnlinePreview from '../views/OnlinePreview.vue';
import OnlineLogin from '../views/OnlineLogin.vue';
import RequestAccount from '../views/RequestAccount.vue';
import PulsarOnline from '../views/PulsarOnline.vue';

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
    component: OnlinePreview,
  },
  {
    path: '/online/login',
    name: 'Pūlsar Online Login',
    component: OnlineLogin,
  },
  {
    path: '/online/nueva-cuenta',
    name: 'Pūlsar Online - Nueva Cuenta',
    component: RequestAccount,
  },
  {
    path: '/pulsar-online',
    name: 'Pūlsar Online',
    component: PulsarOnline,
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

router.beforeEach((to, from, next) => {
  if (to.path === '/pulsar-online' && !userLog.checkLogin()) {
    next({ path: '/online/login' });
  } else {
    next();
  } 
});

export default router;
