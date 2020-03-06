import React from 'react'
import Loadable from 'react-loadable'
// 一级路由
var Home=Loadable({  //异步加载组件
    loader:()=>import("../components/home"),
    loading:()=><div>loading.....</div>
})
var NotFound = Loadable({
    loader:()=>import("../components/notfound"),
    loading:()=><div>loading.....</div>
})

var List = Loadable({
    loader:()=>import("../components/list"),
    loading:()=><div>loading.....</div>
})
var List2 = Loadable({
    loader:()=>import("../components/list2"),
    loading:()=><div>loading.....</div>
})
var Cart = Loadable({
    loader:()=>import("../components/cart"), 
    loading:()=><div>loading.....</div>
})
var Detail=Loadable({
    loader:()=>import("../components/detail"),
    loading:()=><div>loading.....</div>
})

var Mine = Loadable({
    loader:()=>import("../components/mine"),
    loading:()=><div>loading.....</div>
})
var Login = Loadable({
    loader:()=>import("../components/login"),
    loading:()=><div>loading.....</div>
})
var Reg = Loadable({
    loader:()=>import("../components/reg"),
    loading:()=><div>loading.....</div>
})
// 二级路由

var Flower = Loadable({
    loader:()=>import("../components/flower"),
    loading:()=><div>loading.....</div>
})

var Cake = Loadable({
    loader:()=>import("../components/cake"),
    loading:()=><div>loading.....</div>
})
var Katong = Loadable({
    loader:()=>import("../components/katong"),
    loading:()=><div>loading.....</div>
})
var Green = Loadable({
    loader:()=>import("../components/green"),
    loading:()=><div>loading.....</div>
})
var Busy = Loadable({
    loader:()=>import("../components/busy"),
    loading:()=><div>loading.....</div>
})
var Sad = Loadable({
    loader:()=>import("../components/sad"),
    loading:()=><div>loading.....</div>
})
var Ever = Loadable({
    loader:()=>import("../components/ever"),
    loading:()=><div>loading.....</div>
})

// 一级路由
export const routes =[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/list',
        component:List
    },
    {
        path:'/list2',
        component:List2
    },
    {
        path:'/detail',
        component:Detail   
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/reg',
        component:Reg
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/404',
        component:NotFound
    }
]
// 二级路由

export const subRoutes =[
    {
        path:'/list/flower',
        component:Flower,
    },
    {
        path:'/list/cake',
        component:Cake,
    },
    {
        path:'/list/katong',
        component:Katong,
        
    },
    {
        path:'/list/green',
        component:Green,
        
    },
    {
        path:'/list/busy',
        component:Busy,
       
    },{
        path:'/list/sad',
        component:Sad,
        
    } ,{
        path:'/list/ever',
        component:Ever,
        
    }
]