<template>
  <div>
    <el-container>
      <el-aside width="200px" class="aside">
            <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header  class="head">
            <top-hearder></top-hearder>
        </el-header>
        <el-main style="height:70vh">
            <router-view></router-view>
        </el-main>
        <el-footer class="footer">备案88888</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import TopHearder from "@/components/TopHearder.vue"
import NavLeft from "@/components/NavLeft.vue"
export default {
  components: {
    NavLeft,TopHearder
  },
};
</script>

<style scoped>
.head{
  line-height:50px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
}
.aside{
  height: 100vh;
  background-color: #001529;
}
.footer{
  text-align: center;
  font-size: 12px;
  line-height: 60px;
}
</style>