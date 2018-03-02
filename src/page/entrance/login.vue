<template>
  <div class="login">
    <head-top :head-title="headTitle" is-back="true" is-gray="true" @go-page="$router.go(-1)">
      <router-link slot="more" :to="{path: '/register'}" class="more">
        注册
      </router-link>
    </head-top>
    <div class="login_body">
      <img class="top_img" src="../../../static/images/login/top_img.png">
      <div class="login_form">
        <input name="" class="phone bgImg" type="number" maxlength="11" v-model="phone" placeholder="请输入手机号码">
        <p class="psd_bg"><input name="" v-model="password" :type="pwdShow==true?'text':'password'" class="password bgImg" placeholder="请输入登录密码"><i @click="pwdShow=!pwdShow" :class="pwdShow==true?'open':'close'"></i></p>
        <p class="forget_psd"><router-link to="">忘记密码</router-link></p>
        <button @click="login" class="login_btn">登录</button>
        <p class="to_reg"><router-link :to="{path: '/register'}">立即注册</router-link>,领888元红包</p>
        <p class="text">——————<span>客服电话</span>——————<br>400-101-8867(9:00-18:00)</p>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import {setStore,getStore,getPhone} from '@/config/mUtils'
  import {login,myPayAccount} from '@/service/getData'
  import {mapMutations} from 'vuex'
  export default {
    data: function () {
      return {
        headTitle: "",
        phone:'15158866411',
        password:'121212qw',
        pwdShow: false,
        userInfo: null
      }
    },
    mounted(){
      this.$("#headerTop")[0].style.background = '#fff';
      this.$("#app")[0].style.background = '#fff';
    },
    components:{
      headTop
    },
    methods:{
      ...mapMutations([
        'RECORD_USERINFO','RECORD_PAYACCOUNT'
      ]),
      async login () {
        this.userInfo =  await login(this.phone,this.password);
        if(this.userInfo.retcode=='00000000'){
          this.$router.push({path:'/account'});
          this.RECORD_USERINFO(this.userInfo);
          this.getPayAccount(this.userInfo.sessionid);
        }else{
          alert(this.userInfo.retmsg);
        }
      },
      async getPayAccount(sessionid){
        let payaccount = await myPayAccount(sessionid);
        this.RECORD_PAYACCOUNT(payaccount.account);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .more {
    @include sc(0.638rem!important, #6f6f6f !important);
  }
  .login{
    .login_body{
      background: $fc;
      height: 100%;
      padding-top: 1.95rem;
      text-align: center;
    }
    .login_form{
      width: 12.8936rem;
      margin: 0 auto;
    }
    .top_img{
      width: 6.8085rem;
      margin: 2.1276rem 0 2.9787rem;
    }
    .bgImg{
      background-repeat: no-repeat;
      background-size: 0.5106rem 0.6283rem;
      background-position: left center;
      padding-left: 1.0272rem;
      line-height: 1.0638rem;
      height: 1.0638rem;
      width: 12.8936rem;
      border-bottom: 1px solid #eaeaea;
    }
    .phone.bgImg{
      background-image: url("../../../static/images/login/icon_phone.png");
    }
    .password.bgImg{
      background-image: url("../../../static/images/login/icon_psd.png");
    }
    .psd_bg{
      position: relative;
      i{
        position: absolute;
        height: 0.5957rem;
        width: 0.7659rem;
        background-size: contain;
        right: 0;
        top: 0.3404rem;
      }
      i.close{
        background-image: url("../../../static/images/login/icon_off.png");
      }
      i.open{
        background-image: url("../../../static/images/login/icon_on.png");
      }
    }
    .forget_psd{
      margin: 0.4255rem 0 1.9149rem;
      text-align: left;
      font-size: 0.5532rem;
      a{
        color: #999;
      }
    }
    .login_btn{
      width: 100%;
      font-weight: bold;
      @include hh(1.7872rem,1.7872rem);
      @include sc(0.7659rem,#fffefe);
      background: $mc;
      border-radius: 8px;
    }
    .to_reg{
      margin: 0.5957rem 0 5.1064rem;
      @include sc(0.5532rem,#999);
      a{
        color: #2da0ff;
      }
    }
    .text{
      @include sc(0.5957rem,#bdbdbd);
      span{
        color: #bdbdbd;
        padding: 0 0.6383rem;
      }
    }
  }
</style>
