import Vue from 'vue';
import VueRouter from 'vue-router';
import userLog from '@/services/userLog';
import Home from '../views/Home.vue';
import Pricing from '../views/Pricing.vue';
import OnlinePreview from '../views/OnlinePreview.vue';
import OnlineLogin from '../views/OnlineLogin.vue';
import RequestAccount from '../views/RequestAccount.vue';
import PulsarOnline from '../views/PulsarOnline.vue';
import PulsarOnlineChangePass from '../views/PulsarOnlineChangePass.vue';
import PulsarOnlineWod from '../views/PulsarOnlineWod.vue';

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
    path: '/pulsar-online/cambiar-contraseña',
    name: 'Cambio de contraseña',
    component: PulsarOnlineChangePass,
  },
  {
    path: '/pulsar-online/pizarra/:date',
    name: 'Pizarra',
    component: PulsarOnlineWod,
    props: true,
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
  if (to.path.includes('pulsar-online')) {
    userLog.checkLogin().then((result) => {
      if (result === true) {
        next();
      } else {
        next({ path: '/online/login' });
      }
    });
  } else if (to.path === '/online') {
    userLog.checkLogin().then((result) => {
      if (result === true) {
        next({ path: '/pulsar-online' });
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router;
