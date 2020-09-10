<template>
  <section class="welcome">
    <picture class="bg-image" alt="Imagen de Pulsar Cross Training Box">
      <source srcset="@/assets/images/pulsar-bg-700.jpg" 
              media="(min-device-pixel-ratio: 2) and (max-width: 425px)">
      <source srcset="@/assets/images/pulsar-bg-400.jpg" 
              media="(max-width: 425px)">
      <source srcset="@/assets/images/pulsar-bg-1700.jpg" 
              media="(min-device-pixel-ratio: 2) and (max-width: 768px)">
      <source srcset="@/assets/images/pulsar-bg-700.jpg" 
              media="(max-width: 768px)">
      <source srcset="@/assets/images/pulsar-bg-1700.jpg" 
              media="(min-width: 769px)">
      <img src="@/assets/images/pulsar-bg-700.jpg">
    </picture>
    <SideSection 
      class="welcome__sidesection"
      :section-title="sideSection.sectionTitle"
      :section-content="sideSection.sectionContent"
      :action-text="sideSection.actionText"
    />
  </section>
</template>

<script>
import SideSection from '@/components/molecules/SideSection.vue';

const sideSectionContent = 'Somos una comunidad única de apasionados por el fitness que ofrecemos clases con coaches de calidad, material premium, eventos exclusivos y una auténtica experiencia de entrenamiento. Desde el más novato al más experimentado atleta.';

export default {
  name: 'HomeWelcome',
  components: {
    SideSection,
  },
  data() {
    return {
      sideSection: {
        sectionTitle: 'bienvenido a PūLSAR',
        sectionContent: sideSectionContent,
        actionText: 'ÚNETE A NOSOTROS',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  position: relative;
  min-height: 400px;

  @include respond-to(descop) {
    min-height: 500px;
  }
}

.welcome__sidesection {
  position: absolute;
  right: 1rem;
  bottom: -2rem;
  width: 260px;

  @include respond-to(not-phone) {
    right: 2rem;
    bottom: 0;
  }

  @include respond-to(descop) {
    bottom: -6rem;
    width: 60vw;
    max-width: 620px;
  }
} 

.bg-image {
  position: relative;
  display: flex;
  left: -2rem;
  width: 100vw;
  overflow: hidden;

  img {
    width: 100%;
  }

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
