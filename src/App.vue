<template>
  <v-app id="app" dark>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: 'app'
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0px;
}
</style>
