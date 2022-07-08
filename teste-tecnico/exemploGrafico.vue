<template>
  <v-app>
   <apexChart width="500" type="line" :options="options" :series="series"></apexChart>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
     options: {
       categories: [1, 2, 3, 4, 5]
     },
     series:[{
      data: [1, 2, 3, 4, 5]
    }]
   }
  },
};
</script>
