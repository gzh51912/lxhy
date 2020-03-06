import axios from 'axios';

var service = axios.create({
    baseURL:"/hd",  //所有的请求都会 带上 /api
    "content-type":"application/json",
    timeout:5000
})
// //请求拦截器
service.interceptors.request.use((config)=>{
    if(sessionStorage.getItem("token")){
        config.headers["token"]=sessionStorage.getItem("token");
    }
    console.log("发请求了 带上token")
    return config;
})
// //响应拦截器
service.interceptors.response.use((res)=>{
   if(res.data.status===-1){
    //    console.log(res); 
    // 从详情页中跳转到购物车，如果没登录token验证失败跳到登录页，
    localStorage.setItem("pathname",window.location.pathname)
    // 详情页的商品id
    localStorage.setItem("gid",res.data.gid)     

       window.location.href="/login"
    // console.log(window.location);
    
   }
    return res.data
})

export default service;