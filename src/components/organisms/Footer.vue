<template>
  <section class="footer">
    <div class="footer__content">
      <span>© 2020 Púlsar Salud y Deporte, S.L.</span>
      <span>Todos los derechos reservados</span>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomeFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(269.89deg, $pulsar-black 0%, rgba(5, 5, 5, 0) 100%);
}

.footer__content {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: rgba(255,255,255,.35);
  padding: 1.5rem 0;
  text-align: center;

  @include respond-to(not-phone) {
    flex-direction: row;
  }

  span {
    margin-right: .5rem;
  }
}
</style>
