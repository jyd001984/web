<template>
  <div>
    <el-row type="flex" justify="center" style="height:80vh" align="middle">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>蚂蚁金融后台管理系统</h2>
            </div>
            <div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model.trim="ruleForm.username" placeholder="请输入用户名" @keyup.native.enter="login" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model.trim="ruleForm.password" type="password" @keyup.native.enter="login" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login" style="width:100%" :loading="loading">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </el-row>
  </div>
</template>

<script>
import {post} from "../utils/http"
import {setToken} from "../utils/auth"
export default {
    data(){
        return {
            loading:false,
            ruleForm:{
                username:"",
                password:""
            },
            rules:{
                username:[
                    {required:true,message:"请输入用户名",trigger:'blur'},
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password:[
                    {required:true,message:"请输入密码",trigger:'blur'},
                    { pattern:/^\d{6}$/, message: '长度在6个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        login(){
            this.$refs.ruleForm.validate((valid)=>{
                if(valid){
                    this.loading=true;
                   post("/login",this.ruleForm).then((res)=>{
                    setToken(res.token);
                    sessionStorage.setItem("nickname",res.nickname);
                    this.$router.push("./")
                    this.loading=false;
                    }).catch((error)=>{console.log(error);this.loading=false;});
                }
            })
        }
    }
    }
</script>

<style lang='less' scoped>
@bgColor:#5696ff;
.box-card{
    width: 500px;
        h2{text-align: center;
        color:@bgColor;
        text-decoration: none;
        }
    }
</style>