<template>
  <div>
    <el-card style="padding: 10vh">
      <div>
        <el-avatar icon="el-icon-user-solid" class="head"></el-avatar>
      </div>
      <el-descriptions title="XX球馆负责人">
        <el-descriptions-item label="负责人">XXX</el-descriptions-item>
        <el-descriptions-item label="昵称"
          >{{ userid }}&nbsp;&nbsp;
          <p style="color: rgb(64, 158, 255)" @click="changeid">
            更改昵称
          </p></el-descriptions-item
        >
        <el-descriptions-item label="联系方式"
          >136XXXXXXXX</el-descriptions-item
        >
        <el-descriptions-item label="邮箱"
          >136XXXXXXXX@qq.com</el-descriptions-item
        >
        <el-descriptions-item label="注册时间">2023-9-9</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">XX球馆</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="球馆场地">江门市</el-descriptions-item>
        <el-descriptions-item label="详细地址"
          >广东省江门市XX县XX区XX大道XX街道XXX号</el-descriptions-item
        >
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
import { post } from "@/utils/reques";
export default {
  data() {
    return {
      userid: sessionStorage.getItem("username"),
    };
  },
  created() {
    this.$route.meta.keepAlive = true;
  },
  methods: {
    async changeid() {
      await this.$prompt("请输入昵称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^.+$/,
        inputErrorMessage: "不能为空！",
      })
        .then(({ value }) => {
          post("/user/rename", value).then(() => {
            this.$message({
              type: "success",
              message: "你的昵称是: " + value,
            });
            sessionStorage.setItem("username", value);
            this.userid = value;
            this.$store.commit("changename", value);
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  margin-bottom: 10px;
}
</style>