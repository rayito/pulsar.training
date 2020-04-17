<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/wod/today-wod">WOD de hoy</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
  font-style: oblique;
  font-weight: 300;
  src: url("./assets/fonts/ChromoxomePro-LightOblique.woff2") format('woff2'),
       url("./assets/fonts/ChromoxomePro-LightOblique.woff") format('woff');
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
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: center;
  color: #2c3e50;
  background: rgba(0,0,0,.875);
  min-height: 100vh;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-image: url('./assets/background.jpeg');
    background-size: contain;
  }
}

#nav {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  a {
    position: relative;
    padding: 0 .5rem;
    margin: 0 .5rem;
    font-family: "Chromoxome", sans-serif;
    font-weight: 100;
    font-style: oblique;
    letter-spacing: 1px;
    font-size: 1.8rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    transition: font-weight linear .3s, color linear .3s;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translate(-50%,0);
      width: 0;
      height: 2px;
      background-color: #5BB89E;
      transition: width ease-in-out .3s;
    }

    &.router-link-exact-active {
      font-weight: 700;
      color: #5BB89E;

      &::after {
        width: 100%;
      }
    }

    @media screen and (min-width: 600px) {
      margin: 0 1rem;
      font-size: 3rem;

      &::after {
        height: 3px;
        bottom: -3px;
      }
    }
  }
}
</style>
