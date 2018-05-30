<template>
  <layout-golden class="screen">
    <gl-col>
      <gl-component title="Alert" :height="height">
        <PyramidChartsComponent />
      </gl-component>
      <gl-component title="Metrice" :height="height">
        <Metrice />
      </gl-component>
      <gl-stack>
        <gl-component title="List" :height="height">
          <!-- <Pyramid /> -->
          <Calendar />
        </gl-component>
      </gl-stack>
    </gl-col>
  </layout-golden>
</template>

<script>
import Vue from "vue";
import Pyramid from './pyramid.vue'
import PyramidChartsComponent from './pyramidChartsComponent.vue'
import Metrice from './metrice.vue'
import Calendar from './calendar.vue'
export default Vue.extend({
  data () {
    return {
      height: 30
    }
  },
  components: { Pyramid, Metrice, PyramidChartsComponent, Calendar },
  mounted () {
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen {
	width: 100vw;
	height: 100vh;
}
</style>
