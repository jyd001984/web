<template>
  <div class="warp">
    <el-tabs
      type="border-card"
      @tab-click="handleclick"
      v-model="activeTab"
      @tab-remove="removeclick"
    >
      <el-tab-pane name="/home">
        <span slot="label"><i class="el-icon-date"></i> 首页</span>
      </el-tab-pane>
      <template v-for="item in this.$store.state.tagstore">
        <el-tab-pane
          :label="item.name"
          closable
          :name="item.path"
          :key="item.name"
        ></el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "/home",
    };
  },
  watch: {
    $route(from) {
      this.activeTab = from.path;
    },
  },
  methods: {
    handleclick(tab) {
      if (tab.name != this.$route.path) {
        this.$router.push(tab.name);
      }
    },
    removeclick(path) {
      this.$store.commit("tagshift", path)
      if(this.$route.path==path){
      this.$router.push("/home");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.warp {
  height: 40px;
  overflow: hidden;
}
</style>