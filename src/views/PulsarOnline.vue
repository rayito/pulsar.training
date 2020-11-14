<template>
  <component v-bind:is="currentComponent"></component>
</template>

<script>
import PulsarOnlineHome from '@/components/organisms/PulsarOnlineHome.vue';

export default {
  name: 'PulsarOnline',
  components: {
    PulsarOnlineHome,
  },
  data() {
    return {
      currentComponent: 'PulsarOnlineHome',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
