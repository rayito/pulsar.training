<template>
  <div class="about">
    <WodComponent :date="$route.params.date" />
  </div>
</template>

<script>
import WodComponent from '@/components/WodComponent.vue';

export default {
  name: 'WodView',
  components: {
    WodComponent,
  },
};
</script>
