<template>
  <div>
    <head-top :head-title="headTitle" isBack="true" @go-page="$router.go(-1)"></head-top>
    <div class="list_content">
      <mt-navbar v-model="selected" class="nav_tab">
        <mt-button :class="selected=='invest_list1'?'current col-4':' col-4'" @click.native.prevent="changeType('invest_list1')">红包券</mt-button>
        <mt-button :class="selected=='invest_list2'?'current col-4':' col-4'" @click.native.prevent="changeType('invest_list2')">加息券</mt-button>
        <mt-button :class="selected=='invest_list3'?'current col-4':' col-4'" @click.native.prevent="changeType('invest_list3')">现金券</mt-button>
      </mt-navbar>
      <div class="coupon_list">
        <mt-tab-container v-model="selected" swipeable>
          <mt-tab-container-item id="invest_list1" v-show="selected=='invest_list1'">
            <ul  v-infinite-scroll="loadMore"
                 infinite-scroll-disabled="loading"
                 infinite-scroll-distance="10">
              <li :class="couponItem.isUsed==0?'red_envelopes':couponItem.isUsed==1?'red_envelopes used':'red_envelopes overdue'" v-for="couponItem in my_couponList">
                <div class="left"><p class="money">{{couponItem.giftValue}}元</p><p>红包券</p></div>
                <div class="right">
                  <p class="title big">{{couponItem.giftName}}</p>
                  <p class="use_project">可用产品：{{couponItem.minOpenMonthsStr}}</p>
                  <p class="use_rule">使用规则：投资满{{couponItem.minInvest}}元以上</p>
                  <p class="use_tile">使用期限至{{couponItem.validTimeEnd}}</p>
                </div>
                <img v-if="couponItem.isUsed!=0" :src="couponItem.isUsed==1||couponItem.isUsed==2||couponItem.isUsed==3?usedImg:overdueImg">
              </li>
            </ul>
            <p v-show="loading&&loadingShow" class="page-infinite-loading">
              <mt-spinner type="fading-circle"></mt-spinner>
              <!--加载中...-->
            </p>
          </mt-tab-container-item>
          <mt-tab-container-item id="invest_list2" v-show="selected=='invest_list2'">
            <ul  v-infinite-scroll="loadMore"
                 infinite-scroll-disabled="loading"
                 infinite-scroll-distance="10">
              <li :class="couponItem.isUsed==0?'increase_interest':couponItem.isUsed==1?'increase_interest used':'increase_interest overdue'" v-for="couponItem in my_couponList">
                <div class="left"><p class="money">+{{couponItem.raisePercent}}%</p><p>加息券</p></div>
                <div class="right">
                  <p class="title">{{couponItem.giftName}}</p>
                  <p class="use_project">可用产品：{{couponItem.minOpenMonthsStr}}</p>
                  <p>加息时间：加息{{couponItem.interestDays}}天</p>
                  <p class="use_rule">使用规则：{{couponItem.useRule}}</p>
                  <p class="use_tile">使用期限至{{couponItem.validTimeEnd}}</p>
                </div>
                <img v-if="couponItem.isUsed!=0" :src="couponItem.isUsed==1||couponItem.isUsed==2||couponItem.isUsed==3?usedImg:overdueImg">
              </li>
            </ul>
            <p v-show="loading&&loadingShow" class="page-infinite-loading">
              <mt-spinner type="fading-circle"></mt-spinner>
              <!--加载中...-->
            </p>
          </mt-tab-container-item>
          <mt-tab-container-item id="invest_list3" v-show="selected=='invest_list3'">
            <ul  v-infinite-scroll="loadMore"
                 infinite-scroll-disabled="loading"
                 infinite-scroll-distance="10">
              <li class="cash" v-for="couponItem in my_couponList">
                <div class="left"><p class="money">{{couponItem.giftValue}}元</p><p>现金券</p></div>
                <div class="right">
                  <p class="title mb20">{{couponItem.giftName}}</p>
                  <p class="use_project">奖励类型：{{couponItem.gainType}}</p>
                  <p class="use_rule">到账时间：{{couponItem.createTime}}</p>
                  <p class="use_tile">说明：{{couponItem.useRule}}</p>
                </div>
              </li>
            </ul>
            <p v-show="loading&&loadingShow" class="page-infinite-loading">
              <mt-spinner type="fading-circle"></mt-spinner>
              <!--加载中...-->
            </p>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import {mapState, mapMutations} from 'vuex'
  import {myCoupon} from '@/service/getData'
  import {success} from '@/config/env'
  export default {
    data: function () {
      return {
        headTitle: "理财券",
        selected: 'invest_list1',
        usedImg: require('../../../../static/images/account/coupon/used.png'),
        overdueImg: require('../../../../static/images/account/coupon/overdue.png'),
        my_coupon:[],
        my_couponList:[],
        page:2,
        loading: false,
        loadingShow: true,
        match:['invest_list1','invest_list3','invest_list2'],
        timer:''
      }
    },
    created(){
      this.INIT_USERINFO();
    },
    mounted(){
      this.$('body')[0].style.background = "#f1f1f1";
      this.coupon(1,0);
    },
    components:{
      headTop
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
      changeType(selected){
        this.selected = selected;
      },
      async coupon(page,giftType){
        this.my_coupon =  await myCoupon(this.userInfo.sessionid,page,giftType,10);
        if(this.my_coupon.retcode == success)
        {
          let length = this.my_coupon.list.length;
          if(length>0){
            for(var i = 0;i<length;i++){
              this.my_couponList.push(this.my_coupon.list[i]);
            }
          }else{
            this.loadingShow = false;
          }
        }
      },
      loadMore() {
        this.loading = true;
        this.page++;
        this.timer = setTimeout(() => {
          this.selected == "invest_list1"?this.coupon(this.page,0):this.selected == "invest_list2"?this.coupon(this.page,2):this.selected == "invest_list3"?this.coupon(this.page,1):'';
          this.loading = false;
        }, 1500);
      }
    },
    watch: {
      selected:function () {
        this.page = 2;
        this.loadingShow = true;
        this.my_couponList = [];
        if(this.selected == "invest_list1")
        {
          this.coupon(1,0);
        }
        else if(this.selected == "invest_list2")
        {
          this.coupon(1,2);
        }
        else if(this.selected == "invest_list3")
        {
          this.coupon(1,1);
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin';
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
      margin-top: 2.17rem;
      li{
        position: relative;
        background-size: 100% 100%;
        margin: 0.4255rem auto 0;
        width: 15.106rem;
        height: 4.468rem;
        >img{
          position: absolute;
          width: 3.106rem;
          height: 2.957rem;
          right: 0;
          top: 0.2rem;
        }
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
      li.red_envelopes.used,li.red_envelopes.overdue{
        background-image: url("../../../../static/images/account/coupon/bg_1_disable.png");
      }
      li.increase_interest{
        background-image: url("../../../../static/images/account/coupon/bg_2.png");
      }
      li.increase_interest.used,li.increase_interest.overdue{
        background-image: url("../../../../static/images/account/coupon/bg_2_disable.png");
      }
      li.cash{
        background-image: url("../../../../static/images/account/coupon/bg_3.png");
      }
    }
  }
</style>
