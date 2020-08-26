<template>
  <div class="wods">
    <img alt="Vue logo" class="logo" src="../assets/pulsar_vtb_logo.svg">
    <WodList />
  </div>
</template>

<script>
// @ is an alias to /src
import WodList from '@/components/WodList.vue';

export default {
  name: 'Wods',
  components: {
    WodList,
  },
};
</script>

<style lang="scss" scoped>
  .logo {
    width: 100%;
    max-width: 700px;
    margin: 1rem auto;
    padding: 0 1rem;
  }
</style>
