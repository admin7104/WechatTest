<template>
  <div>
    <head-top :head-title="headTitle" is-back="true" @go-page="$router.go(-1)"></head-top>
    <div class="my_bank">
      <div class="bank_info bg100">
        <div class="top_text">
          <div class="left">
            <img :src="bankImg">
          </div>
          <span class="left">{{card.bankname}}</span>
          <!--<span class="left">（{{card.citycode}}）</span>-->
        </div>
        <div class="card_num">{{card.discardno}}</div>
        <div class="limit_money">限额：单笔{{card.onceLimit}}，日累计{{card.dayLimit}}</div>
      </div>
      <p class="bank_desc">智慧财神平台的投资人、借款人资金均由银行进行存管，实行分账管理。客户账户开通、交易密码设置与认证、投资与放款、还款结算、账户充值、提现等各类资金交易都通过银行资金存管系统（正在对接中）实现。客户资金交易明细和余额查询以银行账户查询为准。</p>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import {mapState, mapMutations} from 'vuex'
  import {CardFormat,getBankImg} from '@/config/mUtils'
  import {getBankCardList} from '@/service/getData'
  import {success} from '@/config/env'

  export default {
    data(){
      return{
        headTitle: '银行卡',
        card:{},
        bankImg:""
      }
    },
    created(){
      this.INIT_USERINFO();
    },
    mounted(){
      this.bankCardList();
      this.$('#app')[0].style.background = '#fff';
    },
    components:{
      headTop,
    },

    computed:{
      ...mapState([
        'userInfo',
      ]),
    },

    methods:{
      ...mapMutations([
        'INIT_USERINFO'
      ]),
      async bankCardList(){
        let data =  await getBankCardList(this.userInfo.sessionid);
        if(data.retcode == success)
        {
          this.card = data.cardlist[0];
          this.bankImg = getBankImg(this.card.shortname);
        }
      },
    },
    watch: {

    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../style/mixin';
  .my_bank{padding-top: 2.5rem;}
  .bg100{
    -webkit-background-size:100% 100%;
    background-size:100% 100%;}
  .bank_info{margin: 0 0.85rem 0.55rem;background-image: url("../../../static/images/bank/yinhangka@2x.png");height: 7.66rem;padding-top: 1.15rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;}
  .bank_info span,.bank_info div{color: $fc;font-size: 0.6rem;}
  .bank_info div.left{
    width: 2.5532rem;
    height: 2.5532rem;
    background: #fff;
    border-radius: 50%;
    text-align: center;
  }
  .top_text{
    height: 50px;
    line-height: 50px;
    padding: 0 0.85rem;
    img{
      width: 2.2532rem;height: 1.7896rem;
      margin-top: 0.3773rem;
    }
    span{
      font-size: 0.64rem;
    }
    span:nth-child(2){
      margin-left: 0.43rem;
    }
  }
  .bank_info .card_num{font-size: 1.02rem;margin: 0.64rem 0 1.06rem 0.4rem;text-align: center;font-weight: bold;}
  .limit_money{margin-left: 0.6rem;}
  .bank_desc{font-size: 0.55rem;  margin: 0 0.85rem;  color: #666;}
</style>
