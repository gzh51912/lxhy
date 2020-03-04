import React, { Component } from 'react'
import {subRoutes} from '../../router'  //引入第一级路由的数组
import {Route,Switch,Redirect,NavLink} from 'react-router-dom'


import "./list.css"
export default class List extends Component {
    render() {
        return ( 
        <div>
           
            {/*  搜索框 */}
            <div className="searchWarp">
                <div className="search">
                    <div className="options"><img src={require("../home/img/options.png")} alt=""/></div>
                    <input placeholder="输入关键词搜索"  style={{fontSize:"12px"}} type="text"/>
                    <div className="more">
                        <img src={require("../home/img/more.png")} alt=""/>
                    </div>
                </div> 
            </div>
            <div className="category">
                <section className="cate-left">
                    <ul>
                        <li><NavLink to="/list/flower">鲜花</NavLink></li>
                        <li><NavLink to="/list/cake">蛋糕</NavLink></li>
                        <li><NavLink to="/list/katong">巧克力/卡通</NavLink></li>
                        <li><NavLink to="/list/green">绿植花卉</NavLink></li>
                        <li><NavLink to="/list/busy">商务专区</NavLink></li>
                        <li><NavLink to="/list/sad">哀思鲜花</NavLink></li>
                        <li><NavLink to="/list/ever">永生花</NavLink></li>

                    </ul>
                </section>
                <section className="cate-right">
                    <Switch>
                        {subRoutes.map(item=>{
                            return <Route path={item.path} component={item.component} key={item.path}></Route>
                        })}
                        <Redirect from="/list" to="/list/flower" exact/>
                        <Redirect to="/404"/>
                        </Switch>
                </section>
            </div> 

        </div>
        )
    }
}
