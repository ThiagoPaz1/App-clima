import Vue from "vue";
import VueRouter from "vue-router";
import MainArea from '@/components/InitialArea/MainArea';
import DetailsCity from '@/components/detailsArea/DetailsCity';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainArea',
    component: MainArea,
  },
  {
    path: '/details',
    name: 'DetailsCity',
    component: DetailsCity,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router