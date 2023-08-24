<template>
  <div>
    <div class="fr">
      <el-dropdown @command="handleCommand" trigger="hover">
        <span class="el-dropdown-link">
          欢迎您,{{ info }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">修改密码</el-dropdown-item>
          <el-dropdown-item command="c">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <p class="date fr">今天是你在阿里的第
      <span class="datenum">{{days}}</span>天
    </p>
      <div class="clear"></div>
  </div>
</template>

<script>
import {get} from "@/utils/http"
export default {
  data() {
    return {
      info: sessionStorage.getItem("nickname"),
      time:""
    };
  },

  created(){
    this.workTime()
  },
  
  methods: {
    handleCommand(command) {
      if (command == "c") {
        sessionStorage.clear();
        this.$router.push("/login");
      }
    },
    //获取入职时间
    workTime(){
      get("/in").then(res=>{
        this.time=res.time
      })
    }
  },
  computed:{
    days(){
      let now=new Date();
      let target=this.time?new Date(this.time):new Date();
      return Math.floor((now-target)/1000/60/60/24)
    }
  }
};
</script>

<style lang="less" scoped>
.date{
  margin-right: 50px;
  font-size: 18px;
  .datenum{
    font-size: 24px;
    color:#5696ff
  }
}

</style>