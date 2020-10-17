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

export default {
  name: 'Pricing',
  components: {
    PricingCard,
  },
  data() {
    return {
      pricingMonthly: PRICING_MONTHLY, 
    };
  },
};
</script>

<style lang="scss" scoped>
  .pricing {
    margin-top: 56px;
    
    @include respond-to(descop) {
      margin-top: 88px;
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
  }

  .pricing__content {
    padding: 0 1rem;
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

    @include respond-to(descop) {
      font-size: 2.5rem;
    }
  }

  .section__subtitle {
    margin-left: 1rem;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: rgba(255,255,255,.75);

    @include respond-to(descop) {
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  .pricing-card {
    margin-bottom: 1rem;
  }
</style>
