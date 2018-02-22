<template>
  <div class="center">
    这是charts页面123
    <Echarts id="main" :options='options' class="echarts"></Echarts>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  import Echarts from '../../../components/Echarts/Echarts.vue';
  export default {
    data: function () {
      return {
        options:{
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        }
      }
    },
    components: {
        'Echarts': Echarts
    }
  }
</script>

<style rel="stylesheet/scss" scoped>
  .echarts{
    width: 400px;
    height: 300px;
  }
</style>
