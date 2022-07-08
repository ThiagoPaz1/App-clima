import Vue from 'vue';
import Vuex from 'vuex';
import { requestApi } from '@/services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    citys: [],
  },
  mutations: {
    defaultCitys(state, newValue) {
      state.citys = newValue;
    },
    addCity(state, newValue) {
      state.citys.push(newValue);
    }
  },
  actions: {
    async generating({ commit }) {
      const nameDefaultCitys = ['Maceió', 'Caruaru', 'São Paulo', 'Natal', 'Brasilia'];
      let dataDefaultCitys = [];

      for (let i in nameDefaultCitys) {
        const res = await requestApi(nameDefaultCitys[i]);
        dataDefaultCitys.push(res);
      }

      commit('defaultCitys', dataDefaultCitys);
      console.log(this.state.citys);
    }
  }
});