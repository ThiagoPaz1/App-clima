<template>
  <div>
    <input v-model="text" type="text" placeholder="Digite o nome de uma cidade">
    <button @click="add">Adicionar</button>
  </div>
</template>

<script>
  import { requestApi } from '@/services';
  export default {
    name: 'AddNewCity',
    data() {
      return {
        text: '',
      }
    },
    methods: {
      async add() {
        const { citys } = this.$store.state;
        const checkNameCity = citys.find(i => i.city_name === this.text);

        if (!this.text) {
         return alert('É necessário o nome de uma cidade'); 
        } else if (checkNameCity) {
          return alert('Essa cidade já esta listada');
        } else {
          const result = await requestApi(this.text);

          this.$store.commit('addCity', result);
          this.$store.commit('addCity', result);
          this.text = '';
        }
      }
    }
  }
</script>