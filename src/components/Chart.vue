<template>
  <div class="wrapper" ref="wrapper">
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { EChartOption, ECharts } from "echarts";
import echarts from "echarts";
@Component
export default class Chart extends Vue {
  @Prop() options!: EChartOption;
  chart?: ECharts;
  mounted() {
    this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    this.chart.setOption(this.options);
  }
  @Watch("options")
  onOptionsChange() {
    this.chart!.setOption(this.options);
  }
}
</script>

<style lang='scss' scoped >
.wrapper {
  background: white;
  height: 400px;
  width: 100%;
}
</style>