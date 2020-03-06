import React, { Component } from 'react'
import "./flower.css"
import {getFlower} from "../../api/request"

// import {hashHistory} from 'react-router'
export default class Flower extends Component {
    constructor(props){
        super(props)
        this.state={flowerList:[]}
    }
    componentDidMount(){
        getFlower(1).then(res=>this.setState({
            flowerList:res
        }))
    }
    // 点击时改变颜色，并跳转到二级列表
    toDetail=(index1,cid,cid1,cid2)=>{
        let oul=document.getElementsByClassName("con-right")[index1]
        let olis=oul.getElementsByTagName("li")
        let allLis=document.getElementsByTagName("li")
        for(var i=0;i<allLis.length;i++){
            allLis[i].style.color=""
        }
        olis[cid2-1].style.color="#1890ff"
        this.props.history.push("/list2",{cid,cid1,cid2})
        // hashHistory.push("/list2",{cid,cid1,cid2})
    }
    render() {
        let {flowerList}=this.state
        return (
            <div>
                <div className="conright">
                    <a className="catager">全部鲜花</a>
                    {
                        flowerList.map((item,index1)=>   
                         <div className="con-right" key={item.cid1}>
                            <div className="con-lis">
                                <a>{item.cname1}</a>
                                <ul>
                                    {item.contain.split(',').map((ele,index2)=>  
                                    <li key={ele} onClick={this.toDetail.bind(this,index1,item.cid,item.cid1,index2+1)}>
                                        
                                        {ele}</li>
                                    )}
                                 
    
                                </ul>
                            </div>
                       
                    </div>    
                            
                            )
                    }
                   
                </div>
            </div>
        )
    }
}
