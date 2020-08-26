<template>
  <section class="home-header">
    <h1>
      <span class="first">PON</span>
      <span class="second">A PRUEBA</span>
      <span class="third">TUS LÍMITES</span>
    </h1>
  </section>
</template>

<script>
export default {
  name: 'HomeHeader',
};
</script>

<style lang="scss" scoped>
  .home-header {
    position: relative;
    height: 576px;
    background: url('~@/assets/images/portada.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      background: #050505;
      opacity: 75%;
    }

    h1 {
      position: relative;
      z-index: 20;
      max-width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      font-family: "Chromoxome", sans-serif;
      font-size: 7rem;
      font-style: oblique;
      font-weight: 300;
      letter-spacing: 5px;
      color: white;

      .first {
        font-size: 4rem;
      }
      .second {
        font-size: 6rem;
      }
      .third {
        font-size: 8rem;
      }
    }
  }
</style>
