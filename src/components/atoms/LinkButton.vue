<template>
  <router-link 
    class="button"
    :class="buttonStyle"
    :to=linkTo>{{ buttonText }}</router-link>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    buttonStyle: {
      type: String,
      default: 'ghost',
    },
    linkTo: {
      type: String,
      default: '/',
    },
  },
};
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
