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
.button {
  display: flex;
  align-items: center;
  width: fit-content;
  height: 36px;
  padding: 0 12px;
  color: white;
  font-family: "Chromoxome", sans-serif;
  font-weight: 700;
  font-style: oblique;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;

  @include respond-to(descop) {
    height: 40px;
    font-size: 1rem;
  }

  &.ghost {
    border: solid 1px $pulsar-green;
    background: transparent;
  }

  &.solid {
    background: $pulsar-green;
    background: $pulsar-gradient-ufo;
  }
}
</style>
