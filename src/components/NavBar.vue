<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      <img src="@/assets/LogoPulsar.svg">
    </router-link>
    <nav>
      <ul>
        <li class="header__link">
          <router-link to="/nuevo-en-pulsar">NUEVO EN PūLSAR</router-link>
        </li>
        <li class="header__link">
          <router-link to="/clases">CLASES</router-link>
        </li>
        <li class="header__link">
          <router-link to="/coaches">COACHES</router-link>
        </li>
        <li class="header__link">
          <router-link to="/precios">PRECIOS</router-link>
        </li>
        <li class="header__link">
          <router-link to="/nutricion">NUTRICIÓN</router-link>
        </li>
        <li class="header__link">
          <router-link to="/eventos">EVENTOS</router-link>
        </li>
      </ul>
    </nav>
    <a class="reserve">RESERVAR CLASE GRATIS</a>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .75rem 2rem;
  border-top: solid 4px $pulsar-green;
}

.header__logo {
  height: 38px;
}

nav ul {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  list-style: none;

  a {
    position: relative;
    padding: 0 .5rem;
    margin: 0 .5rem;
    font-family: "Chromoxome", sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    color: white;
    opacity: 75%;
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
      height: 1px;
      background-color: $pulsar-green;
      transition: width ease-in-out .3s;
    }

    &.router-link-exact-active {
      font-weight: 500;
      color: $pulsar-green;

      &::after {
        width: 100%;
      }
    }

    @media screen and (min-width: 600px) {
      margin: 0 1rem;
      font-size: 1.25rem;

      &::after {
        height: 2px;
        bottom: -3px;
      }
    }
  }
}

.reserve {
  height: 42px;
  padding: .75rem 1rem;
  border: solid 1px white;
  color: white;
  background: transparent;
  font-family: "Chromoxome", sans-serif;
  font-weight: 700;
  font-style: oblique;
  font-size: 1rem;
  line-height: 1;
}
</style>
