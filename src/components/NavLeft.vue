<template>
  <div class="warp">
    <h1>邦达物流管理系统</h1>
    <el-menu  unique-opened router  background-color="#001529" text-color="#fff">
        <menus-vue v-for="(item,index) in menuData" :menu="item" :key="index"></menus-vue>
    </el-menu>
  </div>
</template>

<script>
import {get} from "@/utils/http"
import MenusVue from "./MenusVue.vue"
export default {
  data(){
    return {
      menuData:[]
    }
  },
  created(){
    this.getMenu()
  },
  methods:{
    //获取菜单项
    async getMenu(){
     let {data}= await get("/menu");
     this.menuData=data;
    }
  },
  components:{
    MenusVue
  }
};
</script>

<style lang="less" scoped>
.warp{overflow: hidden;
      h1{
        text-align: center;
        line-height: 60px;
        color: #fff;
      }
}
</style>