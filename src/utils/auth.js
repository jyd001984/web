export function getToken(){
    return sessionStorage.getItem("accessToken")
}

export function setToken(accessToken){
    sessionStorage.setItem("accessToken",accessToken)
}

export function clearToken(){
    sessionStorage.clear()
}