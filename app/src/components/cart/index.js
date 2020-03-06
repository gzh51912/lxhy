import React, { Component } from 'react'
import { Icon } from 'antd';
import "./cart.css"
import {connect} from "react-redux"
import actionType from "../../store/actionType"
 class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            allChecked:false
        }
    }
     // 返回上一级
     back=()=>{
        this.props.history.go(-1)
    }
     // 跳转到列表页
    toList=()=>{
        this.props.history.push("/list")
    }
    changNum=(gid,num,p)=>{
       
        if(num!==1 && p===-1){           
            this.props.changeNum(gid,p)
        }else if(num<50 && p===1){
            this.props.changeNum(gid,p)

        }
    }
    input=()=>{

    }
    // 选择多选
    select=(gid)=>{
        this.props.select(gid)
    }
    // 全选
    selectAll=()=>{
        this.setState({
            allChecked:!this.state.allChecked
        },()=>{
            this.props.selectAll(this.state.allChecked)
        })

    }
    render() {
        console.log(this.props);
        let {cartlist,length,allMonery} =this.props
        let {allChecked} =this.state
        return (
            <div>
                {/* 头部 */}
                <div className="headWarp">
                    <div className="head">
                        <span className="headLeft">
                        <Icon type="left" style={{fontSize:"20px",fontWeight:"bold"}} onClick={this.back}/>
                        </span>
                        <h1>购物车</h1>
                        <span className="headRight">
                        <Icon type="ellipsis" style={{fontSize:"20px",fontWeight:"bold"}}/>
                        </span>
                    </div>
                </div>
                <div className="contex">
                 {/* 购物车中没有商品时 */}
                <ul className="cartOne" style={{display:length===0?"black":"none"}}>
                    <li className="tu"><Icon type="frown" /> </li>
                    <li>购物车无商品，请移步至商品列表浏览</li>
                    <li className="tolist"><span onClick={this.toList}>全部商品</span></li>
                </ul>
                {/* 购物车有商品时 */}
                {length==0?"":
                <ul className="cartul">
                    
                    {cartlist.map(item=>   
                     <li className="cartli" key={item.gid}>
                        <div className="cartcont">
                        <div className="cartcheck">
                            <input type="checkbox" id="onebox" checked={item.checked} onClick={this.select.bind(this,item.gid)}/>
                        </div>
                        <div className="cartpic">
                            <a href="" className="carta">
                            <img src={item.gpic} className="cartimg" />
                            </a>
                        </div>
                        <div className="cartitle">
                            <p className="cartt">{item.gtitleA}</p>
                            <p className="carti">花材：{item.gtitleB}</p>
                            <em>￥{item.gprice}</em>
                        </div>
                        <div className="cartcontroal">
                            <div id="cartbtns">
                                <img src={require("./cart.png")} alt="" className="del"  />
                                <button style={{width:"30px",height:"20px",
                                lineHeight: "20px",border:"1px solid #ccc"}} onClick={this.changNum.bind(this,item.gid,item.num,-1)}>-</button>
                            
                                <input style={{width:"30px",height:"20px",
                                lineHeight: "20px",border:"1px solid #ccc",
                                verticalAlign:" baseline",textAlign:"center"}} value={item.num} onChange={this.input}/>
                            
                                <button style={{width:"30px",height:"20px",
                                lineHeight: "20px",border:"1px solid #ccc"}} onClick={this.changNum.bind(this,item.gid,item.num,1)}>+</button>
                            </div>
                        </div>
                    </div>
                </li>
                )}
                </ul>
                }
                {/* 购物车底部 */}
                <div className="cartBottom">
                    <div className="cartInput">
                       <input type="checkbox" checked={allChecked} onClick={this.selectAll} onChange={this.input}></input> 
                    </div>
                    <div className="allPrice">
                        <span className="one">合计总金额为：</span>
                        <span className="two">￥{allMonery()}</span>

                    </div>
                    <div className="toBuy">
                        <span>去付款</span>
                    </div>

                </div>
                </div>
            </div>
        )
    }
}
var mapStste=(state)=>{
    return {
        cartlist:state.det.cartlist,
        length:state.det.cartlist.length,
        changeNum:state.changeNum,
        allMonery(){
            var s =0;
            var selectArr=state.det.cartlist.filter(item=>item.checked);
            selectArr.forEach(item=>{
                s+=item.gprice*item.num
            })
            return s
        }
    }
}
export default connect(mapStste,actionType)(Cart)