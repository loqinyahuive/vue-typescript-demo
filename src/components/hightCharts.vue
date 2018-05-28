<template>
  <div class="highcharts-container"></div>
</template>

<script>
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/funnel';
Exporting(Highcharts);

export default {
  name: 'highcharts',
  props: {
    options: {
      type: Object
    },
    styles: {
      type: Object
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    console.log('******** this.options', this.styles);
    this.$el.style.width = (this.styles.width || 800) + 'px';
    this.$el.style.height = (this.styles.height || 400) + 'px';
    new Highcharts.Chart(this.$el, this.options)
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .highcharts-container {
    width: 100%;
    height: 250px;
  }
</style>
