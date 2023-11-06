<template>
  <div>
    <el-card style="padding: 50px">
      <el-row :gutter="30">
        <el-col :span="12">
          <div ref="radar" style="height: 500px"></div>
        </el-col>
        <el-col :span="12">
          <div ref="Histogram" style="height: 500px"></div>
        </el-col>
      </el-row>
      <el-descriptions
        class="margin-top"
        title="公司信息"
        :column="3"
        :size="size"
        border
      >
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            负责人
          </template>
          XXX/XXX
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            公司地址
          </template>
          江门市XXX
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            备注
          </template>
          <el-tag size="small">XX公司</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          XXX
        </el-descriptions-item>
      </el-descriptions>
      <el-button class="fr" style="margin-top: 30px" type="primary"
        >增加球馆</el-button
      >
      <el-table :data="tableData" style="width: 100%;font-size:15px">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline>
              <el-form-item>
                <span>{{ props.row.id }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="加盟球馆" prop="id"></el-table-column>
      </el-table>
      <div class="clear"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { post } from "@/utils/reques";
export default {
  data() {
    return {
      legend: [],
      indicator: [],
      radarvalue: [],
      tableData: [
        { id: "XX球馆" },
        { id: "XX球馆" },
        { id: "XX球馆" },
        { id: "XX球馆" },
        { id: "XX球馆" },
        { id: "XX球馆" },
      ],
    };
  },
  created() {
    this.$route.meta.keepAlive = true;
  },
  mounted() {
    this.getdata();
    this.Histogram();
  },
  methods: {
    getRadar() {
      let mychart = echarts.init(this.$refs.radar);
      const option = {
        title: {
          text: "运动类型占比",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          data: this.legend,
        },
        radar: {
          indicator: this.indicator,
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: this.radarvalue,
          },
        ],
      };
      mychart.setOption(option);
    },
    getdata() {
      post("/manage/radar").then(({ data }) => {
        this.legend = data.name;
        this.indicator = data.indicator;
        this.radarvalue = data.datavalue;
        this.getRadar();
        console.log(this.legend);
        console.log(this.indicator);
        console.log(this.radarvalue);
      });
    },
    Histogram() {
      let mychart = echarts.init(this.$refs.Histogram);
      const option = {
        title: {
          left: "center",
          text: "营收情况",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: 80,
          bottom: 30,
        },
        xAxis: {
          type: "value",
          position: "top",
          splitLine: {
            lineStyle: {
              type: "dshed",
            },
          },
        },
        yAxis: {
          type: "category",
          axisLine: { show: true },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: [
            "广告支出",
            "广告收入",
            "加盟收入",
            "其他收入",
            "其他支出",
            "净收入",
          ],
        },
        series: [
          {
            name: "Cost",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              formatter: "{b}",
            },
            data: [-3000, 5000, 12000, 3000, -8000, 9000],
          },
        ],
      };
      mychart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
</style>