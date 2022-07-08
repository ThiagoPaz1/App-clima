<template>
  <div>
    <header>
      <h1>Veja as previsões do tempo de diversas cidades</h1>
    </header>
    <main>
      <AddNewCity />
      <CardsCitys />
    </main>
  </div>
</template>

<script>
  import CardsCitys from './CardsCitys.vue';
  import AddNewCity from './AddNewCity.vue';

  export default {
    name: 'MainArea',
    components: {
      CardsCitys,
      AddNewCity
    },
    mounted() {
      this.$store.dispatch('generating');
    },
  }
</script>