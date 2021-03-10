<template>
  <section class="sidesection">
    <h1 class="sidesection__title">{{ sectionTitle }}</h1>
    <p class="sidesection__content">{{ sectionContent }}</p>
    <ActionButton 
      v-if="Boolean(actionText) && !Boolean(action)"
      class="sidesection__action" 
      :button-text="actionText"
    />
    <ContactButton
      v-if="Boolean(action)"
      class="request-account__access" 
      :button-style="actionButtonStyle"
      :button-text="actionText" 
      :link-to="action"
    />
  </section>
</template>

<script>
import ActionButton from '@/components/atoms/ActionButton.vue';
import ContactButton from '@/components/atoms/ContactButton.vue';

export default {
  name: 'SideSection',
  components: {
    ActionButton,
    ContactButton,
  },
  props: ['section-title', 'section-content', 'action-text', 'action', 'action-button-style'],
};
</script>

<style lang="scss" scoped>
  .sidesection {
    position: relative;
    padding: 1.5rem;
    background: $pulsar-black;
    background: linear-gradient(314.56deg, #000000 0%, rgba(0, 0, 0, 0) 100%), $bg-black;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background: $pulsar-green;
      background: $pulsar-gradient-ufo
    }

    &.naked {
      background: transparent;
      padding-top: 0;
      padding-bottom: 0;
      
      &::before {
        display: none;
      }
    }

    @include respond-to(descop) {
      padding: 3rem 4rem;
    }
  }

  .sidesection__title {
    margin: 0;
    font-family: $chromo;
    font-style: oblique;
    font-size: 1.5rem;
    font-weight: 900;
    color: white;
    text-transform: uppercase;

    @include respond-to(descop) {
      font-size: 2.5rem;
    }
  }

  .sidesection__content,
  .sidesection__action {
    margin-left: 1rem;
  }
  
  .sidesection__content {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: rgba(255,255,255,.75);

    @include respond-to(descop) {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
  .sidesection__action {
    margin-top: 1rem;

    @include respond-to(descop) {
      font-size: 1rem;
    }
  }
</style>
