<template>
  <div>
    <v-btn color="blue" @click="isShowPrice = !isShowPrice">click me</v-btn>
    <v-flex id="calendar" style="width: 600px;height:400px;"></v-flex>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import echarts from 'echarts';

export default Vue.extend({
  data: () => ({
    chart: {},
    isShowPrice: false
  }),
  methods: {
    getVirtulData () {
      let date = +echarts.number.parseDate('2017-02-01');
      let end = +echarts.number.parseDate('2017-03-01');
      let dayTime = 3600 * 24 * 1000;
      let data: any = [];
      for (var time = date; time <= end; time += dayTime) {
          data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 100)
          ]);
      }
      return data;
    },
    drawCalendar (pyramidChart) {
      const _this = this;
      let cellSize = [60, 60];
      let option = {
          tooltip: {},
          title: {
            text: 'calendar'
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          calendar: {
            top: 'middle',
            left: 'center',
            orient: 'vertical',
            cellSize: cellSize,
            yearLabel: {
              show: false,
              textStyle: {
                fontSize: 30
              }
            },
            dayLabel: {
              margin: 20,
              firstDay: 1,
              nameMap: 'en',
              color: '#fff'
            },
            monthLabel: {
              show: false
            },
            range: ['2017-02']
          },
          visualMap: {
            min: 0,
            max: 100,
            itemWidth: 20,
            type: 'piecewise',
            splitNumber: 3,
            pieces: [
              {gt: 60, lte: 100},
              {gt: 30, lte: 60},
              {gt: 0, lte: 30},
            ],
            categories: [],
            left: 'center',
            bottom: 20,
            inRange: {
                color: ['#666666', '#ffa5a9', '#abe1b9']
            },
            seriesIndex: [1],
            orient: 'horizontal'
        },
          series: [{
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  console.log('******* params', params);
                  if (_this.isShowPrice) {
                    return echarts.format.formatTime('dd', params.value[0]) + '\n $' + Math.floor(Math.random() * 100);
                  } else {
                    return echarts.format.formatTime('dd', params.value[0]);
                  }
                },
                offset: [-15, -5],
                textStyle: {
                  color: '#000',
                  fontSize: 14
                }
              }
            },
            data: this.getVirtulData()
          }, {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: this.getVirtulData()
          }]
        };
      pyramidChart.setOption(option);
    }
  },
  mounted () {
    this.chart = echarts.init(document.getElementById('calendar'));
    this.drawCalendar(this.chart);
  },
  watch: {
    isShowPrice: function (n) {
      this.chart = echarts.init(document.getElementById('calendar'));
      this.drawCalendar(this.chart);
    }
  },
});
</script>
