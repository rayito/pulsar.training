<template>
  <div id="app">
    <NavBar />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/organisms/NavBar.vue';
import Footer from '@/components/organisms/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      transitionName: 'slide-left', 
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log('PEPE JODER');
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    next();
  },
};
</script>

<style lang="scss">
@import '~@/scss/App.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  color: #2c3e50;
  background: $bg-black;
  min-height: 100vh;
}

@include respond-to(not-phablet) {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
