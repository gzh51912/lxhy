import React,{ Component } from 'react'
import Hoc from '../hoc'
@Hoc(22)
 class One extends Component {
     componentDidMount(){
         fetch("/api/topics").then((res)=>res.json()).then((res)=>{
             console.log(res)
         })
         fetch("https://cnodejs.org/api/v1/topics").then((res)=>res.json()).then((res)=>{
            console.log(res)
        })
         
     }
    render() {
        return (
            <div>
                One
            </div>
        )
    }
}

export default  One;
