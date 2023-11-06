/*侧边栏*/
<template>
  <div class="warp">
    <h1>
        <i class="el-icon-basketball"></i>
        球馆后台管理系统</h1>
    <el-menu unique-opened router background-color="#001529" text-color="#fff"  active-text-color="#5696ff" style="width:200px"
     :default-active="currenthref"
    >
        <menu-list v-for="item in menudata" :key="item.icon" :menu="item"></menu-list>
    </el-menu>
  </div>
</template>

<script>
// import {post} from "@/utils/reques"
import MenuList from "./MenuList.vue"
export default {
    data(){
       return{
        menudata:"",
        currenthref:"/home"
       }
    },
  created() {
    this.geymenu()
  },
  watch:{
    $route(from){
      this.currenthref=from.path
    }
  },
  methods:{
    async geymenu(){
      //  const {data} = await post("/menu");
       if(this.$store.state.op=="order"||sessionStorage.getItem("auth")=="3e69156a"){
        this.menudata=[ {
                name: "首页",
                url: "/home",
                icon: "el-icon-s-home"
            },
            {
                name: "预约管理",
                url: "/bookmage",
                icon: "el-icon-phone"
            },
            {
                name: "前台收银",
                url: "/frontdesk",
                icon: "el-icon-bank-card"
            },
            {
                name: "场地管理",
                url: "/sitemage",
                icon: "el-icon-film",
                //此为二级导航栏
                children: [
                    {
                        name: "场地详情",
                        url: "/sitemage/detail",
                        icon: "el-icon-document"
                    },
                    {
                        name: "计费规则",
                        url: "/sitemage/rule",
                        icon: "el-icon-money"
                    }
                ]
            },
            {
                name: "个人中心",
                icon: "el-icon-user-solid",
                url: "percen",
                children: [
                    {
                        name: "个人中心",
                        url: "/percen/index",
                        icon: "el-icon-user-solid"
                    },
                    {
                        name: "修改密码",
                        url: "/percen/psw",
                        icon: "el-icon-warning-outline"
                    },
                ]
            },
            //此为管理员权限,根据身份验证返回
            {
                name: "管理员",
                url: "/manage/user",
                icon: "el-icon-s-custom"
            }]
       }
       else{
          this.menudata=[ {
                name: "首页",
                url: "/home",
                icon: "el-icon-s-home"
            },
            {
                name: "预约管理",
                url: "/bookmage",
                icon: "el-icon-phone"
            },
            {
                name: "前台收银",
                url: "/frontdesk",
                icon: "el-icon-bank-card"
            },
            {
                name: "场地管理",
                url: "/sitemage",
                icon: "el-icon-film",
                //此为二级导航栏
                children: [
                    {
                        name: "场地详情",
                        url: "/sitemage/detail",
                        icon: "el-icon-document"
                    },
                    {
                        name: "计费规则",
                        url: "/sitemage/rule",
                        icon: "el-icon-money"
                    }
                ]
            },
            {
                name: "个人中心",
                icon: "el-icon-user-solid",
                url: "percen",
                children: [
                    {
                        name: "个人中心",
                        url: "/percen/index",
                        icon: "el-icon-user-solid"
                    },
                    {
                        name: "修改密码",
                        url: "/percen/psw",
                        icon: "el-icon-warning-outline"
                    },
                ]
            },]
       }
      //  this.menudata=data;
    },
  },
  components:{MenuList}
};
</script>

<style lang="less" scoped>
.warp{
    h1{
    text-align: center;
    font-size: 20px;
    line-height: 80px;
    color: #fff;
}
}
</style>