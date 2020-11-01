<template>
  <a
    class="button"
    :class="buttonStyle"
    :href=link>
    <div class="button__icon" v-if="buttonIcon != ''" v-html="buttonIcon" />
    {{ buttonText }}
  </a>
</template>

<script>
export default {
  name: 'ContactButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    buttonStyle: {
      type: String,
      default: 'ghost',
    },
    buttonIcon: {
      type: String,
      default: '',
    },
    linkTo: {
      type: String,
      default: '',
    },
    isMail: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    link: function () {
      return (
        this.isMail 
        ? 'mailto:info@pulsartraining.com?subject=Nueva%20cuenta%20-%20Pulsar%20Online' 
        : this.linkTo
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import './button.scss';
.button {
  letter-spacing: 0.02rem;
}

.button__icon {
  display: flex;
  align-items: center;
  margin-right: .5rem;
}
</style>
