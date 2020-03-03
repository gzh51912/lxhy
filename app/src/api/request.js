import axios from './index';  //进行了二次封装了

export const getHome =(sid)=>{  //首页的接口
    return axios.get("/goods/home_goods1",{params:{sid}})
}
export const getPing =()=>{  //首页的接口
    return axios.get("/goods/pingjia")
}
export const add =(name,age)=>{
    return axios.post("/add",{name,age})
} 
export const remove=(id)=>{
    return axios.post("/del",{id});
}

export const login=(username,password)=>{
    return axios.post("/users/login",{username,password});
}

export const quit=()=>{
    return axios.post("/users/quit")
}

export const upload=(data)=>{
    return axios.post("/upload",data)
}