<template>
  <section class="welcome">
    <img src="@/assets/images/welcome.jpg" alt="" class="bg-image">
    <SideSection 
      class="welcome__sidesection"
      :section-title="sideSection.sectionTitle"
      :section-content="sideSection.sectionContent"
      :action-text="sideSection.actionText"
    />
  </section>
</template>

<script>
import SideSection from '@/components/SideSection.vue';

const sideSectionContent = 'Somos una comunidad única de apasionados por el fitness que ofrecemos clases con coaches de calidad, material premium, eventos exclusivos y una auténtica experiencia de entrenamiento. Desde el más novato al más experimentado atleta.';

export default {
  name: 'Welcome',
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
  height: 400px;
}

.welcome__sidesection {
  position: absolute;
  right: 2rem;
  bottom: 1rem;
} 

.bg-image {
  position: absolute;
  top: 0;
  left: -2rem;
  width: 100vw;

  @include respond-to(tablet) {
    width: 80vw;
  }
}
</style>
