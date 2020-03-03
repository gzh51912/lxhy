export default{
    finish(id){
        return (dispatch)=>{
            dispatch({
                type:"START"  //loading true
            })
            setTimeout(()=>{
                 dispatch({
                     type:"FINISH",
                     id
                 })
                 dispatch({   //loading false
                     type:"OVER"
                 })
            },1500)
        }
    },
    finishAll(){
        return {
            type:"FINISHALL"
        }
    }
}