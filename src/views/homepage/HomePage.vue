<template>
  <div>
    <el-card>
      <el-row type="flex" :gutter="100" class="mb" style="padding: 0 30px">
        <el-col :span="6">
          <el-card style="background-color: rgb(64, 158, 255)">
            <div class="fl topData">
              <p>本月预约总量</p>
              <p><b>XXX</b></p>
              <span>+XX%</span><span style="font-size: 12px"> 与上月相比</span>
            </div>
            <div class="fr">
              <i class="el-icon-s-order topicon"></i>
            </div>
            <div class="clear"></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="background-color: rgb(50, 220, 96)">
            <div class="fl topData">
              <p>今年预约总量</p>
              <p><b>XXX</b></p>
              <span>+XX%</span><span style="font-size: 12px"> 与去年相比</span>
            </div>
            <div class="fr">
              <i class="el-icon-tickets topicon"></i>
            </div>
            <div class="clear"></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="background-color: rgb(255, 112, 112)">
            <div class="fl topData">
              <p>本月营收额</p>
              <p><b>XXX</b></p>
              <span>+XX%</span><span style="font-size: 12px"> 与上月相比</span>
            </div>
            <div class="fr">
              <i class="el-icon-bank-card topicon"></i>
            </div>
            <div class="clear"></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="background-color: rgb(200, 224, 99)">
            <div class="fl topData">
              <p>今年营收额</p>
              <p><b>XXX</b></p>
              <span>+XX%</span><span style="font-size: 12px"> 与去年相比</span>
            </div>
            <div class="fr">
              <i class="el-icon-money topicon"></i>
            </div>
            <div class="clear"></div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="18">
        <el-col :span="16">
          <div ref="line" style="height: 500px"></div>
          <div class="select">
            <el-radio-group v-model="radio" size="medium" class="radio">
              <el-radio-button label="week">过去一周</el-radio-button>
              <el-radio-button label="twoweek">过去两周</el-radio-button>
              <el-radio-button label="month">过去一个月</el-radio-button>
            </el-radio-group>
          </div>
        </el-col>
        <el-col :span="8">
          <div ref="gram" style="height: 500px"></div>
        </el-col>
      </el-row>
      <el-row :gutter="30" style="margin-top: 40px">
        <el-col :span="12">
          <div class="block">
            <span class="notice"
              ><i class="el-icon-warning-outline"> 近期公告</i></span
            >
            <el-timeline>
              <template v-for="item in noticeList">
                <el-timeline-item
                  :timestamp="item.date"
                  placement="top"
                  :key="item.content"
                >
                  <el-card>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.content }}</p>
                  </el-card>
                </el-timeline-item>
              </template>
            </el-timeline>
          </div>
        </el-col>
        <el-col :span="12">
          <el-calendar v-model="value"> </el-calendar>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts";
import moment from "moment";
import { post } from "@/utils/reques";
export default {
  data() {
    return {
      radio: "month",
      days: 30,
      dateList: [],
      dataList: [],
      reserList: [],
      noticeList: [],
    };
  },
  created() {
    this.$route.meta.keepAlive = true;
  },
  mounted() {
    this.getdata();
    this.reser();
    this.notice();
  },
  methods: {
    linechart() {
      let mychart = echarts.init(this.$refs.line);
      const option = {
        xAxis: {
          type: "category",
          data: this.dateList,
        },
        tooltip: {
          trigger: "axis",
        },
        title: {
          left: "center",
          text: "场地使用量",
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.dataList,
            type: "line",
          },
        ],
      };
      mychart.setOption(option);
    },
    Histogram() {
      let mygarm = echarts.init(this.$refs.gram);
      const option = {
        xAxis: {
          type: "category",
          data: [
            "0-3",
            "3-6",
            "6-9",
            "9-12",
            "12-15",
            "15-18",
            "18-21",
            "21-24",
          ],
        },
        tooltip: {
          trigger: "item",
        },
        yAxis: {
          type: "value",
        },
        title: {
          text: "各时段预约量",
        },
        series: [
          {
            data: this.reserList,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      mygarm.setOption(option);
    },
    getdata() {
      post("/homedata", this.days).then(({ data }) => {
        this.dataList = data;
        this.dateList = [];
        for (var i = 0; i < this.days; i++) {
          this.dateList.push(
            moment()
              .subtract(this.days - i, "days")
              .format("MM-DD")
          );
          this.linechart();
        }
      });
    },
    reser() {
      post("/reser").then(({ data }) => {
        this.reserList = data;
        this.Histogram();
      });
    },
    notice() {
      post("/home/notice").then(({ data }) => {
        this.noticeList = data.list;
      });
    },
  },
  watch: {
    radio() {
      if (this.radio == "week") {
        this.days = 7;
      } else if (this.radio == "twoweek") {
        this.days = 14;
      } else {
        this.days = 30;
      }
      this.getdata();
    },
  },
};
</script>

<style lang="less" scoped>
.select {
  display: flex;
  justify-content: center;
}
.notice {
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #426bad;
}
.topData {
  color: aliceblue;
  line-height: 24px;
}
.topicon {
  font-size: 50px;
  color: white;
}
</style>