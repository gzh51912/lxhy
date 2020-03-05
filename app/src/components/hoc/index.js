import React from 'react';
import {mine} from "../../api/request"
import {Redirect} from "react-router-dom"
var Hoc=(path)=> (Com)=>{
    return class extends React.Component {  
        render(){
            if(sessionStorage.getItem("token"))
                 return  <><Com {...this.props} /></>
            else{
               return <Redirect to={{pathname:"/login",state:{path}}}></Redirect>
            }
        }
    }
}

export default Hoc;