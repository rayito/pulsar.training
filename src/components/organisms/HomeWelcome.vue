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
}

.welcome__sidesection {
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
