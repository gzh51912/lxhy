import React, { Component } from 'react'
import {getList2,goodsSoal,goodsPrice} from "../../api/request"
import { Icon } from 'antd';
import "./list2.css"
export default class List2 extends Component {
    constructor(props){
        super(props)
        console.log(this.props.location.state);
        this.state={list2:[]}
        
    }
    componentDidMount(){
        let {cid,cid1,cid2}=this.props.location.state
        getList2(cid,cid1,cid2).then(res=>this.setState({
            list2:res,
            flag:true,
            fprice:true,
            cid,cid1,cid2
        }))
    }
    // 返回上一级
    back=()=>{
        this.props.history.go(-1)
    }
      //  点击改变颜色
      changColor=(e)=>{      
        let headli=document.getElementsByClassName("alla")
        for(var i=0;i<headli.length;i++){
            headli[i].style.color=""
        }
        e.target.style.color="#ff464e"

     }
    // 综合排序
    ltotal=(e)=>{
        window.location.reload(); 
        this.changColor(e)
    }
    // 新品
    lnew=(e)=>{
        this.changColor(e)
        
    }
    // 列表页的数据销量排序
    lsoal=(e)=>{
        let{flag,cid,cid1,cid2}=this.state
        if(flag){
            goodsSoal(cid,cid1,cid2,1).then(res=>this.setState({list2:res,flag:false}))
        }else{
            goodsSoal(cid,cid1,cid2,0).then(res=>this.setState({list2:res,flag:true}))

        }
        this.changColor(e)
         
    }
    // 列表页的数据价格排序
    lprice=(e)=>{
        let{fprice,cid,cid1,cid2}=this.state
        if(fprice){
            goodsPrice(cid,cid1,cid2,1).then(res=>this.setState({list2:res,fprice:false}))
        }else{
            goodsPrice(cid,cid1,cid2,0).then(res=>this.setState({list2:res,fprice:true}))

        }
        this.changColor(e)
         
    }
    // 跳转到详情页
    toDetail=(gid)=>{
        this.props.history.push("/detail",{gid})
    }
    render() {
        let {list2}=this.state
        return (
            <div>
                {/* 头部 */}
                <div className="headWarp">
                    <div className="head">
                        <span className="headLeft">
                        <Icon type="left" style={{fontSize:"20px",fontWeight:"bold"}} onClick={this.back}/>
                        </span>
                        <h1>商品列表</h1>
                        <span className="headRight">
                        <Icon type="ellipsis" style={{fontSize:"20px",fontWeight:"bold"}}/>
                        </span>
                    </div>
                </div>
                 {/* 商品列表导航  */}
                <ul className="alltopWarp">
                    <li className="alltop" ><a className="alla" onClick={this.ltotal} style={{color:"#ff464e"}}>综合</a></li>
                    <li className="alltop" ><a className="alla" onClick={this.lsoal}>销量</a></li>
                    <li className="alltop" ><a className="alla" onClick={this.lprice}>价格</a></li>
                    <li className="alltop" ><a className="alla" onClick={this.lnew}>新品</a></li>
                    <img src={require("./11.png")} alt="" className="footpic"/>
                </ul>
                {/* 内容 */}
                <div className="contentbox">
                    {list2.map(item=>
                        <li className="goodsitem" key={item.gid} onClick={this.toDetail.bind(this,item.gid)}>
                            <a href="" className="goodsa">
                                <span className="goodspic">
                                    <img src={item.gpic} alt="" className="list2img"/>
                                </span>
                                <dl>
                                    <dt>
                                        <span className="goodtitle">{item.gtitleA}</span>
                                        <span className="goodtitle">{item.gtitleB}</span>
                                    </dt>
                                    <dd className="goods-sale"> 
                                    <span className="goods-price">￥
                                        <em>{item.gprice}</em></span> 
                                    </dd>
                                    <dd className="goods-assist"> 
                                        <span className="goods-sold">{item.gdes}</span> 
                                    </dd>
                                </dl>
                                </a>
                        </li>
                )}

                    <div className="list2bottom">没有更多数据喽~</div>
    </div>
            
            
            </div>
        )
    }
}
