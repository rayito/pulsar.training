<template>
  <section class="nutrition">
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
  name: 'HomeNutrition',
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

<style lang="scss" scoped>
.nutrition {
  position: relative;
  min-height: 400px;
}

.nutrition__sidesection {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 260px;

  @include respond-to(not-phone) {
    right: 2rem;
  }

  @include respond-to(descop) {
    bottom: -5rem;
    width: 60vw;
    max-width: 620px;
  }
} 

.bg-image {
  position: relative;
  left: -4rem;
  width: 100vw;

  @include respond-to(tablet) {
    left: 0;
    width: 70vw;
  }

  @include respond-to(descop) {
    left: 2rem;
    width: 65vw;
  }
}
</style>
