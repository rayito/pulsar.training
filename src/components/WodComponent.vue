<template>
  <section class="wod-component">
    <h1>
      <span class="day-name">{{ fullDate.day }}</span>{{ fullDate.simpleDate }}
    </h1>
    <div class="wod">
      <div class="wod__block" v-for="block in wod" v-bind:key="block.type">
        <h2 class="block__type">/{{ block.type }}</h2>
        <div class="sub-block" v-for="subBlock in block.subBlocks" :key="subBlock.order">
          <div class="block__container">
            <div class="block__rounds" v-if="subBlock.rounds != ''">
              <span class="rounds-text">{{ subBlock.rounds }}</span>
            </div>
            <div class="block__moves">
              <ul>
                <li v-for="move in subBlock.moves" :key="move">{{ move }}</li>
              </ul>
            </div>
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
      const newDate = this.date === 'today-wod'
        ? new Date()
        : new Date(this.date);
      return {
        day: DAYS[newDate.getDay() - 1],
        dayNumber: newDate.getDay() - 1,
        simpleDate: this.leadZeros(newDate, false),
        timestamp: newDate.getTime(),
      };
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
            subBlocks: [e],
          });
        } else {
          finalBlocks.forEach((b) => {
            if (b.type === e.type) {
              b.subBlocks.push(e);
            }
          });
        }
      });
      return finalBlocks;
    },
  },
  created: function created() {
    const client = contentful.createClient({
      space: '1cfepwuemnrk',
      accessToken: 'v13Y_ubATC1c-6Olh2owS6eb5QvE4FyJiqsEw9irkjo',
    });
    client.getEntries({
      content_type: 'wod',
      'fields.date': '2020-04-16',
    })
    .then((response) => { this.wodBlocks = response.items; })
    .catch(console.error);
  },
  methods: {
    leadZeros: function leadZeros(date, leadingYear) {
      const day = `0${date.getDate()}`;
      const month = `0${date.getMonth() + 1}`;
      let zeroedDate = '';
      if (leadingYear) {
        zeroedDate = `${date.getFullYear()}-${month.slice(-2)}-${day.slice(-2)}`;
      } else {
        zeroedDate = `${day.slice(-2)}/${month.slice(-2)}/${date.getFullYear()}`;
      }
      return zeroedDate;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/scss/variables.scss";

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

  .sub-block {
    margin-bottom: .5rem;
  }
}

.block__container {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 1rem;
  align-items: center;
  font-size: 1.2rem;
  font-style: oblique;
  font-weight: 500;
  color: white;

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
      justify-content: space-between;
    }
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

</style>
