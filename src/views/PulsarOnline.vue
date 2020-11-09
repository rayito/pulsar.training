<template>
  <component v-bind:is="currentComponent"></component>
</template>

<script>
import PulsarOnlineHome from '@/components/organisms/PulsarOnlineHome.vue';
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
  components: {
    PulsarOnlineHome,
  },
  data() {
    return {
      date: new Date(),
      dateDay: '',
      dateMonth: '',
      currentComponent: 'PulsarOnlineHome',
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

</style>
