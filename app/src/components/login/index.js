import React, { Component } from 'react'
import { Icon, Switch } from 'antd';
import {login} from "../../api/request"
import "./login.css"
 class Login extends Component {
     
      // 返回上一级
    back=()=>{
        this.props.history.go(-1)
    }
    onChange=(checked)=> {
        console.log(`switch to ${checked}`);
      }
      toReg=()=>{
          this.props.history.push("/reg")
      }
      //   登录验证
   login=()=>{
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
                    login(value1,value2).then(res=>{                           
                        if (res.status === "success") {
                            alert("登录成功")
                            // 存用户名和token到sessionStorage
                            sessionStorage.setItem("token",res.token)
                            sessionStorage.setItem("username",value1)
                            // 跳转
                            console.log(this.props);
                            let {path}=this.props.location.state
                            this.props.history.push(path);
                
                          }else if(res.status === "error"){
                            alert("用户名或登录密码不正确！")

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
                        <h1>登录</h1>
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
                            <input id="account" type="text"  placeholder="请输入账号" ref={(node1)=>this.node1=node1}/>
                            <span className="mui-hidden"></span>
                        </div>
                        <div className="mui-input-row">
                            <label>密码</label>
                            <input type="password" id="password" placeholder="请输入密码" ref={(node2)=>this.node2=node2}/>
                            <span className="mui-icon-eye"></span>
                        </div>
                        <input id="backs" type="hidden" name="backs" value="0"/>
                    </form>
                    <div className="online">自动登录
                    <Switch defaultChecked onChange={this.onChange}/>
                    </div>
                    <div className="mui-content-padded">
                        <button id="login" onClick={this.login}>登录</button>
                        <div className="link-area">
                            <a id="reg" onClick={this.toReg}>注册账号</a> 
                            <span className="spliter">|</span> 
                            <a id="forgetPassword">忘记密码</a> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login