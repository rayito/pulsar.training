<template>
  <section class="home-header">
    <SideFloat />
    <div class="bestiaparda">
      <h1 class="bestiaparda__season">TEMPORADA 20/21</h1>
      <div class="bestiaparda__hash">#ModoBestiaPardaON</div>
      <div class="bestiaparda__text">PON A PRUEBA TUS LÍMITES</div>
      <a class="bestiaparda__reserve">RESERVAR CLASE DE PRUEBA GRATIS</a>
    </div>
  </section>
</template>

<script>
import SideFloat from '@/components/SideFloat.vue';

export default {
  name: 'HomeHeader',
  components: {
    SideFloat,
  },
};
</script>

<style lang="scss" scoped>
  .home-header {
    position: relative;
    height: 122vw;
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
      opacity: 0.75;
    }
  }

  .bestiaparda {
    position: absolute;
    z-index: 20;
    left: 1rem;
    bottom: 2rem;
    padding-left: 1.25rem;
    max-width: 280px;

    &:before {
      content: '';
      position: absolute;
      left: 10px;
      top: -12px;
      width: 3px;
      height: 200px;
      background: $pulsar-green;
      background: $pulsar-gradient-ufo;
      transform: rotate(9deg);
    }
  }

  .bestiaparda__season {
    margin: 0;
    margin-bottom: .25rem;
    padding-left: 1.7rem;
    color: $pulsar-green;
    font-family: $chromo;
    font-style: oblique;
    font-weight: 900;
    font-size: 1rem;
    line-height: 1rem;
  }

  .bestiaparda__hash,
  .bestiaparda__text,
  .bestiaparda__reserve {
    color: white;
    font-family: $chromo;
    font-style: oblique;
    font-weight: 900;
  }

  .bestiaparda__hash {
    padding-left: 1.35rem;
    @include same-font-and-height(1.25rem);
  }

  .bestiaparda__text {
    margin-bottom: 1.5rem;
    padding-left: .5rem;
    font-weight: 900;
    @include same-font-and-height(3rem);
    text-indent: 7px;
  }

  .bestiaparda__reserve {
    padding: 10px 12px;
    @include same-font-and-height(14px);
    font-weight: 700;
    background: $pulsar-green;
    background: $pulsar-gradient-ufo;
  }
</style>
