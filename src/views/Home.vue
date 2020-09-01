<template>
  <div class="home">
    <HomeHeader class="home__section" />
    <HomeWelcome class="home__section" />
    <HomeClasses class="home__section" />
    <HomeNutrition class="home__section" />
  </div>
</template>

<script>
import HomeHeader from '@/components/organisms/HomeHeader.vue';
import HomeWelcome from '@/components/organisms/HomeWelcome.vue';
import HomeClasses from '@/components/organisms/HomeClasses.vue';
import HomeNutrition from '@/components/organisms/HomeNutrition.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeWelcome,
    HomeClasses,
    HomeNutrition,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .home__section {
    margin-bottom: 3rem;
  }
}
</style>
