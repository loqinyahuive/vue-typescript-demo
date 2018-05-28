<template>
  <div>
    <div>
      <v-btn @click="getAccountId" class="btnStyle">Refresh</v-btn>
    </div>
    <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
      >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right" :class="{ red_style: (props.item.day < 0 || props.item.day.indexOf('-')>=0) }">{{ props.item.day }}</td>
        <td class="text-xs-right" :class="{ red_style: (props.item.month < 0 || props.item.month.indexOf('-')>=0) }">{{ props.item.month }}</td>
        <td class="text-xs-right" :class="{ red_style: (props.item.year < 0 || props.item.year.indexOf('-')>=0) }">{{ props.item.year }}</td>
        <td class="text-xs-right" :class="{ red_style: (props.item.all < 0 || props.item.all.indexOf('-')>=0) }">{{ props.item.all }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<style >
html{
  overflow: hidden !important;
  font-family: "Segoe UI",Arial,sans-serif !important;
}
.table__overflow{
  width:calc(100% - 20px);
  overflow-x:hidden;
  overflow-y:hidden !important}
.table{
  overflow: hidden;
}
.backStyle{
  background: #464646 !important;height: 23px!important;border-color: #747474 #5d5d5d #2e2e2e #353535;
}
.red_style{
  color: red;
}
table.table thead tr {
    height: 23px;
}
table tbody tr:nth-child(even){
  background: #202020;
}
table.table tbody td, table.table tbody th {
  height: 22px !important;
}
table{
  border-collapse:collapse;
  border:1px solid #464646;
  margin: 20px;
  width: calc(100%-40px) !important
}
.application--dark .table {
  background-color: #151515;
  color: #fff;
}
table tbody tr:hover{
  background-color: #1a3546 !important;
}
table th,table td{
  border:1px solid #464646;
}
.btnStyle{
  background-color: #1a3546 !important;
  margin-left: 20px;
  margin-top: 20px;
}
</style>
<script lang="ts">
import Vue from "vue";
import axios from 'axios';
import Component from "vue-class-component";

@Component
export default class Metrice extends Vue {
  headers:Array<Object> = [
    {
      text: 'Name',
      align: 'left',
      sortable: false,
      value: 'name',
      class:'backStyle'
    },
    { text: 'Day', align: 'right', sortable: false, class:'backStyle' },
    { text: 'Month', align: 'right', sortable: false, class:'backStyle' },
    { text: 'Year', align: 'right', sortable: false, class:'backStyle' },
    { text: 'All', align: 'right', sortable: false, class:'backStyle' }
  ]
  items:Array<Object> = []
  getAccountId():void {
    const that = this;
    let header = {
      'Content-Type': 'application/json'
    }
    let data = {
      sessionId: this.$route.query.sessionId
    }
    axios.post('https://hermes-dev.warriortrading.com:7020/getAccountId',data,{
      headers:{
      'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        that.items = response.data;
      })
      .catch(function (error) {
      })
  }
  mounted() {
    this.getAccountId();
  }
}
</script>
