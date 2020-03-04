import React, { Component } from 'react'
import { Icon } from 'antd';
import "./detail.css"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import {getDetail} from "../../api/request"
export default class Detail extends Component {
    constructor(props){
        super(props)
        console.log(this.props.location.state);
        this.state={
            detList:[],
            num:1
        }
        
    }
    componentDidMount(){
        this.slider()
        let {gid}=this.props.location.state
        getDetail(gid).then(res=>this.setState({detList:res[0]}))
      console.log(gid);


      
    }
    // 返回上一级
    back=()=>{
        this.props.history.go(-1)
    }
     //  实例化轮播图
     slider(){
        new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            allowTouchMove: true,   // 允许触摸滑动
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                waitForTransition: false,
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
          })
    }
    // 改变输入框的值
    changNum=(index)=>{
        let {num}=this.state
        if(index===-1 && num!==1){
            this.setState({num:num-1})
           
        }else if(index===1 && num <50){
          this.setState({num:num+1})  
        }           
        
    }
    joinCart=()=>{
        
    }
    input=()=>{
    }
    render() {
        let {detList,num}=this.state;
        return (
            <div>
                <Icon type="left" style={{fontSize:"20px",
                fontWeight:"bold",position:"absolute",top:"20px",left:"20px",zIndex:99}} 
                onClick={this.back}/>
                  {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                         <div className="swiper-slide">
                         <img src={detList.gpic} style={{width:"100%",height:"375px"}}/>
                         </div>
                         <div className="swiper-slide">
                         <img src={detList.gpic} style={{width:"100%",height:"375px"}} />
                         </div>
                                        
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                 {/* 商品信息  */}
                <div className="detailWarp">
                <div className="detCont">
                    <p className="detitleA">{detList.gtitleA}</p>
                    <p className="deprice">￥{detList.gprice}</p>
                    <div className="dedesWarp">
                    <span className="denum">编号：LX00{detList.number}</span>
                    <span className="dedes">销量：{detList.gdes}</span>
                    </div>
                </div>
                <div className="detcopmu">
                    <div id="btns">
                    数量:
                    <button style={{width:"30px",height:"20px",
                    lineHeight: "20px",border:"1px solid #ccc"}} onClick={this.changNum.bind(this,-1)}>-</button>
                    
                    <input style={{width:"30px",height:"20px",
                    lineHeight: "20px",border:"1px solid #ccc",
                    verticalAlign:" baseline",textAlign:"center"}} value={num} onChange={this.input}/>
                    
                    <button style={{width:"30px",height:"20px",
                    lineHeight: "20px",border:"1px solid #ccc"}} onClick={this.changNum.bind(this,1)}>+</button>
                   
                    </div>
                </div>
                <div className="detailBottom">
                    <span className="service"><Icon type="message" /><a>客服</a></span>
                    <span className="tel"><Icon type="phone" /><a>电话</a></span>
                    <span className="toCart" onClick={this.joinCart}>加入购物车</span>
                    <span className="buy">立即购买</span>
                </div>
                <div className="detpicWarp">
                    <img src={require("./d1.png")} alt="" className="detpic" />
                    <img src={require("./d2.png")} alt="" className="detpic" />
                    <img src={require("./d3.png")} alt="" className="detpic" />
                    <img src="http://m.leflower.com/img/xiangqing/xiangqing_01.jpg" alt="" className="detpic" />
                    <img src="http://m.leflower.com/img/xiangqing/xiangqing_02.jpg" alt="" className="detpic" />
                    <img src="http://m.leflower.com/img/xiangqing/xiangqing_03.jpg" alt="" className="detpic" />
                    <img src="http://m.leflower.com/img/xiangqing/xiangqing_04.jpg" alt="" className="detpic" />
                    <img src="http://m.leflower.com/img/xiangqing/xiangqing_05.jpg" alt="" className="detpic" />
                    <img src="http://m.leflower.com/img/xiangqing/xiangqing_06.jpg" alt="" className="detpic" />
                    <img src="http://m.leflower.com/img/xiangqing/xiangqing_07.jpg" alt="" className="detpic" />
                    <img src="http://m.leflower.com/img/xiangqing/xiangqing_08.jpg" alt="" className="detpic" />
                </div>
                </div>
            </div>
        )
    }
}
