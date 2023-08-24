<template>
    <div>
        <moudle-bread :tips="this.$route.meta.bread"></moudle-bread>
    </div>
</template>

<script>
import MoudleBread from '@/commoudle/MoudleBread.vue'
    export default {
        components:{
            MoudleBread,
        },
    }
</script>

<style lang="less" scoped>

</style>