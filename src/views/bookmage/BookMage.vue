<template>
  <div class="warp">
    <el-card class="topcard">
      <el-row :gutter="30" type="flex" align="middle">
        <el-col :span="6">
          <div class="search_input" style="margin: 0">
            <el-input
              placeholder="订单号、姓名或手机号查询"
              v-model="input"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-tickets"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="block datatime">
            <el-date-picker
              v-model="Datavalue"
              type="date"
              placeholder="选择日期"
            >
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
        </el-col>
        <el-col :span="5">
          <el-button type="primary" size="small" icon="el-icon-search"
            >查询</el-button
          >
        </el-col>
        <el-col :span="5">
          <el-button class="fr" type="primary" @click="dialogVisible = true"
            >新建订单</el-button
          >
          <div class="clear"></div>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="table">
      <el-table :data="tableData" style="width: 100%" v-loading="load">
        <el-table-column prop="order" label="订单号" width="120" fixed="left">
        </el-table-column>
        <el-table-column
          prop="date"
          label="预约日期"
          width="150"
          fixed="left"
          sortable
        >
        </el-table-column>
        <el-table-column prop="time" label="预约时段" width="200" fixed="left">
        </el-table-column>
        <el-table-column prop="userid" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="cellphone" label="手机号" width="200">
        </el-table-column>
        <el-table-column prop="area" label="区域号" width="180">
        </el-table-column>
        <el-table-column prop="address" label="场地号" width="180">
        </el-table-column>
        <el-table-column label="操作" header-align="right" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              class="fr"
              >取消</el-button
            >
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              class="fr"
              style="margin-right: 10px"
              >修改</el-button
            >
            <div class="clear"></div>
          </template>
        </el-table-column>
      </el-table>
      <div class="block fr">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="dataSize.currentPage"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="dataSize.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataSize.total"
        >
        </el-pagination>
      </div>
    </el-card>

    <el-dialog
      title="新建订单"
      :visible.sync="dialogVisible"
      width="40%"
      :close-on-click-modal="false"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="姓名" prop="userid">
              <el-input v-model="ruleForm.userid"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="10">
            <el-form-item label="区域" prop="area">
              <el-input v-model="ruleForm.area"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="场地" prop="address">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="活动时间" required>
          <el-col :span="10">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">——</el-col>
          <el-col :span="10">
            <el-form-item prop="date2">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submitFrom">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { post } from "@/utils/reques";
export default {
  data() {
    return {
      load: false,
      dialogVisible: false,
      input: "",
      Datavalue: "",
      Timevalue: "",
      tableData: [],
      dataSize: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
      },
      ruleForm: {
        userid: "",
        phone: "",
        area: "",
        address: "",
        date1: "",
        date2: "",
      },
      rules: {
        userid: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
            message: "请输入正确的号码",
            trigger: "blur",
          },
        ],
        area: [{ required: true, message: "请选择活动区域", trigger: "blur" }],
        address: [
          { required: true, message: "请选择活动场地", trigger: "blur" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
      },
    };
  },
  created() {
    this.gettableData();
    this.$route.meta.keepAlive = true;
  },
  methods: {
    async gettableData() {
      this.load = true;
      await post("/bookmage", this.dataSize).then((res) => {
        this.tableData = res.data.list;
        this.dataSize.total = res.data.total;
        this.load = false;
      });
    },
    handleSizeChange(val) {
      this.dataSize.pageSize = val;
      this.gettableData();
    },
    handleCurrentChange(val) {
      this.dataSize.currentPage = val;
      this.gettableData();
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    submitFrom() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          post("/user/newOrder", this.ruleForm).then((res) => {
            console.log(res);
            this.gettableData();
            this.dialogVisible = false;
            this.resetForm();

              this.$notify({
                title: "成功",
                message: "新建成功！",
                type: "success",
              });
          }).catch(()=>{
                this.$notify({
                title: "失败",
                message: "新建失败！",
                type: "error",
              });
          });
        }
      });
    },
    cancel() {
      this.dialogVisible = false;
      this.resetForm();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style lang="less" scoped>
.topcard {
  padding-top: 15px;
  margin-bottom: 20px;
}
.table {
  padding-right: 20px;
  box-sizing: border-box;
}
.datatime {
  display: flex;
}
.line {
  text-align: center;
}
</style>