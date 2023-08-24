<template>
  <div class="warp">
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="6" v-for="index in 4" :key="index">
        <el-card shadow="always" class="in">
          <div style="float: left">
            <p>本月进件</p>
            <p style="font-weight: bold">6588</p>
            <p>
              +20.12%
              <span style="fon-size: 12px">与上月相比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div style="clear: both"></div>
        </el-card>
        <div style="clear: both"></div>
      </el-col>
    </el-row>
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header" class="clearfix sp">
            <span>进件统计分析</span>
          </div>
          <div style="height: 240px" ref="analysis">内容</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix sp">
            <span>进件统计分析</span>
          </div>
          <div style="height: 240px" ref="circle"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24"  style="margin-bottom: 20px">
      <el-col :span="12">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :span="12">
        <el-card>
          <el-calendar v-model="date">
          </el-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { get } from "@/utils/http";
export default {
  data(){
    return {
      date:new Date(),
    }
  },
  mounted() {
    this.drawLine();
    this.drawcir();
  },
  methods: {
    async drawLine() {
      var mychart = echarts.init(this.$refs.analysis);
      const { data } = await get("/line");
      let dataline = [];
      let datacir = [];
      for (let key in data) {
        dataline.push(key);
        datacir.push(data[key]);
      }
      const option = {
        xAxis: {
          type: "category",
          data: dataline,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: datacir,
            type: "line",
          },
        ],
      };
      mychart.setOption(option);
    },
    drawcir() {
      var mychart = echarts.init(this.$refs.circle);
      const option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      mychart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.warp {
  .in {
    background-color: #5696ff;
  }
  .sp {
    text-align: center;
  }
}
</style>