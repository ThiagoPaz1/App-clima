<template>
  <div>
    <section>
      <MainArea />
    </section>
  </div>
</template>

<script>
  import MainArea from '@/components/InitialArea/MainArea.vue';

  export default {
    name: 'InitialAndDetailsArea',
    components: {
      MainArea
    }
  }
</script>