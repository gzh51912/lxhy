const initialState = {
    cartlist:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case "JOINCART":
        var newState=JSON.parse(JSON.stringify(state))
        // 如果购物车里没有商品，直接添加
        if(newState.cartlist.length===0){
            newState.cartlist.push(action.goods)
           console.log(newState.cartlist);

            return newState
        }else if(newState.cartlist.length!==0){
            // 如果购物车有相同的商品，数量加一
          var index=newState.cartlist.findIndex(item=>item.gid===action.goods.gid)
          if(index!==-1){
              newState.cartlist[index].num+=action.goods.num
          }else{
            //   购物车没有相同的商品，直接添加
              newState.cartlist.push(action.goods)
          }
           console.log(newState.cartlist);
            
          return newState
        }
        
     case "CHANGE":   
        // 购物车数量的加减
        var newState=JSON.parse(JSON.stringify(state))
        var index=newState.cartlist.findIndex(item=>item.gid===action.gid)
        newState.cartlist[index].num+=action.p;
        return newState
     case "SELECT":
        var newState=JSON.parse(JSON.stringify(state))
        var index=newState.cartlist.findIndex(item=>item.gid===action.gid)
        newState.cartlist[index].checked=!newState.cartlist[index].checked
        return newState
        case "SELECTALL":
        var newState=JSON.parse(JSON.stringify(state))
        newState.cartlist.forEach(item=>item.checked=action.checkedAll)
        
        return newState
    default:
        return state
    }
}
