<template>
  <main class="online-wod">
    <h1 class="online-wod__title">{{ titleDate }}</h1>
    <div v-html="wodDetails" class="online-wod__description"></div>
    <div v-if="!isToday && wodVideo !== ''" class="online__video-wrap">
      <iframe class="online__video" :src="wodVideoLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" modestbranding="1" allowfullscreen></iframe>
    </div>
    <LinkButton 
      class="change-pass__control-button" 
      button-text="VOLVER" 
      link-to="/pulsar-online"
    />
  </main>
</template>

<script>
import LinkButton from '@/components/atoms/LinkButton.vue';
import { createClient } from 'contentful-management';
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
  name: 'PulsarOnlineWod',
  components: {
    LinkButton,
  },
  data() {
    return {
      date: '',
      searchDate: '',
      titleDate: '',
      wodDetails: '',
      wodVideo: '',
      isToday: true,
    };
  },
  computed: {
    wodVideoLink: function () { 
      return `https://www.youtube.com/embed/${this.wodVideo}?modestbranding=1`;
    },
  },
  methods: {
    getTitleDate: function () {
      const fullDate = new Date(this.date);
      const day = utils.leadZeros(fullDate.getDate());
      const month = MONTHS[fullDate.getMonth()];
      this.titleDate = `${day} ${month}`;
    },
    getWodDetails: function () {
      const client = createClient({
        accessToken: 'CFPAT--Gy7PqjHFkN-kbitWa0m2Q8edHZbu8HbN2tW6JDe828',
      });

      client.getSpace('1cfepwuemnrk')
      .then((space) => space.getEnvironment('master'))
      .then((env) => env.getEntries({
        content_type: 'wod',
        'fields.date': this.$route.params.date,
      }))
      .then((entries) => {
        if (entries.items.length > 0 && entries.items[0].fields.wodDetails) {
          this.wodDetails = entries.items[0].fields.wodDetails['en-US'];
          this.wodVideo = entries.items[0].fields.wodVideo ? entries.items[0].fields.wodVideo['en-US'] : '';
        } else {
          this.$router.replace('/pulsar-online');
        }
      });
    },
  },
  created() {
    this.date = utils.parseDate(this.$route.params.date);
    const d = new Date();
    this.isToday = this.date.getDate() === d.getDate() 
      && this.date.getMonth() === d.getMonth() 
      && this.date.getFullYear() === d.getFullYear();
    this.getTitleDate();
    this.searchDate = this.$route.params.date;
    this.getWodDetails();
  },
};
</script>

<style lang="scss">
.online-wod {
  @include view-sizing;

  .online-wod__title {
    @include online-title;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .online-wod__description {
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 1.5rem;

    h2 {
      @include online-title;
      margin-bottom: .25rem;
      font-size: 20px;
      text-transform: none;
    }

    div {
      padding-left: .5rem;
      margin-bottom: .15rem;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.95);
    }
  }

  .online__video-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .online__video {
    width: 100%;
    max-width: 600px;
    height: 60vw;
    max-height: 360px;
    margin-bottom: 1rem;
  }

  .change-pass__control-button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
