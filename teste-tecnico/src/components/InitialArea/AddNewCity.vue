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

        if (!this.text || this.text.length < 4) {
         return alert('É necessário um nome valido de uma cidade'); 
        } else if (checkNameCity) {
          return alert('Essa cidade já esta listada');
        } else {
          const result = await requestApi(this.text);

          this.$store.commit('addCity', result);
          this.$store.commit('addNameCity', this.text);
          this.text = '';
        }
      }
    }
  }
</script>

<style scoped>
  input {
    width: 850px;
    padding: 10px;
    font-size: 1em;
    border: 1px #BDBDBD solid;
    border-radius: 5px;
  }
  button {
    margin-left: 5px;
    padding: 10px;
    font-weight: bold;
    font-size: 1em;
    border: none; 
    border-radius: 4px;
    cursor: pointer;
    background-color: #BDBDBD;
  }
</style>