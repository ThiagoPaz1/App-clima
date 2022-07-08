<template>
  <div>
    <ul>
      <li :key="index" v-for="(city, index) in citysInitials.citys">
        <h3>Cidade: {{ city.city }}</h3>
        <h4>Tempo: {{ city.forecast[0].description }}</h4>
        <h4>Máxima: {{ city.forecast[0].max }}ºC</h4>
        <h4>Minima: {{ city.forecast[0].min }}ºC</h4>
        <h4>Dia: {{ city.forecast[0].date }}</h4>
        <div class="btn-group">
          <router-link :to="{ name: 'DetailsCity', params: { city } }">
            <button >Ver mais Detalhes</button>
          </router-link>
          <button class="btn-remove" @click="removeCity(city)">Remover cidade</button>
        </div>
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

<style scoped>
  div {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    display: flex;
    flex-direction: column;
    width: 350px;
    list-style: none;
    margin: 7.5px;
    padding: 10px;
    background-color: #81F7F3;
    border-radius: 5px;
  }
  h3, h4 {
    align-self: flex-start;
    margin-left: 10px; 
    background-color: #81F7F3;
  }
  h3 {
    margin-top: 5px;
  }
  h4 {
    margin-top: 2.5px;
    margin-bottom: 2.5px;
  }
  .btn-group {
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: #81F7F3;
  }
  a {
    background-color: #BDBDBD;
    border-radius: 5px;
  }
  a button {
    padding: 10px;
    font-weight: bold;
    font-size: 0.9em;
    border: none; 
    border-radius: 5px;
    cursor: pointer;
  }
  .btn-remove {
    margin-left: 25px;
    padding: 10px;
    font-weight: bold;
    font-size: 0.9em;
    border: none;
    border-radius: 5px;
    background-color: #FF0040;
    cursor: pointer; 
  }

</style>