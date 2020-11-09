<template>
  <main class="request-account">
    <h1 class="request-account__title">PūLSAR/ONLINE</h1>
    <section class="online__section">
      <h2 class="section__title">NECESITO UNA CUENTA</h2>
      <p class="section__p">Para obtener una cuenta de PÚLSAR/ONLINE necesitarás ponerte en contacto con nosotros a través de WhatsApp, email, teléfono o a través de tu app de reservas AimHarder.</p>
      <p class="section__p">Trataremos de darte respuesta lo antes posible para que empieces cuanto antes a entrenar duro desde casa.</p>
    </section>
   
    <ContactButton
      class="request-account__access" 
      button-style="solid"
      button-text="ESCRIBIR POR WHATSAPP" 
      :button-icon="buttonIcon"
      :link-to="whatsappLink"
    />
  </main>
</template>

<script>
import ContactButton from '@/components/atoms/ContactButton.vue';

const whatsappSVG = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0473633 20L1.4532 14.8642C0.585697 13.3608 0.129863 11.6567 0.130697 9.90917C0.133197 4.44583 4.57903 0 10.0415 0C12.6924 0.000833333 15.1807 1.03333 17.0524 2.90667C18.9232 4.78 19.9532 7.27 19.9524 9.91833C19.9499 15.3825 15.504 19.8283 10.0415 19.8283C8.3832 19.8275 6.74903 19.4117 5.30153 18.6217L0.0473633 20ZM5.54486 16.8275C6.94153 17.6567 8.27486 18.1533 10.0382 18.1542C14.5782 18.1542 18.2765 14.4592 18.279 9.91667C18.2807 5.365 14.5999 1.675 10.0449 1.67333C5.50153 1.67333 1.8057 5.36833 1.80403 9.91C1.8032 11.7642 2.34653 13.1525 3.25903 14.605L2.42653 17.645L5.54486 16.8275ZM15.034 12.2742C14.9724 12.1708 14.8074 12.1092 14.559 11.985C14.3115 11.8608 13.094 11.2617 12.8665 11.1792C12.6399 11.0967 12.4749 11.055 12.309 11.3033C12.144 11.5508 11.669 12.1092 11.5249 12.2742C11.3807 12.4392 11.2357 12.46 10.9882 12.3358C10.7407 12.2117 9.94236 11.9508 8.99653 11.1067C8.2607 10.45 7.7632 9.63917 7.61903 9.39083C7.47486 9.14333 7.60403 9.00917 7.72736 8.88583C7.83903 8.775 7.97486 8.59667 8.09903 8.45167C8.22486 8.30833 8.2657 8.205 8.34903 8.03917C8.43153 7.87417 8.3907 7.72917 8.3282 7.605C8.2657 7.48167 7.7707 6.2625 7.56486 5.76667C7.3632 5.28417 7.15903 5.34917 7.00736 5.34167L6.53236 5.33333C6.36736 5.33333 6.09903 5.395 5.87236 5.64333C5.6457 5.89167 5.0057 6.49 5.0057 7.70917C5.0057 8.92833 5.8932 10.1058 6.01653 10.2708C6.1407 10.4358 7.76236 12.9375 10.2465 14.01C10.8374 14.265 11.299 14.4175 11.6582 14.5317C12.2515 14.72 12.7915 14.6933 13.2182 14.63C13.694 14.5592 14.6832 14.0308 14.8899 13.4525C15.0965 12.8733 15.0965 12.3775 15.034 12.2742Z" fill="white" fill-opacity="1"/></svg>';

const mailSVG = `<svg width="20" height="20" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path fill="white" d="m467 80.609h-422c-24.813 0-45 20.187-45 45v260.78c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-260.78c0-24.813-20.187-45-45-45zm-5.873 30-187.27 155.94c-10.346 8.614-25.364 8.614-35.708 0l-187.27-155.94h410.25zm-431.13 21.658 147.69 122.98-147.69 98.293v-221.28zm437 269.12h-422c-7.248 0-13.31-5.168-14.699-12.011l171.44-114.1 17.204 14.326c10.734 8.938 23.893 13.407 37.051 13.407s26.316-4.469 37.051-13.407l17.204-14.326 171.44 114.1c-1.39 6.845-7.452 12.012-14.7 12.012zm15-47.848-147.69-98.292 147.69-122.98v221.28z"/>
</svg>`;

export default {
  name: 'RequestAccount',
  components: {
    ContactButton,
  },
  data() {
    return {
      whatsappLink: 'http://api.whatsapp.com/send?phone=+34623030862&text="Hola!"',
      buttonIcon: whatsappSVG,
      mailIcon: mailSVG,
      width: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.request-account {
  @include view-sizing;

  .request-account__title {
    margin-top: 1rem;
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

  p {
    margin-bottom: .5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(255,255,255,.75);

    @include respond-to(not-phone) {
      max-width: 332px;
    }
  }

  .request-account__access {
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem auto;
  }

  .online__section {
    margin-left: auto;
    margin-right: auto;
    
    @include respond-to(not-phone) {
      max-width: 332px;
    }
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
    font-size: 1.5rem;
  }

  .section__p {
    padding-left: 1rem;
    margin: 0;
    margin-bottom: 1.5rem;
  }
}
</style>
