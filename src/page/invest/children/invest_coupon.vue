<template>
  <div>
    <head-top :head-title="headTitle" is-back="true"></head-top>
    <div class="list_content">
      <div class="coupon_list">
        <ul>
          <li v-if="couponItem.isUsed==0" :class="couponItem.giftType==0?'red_envelopes':'increase_interest'" v-for="couponItem in couponList" @click="selectCoupon(couponItem)">
            <div class="left"><p class="money" v-if="couponItem.raisePercent">+{{couponItem.raisePercent}}%</p><p v-if="couponItem.raisePercent">加息券</p>
              <p v-if="couponItem.giftValue">{{couponItem.giftValue}}元</p><p v-if="couponItem.giftValue">红包券</p></div>
            <div class="right" v-if="red==false">
              <p class="title">{{couponItem.giftName}}</p>
              <p class="use_project">可用产品：{{couponItem.minOpenMonthsStr}}</p>
              <p>加息时间：加息{{couponItem.interestDays}}天</p>
              <p class="use_rule">使用规则：{{couponItem.useRule}}</p>
              <p class="use_tile">使用期限至{{couponItem.validTimeEnd}}</p>
            </div>
            <div class="right" v-if="red==true">
              <p class="title">{{couponItem.giftName}}</p>
              <p class="use_project">可用产品：{{couponItem.minOpenMonthsStr}}</p>
              <p class="use_rule">使用规则：投资{{couponItem.minInvest}}元及以上</p>
              <p class="use_tile">使用期限至{{couponItem.validTimeEnd}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from 'src/components/header/head'
  export default {
    data: function () {
      return {
        headTitle: "",
        couponList:{},
        red: true,
        userGiftIds:'',
        userRaiseId:'',
        giftName1:'',
        giftName2:'',
        interestDays:''
      }
    },
    components:{
      headTop
    },
    mounted(){
        this.headTitle = this.$route.query.headTitle;
        this.$route.query.headTitle=='红包券'?this.red=true:this.red=false;
        this.couponList = this.$route.query.couponList.list;
        this.$route.query.userGiftIds!=''?this.userGiftIds = this.$route.query.userGiftIds:'';
        this.$route.query.userRaiseId!=''?this.userRaiseId = this.$route.query.userRaiseId:'';
        this.$route.query.giftName1!=''?this.giftName1 = this.$route.query.giftName1:'';
        this.$route.query.giftName2!=''?this.giftName2 = this.$route.query.giftName2:'';
        this.$route.query.interestDays!=''?this.interestDays = this.$route.query.interestDays:'';
    },
    methods:{
      selectCoupon(couponItem){
         var investAmount = this.$route.query.investAmount;

          if(this.headTitle=="红包券"){
            this.$router.push({path:'/invest_sure',query:{
              "userGiftIds":this.userGiftIds!=''&&this.userGiftIds==couponItem.userGiftId?this.userGiftIds:couponItem.userGiftId,
              "giftName1":this.giftName1!=''&&this.giftName1==couponItem.giftValue?this.giftName1:couponItem.giftValue,
              "giftName2":this.giftName2,
              "interestDays":this.interestDays,
              "investAmount":investAmount,
              "userRaiseId":this.userRaiseId}});
          }
          else{
            this.$router.push({path:'/invest_sure',query:{
              "userRaiseId":this.userRaiseId!=''&&this.userRaiseId==couponItem.userGiftId?this.userRaiseId:couponItem.userGiftId,
              "giftName1":this.giftName1,
              "giftName2":this.giftName2!=''&&this.giftName2==couponItem.raisePercent?this.giftName2:couponItem.raisePercent,
              "interestDays":this.interestDays!=''&&this.interestDays==couponItem.interestDays?this.interestDays:couponItem.interestDays,
              "investAmount":investAmount,
              "userGiftIds":this.userGiftIds}});
          }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .list_content{
    padding-top: 1.95rem;
    padding-bottom: 2rem;
  .nav_tab{
    padding: 0.4255rem 0;
    height: 2.17rem;
    border-radius: 4px;
    position: fixed;
    top: 1.95rem;
    width: 100%;
    z-index: 2;
    background: #f1f1f1;
  button{
    height: 100%;
    box-shadow: none;
  @include sc(0.5106rem,$mainColor);
    border: 2px solid $mainColor;
    border-radius: 0;
  }
  button:nth-child(2),button:nth-child(3){
    margin-left: -2px;
  }
  button:nth-child(1){
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  button:nth-child(3){
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  button.current{
    background: $mainColor;
    color: #fff;
  }
  }
  .coupon_list{
    margin-top: 0.95rem;
  li{
    position: relative;
    background-size: 100% 100%;
    margin: 0.4255rem auto 0;
    width: 15.106rem;
    height: 4.468rem;
  .left{
    padding: 1.2rem 0;
    text-align: center;
    width: 5.12rem;
  p{
  @include sc(0.6805rem,$fc);
  }
  .money{
    font-size: 1.0638rem;
  }
  }
  .right{
    margin: 0.6383rem 0.6383rem 0 0;
    width: 8.832rem;
  p{
    text-align: left;
  @include sc(0.3106rem,#666);
    margin-top: 0.02rem;
  }
  .title{
    font-size: 0.5957rem;
    margin-top: 0;
    margin-bottom: 0.1127rem;
  }
  .title.big{
    font-size: 0.835rem;
  }
  .title.mb20{
    margin-bottom: 0.4127rem;
  }
  }
  }
  li.red_envelopes{
    background-image: url("../../../../static/images/account/coupon/bg_1.png");
  }
  li.increase_interest{
    background-image: url("../../../../static/images/account/coupon/bg_2.png");
  }
  }
  }
</style>
