<template>
  <main class="online">
    <h1 class="online__title">PūLSAR/ONLINE</h1>
    <p class="online__p">Hola {{ userName }}</p>
  </main>
</template>

<script>
import userLog from '@/services/userLog';

export default {
  name: 'PulsarOnline',
  computed: {
    userName: () => JSON.parse(userLog.getUser()).userName,
  },
};
</script>

<style lang="scss" scoped>
.online {
  @include view-sizing;

  .online__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: $chromo;
    font-style: oblique;
    font-size: 3rem;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    text-align: center;

    @supports (-webkit-text-stroke: 1px white) {
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
    }
  }

  .online__content {
    @include respond-to(not-phone) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 0 1.5rem;
    }
  }

  .online__p,
  .online__section {
    margin-left: auto;
    margin-right: auto;
    
    @include respond-to(not-phone) {
      max-width: 332px;
    }
  }

  p {
    margin-bottom: .5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(255,255,255,.75);
  }

  .online__access {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin: 1rem auto;
  }

  .section__title,
  .section__subtitle {
    font-family: $chromo;
    font-style: oblique;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    line-height: 1;
  }

  .section__title {
    margin: 0;
    margin-bottom: .75rem;
    padding-top: 1.5rem;
    font-size: 1.5rem;
  }

  .section__subtitle {
    margin: 0;
    padding-left: 1rem;
    margin-bottom: .25rem;
    font-size: 1rem;
  }

  .section__p {
    padding-left: 1rem;
    margin: 0;
    margin-bottom: 1rem;
  }
}
</style>
