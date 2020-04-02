<template>
  <section class="list-component">
    <h1 class="title">WODs ANTERIORES</h1>
    <ul>
      <li v-for="wod in sortedWods"
          v-bind:key="wod.timestamp"
          v-bind:class="{ weekend: wod.dayNumber >= 5}">
        <router-link :to="wod.routeDate">
          <span class="day-name">{{ wod.day }}</span>{{ wod.simpleDate }}
        </router-link>
      </li>
    </ul>
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

export default {
  name: 'WodList',
  data() {
    return {
      wodList: [],
    };
  },
  created() {
    this.wodList.push(this.dateConstructor(new Date('March 27, 2020')));
    this.wodList.push(this.dateConstructor(new Date('March 28, 2020')));
    this.wodList.push(this.dateConstructor(new Date('March 30, 2020')));
    this.wodList.push(this.dateConstructor(new Date('March 31, 2020')));
    this.wodList.push(this.dateConstructor(new Date('April 1, 2020')));
    this.wodList.push(this.dateConstructor(new Date('April 2, 2020')));
  },
  computed: {
    sortedWods: function sortedWods() {
      return this.wodList.slice().sort((a, b) => b.timestamp - a.timestamp);
    },
  },
  methods: {
    dateConstructor: function dateConstructor(date) {
      return {
        day: DAYS[date.getDay() - 1],
        dayNumber: date.getDay() - 1,
        simpleDate: this.leadZeros(date, false),
        routeDate: `/wod/${this.leadZeros(date, true)}`,
        timestamp: date.getTime(),
      };
    },
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
.title {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  font-style: oblique;
  color: white;
}
.list-component {
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 650px;
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
li {
  margin: .25rem 0;

  &.weekend {
    margin-top: 1rem;

    @media screen and (min-width: 600px) {
      margin-top: .25rem;
    }
  }

  a {
    font-size: 2rem;
    font-style: oblique;
    font-weight: 500;
    color: $pulsar-green;
    text-decoration: none;

    .day-name {
      display: inline-block;
      margin-right: 1rem;
    }
  }
}

</style>
