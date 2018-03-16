<template>
  <div class="recharge_withdraw_page">
    <head-top :head-title="headTitle" is-back="true" @go-page="$router.go(-1)">
      <router-link slot="more" :to="{path: '/recharge_list'}" class="more">
        充值记录
      </router-link>
    </head-top>
    <vue-number-pwd :number="6" @validate="validate" v-show="isShow"></vue-number-pwd>
    <div class="withdraw_content">
      <div class="balance">
        <p class="text">账户余额(元)</p>
        <p class="money_value">{{my_account_obj?my_account_obj.available:0}}</p>
      </div>
      <div class="operation">
        <div class="info">
          <img class="bank_img" src="../../../static/images/account/bank/gongshang.png">
          <p class="bank_name">{{userInfo.bankname}}<br><span class="bank_num">尾号{{fourCard}}</span></p>
          <p class="desc">单笔限额<span>5万元</span><br>单日充值限额<span>50万元</span></p>
          <div class="clear"></div>
          <div class="intro">
            <div><p>姓名</p><p class="username">{{userInfo.realname}}</p></div>
            <div class="clear"></div>
            <div><p>手机号</p><p class="phone">{{phone}}</p></div>
            <input class="recharge_money" placeholder="请输入充值金额，2元起充" v-model="recharge_money">
          </div>
        </div>
        <div style="padding: 1.7rem 0.85rem 0.38rem;">
          <input type="button" class="recharge_btn" value="确认" @click="rechargeMoney()">
          <a class="forget_pwd">忘记交易密码？</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import {PhoneFormat,getStore,encrypt} from '@/config/mUtils'
  import {mapState,mapMutations} from 'vuex'
  import {rechargeFront} from '@/service/getData'
  import {MessageBox} from 'mint-ui'

  export default {
    data(){
      return{
        headTitle: '充值',
        phone:"",
        my_account_obj:[],
        recharge_money:'',
        password:'',
        fourCard:'',
        isShow: false,
        rechargeRes: null
      }
    },
    mounted(){
      this.phone = PhoneFormat(this.userInfo.mobile);
      this.my_account_obj = JSON.parse(getStore("my_account_obj"));
      this.fourCard = this.userInfo.discardid.substr(this.userInfo.discardid.length-4,this.userInfo.discardid.length);
      /*console.log(this.userInfo);
      console.log(this.my_account_obj);
      console.log(this.payAccount);*/
    },
    components:{
      headTop,
    },
    created(){
      this.INIT_USERINFO();
    },
    computed:{
      ...mapState([
        'userInfo','payAccount'
      ]),
    },
    methods: {
      ...mapMutations([
        'INIT_USERINFO'
      ]),
      async rechargeMoney(){
        this.recharge_money==''||this.recharge_money==0?MessageBox.alert("请输入有效金额"):this.isShow = true;;
      },
      async validate(pwd){
        this.rechargeRes =  await rechargeFront(this.userInfo.sessionid,this.recharge_money,encrypt(pwd));
        console.log(this.rechargeRes)
      }
    },
    watch: {

    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/recharge_withdraw.css";
</style>
