<template>
  <div>
    <ul>
      <li :key="index" v-for="(city, index) in citysInitials">
        <h3>Cidade: {{ city.city }}</h3>
        <h4>Tempo: {{ city.forecast[0].description }}</h4>
        <h4>Máxima: {{ city.forecast[0].max }}ºC</h4>
        <h4>Minima: {{ city.forecast[0].min }}ºC</h4>
        <h4>Dia: {{ city.forecast[0].date }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CardsCitys',
    computed: {
      citysInitials() {
        return this.$store.state.citys;
      }
    }
  }  
</script>