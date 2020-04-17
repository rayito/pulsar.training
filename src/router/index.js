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
