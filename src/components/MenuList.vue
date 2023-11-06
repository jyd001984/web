//侧边栏导航（递归）
<template>
  <div>
    <el-submenu v-if="menu.children" :index="menu.url">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span>{{ menu.name }}</span>
      </template>
      <menu-list
        v-for="item in menu.children"
        :key="item.icon"
        :menu="item"
      ></menu-list>
    </el-submenu>

    <el-menu-item
      v-else
      :index="menu.url"
      @click="tagpush(menu.name, menu.url)"
    >
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.name }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  props: {
    menu: {
      required: true,
      type: Object,
    },
  },
  methods: {
    tagpush(name, path) {
      if (name != "首页") {
        this.$route.meta.keepAlive = false;
        this.$store.commit("tagpush", { name, path });
      } else {
        this.$route.meta.keepAlive = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>