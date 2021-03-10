<template>
  <section class="nutrition nutrition--construction">
    <img src="@/assets/images/nutricion.png" alt="" class="bg-image">
    <SideSection 
      class="nutrition__sidesection"
      :section-title="sideSection.sectionTitle"
      :section-content="sideSection.sectionContent"
      :action-text="sideSection.actionText"
      action-button-style="ghost"
      :action="sideSection.whatsappLink"
    />
  </section>
</template>

<script>
import SideSection from '@/components/molecules/SideSection.vue';

const sideSectionContent = 'La nutrición es parte fundamental del entrenamiento y por eso ofrecemos un servicio de asesoramiento dietético-nutricional con Paloma Ruiz de @unlugarparanutrirte. Los casos de éxito hablan por sí solos.';

export default {
  name: 'Nutrition',
  components: {
    SideSection,
  },
  data() {
    return {
      sideSection: {
        whatsappLink: 'http://api.whatsapp.com/send?phone=+34623030862&text="Hola!"',
        sectionTitle: 'PūLSAR NUTRITION',
        sectionContent: sideSectionContent,
        actionText: 'PIDE CITA CON PALOMA',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/scss/variables.scss";

.nutrition {
  @include view-sizing;
  position: relative;

  &.nutrition--construction {
    max-width: none;
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    background-image: url('~@/assets/images/nutricion.png');
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
  }

  .bg-image {
    height: 100vh;
    display: none;
  }

  .nutrition__sidesection {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    background: linear-gradient(314.56deg, #000000 0%, rgba(0, 0, 0, 0) 100%), rgba(24,27,25, .8);

    @include respond-to(tablet) {
      width: 80vw;
      max-width: 620px;
    }

    @include respond-to(descop) {
      width: 60vw;
      max-width: 620px;
    }
  }
}
</style>
