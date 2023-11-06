<template>
  <div class="warp">
    <el-card>
      <el-button type="primary" class="fr" style="margin-bottom: 10px"
        >新建区域</el-button
      >
      <div class="clear"></div>

      <template v-for="(item, index) in dataList">
        <el-card :key="index" style="margin-bottom: 20px">
          <el-row>
            <el-col :span="18">
              <el-descriptions :title="item.area">
                <el-descriptions-item label="状态">
                  <template v-if="item.areastatus == 1">
                    <div class="circle"></div>
                    <span style="color: green">&ensp;运营中</span>
                  </template>
                  <template v-else>
                    <div class="circle" style="background-color: red"></div>
                    <span style="color: red">&ensp;停运中</span>
                  </template>
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
            <el-col :span="4" :push="4">
              <el-button type="primary">新建场地</el-button>
            </el-col>
          </el-row>
          <el-table :data="item.addtail" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline>
                  <el-form-item label="场地号:">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <br />
                  <el-form-item label="目前状态:">
                    <template v-if="props.row.status == '启用中'">
                      <div class="circle"></div>
                      <span style="color: green">启动状态</span>
                    </template>
                    <template v-else>
                      <div class="circle" style="background-color: red"></div>
                      <span style="color: red">停用状态</span></template
                    >
                  </el-form-item>
                  <br />
                  <el-form-item label="所属球场:">
                    <span>{{ props.row.court }}</span>
                  </el-form-item>
                  <br />
                  <el-form-item label="球场类型:">
                    <template v-if="props.row.sport == 1"
                      ><span>乒乓球</span></template
                    >
                    <template v-else-if="props.row.sport == 2"
                      ><span>羽毛球</span></template
                    >
                    <template v-else><span>桌球</span></template>
                  </el-form-item>
                  <br />
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="场地号" prop="address"></el-table-column>
            <el-table-column
              label="目前状态"
              prop="status"
              class="statcolor"
            ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="props">
                <el-button
                  size="mini"
                  @click="handleEdit(props.$index, props.row, item.area)"
                  type="warning"
                  >编辑</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </template>
    </el-card>
  </div>
</template>

<script>
import { post } from "@/utils/reques";
export default {
  data() {
    return {
      dataList: [],
      tableData: [],
    };
  },
  created() {
    this.getdata();
    this.$route.meta.keepAlive = true;
  },
  methods: {
    getdata() {
      post("/sitedetail").then(({ data }) => {
        for (var i = 0; i < data.length; i++) {
          data[i].areastatus = 2;
          for (var j = 0; j < data[i].addtail.length; j++) {
            if (data[i].addtail[j].status == 1) {
              data[i].areastatus = 1;
            }
            data[i].addtail[j].status =
              data[i].addtail[j].status == 1 ? "启用中" : "停用中";
          }
        }
        this.dataList = data;
      });
    },
    handleEdit(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>

<style lang="less" scoped>
.circle {
  width: 12px;
  height: 12px;
  background-color: green;
  border-radius: 6px;
  display: inline-block;
}
</style>