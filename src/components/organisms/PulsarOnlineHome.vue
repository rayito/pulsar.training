<template>
  <main class="online">
    <div class="online__main-section">
      <div class="online__header">
        <div class="online__date">
          <span class="online__date-day">{{ dateDay }}</span>
          <span class="online__date-month">{{ dateMonth }}</span>
        </div>
        <div class="online__live">
          <span class="online__live-dot"></span>
          {{liveMessage || 'EN DIRECTO a las 18H'}}
        </div>
        <div class="online__link">Reserva tu plaza en AimHarder</div>
      </div>
      <iframe class="online__video" :src="wodVideoLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" modestbranding="1" allowfullscreen></iframe>
      <div class="online__controls">
        <LinkButton 
          class="online__control-button" 
          button-text="VER PIZARRA" 
          :link-to="`/pulsar-online/pizarra/${fullDate}`"
        />
        <a 
          class="button online__control-button solid" 
          :href="wodMeet"
          target="_blank">
          CONECTARSE A LA CLASE
        </a>
      </div>
    </div>
    <PulsarOnlineLastWods 
      :lastWods="lastWods"
    />
  </main>
</template>

<script>
import LinkButton from '@/components/atoms/LinkButton.vue';
import PulsarOnlineLastWods from '@/components/organisms/PulsarOnlineLastWods.vue';
import { createClient } from 'contentful-management';
import userLog from '@/services/userLog';
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

const MESSAGES = [
  'EN DIRECTO a las 10H', // 0
  'EN DIRECTO a las 10H', // 1
  'EN DIRECTO a las 10H', // 2
  'EN DIRECTO a las 10H', // 3
  'EN DIRECTO a las 10H', // 4
  'EN DIRECTO a las 10H', // 5
  'EN DIRECTO a las 10H', // 6
  'EN DIRECTO a las 10H', // 7
  'EN DIRECTO a las 10H', // 8
  'EN DIRECTO a las 10H', // 9
  'EN DIRECTO AHORA', // 10
  'EN DIRECTO a las 18H', // 11
  'EN DIRECTO a las 18H', // 12
  'EN DIRECTO a las 18H', // 13
  'EN DIRECTO a las 18H', // 14
  'EN DIRECTO a las 18H', // 15
  'EN DIRECTO a las 18H', // 16
  'EN DIRECTO a las 18H', // 17
  'EN DIRECTO AHORA', // 18
  'EN DIRECTO AHORA', // 19
  'EN DIRECTO AHORA', // 20
  'EN DIRECTO a las 10H', // 21
  'EN DIRECTO a las 10H', // 22
  'EN DIRECTO a las 10H', // 23
];

export default {
  name: 'PulsarOnlineHome',
  components: {
    LinkButton,
    PulsarOnlineLastWods,
  },
  data() {
    return {
      date: new Date(),
      dateDay: '',
      dateMonth: '',
      fullDate: '',
      liveMessage: '',
      wodVideo: '',
      wodMeet: '',
      lastWods: [],
    };
  },
  computed: {
    wodVideoLink: function () { 
      return `https://www.youtube.com/embed/${this.wodVideo}?modestbranding=1`;
    },
  },
  methods: {
    logout: () => {
      userLog.logout();
    },
    getLiveMessage: () => MESSAGES[(new Date()).getHours()],
    getWod: function () {
      const client = createClient({
        accessToken: 'CFPAT--Gy7PqjHFkN-kbitWa0m2Q8edHZbu8HbN2tW6JDe828',
      });

      client.getSpace('1cfepwuemnrk')
      .then((space) => space.getEnvironment('master'))
      .then((env) => env.getEntries({
        content_type: 'wod',
        'fields.wodDate[lte]': this.date,
      }))
      .then((entries) => {
        if (entries.items.length > 0) {
          console.log(entries.items);
          const todayWod = entries.items.find((item) => item.fields.date['en-US'] === this.fullDate);
          this.wodVideo = todayWod.fields.wodVideo['en-US'];
          this.wodMeet = todayWod.fields.wodMeeting['en-US'];

          this.lastWods = entries.items
            .filter((item) => item.fields.date['en-US'] !== this.fullDate)
            .map((item) => item.fields);
        }
      });
    },
  },
  created() {
    this.dateDay = lZ(this.date.getDate());
    this.dateMonth = MONTHS[this.date.getMonth()];
    this.fullDate = `${this.dateDay}.${lZ(this.date.getMonth() + 1)}.${this.date.getFullYear()}`;
    this.liveMessage = this.getLiveMessage();
    setInterval(() => {
      this.liveMessage = this.getLiveMessage();
    }, 60000);
    this.getWod();
  },
};
</script>

<style lang="scss" scoped>
.online {
  @import '~@/components/atoms/button.scss';

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(56px);
  min-height: calc(100vh - 80px);
  margin: 0 auto;
  background: black;

  @include respond-to(not-phone) {
    min-height: calc(100vh - 64px);
  }

  @include respond-to(descop) {
    padding-top: calc(88px);
  }

  .online__main-section {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #000000;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    margin-bottom: .25rem;
  }

  .online__header {
    display: grid;
    grid-template-areas: 
      "date live"
      "date online";
    grid-template-columns: 70px 1fr;
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    padding-top: .25rem;
    color: white;
    font-family: $chromo;
    font-style: oblique;
  }

  .online__date {
    grid-area: date;
    display: flex;
    flex-direction: column;
    align-items: center;
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

  @keyframes on-off {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    15% {
      opacity: 1;
      transform: scale(1);
    }

    85% {
      opacity: 1;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(0);
    }
  }

  .online__live {
    grid-area: live;
    align-self: end;
    justify-self: end;
    display: flex;
    align-items: center;
    font-family: $chromo;
    font-size: 20px;
    font-weight: 700;

    .online__live-dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      background: #C5283D;
      border-radius: 50%;
      margin-right: .25rem;
      animation: on-off 1.5s infinite;
    }
  }

  .online__link {
    grid-area: online;
    align-self: center;
    justify-self: end;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.65)
  }

  .online__video {
    width: 100vw;
    max-width: 600px;
    height: 60vw;
    max-height: 360px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .online__controls {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 400px;
    padding: 0 1rem;
    margin: 0 auto;

    @include respond-to(not-phone) {
      justify-content: center;
    }

    .online__control-button {
      margin: 0 .25rem;
    }
  }
}
</style>
