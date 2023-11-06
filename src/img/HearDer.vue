/*顶部栏*/
<template>
  <div class="top">
    <el-row>
      <el-dropdown class="fr hearer" szie="medium" @command="handleCommand">
        <span class="el-dropdown-link" style="font-size: 16px">
          <i class="el-icon-user-solid"></i>
          {{ info }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">修改密码</el-dropdown-item>
          <el-dropdown-item command="c">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="date">{{ data }}</span>
    </el-row>
  </div>
</template>

<script>
import moment from "moment";
import { clearToken } from "@/utils/auth";
export default {
  data() {
    return {
      info: sessionStorage.getItem("username"),
      data: "0000-00-00 00:00:00",
    };
  },
  created() {
    setInterval(() => {
      this.data = moment().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  },
  computed: {},
  methods: {
    handleCommand(command) {
      if (command == "c") {
        clearToken();
        this.$router.push("/login");
      } else if (command == "a") {
        if (this.$route.path != "/percen/index") {
          this.tagpush("个人中心", "/percen/index");
          this.$router.push("/percen/index");
        }
      } else if (command == "b") {
        if (this.$route.path != "/percen/psw") {
          this.tagpush("修改密码", "/percen/psw");
          this.$router.push("/percen/psw");
        }
      }
    },
    tagpush(name, path) {
      if (name != "首页") {
        this.$route.meta.keepAlive = false;
        this.$store.commit("tagpush", { name, path });
      } else {
        this.$route.meta.keepAlive = false;
      }
    },
  },
  watch:{
    "$store.state.username":{
      handler(val){
        if(val){
          this.info=val
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  margin-top: 15px;
}
.date {
  color: #5696ff;
  font-size: 22px;
  display: flex;
  justify-content: center;
}
.tag {
  height: 20px;
  background-color: red;
}
.hearer {
  height: 45px;
}
</style>