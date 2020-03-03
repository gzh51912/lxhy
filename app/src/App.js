import React from 'react';
// import './App.css';
// import One from './components/one';
import {routes} from './router'  //引入第一级路由的数组
import {Route,Switch,Redirect,withRouter,NavLink} from 'react-router-dom'
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import './foot.css'
import './base.css'
class App extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);

   this.state = {  
       visible:true,
         
       menu: [{
           name: 'home',
           path: '/home',
           icon: 'home',
           text: '首页'
       }, {
           name: 'list',
           path: '/list',
           icon: 'bars',
           text: '分类'
       },
       {
           name: 'cart ',
           path: '/cart',
           icon: 'shopping-cart',
           text: '购物车'
       }, {
           name: 'mine',
           path: '/mine',
           icon: 'user',
           text: '个人中心'
       }
       ]
   }
  }
  componentDidMount(){
    document.title="首页"
    this.changeTitle()
  }
  changeTitle(){
    this.setState({
        visible:true
      })
      this.props.history.listen(location=>{
          console.log(location.pathname);
        switch (location.pathname) {
            // case "/":
            case "/home":document.title="首页" ;  break;
            case "/list":document.title="分类" ; break;
            case "/cart":document.title="购物车" ; break;
            case "/mine":document.title="个人主页" ; break;
            default:
                if(location.pathname.includes("/list/")){
                    document.title="分类"
                  } 
                  else{
                    //显示404页面时候，隐藏导航
                    this.setState({
                      visible:false
                    })
                  }
        }
          
      })
  }
  render(){   
    return (
    <div className="App">
     <Switch>
       {routes.map(item=>{
         return <Route path={item.path} component={item.component} key={item.path}></Route>
       })}
       <Redirect from="/" to="/home" exact/>
       <Redirect to="/404"/>
     </Switch>
     <ul className="footer-tabs" style={{display:this.state.visible?"":"none"}}>
        {
        this.state.menu.map(item => {
            return <li key={item.name} >
                <i> <NavLink to={item.path}
                    style={{ color: '#929292' }}
                    activeStyle={{ color: '#ED5564' }}  //指定当前路由的类名
                    replace> 
                    <Icon type={item.icon} />
                    </NavLink></i>
                <span > <NavLink
                    to={item.path}
                    style={{ color: '#929292' }}
                    activeStyle={{ color: '#ED5564' }}
                    replace
                >{item.text}</NavLink> </span>
            </li>
        })
        }
    </ul>
    </div>
    );
  } 
}

export default withRouter(App);
