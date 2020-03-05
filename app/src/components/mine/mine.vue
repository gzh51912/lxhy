<template>
  <div>
     <van-nav-bar
      title="用户中心"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="background :#ff464e;font-color:white"
    />
     
    <div class="loginImg" @click="toLogin">
      <!-- <van-image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
      <!-- <van-icon style="font-color:#fff" name=""/> -->
      <img src="../img/notLogin.png" alt="">
      <p style="font-size:16px;color:#fff">{{islogin}}</p>
    </div>
    <van-cell is-link @click="toOrder">我的订单</van-cell>
    <van-cell is-link @click="editAddress">修改地址</van-cell>
    <van-cell is-link>找回密码</van-cell>
    <van-cell is-link>在线补款</van-cell>
    <van-cell is-link>帮助中心</van-cell>
    <van-cell is-link @click="showPopup">微信客服</van-cell>
    <van-popup
      v-model="show"
      style="font-size:14px;width:80%;height:200px;text-align:center;line-height:200px"
    >请加微信：a4006785912咨询</van-popup>
    <van-cell is-link>在线客服</van-cell>
    <p class="outLogin" @click="outLogin" v-show="isblock">退出登录</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      isblock:!!localStorage.phone,
      islogin: localStorage.phone || "登  录"
    };
  },

  methods: {
    onClickLeft(){
    this.$router.push("/list");
    },
    showPopup() {
      this.show = true;
    },
    toLogin() {
      this.$router.push("/login"); //跳转到登录
    },
    // 跳转到订单页
    toOrder(){
      this.$router.push("./order")
    },
    // 退出登录
    outLogin(){
      var outBtn = document.getElementsByClassName("outLogin")[0];
      localStorage.removeItem("phone");
      window.console.log(localStorage);
      this.islogin= localStorage.phone || "登 录";
      if(!localStorage.phone){
        outBtn.style.display="none";
      }
      window.console.log(this.isblock)

    },
    // 修改地址
    editAddress(){
      this.$router.push("/addressManage")
    }
  }
};
</script>
<style lang="scss" scoped>
.loginImg {
  width: 100%;
  height: 156px;
  background-image: url("../img/loginBG.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 180px;
}
.loginImg img{
  margin: auto;
  padding: 40px 0px 10px;
  
}
.outLogin{
  width: vw(750);
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  background: #fff
}
</style>