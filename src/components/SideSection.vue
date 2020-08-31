<template>
  <section class="sidesection">
    <h1 class="sidesection__title">{{ sectionTitle }}</h1>
    <p class="sidesection__content">{{ sectionContent }}</p>
    <ActionButton 
      class="sidesection__action" 
      :button-text="actionText"
    />
  </section>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue';

export default {
  name: 'SideSection',
  components: {
    ActionButton,
  },
  props: ['section-title', 'section-content', 'action-text'],
};
</script>

<style lang="scss" scoped>
  .sidesection {
    width: 260px;
    padding: 1rem 1.5rem;
    background: $pulsar-black;
    background: linear-gradient(314.56deg, #000000 0%, rgba(0, 0, 0, 0) 100%), $bg-black;
    border-top: solid 8px $pulsar-green;
  }

  .sidesection__title {
    margin: 0;
    font-family: $chromo;
    font-style: oblique;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
  }

  .sidesection__content,
  .sidesection__action {
    margin-left: 1rem;
  }
  
  .sidesection__content {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: rgba(255,255,255,.65);
  }
  .sidesection__action {
    display: block;
    width: fit-content;
    margin-top: 1rem;
  }
</style>
