export default{
    data(){
        return {
            bread:[]
        }
    },
    watch:{
        $route(){
            this.getBread()
        }
    },
    created(){
        this.getBread();
    },
    methods:{
        getBread(){
             this.bread=this.$route.meta.bread||[]
        }
    }
}