<template>
  <section class="wod-component">
    <h1>
      <span class="day-name">{{ fullDate.day }}</span>{{ fullDate.simpleDate }}
    </h1>
    <div class="wod">
      <div class="wod__phase" v-for="phase in wod" v-bind:key="phase.type">
        <h2 class="phase__type">/{{ phase.type }}</h2>
        <div class="block" v-for="block in phase.blocks" :key="block.order">
          <div class="block__subtitle" v-if="block.subtitle">
          {{ block.subtitle }}
        </div>
          <div class="block__container">
            <div class="block__rounds" v-if="block.rounds != ''">
              <span class="rounds-text">{{ block.rounds }}</span>
            </div>
            <div class="block__moves">
              <ul>
                <li v-for="move in block.moves" :key="move">{{ move }}</li>
              </ul>
            </div>
          </div>
          <div class="block__rest" v-if="block.rest">
            {{ block.rest }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const DAYS = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
];
const contentful = require('contentful');

export default {
  name: 'WodComponent',
  props: ['date'],
  data() {
    return {
      wodBlocks: [],
    };
  },
  computed: {
    fullDate: function fullDate() {
      return {
        day: DAYS[this.newDate.getDay() - 1],
        dayNumber: this.newDate.getDay() - 1,
        simpleDate: this.leadZeros(this.newDate, false, '/'),
        timestamp: this.newDate.getTime(),
      };
    },
    newDate() {
      return this.date === 'today-wod'
        ? new Date()
        : new Date(this.date);
    },
    wod() {
      let blocks = this.wodBlocks.map((e) => e.fields);
      blocks = blocks.sort((a, b) => a.order - b.order);
      const blockTypes = [];
      const finalBlocks = [];
      blocks.forEach((e) => {
        if ( !blockTypes.includes(e.type) ) {
          blockTypes.push(e.type);
          finalBlocks.push({
            type: e.type,
            blocks: [e],
          });
        } else {
          finalBlocks.find((b) => b.type === e.type).blocks.push(e);
        }
      });
      return finalBlocks;
    },
  },
  created() {
    this.fetchWod();
  },
  beforeUpdate() {
    this.fetchWod();
  },
  methods: {
    fetchWod() {
      const client = contentful.createClient({
        space: '1cfepwuemnrk',
        accessToken: 'v13Y_ubATC1c-6Olh2owS6eb5QvE4FyJiqsEw9irkjo',
      });
      let date = '';
      if (this.date === 'today-wod') {
        date = this.leadZeros(this.newDate, true, '-');
      } else {
        date = this.date;
      }
      client.getEntries({
        content_type: 'wod',
        'fields.date': date,
      })
      .then((response) => { this.wodBlocks = response.items; })
      .catch(console.error);
    },
    leadZeros(date, leadingYear, divider) {
      const div = divider || '/';
      const day = `0${date.getDate()}`;
      const month = `0${date.getMonth() + 1}`;
      let zeroedDate = '';
      if (leadingYear) {
        zeroedDate = `${date.getFullYear()}${div}${month.slice(-2)}${div}${day.slice(-2)}`;
      } else {
        zeroedDate = `${day.slice(-2)}${div}${month.slice(-2)}${div}${date.getFullYear()}`;
      }
      return zeroedDate;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import "~@/scss/_variables.scss";
@import "~@/scss/_init.scss";

* {
  font-family: "Chromoxome", sans-serif;
}

h1 {
  margin-top: 1rem;
  font-size: 2rem;
  font-style: oblique;
  font-weight: 500;
  color: white;

  .day-name {
    display: inline-block;
    margin-right: 1rem;
  }
}

.wod-component {
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 650px;
  text-align: left;
}

h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-style: oblique;
  font-weight: 900;
  color: $pulsar-green;
}

.wod {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  * {
    text-transform: uppercase;
  }

  .block {
    margin-bottom: .5rem;
  }
}

.block__container,
.block__subtitle,
.block__rest {
  font-size: 1.2rem;
  font-style: oblique;
  font-weight: 500;
  color: white;
}

.block__subtitle {
  margin-top: -.5rem;
  margin-bottom: .5rem;
}

.block__rest {
  margin: .5rem 0 .5rem 2rem;
}

.block__container {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 1rem;
  align-items: center;
  
  .block__rounds {
    display: flex;
    align-items: center;
    border-right: solid 1px white;
    height: 100%;

    .rounds-text {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
    }
  }

  .block__moves {
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}

</style>
