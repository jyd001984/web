<template>
  <div>
    <el-card>
      <el-table style="width: 100%" border :data="tableData">
        <el-table-column label="运动类型" prop="sport" align="center" min-width="40%"> </el-table-column>
        <el-table-column label="散客价/小时" prop="fit" align="center" min-width="20%"> </el-table-column>
        <el-table-column label="会员价/小时" prop="member" align="center" min-width="20%"> </el-table-column>
        <el-table-column label="操作" prop="operate" align="center" min-width="20%">
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
  </div>
</template>

<script>
import {post} from "@/utils/reques"
export default {
  data() {
    return {
        tableData:[],
    };
  },
  created() {
    this.$route.meta.keepAlive = true;
    this.getdata()
  },
  methods:{
    getdata(){
        post("/siterule").then(({data})=>{
            this.tableData=data
        })
    }
  }
};
</script>

<style lang="less" scoped>
</style>