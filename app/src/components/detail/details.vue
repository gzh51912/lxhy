<template>
  <div>
    <!-- 回到上一页 -->
    <!-- <app-back></app-back> -->
    <i class="detback" @click="backto">
      <van-icon name="arrow-left" size="25" /></i>
    
    <!-- 轮播图 -->
    <van-swipe indicator-color="white" style="width:375px;height:375px">
      <van-swipe-item>
        <van-image :src="detlist.gpic||fromHome.osrc" style="width:100%;height:100%"/>
      </van-swipe-item>
      <van-swipe-item>
        <van-image :src="detlist.gpic||fromHome.osrc" style="width:100%;height:100%"/>
      </van-swipe-item>
    </van-swipe>
    <!-- 商品信息 -->
    <div class="detailWarp">
      <div class="detCont">
        <p class="detitleA">{{detlist.gtitleA||fromHome.otitle}}</p>
        <p class="deprice">￥{{detlist.gprice||fromHome.oprice}}</p>
        <div class="dedesWarp">
          <span class="denum">编号：LX00{{detlist.number}}</span>
          <span class="dedes">销量：{{detlist.gdes||fromHome.odes}}</span>
        </div>
      </div>
      <div class="detcopmu">
        <p id="btns">
          数量:
          <input type="button" value="-" class="btncom" @click="leavenum"/>
          <input type="text" v-model="num" class="btncom1" />
          <input type="button" value="+" class="btncom" @click="addnum"/>
        </p>
      </div>
      <div class="detpicWarp">
        <img src="../img/d1.png" alt class="detpic" />
        <img src="../img/d2.png" alt class="detpic" />
        <img src="../img/d3.png" alt class="detpic" />
        <img src="http://m.leflower.com/img/xiangqing/xiangqing_01.jpg" alt class="detpic" />
        <img src="http://m.leflower.com/img/xiangqing/xiangqing_02.jpg" alt class="detpic" />
        <img src="http://m.leflower.com/img/xiangqing/xiangqing_03.jpg" alt class="detpic" />
        <img src="http://m.leflower.com/img/xiangqing/xiangqing_04.jpg" alt class="detpic" />
        <img src="http://m.leflower.com/img/xiangqing/xiangqing_05.jpg" alt class="detpic" />
        <img src="http://m.leflower.com/img/xiangqing/xiangqing_06.jpg" alt class="detpic" />
        <img src="http://m.leflower.com/img/xiangqing/xiangqing_07.jpg" alt class="detpic" />
        <img src="http://m.leflower.com/img/xiangqing/xiangqing_08.jpg" alt class="detpic" />
      </div>
    </div>

    <!-- 提交购物车按钮组 -->
    <van-goods-action style="z-index:99999">
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="phone-o" text="电话"  @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton1" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
// import appBack from "../components/appback";
export default {
  data() {
    return {
      num: 1,
      detlist:"",
      fromHome:{}
    };
  },
  components: {
    // appBack
  },
  methods: {
    backto(){
    this.$router.back();
    },
    onClickIcon() {

      //   Toast("点击图标");
    },
    onClickButton() {
      //   Toast("点击按钮");
    },
     onClickButton1() {
      // this.detlist.num=this.num;
      let cid=this.detlist.cid;
      let cid1=this.detlist.cid1;
      let cid2=this.detlist.cid2;
      let gid=this.detlist.gid ||this.fromHome.gid;
      this.$router.push({ name: "cart", params: {cid,cid1,cid2,gid,cartnum:this.num} })
    },
    addnum(){
      this.num++
    },

    leavenum(){
      if(this.num>1)
      this.num--
    }
  },
  created() {
    // window.console.log(this.$route.params.item);
    this.detlist=this.$route.query;
    this.fromHome=this.$route.params.item;
    // window.console.log(this.detlist);
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/750) * 100vw;
}
.detback{
    height: 19px;
    width: 19px;
    position: absolute;
    left: 15px;
    top: -38px;
    z-index: 6666;
}
.detailWarp {
  .detCont {
    font-size: vw(32);
    width: vw(750);
    height: vw(162.6);
    border-bottom: 1px #cccccc solid;
    text-align: left;
    .detitleA {
      height: vw(41.6);
      text-indent: vw(22);
    }
    .deprice {
      color: red;
      font-weight: bold;
      margin-top: vw(15);
      text-indent: vw(22);
    }
    .dedesWarp {
      height: vw(30);
      font-size: vw(28);
      margin-top: vw(15);
      .denum {
        display: inline-block;
        text-indent: vw(22);
        width: 50%;
        float: left;
      }
      .dedes {
        width: 50%;
        display: inline-block;
        float: left;
      }
    }
  }
  .detcopmu {
    width: vw(750);
    height: vw(96);
    border-bottom: 1px #cccccc solid;
    #btns {
      text-align: left;
      font-size: vw(28);
      display: block;
      line-height: vw(96);
      margin-left: 11px;

      .btncom1,
      .btncom {
        width: vw(60);
        height: vw(40);
      }
      .btncom1 {
        height: vw(34);
        text-align: center;
      }
    }
  }
  .detpicWarp {
    overflow: auto;
    width: 100%;
    .detpic {
      width: 100%;
    }
  }
}
</style>