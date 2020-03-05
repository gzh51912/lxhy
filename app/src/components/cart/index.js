import React, { Component } from 'react'
import { Icon } from 'antd';
import "./cart.css"
import Hoc from "../hoc"
 class Cart extends Component {

     // 返回上一级
     back=()=>{
        this.props.history.go(-1)
    }
     // 跳转到列表页
    toList=()=>{
        this.props.history.push("/list")
    }
    render() {
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
                <ul>
                    <li className="tu"><Icon type="frown" /> </li>
                    <li>购物车无商品，请移步至商品列表浏览</li>
                    <li className="tolist"><span onClick={this.toList}>全部商品</span></li>
                </ul>
                </div>
            </div>
        )
    }
}
export default Hoc("/cart")(Cart)