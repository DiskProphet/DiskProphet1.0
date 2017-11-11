<template>
  <div class="chart">
    <b-card-group deck>
      <b-card header="磁盘分析" header-tag="header" title="" class="mouseChange" no-body>
        <b-card-body>
          <div id="chart"></div>
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import echarts from "echarts";
  import data from "@static/data/data.json";
  export default {
    data() {
      return {
        chart: null
      };
    },
    methods: {
      drawPie(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
          tooltip: {
            trigger: "item",
            formatte: "{b}: {c} ({d}%)"
          },
          toolbox: {
            show: false,
            feature: {
              //特性
              // mark: { show: true }, //辅助线
              // dataView: { show: true, readOnly: false }, //数据视图
              // magicType: { show: true, type: ["line", "bar"] }, //切换视图（折线/柱状）
              // restore: { show: true }, //重新加载视图
              // saveAsImage: { show: true } //保存该视图为图片
            },
            right: 15,
            top: 10
          },
          legend: {
            orient: "vertical",
            left: 5,
            top: 10,
            data: data.chart.opinion,
            title: data.chart.title
          },
          series: [{
            name: "磁盘分析",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "60%"],
            avoidLabelOverlap: false,
            label: {
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "24",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: data.chart.opinionData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffset: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }]
        });
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.drawPie("chart");
        var that = this;
        var resizeTimer = null;
        window.onresize = function() {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            that.drawPie("chart");
          }, 100);
        };
      });
    }
  };
</script>

<style scoped>
  .mouseChange header {
    cursor: move;
  }
  #chart {
    position: relative;
    left: 47%;
    width: 90%;
    min-height: 200px;
    margin-left: -45%;
    border-radius: 10px;
  }
  @media screen and (max-width: 470px) {
    #chart {
      height: 100%;
      width: 100%;
    }
  }
</style>
