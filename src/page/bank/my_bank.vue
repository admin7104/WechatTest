<template>
    <div>
      <head-top :head-title="profiletitle" is-back="true" @go-page="$router.go(-1)"></head-top>
      <div class="my_bank">
        <div class="bank_info bg100">
          <div class="top_text">
            <img class="left" src="../../../static/images/account/bank/gongshang.png">
            <span class="left">{{bankName}}</span><span class="left">（{{bankAddr}}）</span>
          </div>
          <div class="card_num">{{cardNum}}</div>
          <div class="limit_money">限额：单笔50000元，日累计500000元</div>
        </div>
        <p class="bank_desc">只能绑定一张储蓄卡<br>
          绑定后只能使用该卡进行投资和提现<br>
          若有疑问请联系客服400-1018-876</p>
      </div>
    </div>
</template>

<script>
import headTop from '@/components/header/head'
import {mapState, mapMutations} from 'vuex'
import {CardFormat} from '../../utils/mUtils'

export default {
    data(){
        return{
          profiletitle: '银行卡',
          cardNum:"6446621788887522947",
          bankName:"中国工商银行",
          bankAddr:"杭州高新支行"
        }
    },
    mounted(){
      this.$("#app")[0].style.backgroundColor = "#fff";
      this.cardNum = CardFormat(this.cardNum);
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
  .top_text{height: 50px;line-height: 50px;padding: 0 0.85rem;}
  .bank_info .top_text span{font-size: 0.64rem;}
  .bank_info .top_text span:nth-child(2){margin-left: 0.43rem}
  .bank_info .card_num{font-size: 1.02rem;margin: 0.64rem 0 1.06rem 0.4rem;text-align: center;font-weight: bold;}
  .limit_money{margin-left: 0.6rem;}
  .bank_desc{font-size: 0.55rem;  margin: 0 0.85rem;  color: #666;}
</style>
