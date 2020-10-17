<template>
  <main class="home">
    <HomeHeader class="home__section home__header" />
    <HomeWelcome class="home__section home__section--side-section" />
    <HomeClasses class="home__section" />
    <HomePro class="home__section" />
    <HomeNutrition class="home__section home__section--side-section" />
    <HomeFooter class="home__section" />
  </main>
</template>

<script>
import HomeHeader from '@/components/organisms/HomeHeader.vue';
import HomeWelcome from '@/components/organisms/HomeWelcome.vue';
import HomeClasses from '@/components/organisms/HomeClasses.vue';
import HomePro from '@/components/organisms/HomePro.vue';
import HomeNutrition from '@/components/organisms/HomeNutrition.vue';
import HomeFooter from '@/components/organisms/HomeFooter.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeWelcome,
    HomeClasses,
    HomePro,
    HomeNutrition,
    HomeFooter,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .home__section {
    margin-bottom: 3rem;

    @include respond-to(not-phone) {
      margin-bottom: 4rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .home__section--side-section {
    @include respond-to(tablet) {
      margin-bottom: 2rem;
    }
    @include respond-to(descop) {
      margin-bottom: 10rem;
    }
  }
}
</style>
