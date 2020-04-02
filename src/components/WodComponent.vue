<template>
  <section class="wod-component">
    <h1>
      <span class="day-name">{{ fullDate.day }}</span>{{ fullDate.simpleDate }}
    </h1>
    <div class="wod">
      <div class="wod__block">
        <h2>/WARM UP</h2>
        <div class="block__container">
          <div class="block__rounds">
            <span class="rounds-text">3 ROUNDS</span>
          </div>
          <div class="block__moves">
            <ul>
              <li>20 D.U. // 30 S.U. // 30 SKIPPING</li>
              <li>1 WALL CLIMB</li>
              <li>2 BURPEE TO TARGET</li>
              <li>3 WALL CLIMB</li>
              <li>4 ONE HAND BURPEE</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="wod__block">
        <h2>/SKILL</h2>
        <div class="block__container">
          <div class="block__rounds">
            <span class="rounds-text">5 ROUNDS</span>
          </div>
          <div class="block__moves">
            <ul>
              <li>A) 12" STRICT H.S.P.U.</li>

              <li>B) 48" STRICT PRESS</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="wod__block">
        <h2>/METCON</h2>
        <div class="block__container">
          <div class="block__rounds">
            <span class="rounds-text">EMOM 15'</span>
          </div>
          <div class="block__moves">
            <ul>
              <li>I) 35 O.H.S. PICA</li>
              <li>II) MAX BURPEES OVER PVC</li>
              <li>III) REST</li>
            </ul>
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

export default {
  name: 'WodComponent',
  props: ['date'],
  data() {
    return {
      wodList: [],
    };
  },
  computed: {
    fullDate: function fullDate() {
      const newDate = new Date(this.date);
      return {
        day: DAYS[newDate.getDay() - 1],
        dayNumber: newDate.getDay() - 1,
        simpleDate: this.leadZeros(newDate, false),
        timestamp: newDate.getTime(),
      };
    },
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
