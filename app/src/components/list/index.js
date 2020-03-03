import React, { Component } from 'react'
import {subRoutes} from '../../router'  //引入第一级路由的数组
import {Route,Switch,Redirect} from 'react-router-dom'
import "./list.css"
export default class List extends Component {
    render() {
        return ( 
            <div>
               {/*  搜索框 */}
            <div className="search">
                <div className="options"><img src={require("../home/img/options.png")} alt=""/></div>
                <input placeholder="输入关键词搜索"  style={{fontSize:"16px"}} type="text"/>
                <div className="more">
                    <img src={require("../home/img/more.png")} alt=""/>
                </div>
            </div>  
              <Switch>
                {subRoutes.map(item=>{
                    return <Route path={item.path} component={item.component} key={item.path}></Route>
                })}
                <Redirect from="/list" to="/list/flower" exact/>
                <Redirect to="/404"/>

                </Switch>
            </div>
        )
    }
}
