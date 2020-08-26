<template>
  <div class="home">
    <SideFloat />
    <HomeHeader />
  </div>
</template>

<script>
import SideFloat from '@/components/SideFloat.vue';
import HomeHeader from '@/components/HomeHeader.vue';

export default {
  name: 'Home',
  components: {
    SideFloat,
    HomeHeader,
  },
};
</script>

<style lang="scss" scoped>
  
</style>
