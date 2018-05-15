<template>
  <layout-golden class="screen">
    <gl-col>
      <gl-component title="Alert" :height="height">
        <v-flex>
          <v-alert :value="true" type="success">
            This is a success alert.
          </v-alert>

          <v-alert :value="true" type="info">
            This is a info alert.
          </v-alert>

          <v-alert :value="true" type="warning">
            This is a warning alert.
          </v-alert>

          <v-alert :value="true" type="error">
            This is a error alert.
          </v-alert>
        </v-flex>
      </gl-component>
      <gl-component title="Metrice" :height="height">
        <Metrice />
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
import Metrice from './metrice.vue'
export default Vue.extend({
  data () {
    return {
      height: 30
    }
  },
  components: { List, Metrice }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen {
	width: 100vw;
	height: 100vh;
}
</style>
