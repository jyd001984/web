<template>
 <!-- 组件用于递归动态渲染导航菜单栏 -->
  <div>
    <el-submenu v-if="menu.children" :index="menu.url" class="tip">
        <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{menu.name}}</span>
        </template>
        <nav-vue v-for="(item,index) in menu.children" :menu="item" :key="index"></nav-vue>
    </el-submenu>

    <el-menu-item v-else :index="menu.url" class="tip">
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      require: true,
    },
  },
  name:"NavVue"
};
</script>

<style lang="less" scoped>
.tip{width: 200px;}
</style>