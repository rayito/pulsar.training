<template>
  <main class="online">
    <h1 class="online__title">PūLSAR/ONLINE</h1>
    <p class="online__p">Accede a la rutina semanal de Púlsar específica para hacer en casa y únete a las clases en directo con tus compañeros de WOD para entrenar como siempre, en familia.</p>
    <p class="online__p">No necesitas mucho espacio, ni material específico. Con tu móvil, conexión a internet y tus ganas es suficiente.</p>
    <LinkButton 
      class="online__access" 
      button-style="solid"
      button-text="ACCEDER" 
      link-to="online-login"
    />
    <section class="online__section">
      <h1 class="section__title">¿CÓMO FUNCIONA?</h1>
      <h2 class="section__subtitle">ENTRENOS DIARIOS</h2>
      <p class="section__p">Cada día, colgaremos un nuevo entrenamiento con explicaciones como hacíamos por Instagram durante el primer confinamiento para que puedas completar tu entreno de forma autónoma.</p>
      <h2 class="section__subtitle">CLASES EN DIRECTO</h2>
      <p class="section__p">Junto con la explicación de cada clase, encontrarás un enlace a Google Meet para unirte a las teleclases dirigidas por tus coach y junto a tus compañeros. Sigue entrenando con los coach de Púlsar, vuelve a tener una rutina y a distraerte sudando junto a tus compañeros de entreno.</p>
    </section>
    <section class="online__section">
      <h1 class="section__title">¿QUÉ PASA CON MIS PAGOS?</h1>
      <p class="section__p">Para contratar tu tarifa de Púlsar/Online, tendrás que ponerte en contacto con nosotros a través de WhatsApp.</p>
      <p class="section__p">Si ya has pagado el mes, tus clases pendientes pasarán a ser un bono en función de la tarifa que tengas para disfrutarlo en el momento de abrir.</p>
      <p class="section__p">Si tu tarifa es ilimitada, la parte proporcional de lo que no hayas podido disfrutar se compensará en la siguiente cuota.</p>
    </section>
    <section class="online__section">
      <h1 class="section__title">¿CUÁNTO CUESTA?</h1>
      <p class="section__p">PÚLSAR/ONLINE es una suscripción mensual de 40€. Ponte en contacto con nosotros y te facilitaremos los datos para realizar el pago.</p>
    </section>
  </main>
</template>

<script>
import LinkButton from '@/components/atoms/LinkButton.vue';

export default {
  name: 'PulsarOnline',
  components: {
    LinkButton,
  },
};
</script>

<style lang="scss" scoped>
.online {
  padding: 0 1rem;
  padding-top: calc(56px + .5rem);
  min-height: calc(100vh - 80px);
  
  @include respond-to(descop) {
    padding-top: 0;
  }

  .online__title {
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

  .online__access {
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
    padding-top: 1.5rem;
    font-size: 1.5rem;
    
    @include respond-to(descop) {
      font-size: 2rem;
    }
  }

  .section__subtitle {
    padding-left: 1rem;
    margin-bottom: .25rem;
    font-size: 1rem;
    
    @include respond-to(descop) {
      font-size: 1.5rem;
    }
  }

  .section__p {
    padding-left: 1rem;
    margin: 0;
    margin-bottom: 1rem;
  }
}
</style>
