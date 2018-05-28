<template>
  <layout-golden class="screen">
    <gl-col>
      <gl-component title="Alert" :height="height">
        <!-- <HPyramid /> -->
        <highcharts-component :options="stockOptions" :styles="styles"></highcharts-component>
      </gl-component>
      <gl-component title="Metrice" :height="height">
        <!-- <Metrice /> -->
      </gl-component>
      <gl-stack>
        <gl-component title="List" :height="height">
          <List />
        </gl-component>
      </gl-stack>
    </gl-col>
  </layout-golden>
</template>

<script>
import Vue from "vue";
import List from './list.vue'
// import HPyramid from './h_pyramid.vue'
import highchartsComponent from './hightCharts.vue'
export default Vue.extend({
  data () {
    return {
      height: 30,
      styles: {'height': 300, 'width': 650},
      stockOptions: {
				chart: {
						type: 'pyramid',
						marginRight: 100
				},
				title: {
						text: 'Sales pyramid',
						x: -50
				},
				plotOptions: {
						series: {
								reversed: true,
								dataLabels: {
										enabled: true,
										format: '<b>{point.name}</b> ({point.y:,.0f})',
										color: 'white',
										softConnector: true
								}
						}
				},
				legend: {
						enabled: false
				},
				series: [{
						name: 'Unique users',
						data: [
								['Website visits',   10],
								['Downloads',       9],
								['Requested price list', 8],
								['Invoice sent',    0],
								['Finalized',    0]
						]
				}],
        credits: {
          enabled: false
        }
		}
    }
  },
  components: { List, highchartsComponent }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen {
	width: 100vw;
	height: 100vh;
}
</style>
