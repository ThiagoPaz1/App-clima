import Vue from 'vue';
import App from './App.vue';
import VueApexCharts from 'vue-apexcharts';
import store from '@/store/index';
import router from '@/router/index';

Vue.use(VueApexCharts);
Vue.component('apexChart', VueApexCharts);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
