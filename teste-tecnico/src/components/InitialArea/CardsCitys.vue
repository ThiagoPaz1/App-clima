<template>
  <div>
    <ul>
      <li :key="index" v-for="(city, index) in citysInitials.citys">
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
        const { citys, nameDefaultCitys } = this.citysInitials; 
        const findCityName = nameDefaultCitys.find(i => i === city.city_name);
        const indexCityName = nameDefaultCitys.indexOf(findCityName);
        const findCity = citys.find(i => i.city_name == city.city_name);
        const indexCity = citys.indexOf(findCity);
        
        nameDefaultCitys.splice(indexCityName, 1)
        citys.splice(indexCity, 1);
      }
    },
    computed: {
      citysInitials() {
        const { citys, nameDefaultCitys } = this.$store.state;
        const statesVuex = {citys, nameDefaultCitys}
        return statesVuex;
      }
    }
  }  
</script>