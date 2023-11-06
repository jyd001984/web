<template>
  <div>
    <el-card class="warp">
      <el-input
        placeholder="订单号、姓名或手机号查询"
        v-model="input"
        class="mr mb"
        style="width: 300px"
      >
        <el-button slot="append" icon="el-icon-tickets"></el-button>
      </el-input>
      <el-select v-model="value" placeholder="——请选择区域——" class="mr mb">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="——请选择场地——" class="mr mb">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="——请选择运动类型——" class="mr mb">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="block datatime inline mr mb">
        <el-date-picker v-model="Datavalue" type="date" placeholder="选择日期">
        </el-date-picker>
        <el-time-picker
          is-range
          v-model="Timevalue"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
          format="HH:mm"
        >
        </el-time-picker>
      </div>
      <el-radio v-model="radio" label="1">已预定</el-radio>
      <el-radio v-model="radio" label="2">未预定</el-radio>
      <el-button type="primary" class="mb">查询</el-button>
      <el-select
        v-model="value"
        placeholder="——设置结束倒计时提醒——"
        class="mr mb fr"
      >
        <el-option
          v-for="item in countdown"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="order" label="订单号"></el-table-column>
        <el-table-column prop="area" label="区域"></el-table-column>
        <el-table-column prop="site" label="场地号"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status == '1'" style="color: green"
              >已开场</span
            >
            <span v-else style="color: orange">锁座中</span>
          </template>
        </el-table-column>
        <el-table-column prop="reserve" label="预约时间"></el-table-column>
        <el-table-column prop="timer" label="已用时间"></el-table-column>
        <el-table-column prop="custom" label="客户"></el-table-column>
        <el-table-column prop="cost" label="结算">
          <el-button type="primary" size="mini">提前结算</el-button>
        </el-table-column>
        <el-table-column prop="settle" label="操作">
          <el-button type="warning" size="mini">修改</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { post } from "@/utils/reques";
export default {
  data() {
    return {
      tableData: [],
      radio: "1",
      options: [
        {
          value: "",
          label: ""
        },
        {
          value: "1",
          label: "区域一",
        },
        {
          value: "2",
          label: "区域二",
        },
        {
          value: "3",
          label: "区域三",
        },
      ],
      countdown: [
        {
          value: "",
        },
        {
          value: "10分钟",
        },
        {
          value: "20分钟",
        },
        {
          value: "30分钟",
        },
      ],
      value: "",
    };
  },
  created() {
    this.$route.meta.keepAlive = true;
    this.getdata();
  },
  methods: {
    getdata() {
      post("/frontdest/index").then(({ data }) => {
        this.tableData = data.list;
        console.log(data);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.warp {
  padding-top: 30px;
  padding-left: 20px;
}
.inline {
  display: inline-block;
}
</style>