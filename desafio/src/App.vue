<template>
  <v-app>
    <v-main>
      <v-container>
      <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
      <div class="text-h2">
            {{ slide }} Slide
          </div>    
        </v-row>
      
    </v-carousel-item>
  </v-carousel>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
   return {
     slides: [1, 2, 3]
   }
  },
};
</script>
