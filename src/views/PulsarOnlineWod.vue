<template>
  <main class="online-wod">
    <h1 class="online-wod__title">{{ titleDate }}</h1>
    <div v-html="wodDetails" class="online-wod__description"></div>
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
    };
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
        console.log(entries);
        if (entries.items.length > 0 && entries.items[0].fields.wodDetails ) {
          this.wodDetails = entries.items[0].fields.wodDetails['en-US'];
        }
      });
    },
  },
  created() {
    this.date = utils.parseDate(this.$route.params.date);
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

  .change-pass__control-button {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
