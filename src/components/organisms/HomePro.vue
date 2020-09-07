<template>
  <section class="pro">
    <img src="@/assets/images/pulsar-pro.svg" alt="" class="pro__logo">
    <p class="pro__text">El Pro Training Club es una forma de vida, 
      donde el entrenamiento llega al siguiente nivel y se fusiona 
      con nuestro día a día hasta tal punto en el que no consigues 
      imaginarte una vida sin deporte. El rendimiento y la salud en su 
      máxima expresión.
    </p>
    <ActionButton 
      button-text="ÚNETE A NUESTRO PRO TRAINING CLUB"
      class="pro__action" />
  </section>
</template>

<script>
import ActionButton from '@/components/atoms/ActionButton.vue';

export default {
  name: 'HomePro',
  components: {
    ActionButton,
  },
};
</script>

<style lang="scss" scoped>
.pro {
  position: relative;
  clip-path: polygon(0 6vw,100% 0,100% calc(100% - 6vw),0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    100.85deg, 
  rgba(15, 36, 25, 0.9) 1.96%, 
  rgba(68, 157, 112, 0.95) 97.93%), 
    url(~@/assets/images/racks.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 15vw 0;

  @include respond-to(tablet) {
    padding: 10vw 0;
  }

  @include respond-to(descop) {
    padding: 8vw 0;
  }
}

.pro__logo {
  width: 112px;

  @include respond-to(tablet) {
    width: 146px;
  }

  @include respond-to(descop) {
    width: 260px;
  }
}

.pro__text {
  margin: 1.5rem 1rem 1rem;
  max-width: 300px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: white;
  text-align: center;

  @include respond-to(descop) {
    margin: 3rem 1rem 1.5rem;
    max-width: 620px;
    font-size: 1rem; 
    line-height: 1.5;
  }
}
</style>
