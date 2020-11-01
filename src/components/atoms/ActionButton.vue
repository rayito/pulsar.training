<template>
  <a class="button" :class="buttonStyle">{{ buttonText }}</a>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    buttonStyle: {
      type: String,
      default: 'ghost',
    },
  },
};
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
