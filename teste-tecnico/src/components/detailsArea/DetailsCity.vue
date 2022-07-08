<template>
  <div>
    <h1>Historico de temperaturas</h1>
    <h3>Cidade: {{ params.city }}</h3>
    <apexChart 
      width="500"
      type="line"
      :options="options"
      :series="series" 
    />
    <router-link to="/">
      <button>Voltar a tela inicial</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'DetailsCity',
    computed: {
      params() {
        return this.$route.params.city;
      },
      options() {
        const { forecast } = this.params;
        const dates = forecast.map(i => i.date).splice(0, 5);
        const getOptions = {
          stroke: {
           curve: 'smooth',
          },
          xaxis: {
            categories: dates
          }
        }

        return getOptions;
      },
      series() {
        const { forecast } = this.params;
        const max = forecast.map(i => i.max).splice(0, 5);
        const min = forecast.map(i => i.min).splice(0, 5);
        const getSeries = [
          {
            name: ' Temperatura máxima',
            data: max
          },
          {
            name: 'Temperatura minima',
            data: min
          },
        ]

        return getSeries;
      }
    }
  }
</script>

<style scoped>
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
    background-color: #BDBDBD;
  }
</style>