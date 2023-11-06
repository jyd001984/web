<template>
  <div>
    
    <el-container>
      <el-aside class="side" style="width:200px">
            <side-left></side-left>
      </el-aside>
      <el-container>
        <el-header class="hearder">
            <hear-der></hear-der>
            <tag-page></tag-page>
        </el-header>
        <el-main class="main">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
          </el-main>
        <el-footer class="footer">关注XXX,若有疑问请联系13xxxxxxxxxx</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import  HearDer  from '@/components/HearDer.vue';
import SideLeft from "@/components/SideLeft.vue"
import TagPage from '@/commonmoudle/TagPage.vue';
export default {
    components:{HearDer,SideLeft,TagPage}
};
</script>

<style lang="less" scoped>
.side{
  background-color: #001529;
  height: 100vh;
  overflow: hidden;
}
.hearder{
  padding: 0;
  background-color: rgba(248, 249, 250);
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
}
.main{
  height:80vh;
  margin: 0;
  margin-top: 30px;
  padding: 0;
}
.footer{
  text-align: center;
  font-size: 14px;
  color: rgba(123, 129, 133);
}
</style>