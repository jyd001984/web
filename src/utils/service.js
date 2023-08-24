import { Message } from 'element-ui';
import axios from 'axios'
import { getToken } from './auth';
const service= axios.create({
    baseURL:"http://localhost:8080/",
    timeout:1000
})

service.interceptors.request.use((config)=>{
    if(getToken()){
        config.headers.token=getToken();
    }
    return config;
},()=>{
    Message({
        type:"error",
        message:"请求错误"
    })
    return Promise.reject(new Error("请求错误"))
})

service.interceptors.response.use((res)=>{
    const result=res.data;
    if(result.success){
        return result;
    }else{
        Message({
            type:"error",
            message:result.message || "请求错误"
        })
        return Promise.reject(new Error(result.message || "请求错误"))
    }
},()=>{
    Message({
        type:"error",
        message:"请求失败"
    })
    return Promise.reject(new Error("请求失败"))
})

export default service