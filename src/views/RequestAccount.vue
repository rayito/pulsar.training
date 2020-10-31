<template>
  <main class="request-account">
    <h1 class="request-account__title">PūLSAR/ONLINE</h1>
    <h2 class="section__title">NECESITO UNA CUENTA</h2>
    <p class="section__p">Para obtener una cuenta de PÚLSAR/ONLINE necesitarás ponerte en contacto con nosotros a través de WhatsApp, email, teléfono o a través de tu app de reservas AimHarder.</p>
    <p class="section__p">Trataremos de darte respuesta lo antes posible para que empieces cuanto antes a entrenar duro desde casa.</p>
   
   <LinkButton 
      class="request-account__access" 
      button-style="solid"
      button-text="ESCRIBIR UN WHATSAPP" 
      link-to="request-account-login"
    />
  </main>
</template>

<script>
import LinkButton from '@/components/atoms/LinkButton.vue';

export default {
  name: 'RequestAccount',
  components: {
    LinkButton,
  },
};
</script>

<style lang="scss" scoped>
.request-account {
  padding: 0 1rem;
  padding-top: calc(56px + .5rem);
  min-height: calc(100vh - 80px);
  
  @include respond-to(descop) {
    padding-top: 0;
  }

  .request-account__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: $chromo;
    font-style: oblique;
    font-size: 3rem;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    text-align: center;

    @supports (-webkit-text-stroke: 1px white) {
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    margin-bottom: .5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(255,255,255,.75);

    @include respond-to(not-phone) {
      max-width: 332px;
    }
  }

  .request-account__access {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin: 1rem auto;
  }

  .section__title,
  .section__subtitle {
    font-family: $chromo;
    font-style: oblique;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    line-height: 1;
  }

  .section__title {
    margin: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    
    @include respond-to(descop) {
      font-size: 2rem;
    }
  }

  .section__p {
    padding-left: 1rem;
    margin: 0;
    margin-bottom: 1.5rem;
  }
}
</style>
