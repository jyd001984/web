import axios from "axios"
import {getToken} from "./auth"
import { Message } from 'element-ui';

const service= axios.create({
    baseURL:"https://localhost/8080",
    timeout:5000,
})

// 请求拦截器
service.interceptors.request.use((config)=>{
    if(getToken()){
        config.headers.token=getToken()
    }
    return JSON.stringify(config)
},()=>{
    Message({
        type:"error",
        message:"请求失败"
    })
    return Promise.reject(new Error("请求失败"))
})

//响应拦截器
service.interceptors.response.use(({data})=>{
    if(data.success){
        return data
    }else{
        Message({
            type:"error",
            message:data.message||"请求信息有误"
        })
        return Promise.reject(new Error(data.message||"请求信息有误"))
    }
},()=>{
    Message({
        type:"error",
        message:"服务器繁忙"
    })
    return Promise.reject(new Error("服务器繁忙"))
})


export default service