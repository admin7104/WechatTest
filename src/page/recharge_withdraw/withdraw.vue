<template>
    <div class="recharge_withdraw_page">
      <head-top :head-title="profiletitle" is-back="true"></head-top>
      <div class="withdraw_content">
        <div class="balance">
          <p class="text">账户余额(元)</p>
          <p class="money_value">0.00</p>
        </div>
        <div class="operation">
          <div class="info">
            <img class="bank_img" src="../../../static/images/account/bank/gongshang.png">
            <p class="bank_name">中国工商银行<br><span class="bank_num">尾号8018</span></p>
            <div class="clear"></div>
            <div class="intro">
              <div><p>姓名</p><p class="username">王二</p></div>
              <div class="clear"></div>
              <div><p>手机号</p><p class="phone">{{phone}}</p></div>
              <input class="withdraw_money" placeholder="请输入提现金额，最低100元">
            </div>
          </div>
          <input type="button" class="withdraw_btn" value="确认">
          <a class="forget_pwd">忘记交易密码？</a>
        </div>
      </div>
    </div>
</template>

<script>
import headTop from '@/components/header/head'
import {mapState, mapMutations} from 'vuex'
import {PhoneFormat} from '../../utils/mUtils'

export default {
    data(){
        return{
          profiletitle: '提现',
          phone:"15158866411"
        }
    },
    mounted(){
      /*手机号格式化*/
      this.phone = PhoneFormat(this.phone);
    },
    components:{
        headTop,
    },

    computed:{

    },

    methods:{

    },
    watch: {

    }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/recharge_withdraw.css";
</style>
