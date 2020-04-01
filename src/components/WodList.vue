<template>
  <section class="list-component">
    <h1 class="title">WODs ANTERIORES</h1>
    <ul>
      <li v-for="wod in wodList" v-bind:key="wod.date">
        <router-link to="/building">
          <span class="day-name">{{ wod.day_name }}</span>{{ wod.date }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'WodList',
  data() {
    return {
      wodList: [],
    };
  },
  created() {
    this.wodList.push({ day_name: 'Martes', date: '31/03/2020' });
    this.wodList.push({ day_name: 'Lunes', date: '30/03/2020' });
    this.wodList.push({ day_name: 'Sábado', date: '28/03/2020' });
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
  padding: 1rem;
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
}
li {

  a {
    font-size: 2rem;
    font-style: oblique;
    font-weight: 500;
    color: $pulsar-green;
    text-decoration: none;

    .day-name {
      display: inline-block;
      width: 100px;
    }
  }
}

</style>
