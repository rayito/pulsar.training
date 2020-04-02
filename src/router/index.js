import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import WodView from '../views/WodView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/today-wod',
    name: 'WOD de hoy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WodView.vue'),
  },
  {
    path: '/building',
    name: 'Construcsió',
    component: () => import('../views/Construcsio.vue'),
  },
  {
    path: '/wod/:date',
    name: 'WOD',
    component: WodView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
