import axios from './index';  //进行了二次封装了

// 首页的接口
export const getHome =(sid)=>{  
    return axios.get("/goods/home_goods1",{params:{sid}})
}
export const getPing =()=>{  //首页的接口
    return axios.get("/goods/pingjia")
}
// 获取分类页的数据
export const getFlower =(cid)=>{
    return axios.get("/goods/goods1",{params:{cid}})
} 
// 获取列表页的数据
export const getList2 =(cid,cid1,cid2)=>{
    return axios.get("/goods/goods3",{params:{cid,cid1,cid2}})
} 
// 列表页的数据销量排序
export const goodsSoal =(cid,cid1,cid2,sortType)=>{
    return axios.get("/goods/goodsSoal",{params:{cid,cid1,cid2,sortType}})
} 
// 列表页的数据价格排序
export const goodsPrice =(cid,cid1,cid2,sortType)=>{
    return axios.get("/goods/goodsPrice",{params:{cid,cid1,cid2,sortType}})
} 
// 详情页数据
export const getDetail=(gid)=>{
    return axios.get("/goods/cartlist",{params:{gid}})
}

export const upload=(data)=>{
    return axios.post("/upload",data)
}