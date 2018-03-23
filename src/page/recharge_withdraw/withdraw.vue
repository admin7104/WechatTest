<template>
    <div class="recharge_withdraw_page">
      <head-top :head-title="headTitle" is-back="true" @go-page="$router.go(-1)"></head-top>
      <vue-number-pwd :number="6" @validate="validate" v-show="isShow"></vue-number-pwd>
      <div class="withdraw_content">
        <div class="balance">
          <p class="text">账户余额(元)</p>
          <p class="money_value">{{canWithdrawAmount}}</p>
        </div>
        <div class="operation">
          <div class="info">
            <img class="bank_img" src="../../../static/images/account/bank/gongshang.png">
            <p class="bank_name">中国工商银行<br><span class="bank_num">尾号8018</span></p>
            <div class="clear"></div>
            <div class="intro">
              <div><p>姓名</p><p class="username">{{withdrawViewInfo.realName}}</p></div>
              <div class="clear"></div>
              <div><p>手机号</p><p class="phone">{{phone}}</p></div>
              <input class="withdraw_money" placeholder="请输入提现金额，最低100元" v-model="withdraw_money">
            </div>
          </div>
          <div style="padding: 1.7rem 0.85rem 0.38rem;">
            <input type="button" class="withdraw_btn" value="确认" @click="withdrawMoney">
            <a class="forget_pwd">忘记交易密码？</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import headTop from '@/components/header/head'
import {PhoneFormat,encrypt,getBankImg} from '@/config/mUtils'
import {mapState,mapMutations} from 'vuex'
import {withdrawFrontPreview,withdrawFront,validWithdrawFeeMoney} from '@/service/getData'
import {MessageBox} from 'mint-ui'

export default {
    data(){
        return{
          headTitle: '提现',
          canWithdrawAmount: 0,
          phone: '',
          withdrawViewInfo: {},
          fourCard: '',
          bankImg: '',
          withdraw_money: '',
          isShow: false
        }
    },
    mounted(){
      this.withdrawView();
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
    methods:{
      ...mapMutations([
        'INIT_USERINFO'
      ]),
      async withdrawView(){
        var withdrawViewResult = await withdrawFrontPreview(this.userInfo.sessionid);
        if(withdrawViewResult.retcode=="00000000"){
          this.canWithdrawAmount = withdrawViewResult.rechargeInfo.available;
          this.withdrawViewInfo = withdrawViewResult.rechargeInfo;
          this.phone = PhoneFormat(withdrawViewResult.rechargeInfo.mobile);
          this.fourCard = withdrawViewResult.rechargeInfo.bankcardId.substr(withdrawViewResult.rechargeInfo.bankcardId.length-4,withdrawViewResult.rechargeInfo.bankcardId.length);
          this.bankImg = getBankImg(withdrawViewResult.rechargeInfo.bankShortName);
        }
        console.log(withdrawViewResult);
      },
      async valiad(){
        let validFeeMoney = await validWithdrawFeeMoney(this.userInfo.sessionid,this.withdraw_money);
        console.log(validFeeMoney);
      },
      withdrawMoney:function () {
        if(this.withdraw_money==''||this.withdraw_money==0){
          MessageBox.alert("请输入有效金额");
          return;
        }
        this.valiad();
        //this.isShow = true;
      },
      async validate(pwd){
        this.withdrawRes =  await withdrawFront(this.userInfo.sessionid,this.withdraw_money,encrypt(pwd));
        console.log(this.withdrawRes);
        if(this.withdrawRes.retcode=="00000000") this.isShow = false;
        else MessageBox.alert(this.withdrawRes.retmsg);
      }
    },
    watch: {

    }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/recharge_withdraw.css";
</style>
