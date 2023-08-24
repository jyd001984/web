<template>
    <div>
         <el-breadcrumb separator=" > ">
            <el-breadcrumb-item v-for="(item,index) in tips" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        props:{
            tips:{
                type:Array,
                require:true
            }
        }
    }
</script>

<style lang="less" scoped>

</style>