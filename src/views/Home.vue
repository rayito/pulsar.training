<template>
  <div class="home">
    <HomeHeader :class="home__homeheader" />
    <Welcome />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    Welcome,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .home-header {
    margin-bottom: 3rem;
  }
}
</style>
