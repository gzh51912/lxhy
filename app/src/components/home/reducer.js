const initialState = {
    data1:["全部鲜花",
            "爱情鲜花",
            "生日鲜花",
            "开业用花",
            "送老师",
        ],
    sort:[
        {
          sortName: "鲜花",
          url: "http://m.leflower.com//images/flower_1.png",
          background: "#fb8989"
        },
        {
          sortName: "送老师",
          url: "http://m.leflower.com/images/flower_2.png",
          background: "#de8dc5"
        },
        {
          sortName: "开业送花",
          url: "http://m.leflower.com/images/flowersong_1.png",
          background: "#77bae6"
        },
        {
          sortName: "蛋糕",
          url: "http://m.leflower.com/images/gifts_2.png",
          background: "#f6b365"
        },
        {
          sortName: "更多分类",
          url: "http://m.leflower.com/images/Plant_2.png",
          background: "#88d4c0"
        }
      ],
      copyRight:[
          {
              pic:"http://m.leflower.com/images/pp_1.png",
              title:"10年鲜花品牌",
          },
          {
            pic:"http://m.leflower.com/images/pp_2.png",
            title:"行业认证龙头",
        },
        {
            pic:"http://m.leflower.com/images/pp_3.png",
            title:"低价保证",
        },
        {
            pic:"http://m.leflower.com/images/pp_4.png",
            title:"3小时送花",
        }
      ]
    

}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GETDATA':
            var newState ={...state};
            newState.list = action.list;
           return newState;
        default:
            return state 

    }
       
    
}