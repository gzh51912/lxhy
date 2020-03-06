export default{
    joinCart(goods){
        return {
            type:"JOINCART",
            goods
        }
    },
    changeNum(gid,p){
        return {
            type:"CHANGE",
            gid,p
        }
    },
    select(gid){
        return {
            type:"SELECT",
            gid
        }
    },
    selectAll(checkedAll){
        return {
            type:"SELECTALL",
            checkedAll,
        }
    }
}