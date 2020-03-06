import React, { Component } from 'react'
import { Icon} from 'antd';
import {reg} from "../../api/request"
import "./login.css"
 class Reg extends Component {
     constructor(props){
         super(props)
         
     }
     componentDidMount(){
    
     }
    // 返回上一级
    back=()=>{
        this.props.history.go(-1)
    }
      toLogin=()=>{
          this.props.history.push("/login")
      }
    //   注册验证
    reg=()=>{
        let value1=this.node1.value.trim()
        let value2=this.node2.value.trim()
        if(value1.length){
            if (!/^1[3-9]\d{9}$/.test(value1)){
                window.alert("请输入正确的手机号码")  
            }else{
                if(value2.length){
                    if (value2.length>20 ||value2.length<6){
                            window.alert("密码长度错误")  
                      }else{
                        reg(value1,value2).then(res=>{                           
                            if (res.status === "success") {
                                alert("注册成功")
                                // 跳转
                                this.props.history.push("/login");
                    
                              }else if (res.status === "exit"){
                                  alert("手机号码已注册")
                              }else if (res.status === "incomplete"){
                                alert("请完善注册信息");
                              } 
                        })
                        
                          
                      }
                }else{
                    window.alert("请输入密码")  

                }
            }   
      }else{
        window.alert("请输入手机号码")  

      }

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
                        <h1>注册</h1>
                        <span className="headRight">
                        <Icon type="plus" style={{fontSize:"20px",fontWeight:"bold"}}/>
                        </span>
                    </div>
                </div>
                {/* 内容 */}
                <div className="contex">
                    <form id="login-form">
                        <div className="mui-input-row" id="one">
                            <label>账号</label>
                            <input id="account" type="text"  placeholder="请输入手机号" ref={(node1)=>this.node1=node1}/>
                            <span className="mui-hidden"></span>
                        </div>
                        <div className="mui-input-row">
                            <label>密码</label>
                            <input type="password" id="password" placeholder="请设置6-20位数字字母登录密码" ref={(node2)=>this.node2=node2}/>
                            <span className="mui-icon-eye"></span>
                        </div>
                        <input id="backs" type="hidden" name="backs" value="0"/>
                    </form>
                    <div className="check">
                        <span className="left">验证码</span>
                        <span className="right">获取验证码</span>

                    </div>
                    <div className="mui-content-padded">
                        <button id="login" onClick={this.reg}>注册</button>
                        <div className="link-area">
                            <a id="reg" onClick={this.toLogin}>登录</a> 
                            <span className="spliter">|</span> 
                            <a id="forgetPassword">忘记密码</a> 
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
}
export default Reg