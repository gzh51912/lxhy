import React, { Component } from 'react'
import { Icon } from 'antd';
import "./mine.css"
import Hoc from "../hoc"

 class Mine extends Component {
    

     // 返回上一级
     back=()=>{
        this.props.history.go(-1)
    }
    // 退出
    loginOut=()=>{
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("username")
        this.props.history.push("/login")
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
                        <h1>个人中心</h1>
                        <span className="headRight">
                        <Icon type="ellipsis" style={{fontSize:"20px",fontWeight:"bold"}}/>
                        </span>
                    </div>
                </div>
                <div className="loginImg" >
                    <div className="imgWarp">
                        <img src={require("./notLogin.png")} alt=""/>
                        <p>{sessionStorage.getItem("username")}</p> 
                    </div>
                    
                </div>
                <div className="context">
                <ul className="ul1">
                    <li><Icon type="diff"/>我的订单<span>></span></li>
                    <li><Icon type="environment" />修改地址<span>></span></li>

                    <li><Icon type="key"/>找回密码<span>></span></li>

                </ul>
                <ul className="ul2">
                    <li><Icon type="read"/>在线补款<span>></span></li>
                    <li><Icon type="question" />帮助中心<span>></span></li>
                    
                </ul>
                <ul className="ul3">
                    <li><Icon type="wechat"/>微信客服<span>></span></li>
                    <li><Icon type="message" />在线客服<span>></span></li>
                    <li onClick={this.loginOut}><Icon type="close-circle" />退出<span>></span></li>                 
                </ul>
                </div>
            </div>
        )
    }
}
export default Hoc("/mine")(Mine)