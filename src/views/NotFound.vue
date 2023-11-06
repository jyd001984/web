<template>
  <div>
    <el-empty :image-size="200">
      <el-button type="primary" @click="back">返回首页</el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.push("/")
        }
    }
};
</script>

<style lang="less" scoped>
</style>