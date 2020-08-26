<template>
  <section class="sidefloat">
    <img src="@/assets/images/anagrama.svg" alt="" class="sidefloat__logo">
    <div class="sidefloat__content">
      <h1 class="sidefloat__title">¿QUIERES PROBAR PūLSAR?</h1>
      <div class="sidefloat__text">
        Disfruta de una sesión gratuita con nosotros y descubre de lo que eres capaz.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SideFloat',
};
</script>

<style lang="scss" scoped>
  .sidefloat {
    position: fixed;
    z-index: 1000;
    right: 0;
    top: 25%;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    width: 310px;
  }

  .sidefloat__title {
    font-family: "Chromoxome", sans-serif;
    font-size: 1rem;
    font-style: oblique;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: .5rem;
  }

  .sidefloat__text {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
</style>
