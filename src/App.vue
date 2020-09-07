<template>
  <div id="app">
    <NavBar />
    <router-view/>
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
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Chromoxome';
  font-style: oblique;
  font-weight: 100;
  src: url("./assets/fonts/ChromoxomePro-ExtraLightOblique.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-ExtraLightOblique.woff") format('woff');
}

@font-face {
  font-family: 'Chromoxome';
  font-style: normal;
  font-weight: 100;
  src: url("./assets/fonts/ChromoxomePro-ExtraLight.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-ExtraLight.woff") format('woff');
}

@font-face {
  font-family: 'Chromoxome';
  font-style: oblique;
  font-weight: 300;
  src: url("./assets/fonts/ChromoxomePro-LightOblique.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-LightOblique.woff") format('woff');
}

@font-face {
  font-family: 'Chromoxome';
  font-style: normal;
  font-weight: 300;
  src: url("./assets/fonts/ChromoxomePro-Light.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-Light.woff") format('woff');
}

@font-face {
  font-family: 'Chromoxome';
  font-style: oblique;
  font-weight: 500;
  src: url("./assets/fonts/ChromoxomePro-MediumOblique.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-MediumOblique.woff") format('woff');
}

@font-face {
  font-family: 'Chromoxome';
  font-style: normal;
  font-weight: 500;
  src: url("./assets/fonts/ChromoxomePro-Medium.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-Medium.woff") format('woff');
}

@font-face {
  font-family: 'Chromoxome';
  font-style: oblique;
  font-weight: 700;
  src: url("./assets/fonts/ChromoxomePro-SemiBoldOblique.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-SemiBoldOblique.woff") format('woff');
}

@font-face {
  font-family: 'Chromoxome';
  font-style: oblique;
  font-weight: 900;
  src: url("./assets/fonts/ChromoxomePro-BoldOblique.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-BoldOblique.woff") format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-weight: 300;
  src: url("./assets/fonts/Roboto-Light.ttf") format('ttf');
}

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  color: #2c3e50;
  background: $bg-black;
  min-height: 100vh;
}
</style>
