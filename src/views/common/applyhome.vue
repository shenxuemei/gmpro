<template>
  <div class="mod-home">
    <!-- 图表位置--start -->
    <div class="mod-demo-echarts">
      <el-card>
        <el-row>
          <el-col :span="8">
            <div id="J_chartLineBox" class="chart-box"></div>
          </el-col>
          <el-col :span="8">
            <div id="J_chartBarBox" class="chart-box"></div>
          </el-col>
          <el-col :span="8">
            <div id="J_chartScatterBox" class="chart-box"></div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <!-- 图表位置--end -->
    <el-card class="card-mt">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的关注" name="first">
            <TabOne></TabOne>
          </el-tab-pane>
          <el-tab-pane label="事件日程" name="second">
            <TabTwo></TabTwo>
          </el-tab-pane>
          <el-tab-pane label="预警提示" name="third">
            <TabThree></TabThree>
          </el-tab-pane>
          <el-tab-pane label="沟通会话" name="fourth">
            <TabFour></TabFour>
          </el-tab-pane>
        </el-tabs>
      </template>
    </el-card>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import TabOne from './apply/tab-one'
  import TabTwo from './apply/tab-two'
  import TabThree from './apply/tab-three'
  import TabFour from './apply/tab-four'
  export default {
    data () {
      return {
        chartLine: null,
        chartBar: null,
        chartScatter: null,
        activeName: 'first'
      }
    },
    components: {
      TabOne,
      TabTwo,
      TabThree,
      TabFour
    },
    mounted () {
      this.initChartLine()
      this.initChartBar()
      this.initChartScatter()
    },
    activated () {
      // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
      if (this.chartLine) {
        this.chartLine.resize()
      }
      if (this.chartBar) {
        this.chartBar.resize()
      }
      if (this.chartScatter) {
        this.chartScatter.resize()
      }
    },
    methods: {
      // 切换tab
      handleClick (tab, event) {
        console.log(tab, event)
      },
      // 折线图
      initChartLine () {
        var option = {
          'title': {
            'text': '折线图堆叠'
          },
          'tooltip': {
            'trigger': 'axis'
          },
          'legend': {
            'data': [ '邮件营销', '搜索引擎' ]
          },
          'grid': {
            'left': '3%',
            'right': '4%',
            'bottom': '3%',
            'containLabel': true
          },
          'toolbox': {
            'feature': {
              'saveAsImage': { }
            }
          },
          'xAxis': {
            'type': 'category',
            'boundaryGap': false,
            'data': [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ]
          },
          'yAxis': {
            'type': 'value'
          },
          'series': [
            {
              'name': '邮件营销',
              'type': 'line',
              'stack': '总量',
              'data': [ 120, 132, 101, 134, 90, 230, 210 ]
            },
            {
              'name': '搜索引擎',
              'type': 'line',
              'stack': '总量',
              'data': [ 820, 932, 901, 934, 1290, 1330, 1320 ]
            }
          ]
        }
        this.chartLine = echarts.init(document.getElementById('J_chartLineBox'))
        this.chartLine.setOption(option)
        window.addEventListener('resize', () => {
          this.chartLine.resize()
        })
      },
      // 柱状图
      initChartBar () {
        var option = {
          title: {
            text: '柱状图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['邮件营销', '百度', '其他']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '邮件营销',
              type: 'bar',
              stack: '广告',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '百度',
              type: 'bar',
              barWidth: 5,
              stack: '搜索引擎',
              data: [620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
              name: '其他',
              type: 'bar',
              stack: '搜索引擎',
              data: [62, 82, 91, 84, 109, 110, 120]
            }
          ]
        }
        this.chartBar = echarts.init(document.getElementById('J_chartBarBox'))
        this.chartBar.setOption(option)
        window.addEventListener('resize', () => {
          this.chartBar.resize()
        })
      },
      // 散点图
      initChartScatter () {
        var option = {
          backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
            { offset: 0, color: '#f7f8fa' },
            { offset: 1, color: '#cdd0d5' }
          ]),
          title: {
            text: 'GDP'
          },
          legend: {
            right: 10,
            data: ['1990', '2015']
          },
          xAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          },
          yAxis: {
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            },
            scale: true
          },
          series: [
            {
              name: '1990',
              data: [
                [28604, 77, 17096869, 'Australia', 1990],
                [31163, 77.4, 27662440, 'Canada', 1990],
                [1516, 68, 1154605773, 'China', 1990],
                [13670, 74.7, 10582082, 'Cuba', 1990],
                [28599, 75, 4986705, 'Finland', 1990],
                [29476, 77.1, 56943299, 'France', 1990],
                [31476, 75.4, 78958237, 'Germany', 1990],
                [28666, 78.1, 254830, 'Iceland', 1990],
                [1777, 57.7, 870601776, 'India', 1990],
                [29550, 79.1, 122249285, 'Japan', 1990],
                [2076, 67.9, 20194354, 'North Korea', 1990],
                [12087, 72, 42972254, 'South Korea', 1990],
                [24021, 75.4, 3397534, 'New Zealand', 1990],
                [43296, 76.8, 4240375, 'Norway', 1990],
                [10088, 70.8, 38195258, 'Poland', 1990],
                [19349, 69.6, 147568552, 'Russia', 1990],
                [10670, 67.3, 53994605, 'Turkey', 1990],
                [26424, 75.7, 57110117, 'United Kingdom', 1990],
                [37062, 75.4, 252847810, 'United States', 1990]
              ],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2
              },
              label: {
                emphasis: {
                  show: true,
                  formatter: function (param) {
                    return param.data[3]
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(120, 36, 50, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                    { offset: 0, color: 'rgb(251, 118, 123)' },
                    { offset: 1, color: 'rgb(204, 46, 72)' }
                  ])
                }
              }
            },
            {
              name: '2015',
              data: [
                [44056, 81.8, 23968973, 'Australia', 2015],
                [43294, 81.7, 35939927, 'Canada', 2015],
                [13334, 76.9, 1376048943, 'China', 2015],
                [21291, 78.5, 11389562, 'Cuba', 2015],
                [38923, 80.8, 5503457, 'Finland', 2015],
                [37599, 81.9, 64395345, 'France', 2015],
                [44053, 81.1, 80688545, 'Germany', 2015],
                [42182, 82.8, 329425, 'Iceland', 2015],
                [5903, 66.8, 1311050527, 'India', 2015],
                [36162, 83.5, 126573481, 'Japan', 2015],
                [1390, 71.4, 25155317, 'North Korea', 2015],
                [34644, 80.7, 50293439, 'South Korea', 2015],
                [34186, 80.6, 4528526, 'New Zealand', 2015],
                [64304, 81.6, 5210967, 'Norway', 2015],
                [24787, 77.3, 38611794, 'Poland', 2015],
                [23038, 73.13, 143456918, 'Russia', 2015],
                [19360, 76.5, 78665830, 'Turkey', 2015],
                [38225, 81.4, 64715810, 'United Kingdom', 2015],
                [53354, 79.1, 321773631, 'United States', 2015]
              ],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2
              },
              label: {
                emphasis: {
                  show: true,
                  formatter: function (param) {
                    return param.data[3]
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(25, 100, 150, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                    { offset: 0, color: 'rgb(129, 227, 238)' },
                    { offset: 1, color: 'rgb(25, 183, 207)' }
                  ])
                }
              }
            }
          ]
        }
        this.chartPie = echarts.init(document.getElementById('J_chartScatterBox'))
        this.chartPie.setOption(option)
        window.addEventListener('resize', () => {
          this.chartPie.resize()
        })
      }
    }
  }
</script>

<style lang="scss">
  .mod-demo-echarts {
    > .el-alert {
      margin-bottom: 10px;
    }
    > .el-row {
      margin-top: -10px;
      margin-bottom: -10px;
      .el-col {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .chart-box {
      min-height: 250px;
    }
  }
</style>
