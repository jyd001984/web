<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created(){
    if(this.$router.path!="/"){
      this.$router.replace("/")
    }
  }
}
</script>

<style lang="less" scoped>
</style>
