import React, { Component } from 'react'
import "./home.css"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import {connect} from "react-redux"
import {getHome,getPing} from "../../api/request"
 class Home extends Component {
     constructor(props){
         super(props);
         this.state={
            slider:["http://www.leflower.com/images/adimg_m/20180921voptde.jpg",
                "http://www.leflower.com/images/adimg_m/20200210yqfjkr.jpg",
             
               ],
              homelist1:[], 
              homelist2:[], 
              homelist3:[], 
              ping:[],
            }
            
     }
    
    //  实例化轮播图
    slider(){
        new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // allowTouchMove: true,   // 允许触摸滑动
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
     componentDidMount(){
        this.slider()
        getHome(1).then(res=>this.setState({homelist1:res}) )
        getHome(2).then(res=>this.setState({homelist2:res}) )
        getHome(3).then(res=>this.setState({homelist3:res}) )
        getPing().then(res=>this.setState({ping:res}) )   
          
     }
     //  点击改变颜色,跳到分类页
     changColor=(index)=>{
       
        let headli=document.getElementsByClassName("headli")
        for(var i=0;i<headli.length;i++){
            headli[i].style.color=""
        }
        headli[index].style.color="#ff464e"
        this.props.history.push("/list")
      
        
     }
    //  跳转到分类页面
    toList=()=>{
        this.props.history.push("/list")
    }
    //  跳转到详情页
    toDetail=(gid)=>{
        this.props.history.push("/detail",{gid})
    }
    render() {
        // console.log(this.props);
       let {homelist1,homelist2,homelist3,ping}=this.state
        let {data1,sort,copyRight}=this.props.home
        return (
        <div>
            {/*  搜索框 */}
            <div className="searchWarp">
                <div className="search">
                    <div className="options"><img src={require("./img/options.png")} alt=""/></div>
                    <input placeholder="输入关键词搜索"  style={{fontSize:"12px"}} type="text"/>
                    <div className="more">
                        <img src={require("./img/more.png")} alt=""/>
                    </div>
                </div> 
            </div>
            {/* 头部列表  */}
            <ul className="toplist">
                {data1.map((item,index)=><li key={item} onClick={this.changColor.bind(this,index)} className="headli">{item}</li>)}
                <span className="toplist_more">></span>
            </ul>
            {/* 轮播图 */}
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.state.slider.map((item,index)=>{
                        return <div className="swiper-slide" key={index}>
                            <img src={item} style={{width:"100%",height:"141.28px"}} alt=""/></div>
                    })}
                
                </div>
                <div className="swiper-pagination"></div>
            </div>
            {/* 分类  */}
            <ul className="sortList" onClick={this.toList}>
                {sort.map(item=> 
                    <li key={item.sortName}>
                        <span style={{background:item.background}}>
                        <img src={item.url} alt=""></img>
                        </span>
                        <p>{item.sortName}</p>
                    </li>
                    )}
            </ul>
            {/* 电话咨询  */}
            <div className="callPhone">
            <div className="box">
                <li style={{background:"#4cd964"}}>a4006785912</li>
                <li style={{background:"#dd524d"}}>364-5454-646554</li>
                <li style={{background:"#f0ad4e"}}>55553754</li>
                <li style={{background:"#007aff"}}>订单查询</li>
            </div>
            </div>
             {/* 列表  */}
            <div className="home_list">
             {/* 特价鲜花  */}
                <ul className="listUl">
                    <div className="tejia">
                        <span className="tejia_flower">恋人鲜花</span>
                        <span className="tejia_more" onClick={this.toList}>更多></span>
                    </div>
                     {homelist1.map(item=>
                    <li className="listItem" key={item.gid} onClick={this.toDetail.bind(this,item.gid)}>
                        <img src={item.osrc}  alt=""/>
                        <div className="listItem_details">
                            <p>{item.otitle}</p>
                            <span className="price">￥{item.oprice}</span>
                            <span className="paynum">{item.odes}人已付款</span>
                        </div>
                    </li>
                            )}
                    
                </ul>
             {/* 新品上架  */}
             <ul className="listUl">
                    <div className="tejia">
                        <span className="tejia_flower">新品上架</span>
                        <span className="tejia_more" onClick={this.toList}>更多></span>
                    </div>
                     {homelist2.map(item=>
                    <li className="listItem" key={item.gid} onClick={this.toDetail.bind(this,item.gid)}>
                        <img src={item.osrc}  alt=""/>
                        <div className="listItem_details">
                            <p>{item.otitle}</p>
                            <span className="price">￥{item.oprice}</span>
                            <span className="paynum">{item.odes}人已付款</span>
                        </div>
                    </li>
                            )}
                    
                </ul>
                {/* 特价鲜花  */}
             <ul className="listUl">
                    <div className="tejia">
                        <span className="tejia_flower">特价鲜花</span>
                        <span className="tejia_more" onClick={this.toList}>更多></span>
                    </div>
                     {homelist3.map(item=>
                    <li className="listItem" key={item.gid} onClick={this.toDetail.bind(this,item.gid)}>
                        <img src={item.osrc}  alt=""/>
                        <div className="listItem_details">
                            <p>{item.otitle}</p>
                            <span className="price">￥{item.oprice}</span>
                            <span className="paynum">{item.odes}人已付款</span>
                        </div>
                    </li>
                            )}
                    
                </ul>
         
            </div>
             {/* 评价  */}
            <div className="pingjia">
                <p className="new_pingjia">
                    最新评价
                    <span>483726条</span>
                </p>
                <ul>
                    <li>
                        {ping.map(item=>
                            <div className="item_contents" key={item.email}>
                            <img src={item.imgsrc} alt=""/>
                            <div className="pingjia_contents">
                            <p>
                                <span className="email">{item.email}</span>
                                <span className="time">{item.date}</span>
                            </p>
                            <p className="text">{item.contents}</p>
                            </div>
                        </div>
                            
                            
                            )}
                    
                    </li>
                </ul>
            </div>
             {/* 牛郎织女  */}
            <div className="bottom_gif">
            <img src="http://m.leflower.com/img/allhua.gif" alt=""/>
            </div>
            {/* 火热预定中  */}
            <div className="mui-card-content-inner">
            <p style={{color:"#8f8f94"}}>鲜花火热预定中......</p>
            <p style={{color: "#f33"}}>全国县级以前城市当日可达，提前预定价格优惠哦</p>
            </div>
             {/* 全部鲜花 跳转到列表页 */}
            <div className="allflower">
            <span className="all" >全部鲜花</span>
            <span className="zhuanqu">3.8节专区</span>
            </div>
            <div className="bottom_imglist">
            <ul>
                {copyRight.map(item=>
                        <li key={item.pic}>
                        <img src={item.pic}  alt=""/>
                        <p>{item.title}</p>
                        </li>)}
            </ul>
            </div>
            <div className="bootom">
            <p>帮助|查单|在线补款|客服|电脑版</p>
            <p>领先的中国鲜花速递品牌，鲜花速递专家</p>
            <p>© 乐享花艺鲜花网 m.leflower.com</p>
            </div>

            <div style={{width:"100%",height:"55px"}}></div>
            
        </div>
        )
    }
}
export default connect(state=>state)(Home)

