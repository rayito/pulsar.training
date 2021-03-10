<template>
  <section class="home-header">
    <SideFloat />
    <div class="bestiaparda">
      <h1 class="bestiaparda__season">TEMPORADA 20/21</h1>
      <div class="bestiaparda__hash">#ModoBestiaPardaON</div>
      <div class="bestiaparda__text">PON A PRUEBA TUS LÍMITES</div>
      <ContactButton
        class="bestiaparda__reserve" 
        button-style="solid"
        button-text="RESERVAR CLASE DE PRUEBA GRATIS" 
        :link-to="contactAction"
      />
    </div>
  </section>
</template>

<script>
import SideFloat from '@/components/molecules/SideFloat.vue';
import ContactButton from '@/components/atoms/ContactButton.vue';

export default {
  name: 'HomeHeader',
  components: {
    SideFloat,
    ContactButton,
  },
  data() {
    return {
      contactAction: 'http://api.whatsapp.com/send?phone=+34623030862&text="Hola!"',
    };
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
    margin-top: 56px;

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      background: $pulsar-black;
      opacity: 0.75;
    }

    @include respond-to(not-phone) {
      height: 400px;
    }

    @include respond-to(descop) {
      height: 660px;
      margin: 0;
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
      height: 225px;
      background: $pulsar-green;
      background: $pulsar-gradient-ufo;
      transform: rotate(9deg);
    }

    @include respond-to(not-phone) {
      max-width: 415px;
      left: 2rem;

      &:before {
        left: 5px;
        height: 290px;
        transform: rotate(9deg);
      }
    }

    @include respond-to(descop) {
      max-width: 633px;
      left: 4rem;
      bottom: 4rem;

      &:before {
        width: 5px;
        top: -20px;
        left: -5px;
        height: 375px;
        transform: rotate(9deg);
      }
    }
  }

  .bestiaparda__season {
    margin: 0;
    margin-bottom: .25rem;
    padding-left: 1.65rem;
    color: $pulsar-green;
    font-family: $chromo;
    font-style: oblique;
    font-weight: 900;
    @include same-font-and-height(.8rem);

    @include respond-to(not-phone) {
      padding-left: 2.3rem;
      @include same-font-and-height(.9rem);
    }

    @include respond-to(descop) {
      padding-left: 2.8rem;
      @include same-font-and-height(1rem);
    }
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
    padding-left: 1.4rem;
    @include same-font-and-height(1.25rem);

    @include respond-to(not-phone) {
      padding-left: 1.85rem;
      @include same-font-and-height(2rem);
    }

    @include respond-to(descop) {
      padding-left: 2.45rem;
      @include same-font-and-height(2.5rem);
    }
  }

  .bestiaparda__text {
    margin: .5rem 0 1.5rem;
    padding-left: .5rem;
    font-weight: 900;
    @include same-font-and-height(3rem);
    text-indent: 8px;

    @include respond-to(not-phone) {
      @include same-font-and-height(4.5rem);
      text-indent: 13px;
    }

    @include respond-to(descop) {
      margin-bottom: 2rem;
      @include same-font-and-height(6rem);
      text-indent: 18px;
    }
  }

  .bestiaparda__reserve {
    padding: 12px 16px;
    @include same-font-and-height(14px);
    font-weight: 700;
    background: $pulsar-green;
    background: $pulsar-gradient-ufo;

    @include respond-to(descop) {
      @include same-font-and-height(1rem);
    }
  }
</style>
