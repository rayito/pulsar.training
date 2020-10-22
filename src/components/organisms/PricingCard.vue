<template>
  <section class="pricing-card">
    <div class="pricing-card__header">
      <h1 class="pricing-card__title">{{ pricingName }}</h1>
      <div class="pricing-card__description">
        {{ pricingDescription }}
      </div>
    </div>
    <div :class="{
      'pricing-card__details': pricingMonth, 
      'pricing-card__details--session': pricingSession
    }">
      <div v-if="pricingMonth" class="details__item details__month">
        <div class="details__amount">{{ pricingMonth }}</div>
        <div class="details__period">€/ MES</div>
      </div>
      <div v-if="pricingTrim" class="details__item details__trimester">
        <div class="details__amount">{{ pricingTrim }}</div>
        <div class="details__period">€/ TRIM.</div>
      </div>
      <div v-if="pricingSession" class="details__item details__session">
        <div class="details__amount">{{ pricingSession }}</div>
        <div class="details__period">€</div>
      </div>
      <div class="details__description">
        {{ pricingDetails }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingCard',
  props: [
    'pricing-name', 
    'pricing-description', 
    'pricing-month',
    'pricing-trim',
    'pricing-session',
    'pricing-details',
  ],
};
</script>

<style lang="scss" scoped>
.pricing-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px $pulsar-green;
  border-top-width: 4px;
  color: white;
  background: black;
}

.pricing-card__title {
  margin: 1rem 0 .5rem 1rem;
  font-family: $chromo;
  font-style: oblique;
  font-size: 1.25rem;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
}

.pricing-card__description {
  margin: 0 0 1rem 1rem;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: rgba(255,255,255,.75);
}

.pricing-card__details,
.pricing-card__details--session {
  align-self: flex-end;
  padding: .5rem 0 0 1.5rem;
  background: linear-gradient(313.36deg, rgba(91, 184, 137, 0.5) 0%, rgba(91, 184, 137, 0.1) 96.9%);
  clip-path: polygon(7% 0%, 100% 0, 100% 100%, 0% 100%);
}

.pricing-card__details {
  display: grid;
  grid-template-areas: 
    "month trim"
    "accu  accu";
  grid-template-columns: 1fr auto;
  align-items: center;
}

.pricing-card__details--session {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
}

.details__month {
  grid-area: month;
}

.details__item {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: $chromo;
  font-style: oblique;
  font-weight: 900;
  color: white;
  line-height: 1;
}

.details__amount {
  font-size: 40px;
}

.details__period {
  padding-bottom: 3px;
  max-width: 20px;
  margin-left: .25rem;
}

.details__currency,
.details__period {
  font-size: 13px;
}

.details__trimester {
  position: relative;
  grid-area: trim;
  padding: 5px 2rem 0;

  .details__amount {
    font-size: 25px;
  }
  
  .details__period {
    font-size: 10px;
    padding-bottom: 1px;
  }

  &:before {
    content: '';
    position: absolute;
    left: 1rem;
    bottom: -0.5rem;
    height: 45px;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    transform: rotate(10deg);
  }
}

.details__description {
  grid-area: accu;
  font-size: 12px;
  padding: .5rem 1rem .5rem;
  color: rgba(255,255,255,.75);
}

</style>
