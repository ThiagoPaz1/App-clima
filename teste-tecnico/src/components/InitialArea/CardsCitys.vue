<template>
  <div>
    <ul>
      <li :key="index" v-for="(city, index) in citysInitials">
        <h3>Cidade: {{ city.city }}</h3>
        <h4>Tempo: {{ city.forecast[0].description }}</h4>
        <h4>Máxima: {{ city.forecast[0].max }}ºC</h4>
        <h4>Minima: {{ city.forecast[0].min }}ºC</h4>
        <h4>Dia: {{ city.forecast[0].date }}</h4>
        <button @click="removeCity(city)">Remover cidade</button>
        <router-link :to="{ name: 'DetailsCity', params: { city } }">
          <button>Ver mais Detalhes</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CardsCitys',
    methods: {
      removeCity(city) {
        const { citysInitials } = this;
        const findCity = citysInitials.find((el) => el.city_name == city.city_name);
        const indexCity = citysInitials.indexOf(findCity);

        citysInitials.splice(indexCity, 1);
      }
    },
    computed: {
      citysInitials() {
        return this.$store.state.citys;
      }
    }
  }  
</script>