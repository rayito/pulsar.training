<template>
  <section class="home-footer">
    <div class="visit">
      <h1 class="visit__title">VISÍTANOS</h1>
      <div class="visit__content">
        <ul class="visit__list">
          <li class="visit__item">
            <img src="@/assets/images/location.svg" alt="" 
                 class="visit__item-icon">
            <div class="visit__item-content">C/ ROMA, 6<br>18100 ARMILLA (GRANADA)</div>
          </li>
          <li class="visit__item">
            <img src="@/assets/images/phone.svg" alt="" 
                 class="visit__item-icon">
            <div class="visit__item-content">+34 623 030 862</div>
          </li>
          <li class="visit__item">
            <img src="@/assets/images/mail.svg" alt="" 
                 class="visit__item-icon">
            <div class="visit__item-content">info@pulsartraining.com</div>
          </li>
          <li class="visit__item">
            <img src="@/assets/images/instagram.svg" alt="" 
                 class="visit__item-icon">
            <div class="visit__item-content">@pulsar.training</div>
          </li>
        </ul>
        <ContactButton
          class="visit__action" 
          button-style="ghost"
          button-text="PONTE EN CONTACTO" 
          :link-to="contactAction"
        />
      </div>
    </div>
    <div class="footer__map"></div>
  </section>
</template>

<script>
import ContactButton from '@/components/atoms/ContactButton.vue';

export default {
  name: 'HomeFooter',
  components: {
    ContactButton,
  },
  data() {
    return {
      contactAction: 'http://api.whatsapp.com/send?phone=+34623030862&text="Hola!"',
    };
  },
};
</script>

<style lang="scss" scoped>
.home-footer {
  display: flex;
  flex-direction: column;

  @include respond-to(not-phone) {
    flex-direction: row;
  }
  @include respond-to(tablet) {
    height: 350px;
  }
  @include respond-to(descop) {
    height: 435px;
  }
}

.visit {
  width: 100%;
  padding: 3rem;
  background: rgba(5,5,5,.8);

  @include respond-to(tablet) {
    width: 300px;
  }

  @include respond-to(descop) {
    width: 480px;
    padding: 5rem;
  }
}

.visit__title {
  margin: 0;
  margin-bottom: 1rem;
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

.visit__content {
  padding-left: 1.5rem;
}

.visit__list {
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
}

.visit__item {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255,255,255,.75);

  @include respond-to(descop) {
    font-size: 1rem;
  }
}

.visit__icon {
  width: 20px;
}

.visit__item-content {
  padding-top: 3px;

  @include respond-to(descop) {
    padding-top: 0;
  }
}

.footer__map {
  height: 300px;
  flex-grow: 1;
  background: url("~@/assets/images/map.jpg");
  background-size: cover;
  background-position: center;

  @include respond-to(not-phone) {
    height: 100%;
  }
}
</style>
