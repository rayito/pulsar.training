<template>
  <main class="online">
    <div class="online__header">
      <div class="online__date">
        <span class="online__date-day">{{ dateDay }}</span>
        <span class="online__date-month">{{ dateMonth }}</span>
      </div>
      <div class="online__welcome">Hola, {{ userName }}!</div>
      <div class="online__link">EN DIRECTO A LAS 18:00</div>
    </div>
    <iframe class="online__video" src="https://www.youtube.com/embed/U1jRSwqGxcE?modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" modestbranding="1" allowfullscreen></iframe>
    <a @click="logout" href="" class="logout button solid online__access">LOGOUT</a>
  </main>
</template>

<script>
import userLog from '@/services/userLog';
import utils from '@/utils/utils';

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
  name: 'PulsarOnline',
  data() {
    return {
      date: new Date(),
      dateDay: '',
      dateMonth: '',
    };
  },
  computed: {
    userName: () => userLog.getUserName(),
  },
  methods: {
    logout: () => {
      userLog.logout();
    },
  },
  created() {
    this.dateDay = utils.leadZeros(this.date.getDate());
    this.dateMonth = MONTHS[this.date.getMonth()];
  },
};
</script>

<style lang="scss" scoped>
.online {
  @import '~@/components/atoms/button.scss';

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(56px + .5rem);
  min-height: calc(100vh - 80px);
  max-width: 1000px;
  margin: 0 auto;

  @include respond-to(not-phone) {
    min-height: calc(100vh - 64px);
  }

  @include respond-to(descop) {
    padding-top: calc(88px + 1.5rem);
  }

  .online__header {
    display: grid;
    grid-template-areas: 
      "date welcome"
      "date online";
    width: 100%;
    max-width: 600px;
    padding: 1rem;
    padding-top: 0;
    color: white;
    font-family: $chromo;
    font-style: oblique;
  }

  .online__date {
    grid-area: date;
    display: flex;
    flex-direction: column;
    font-weight: 800;
    line-height: 1;
    color: white;

    .online__date-day {
      font-size: 3rem;
    }

    .online__date-month {
      text-transform: uppercase;
      font-weight: 500;
    }
  }

  .online__welcome {
    grid-area: welcome;
  }

  .online__link {
    grid-area: online;
  }

  .online__video {
    width: 100vw;
    max-width: 600px;
    height: 60vw;
    max-height: 360px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
}
</style>
