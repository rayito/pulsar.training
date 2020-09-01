<template>
  <section class="classes">
    <SideSection 
      class="classes__sidesection naked"
      :section-title="sideSection.sectionTitle"
      :section-content="sideSection.sectionContent"
      :action-text="sideSection.actionText"
    />
    <div class="images-block">
      <img src="@/assets/images/racks.jpg" class="bg-image" alt="">
      <div class="images__overlay">
        <img class="svg" src="@/assets/images/cross-haltero.svg">
      </div>
    </div>
  </section>
</template>

<script>
import SideSection from '@/components/molecules/SideSection.vue';

const sideSectionContent = 'La base de nuestra oferta de clases es el Cross Training, al que llamamos WOD (Workout Of the Day), a partir de ahí contamos con clases especializadas en diferentes disciplinas para mejorar la técnica y disfrutar de clases monográficas.';

export default {
  name: 'HomeClasses',
  components: {
    SideSection,
  },
  data() {
    return {
      sideSection: {
        sectionTitle: 'Tipos de clases',
        sectionContent: sideSectionContent,
        actionText: 'DESCUBRE TODAS LAS CLASES',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.classes {
  display: flex;
  flex-direction: column;

  @include respond-to(not-phone) {  
    flex-direction: row;
    align-items: center;
  }
}

.classes__sidesection {
  @include respond-to(not-phone) {  
    width: 50%;
  }
} 

.images-block {
  position: relative;
  order: -1;
  overflow: hidden;

  @include respond-to(not-phone) { 
    order: 0; 
    width: 50%;
    max-height: 320px;
  }

  .bg-image {
    width: 100%;
  }

  .images__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(5,5,5,.5);
    overflow: hidden;

    img {
      height: 100%;
      padding: 1rem .5rem;
    }

    .svg {

    }
  }
}
</style>
