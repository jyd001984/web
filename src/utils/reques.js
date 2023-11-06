//封装get和post方法
import service from "./service"

export function get(url,parms){
    const config={
        method:"get",
        url
    }
    if(parms){
        config.parms=parms
    }
    return service(config)
}

export function post(url,data){
    const config={
        method:"post",
        url
    }
    if(data){
        config.data=data
    }
    return service(config)
}