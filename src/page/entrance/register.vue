<template>
  <div class="login">
    <head-top :head-title="headTitle" is-back="true" is-gray="true" @go-page="$router.go(-1)"></head-top>
    <div class="login_body">
      <div class="register_form">
        <p class="phone_bg"><span>手机号</span><input name="" class="phone bgImg" maxlength="11" placeholder="请输入手机号码" v-model="registe.loginname"></p>
        <p class="code_bg"><span>验证码</span><input name="" class="code bgImg" v-model="registe.authcode" maxlength="6" placeholder="请输入验证码"><button :class="getCodeBtn==true?'btn':'btn gray'" @click="getCode">{{text}}</button></p>
        <p class="pwd_bg"><span>设置密码</span><input name="" v-model="registe.loginpwd" :type="pwdShow1==true?'text':'password'" class="password1 bgImg" placeholder="请输入8-16位字母数字组合密码"><i :class="pwdShow1==true?'open':'close'" @click="pwdShow1=!pwdShow1"></i></p>
        <p class="pwd2_bg"><span>确认密码</span><input name="" v-model="registe.loginpwd2" :type="pwdShow2==true?'text':'password'" class="password2 bgImg" placeholder="请输入8-16位字母数字组合密码"><i :class="pwdShow2==true?'open':'close'" @click="pwdShow2=!pwdShow2"></i></p>
        <p class="invite_bg"><span>邀请人</span><input name="" v-model="registe.spreadcode" class="invite bgImg" placeholder="请输入邀请人手机号码(选填)"></p>
        <button :class="ifChecked==true?'reg_btn':'reg_btn gray'" @click="register">注册</button>
        <div class="agree_div">
          <input @click="ifChecked=!ifChecked" type="checkbox" v-show="false" id="myCheck"><label class="left" for="myCheck"></label>
          <p class="agree left">我已同意并阅读<router-link :to="{path: '/agreement/001'}">《XXXXX协议》</router-link>和<router-link :to="{path: '/agreement/001'}">《XXXXX协议》</router-link></p>
        </div>
      </div>
    </div>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import {isExistLoginName,getAuthCode,register} from '@/service/getData'
  import alertTip from '@/components/common/alertTip'
  import {setStore,getStore} from '@/config/mUtils'
  export default {
    data: function () {
      return {
        headTitle: "注册",
        ifChecked:false,
        showAlert: false,
        alertText: '',
        pwdShow1: false,
        pwdShow2: false,
        registe:{
          loginname:'',
          loginpwd:'',
          loginpwd2:'',
          authcode:'',
          sequence:'1111',
          spreadcode:''
        },
        getCodeBtn: true,
        iceTime: 0,
        text: '获取验证码'
      }
    },
    mounted(){
      this.$("#headerTop")[0].style.background = '#fff';
      this.$("#app")[0].style.background = '#fff';
      this.$("#headerTitle")[0].style.color = '#282828';
      const _this = this;
      this.initSecond();
    },
    components:{
      headTop,
      alertTip
    },
    methods:{
      initSecond(){
        const firsttime = getStore("streamid"),nowtime = new Date();
        const timediff = Date.parse(nowtime)-Date.parse(firsttime);
        let secs = 0;
        console.log(timediff);
        //计算秒数
        secs = parseInt(timediff/1000);
        if(secs<60) {
          this.getCodeBtn=false;this.iceTime = 60-secs;
          const _this = this;
          let timer = setInterval(function () {
            if(_this.iceTime==0){
              _this.getCodeBtn = true;
              _this.text = "获取验证码";
              clearInterval(timer);
              return;
            }
            _this.text = _this.iceTime--+"s后可获取";
          },1000)
        }
        console.log(secs);
      },
      async getCode(){
        if(this.getCodeBtn==false) return;
        const result = await isExistLoginName(this.registe.loginname,new Date());
        if(result.isexist==1){
          this.showTip('用户已存在');
          return;
        }else {
          this.getAuthCode();
        }
        console.log(result);
      },
      async getAuthCode(){
        if(this.getCodeBtn==false) return;
        const codeResult = await getAuthCode(this.registe.loginname,"USER_REGISTER",new Date());
        console.log(codeResult);
        if(codeResult.retcode=="00000000"){
          setStore("streamid",codeResult.streamid);
          this.initSecond();
        }else this.showTip(codeResult.retmsg);
      },
      async register(){
        if(this.registe.loginpwd!==this.registe.loginpwd2) {
          this.showTip('两次输入密码不一致');
          return;
        }
        const regResult = await register(this.registe.loginname,this.registe.loginpwd,this.registe.authcode,this.registe.spreadcode,this.registe.sequence);
        if(regResult.retcode=="00000000"){
          this.registe.sequence = regResult.sequence;
          this.showTip("注册成功");
          this.$router.push({path:'/login',query:{loginname:regResult.loginname}})
        }else {
          this.showTip(regResult.retmsg);
        }
        console.log(regResult);
      },
      showTip(alertText){
        this.showAlert = true;
        this.alertText = alertText;
      },
      closeTip(){
        this.showAlert = false;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .login{
    .login_body{
      background: $fc;
      height: 100%;
      padding-top: 1.95rem;
      text-align: center;
    }
    .register_form{
      width: 14.1702rem;
      margin: 1.5319rem auto 0;
      >p{
        position: relative;
        span{
          position: absolute;
          @include sc(0.5957rem,#4f4f4f);
          left: 1.0212rem;
          bottom: 0.4255rem;
        }
      }
    }
    .top_img{
      width: 6.8085rem;
      margin: 2.1276rem 0 2.9787rem;
    }
    .bgImg{
      background-repeat: no-repeat;
      background-size: 0.5531rem 0.5957rem;
      background-position: 0 1.0255rem;
      padding: 1.02127rem 0 0.4255rem 4.0425rem;
      width: 14.1702rem;
      border-bottom: 1px solid #eaeaea;
    }
    .phone.bgImg{
      background-image: url("../../../static/images/login/icon_phone.png");
    }
    .code_bg button{
      @include wh(3.5rem,1.0212rem);
      @include sc(0.5106rem,#fff);
      background: $mc;
      border-radius: 0.1702rem;
    }
    .code.bgImg{
      background-image: url("../../../static/images/login/icon_code.png");
      width: 10.5958rem;
    }
    .password1.bgImg,.password2.bgImg{
      background-image: url("../../../static/images/login/icon_psd.png");
    }
    .invite.bgImg{
      background-image: url("../../../static/images/login/icon_invite.png");
    }
    .pwd_bg,.pwd2_bg{
      position: relative;
      i{
        position: absolute;
        height: 0.5957rem;
        width: 0.7659rem;
        background-size: contain;
        right: 0;
        top: 1.123rem;
      }
      i.close{
        background-image: url("../../../static/images/login/icon_off.png");
      }
      i.open{
        background-image: url("../../../static/images/login/icon_on.png");
      }
    }
    .reg_btn{
      width: 100%;
      font-weight: bold;
      margin: 1.7872rem 0 0.851rem;
      @include hh(1.7872rem,1.7872rem);
      @include sc(0.7659rem,#fffefe);
      background: $mc;
      border-radius: 8px;
    }
    .reg_btn.gray,.btn.gray{
      background: #ccc;
    }
    #myCheck + label{
      background-color: white;
      border-radius: 50%;
      border: 1px solid #d3d3d3;
      width:0.85rem;
      height: 0.85rem;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      line-height: 0.6rem;
    }
    #myCheck:checked + label{
      background-color: #52bb13;
    }
    #myCheck:checked + label:after{
      content:"\2713";
      color: #fff;
      font-size: 0.4rem;
    }
    .agree_div{
      height: 1.276rem;
      line-height: 0.98rem;
      margin-top: 0.48rem;
    }
    .agree{
      font-size: 0.5532rem;
      color: #999;
      margin-left:0.42rem;
    }
    .agree a{
      color: #37abe7;
    }
  }
</style>
