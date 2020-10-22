<template>
  <main class="pricing">
    <div class="pricing__header">
      <h1 class="pricing__title">PRECIOS</h1>
    </div>
    <div class="pricing__content">
      <h2 class="section__title">CUOTAS MENSUALES</h2>
      <p class="section__subtitle">
        Obtén el mejor precio por clase, comprométete a un mes de entrenamiento y tanto si eres nuevo, como si tienes más experiencia, tenemos una tarifa para ti.
      </p>
      <div class="section__grid">
        <PricingCard 
          v-for="pricing in pricingMonthly"
          :key="pricing.name"
          :pricing-name="pricing.name" 
          :pricing-description="pricing.description"
          :pricing-month="pricing.month"
          :pricing-trim="pricing.trim"
          :pricing-details="pricing.details"
        />
      </div>

      <h2 class="section__title">PAGO POR SESIÓN</h2>
      <p class="section__subtitle">
        Flexibilidad al máximo. Disfruta de Púlsar sin necesidad del compromiso mensual. Ven a una clase suelta o compra un bono para venir con mayor frecuencia.      
      </p>
      <div class="section__grid">
        <PricingCard 
          v-for="pricing in pricingSession"
          :key="pricing.name"
          :pricing-name="pricing.name" 
          :pricing-description="pricing.description"
          :pricing-session="pricing.session"
          :pricing-details="pricing.details"
        />
      </div>

      <div class="section__grid">
        <div class="pricing__gympass">
          <h2 class="section__title">
            <img src="@/assets/images/gympass-logo.svg" alt="">
          </h2>
          <p class="section__subtitle">Somos un centro deportivo adherido a la plataforma Gympass, por lo que si eres uno de sus clientes puedes entrenar en nuestro centro con tu subscripción. Si quieres probar a venir un día, ponte en contacto con nosotros.</p>
        </div>
        <div class="pricing__companies">
          <h2 class="section__title">EMPRESAS</h2>
          <p class="section__subtitle">Si perteneces a una empresa que esté interesada en colaborar con nosotros para ofrecerle a sus empleados un incentivo a la salud y la actividad física, ponte en contacto con nosotros para estudiar el caso.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import PricingCard from '@/components/organisms/PricingCard.vue';

const PRICING_MONTHLY = [
  {
    name: 'PRINCIPIANTE',
    description: 'Ideal si llevas bastante tiempo sin hacer o nunca has hecho entrenamientos de alta intensidad.',
    month: 40,
    trim: 105,
    details: '2 sesiones acumulables / semana',
  },
  {
    name: 'BÁSICA',
    description: 'Si dos sesiones te saben a poco, la opción básica es la recomendable para coger un mayor ritmo de entrenamiento.',
    month: 50,
    trim: 135,
    details: '3 sesiones acumulables / semana',
  },
  {
    name: 'AVANZADA',
    description: 'Cuando ya tienes una cierta experiencia y quieres disfrutar de clases específicas es el momento de dar el salto que necesitas.',
    month: 60,
    trim: 165,
    details: '4 sesiones acumulables / semana',
  },
  {
    name: 'OPEN ILIMITADO',
    description: 'Para cuando cuentas con años de experiencia practicando Cross Training, tienes tu programación y entrenar por libre es tu rollo.',
    month: 60,
    trim: 165,
    details: 'Sesiones de Open Box ilimitadas',
  },
  {
    name: 'ILIMITADA',
    description: 'Quieres venir tantas veces como el cuerpo aguante y quieres darle un punto extra al entrenamiento.',
    month: 70,
    trim: 195,
    details: 'Sesiones ilimitadas + Programación',
  },
];
const PRICING_SESSION = [
  {
    name: 'DROP IN',
    description: 'Para visitas esporádicas, si quieres entrenar un día con tus amigos socios de Púlsar o estás visitando Granada y necesitas darte caña.',
    session: 8,
    details: '1 sesión puntual',
  },
  {
    name: 'BONO 5',
    description: 'Si te gusta entrenar en Púlsar pero no sabes cuándo vas a poder entrenar o simplemente no puedes comprometerte a venir semanalmente, este bono es para ti.',
    session: 35,
    details: '5 sesiones',
  },
  {
    name: 'BONO 10',
    description: 'Si vas a venir a Púlsar de forma asidua pero necesitas flexibilidad para poder organizarte mejor, tendrás hasta un año para gastar este bono.',
    session: 60,
    details: '10 sesiones',
  },
];

export default {
  name: 'Pricing',
  components: {
    PricingCard,
  },
  data() {
    return {
      pricingMonthly: PRICING_MONTHLY, 
      pricingSession: PRICING_SESSION,
    };
  },
};
</script>

<style lang="scss" scoped>
  .pricing {
    margin-top: 56px;
    
    @include respond-to(descop) {
      margin-top: 0;
    }
  }

  .pricing__header {
    width: 100%;
    height: 192px;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    background: linear-gradient(99.09deg, rgba(0, 0, 0, 0.8) 14.06%, rgba(0, 0, 0, 0.1) 100%), url('~@/assets/images/portada.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @include respond-to(tablet) {
      padding-left: 3rem;
    }

    @include respond-to(descop) {
      height: 370px;
      padding-left: 4rem;
    }
  }

  .pricing__title {
    font-family: $chromo;
    font-style: oblique;
    font-size: 3rem;
    font-weight: 900;
    color: white;
    @supports (-webkit-text-stroke: 1px white) {
      -webkit-text-stroke: 1px white;
      -webkit-text-fill-color: transparent;
    }

    @include respond-to(descop) {
      font-size: 5rem;
    }
  }

  .pricing__content {
    padding: 0 1rem;
    max-width: 1200px;

    @include respond-to(tablet) {
      padding: 0 1.5rem;
    }

    @include respond-to(descop) {
      padding: 0 2rem;
    }
  }

  .section__title {
    margin: 0;
    padding-top: 1.5rem;
    font-family: $chromo;
    font-style: oblique;
    font-size: 1.5rem;
    font-weight: 900;
    color: white;
    text-transform: uppercase;
  }

  .section__subtitle {
    margin-left: 1rem;
    margin-bottom: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: rgba(255,255,255,.75);

    @include respond-to(not-phone) {
      max-width: 332px;
    }
  }

  .section__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 0 1.5rem;
  }

  .pricing-card {
    margin-bottom: 1rem;
  }

  .pricing__gympass {
    .section__subtitle {
      margin-bottom: .5rem;
    }
  }
</style>
