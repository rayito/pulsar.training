<template>
  <section class="last-wods">
    <router-link 
      v-for="wod in wods" 
      :key="wod.showDate" 
      :to="`/pulsar-online/pizarra/${wod.showDate}`"
      class="last-wods__wod-block">
      <div class="last-wods__content">
        <div class="last-wods__wod-date">
          <span class="last-wods__wod-day">{{ wod.wodDay }}</span>
          <span class="last-wods__wod-month">{{ wod.wodMonth }}</span>
        </div>
        <div class="last-wods__link button ghost">
          VER PIZARRA Y VÍDEO
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
import utils from '@/utils/utils';

const lZ = utils.leadZeros;

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export default {
  name: 'PulsarOnlineLastWods',
  props: ['lastWods'],
  computed: {
    wods: function () {
      return this.lastWods
        .map((wod) => {
          const date = new Date(wod.wodDate['en-US']);
          const day = lZ(date.getDate());
          const month = MONTHS[date.getMonth()];
          return {
            wodDate: date,
            wodDay: day,
            wodMonth: month,
            showDate: wod.date['en-US'],
            wodDetails: wod.wodDetails['en-US'],
            wodVideo: wod.wodVideo ? wod.wodVideo['en-US'] : '',
          };
        })
        .sort((a, b) => b.wodDate - a.wodDate);
    },
  },
};
</script>

<style lang="scss">
@import '~@/components/atoms/button.scss';

.last-wods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0 .5rem;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 2rem;

  a:not(.md-button):hover {
    text-decoration: none;
  }

  .last-wods__wod-block {
    display: flex;
    justify-content: center;
    margin-bottom: .25rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #000000;
    color: white;
    font-family: $chromo;
    font-style: oblique;
    cursor: pointer;

    .last-wods__play {
      display: flex; 
      justify-self: end;
      opacity: 0;
      transform: scale(0);
      transition: all .2s ease;
    }

    &:hover .last-wods__play {
      opacity: 1;
      transform: scale(1);
    }
  }

  .last-wods__content {
    display: grid;
    grid-template-areas: 
      "date play button";
    grid-template-columns: 70px 1fr auto;
    gap: 1rem;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: .25rem 1rem;
  }

  .last-wods__wod-date {
    grid-area: date;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: .25rem;
    font-weight: 800;
    line-height: 1;
    color: white;

    .last-wods__wod-day {
      font-size: 2.5rem;
      line-height: 1;
    }

    .last-wods__wod-month {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 500;
    }
  }

  .last-wods__link {
    position: relative;
    grid-area: button;
  }
}
</style>
