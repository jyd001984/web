<template>
  <div>
    <el-breadcrumb separator=" > ">
      <el-breadcrumb-item v-for="(item, index) in bread" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row>
        <el-col :span="6">
          <el-input
            placeholder="手机、姓名、角色类型"
            v-model="allData.keyword"
            class="input-with-select"
            size="small"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="10" class="btm">
          <el-button type="primary" size="small" @click="visible = true"
            >新建订单</el-button
          >
          <el-button :disabled="!this.select.length" size="small"
            >审核</el-button
          >
          <el-button :disabled="!this.select.length" size="small"
            >修改</el-button
          >
          <el-button :disabled="!this.select.length" size="small"
            >作废</el-button
          >
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-table
        :data="tableData"
        style="width: 100%"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="100" label="序号">
        </el-table-column>
        <el-table-column
          prop="id"
          label="订单号"
          fixed="left"
        ></el-table-column>
        <el-table-column prop="status" label="订单状态" width="120px">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 1">待审核</span>
            <span v-else-if="scope.row.status == 2">已审核</span>
            <span v-else-if="scope.row.status == 3">审核通过</span>
            <span v-if="scope.row.status == 4" style="color: red"
              >审核拒绝</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="date" label="下单时间" width="100px">
        </el-table-column>
        <el-table-column
          prop="name"
          label="客户名称"
          width="150px"
        ></el-table-column>
        <el-table-column
          prop="start"
          label="起始城市"
          width="180px"
        ></el-table-column>
        <el-table-column
          prop="end"
          label="目的城市"
          width="180px"
        ></el-table-column>
        <el-table-column
          prop="cargo"
          label="货物名称"
          width="120px"
        ></el-table-column>
        <el-table-column
          prop="count"
          label="件数"
          width="80px"
        ></el-table-column>
        <el-table-column
          prop="unit"
          label="单位"
          width="80px"
        ></el-table-column>
        <el-table-column
          prop="price"
          label="运费"
          width="80px"
        ></el-table-column>
        <el-table-column
          prop="from"
          label="订单来源"
          width="80px"
        ></el-table-column>
        <el-table-column prop="pay" label="是否支付" width="100px">
          <template slot-scope="scope">
            {{ scope.row.pay == 1 ? "已支付" : "未支付" }}
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="150xpx">
          <template slot-scope="scope">
            <el-button size="mini" @click="dd(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="allData.page"
        :page-size="allData.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total,sizes, prev, pager, next, jumper"
        :total="total"
        class="mt fr"
      >
      </el-pagination>
      <div class="clear"></div>
    </el-card>
    <order-dialog
      :visible="visible"
      @close="close"
      @newData="newData"
    ></order-dialog>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb";
import { post } from "@/utils/http";
import OrderDialog from "./OrderDialog";
export default {
  data() {
    return {
      total: 0,
      loading: false,
      tableData: [],
      allData: {
        page: 1,
        pageSize: 10,
        keyword: "",
      },
      select: [],
      visible: false,
    };
  },
  mixins: [breadCrumb],
  components: { OrderDialog },
  created() {
    this.getData();
  },
  methods: {
    newData() {
      this.visible = false;
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success",
      });
      this.getData();
    },
    dd(row) {
      console.log(row);
    },
    close() {
      this.visible = false;
    },
    async getData() {
      this.loading = true;
      const { data } = await post("/orderList", this.allData);
      this.tableData = data.list;
      this.total = data.total;
      this.loading = false;
    },
    handleSizeChange(val) {
      this.allData.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.allData.page = val;
      this.getData();
    },
    handleSelectionChange(val) {
      this.select = val;
    },
  },
};
</script>

<style lang="less" scoped>
.btm {
  text-align: right;
}
</style>