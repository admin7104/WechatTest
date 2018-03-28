<template>
  <div class="invest_detail_page">
    <head-top :head-title="headTitle" is-back="true"></head-top>
    <div class="invest_block">
      <section class="top">
        <p><span class="left">历史年化收益率：</span><span class="right">{{project.rateBase}}%</span></p>
        <p><span class="left">锁定期：</span><span class="right">{{project.deadline}}{{project.deadlineType=='YEAR'?'年':project.deadlineType=='MONTH'?'个月':'天'}}</span></p>
        <p><span class="left">可投金额(元)：</span><span class="right">100000.00</span></p>
      </section>
      <div class="clear"></div>
      <section class="middle">
        <h4 class="invest_title">
          购买金额(元)
        </h4>
        <p class="text">{{project.pminInvest}}元起投，100的整数倍递增</p>
        <div class="invest_input">
          <span class="button" @click="changeMoney('minus')">-</span><input placeholder="请输入100的整数倍" class="input_value" maxlength="12" v-model="investAmount"><span class="button" @click="changeMoney('add')">+</span>
          <div class="left can_invest">
            可用金额(元)：{{my_account_obj.available}}
          </div>
          <mt-button class="btn_recharge right" @click="$router.push({path:'/recharge'})">充值</mt-button>
          <div class="benefit">
            预计收益：<span>{{interestVal}}</span>元
          </div>
          <div class="clear"></div>
        </div>
      </section>
    </div>
    <section class="coupon">
      <div class="mint-cell" v-if="investAmount==0||investAmount==''||investAmount==null" @click="nullAmount()">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">使用红包券</span>
          </div>
          <div class="mint-cell-value">
            <span data-v-d87ee770="" style="color: rgb(252, 92, 63); font-size: 0.6rem;">请选择</span>
          </div>
        </div>
        <div class="mint-cell-right">

        </div>
      </div>
      <div class="mint-cell" v-if="investAmount==0||investAmount==''||investAmount==null" @click="nullAmount()">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">使用加息券</span>
          </div>
          <div class="mint-cell-value">
            <span data-v-d87ee770="" style="color: rgb(252, 92, 63); font-size: 0.6rem;">请选择</span>
          </div>
        </div>
        <div class="mint-cell-right">

        </div>
      </div>
      <mt-cell v-if="investAmount!=0&&investAmount!=''&&investAmount!=null" title="使用红包券" is-link :to="{path:'/invest_coupon',query:{headTitle:'红包券',couponList:redCoupon,investAmount:investAmount,userRaiseId:userRaiseId,userGiftIds:userGiftIds,giftName1:giftName1,giftName2:giftName2,interestDays:interestDays}}">
        <span style="color: #fc5c3f;font-size: 0.6rem;">{{giftName1==''?'请选择':giftName1+'元红包'}}</span>
      </mt-cell>
      <mt-cell v-if="investAmount!=0&&investAmount!=''&&investAmount!=null" title="使用加息券" is-link :to="{path:'/invest_coupon',query:{headTitle:'加息券',couponList:extraCoupon,investAmount:investAmount,userRaiseId:userRaiseId,userGiftIds:userGiftIds,giftName1:giftName1,giftName2:giftName2,interestDays:interestDays}}">
        <span style="color: #fc5c3f;font-size: 0.6rem;">{{giftName2==''?'请选择':'+'+giftName2+'%加息券'}}</span>
      </mt-cell>
      <div class="agree_div">
        <input @click="ifChecked=!ifChecked" type="checkbox" v-show="false" id="myCheck"><label class="left" for="myCheck"></label>
        <p class="agree left">我已同意并同意<router-link :to="{path: '/link',query:{url:'http://47.96.144.99:8080/appnew/'+project.JCXYUrl+'&sessionId='+userInfo.sessionid}}">《智慧财神服务协议》</router-link></p>
      </div>
    </section>
    <vue-number-pwd :number="6" @validate="validate" v-show="isShow"></vue-number-pwd>
    <mt-button size="large" :class = "ifChecked==false?'btn_invest gray':'btn_invest'" @click="investLoan()" v-show="!isShow">立即支付</mt-button>
  </div>
</template>

<script>
  import headTop from 'src/components/header/head'
  import password from 'src/components/common/password'
  import {mapState, mapMutations} from 'vuex'
  import {imgBaseUrl} from 'src/config/env'
  import {getImgPath} from 'src/components/common/mixin'
  import {investLoan,myCoupon} from 'src/service/getData'
  import {encrypt,getStore} from '../../../config/mUtils'
  import {MessageBox} from 'mint-ui'

  export default {
    data(){
      return{
        headTitle: '购买支付',
        progressVisible: false,
        investAmount:'10000',
        tradePasswordStr:'',
        project:{},
        interestVal:0,
        extraInterestVal:0,
        ifChecked:false,
        redCoupon:{},
        extraCoupon:{},
        userRaiseId:'',
        userGiftIds:'',
        giftName1:'',
        giftName2:'',
        interestDays:'',
        my_account_obj:{},
        isShow: false,
      }
    },
    mounted(){
      let project = JSON.parse(getStore("pdv"));
      this.my_account_obj = JSON.parse(getStore("my_account_obj"));

      this.project = project;
      if(this.$route.query.investAmount!=undefined){
        this.investAmount = this.$route.query.investAmount;
      }
      if(this.$route.query.userRaiseId!=undefined){
        this.userRaiseId = this.$route.query.userRaiseId;
      }
      if(this.$route.query.userGiftIds!=undefined){
        this.userGiftIds = this.$route.query.userGiftIds;
      }
      if(this.$route.query.giftName1!=undefined){
        this.giftName1 = this.$route.query.giftName1;
      }
      if(this.$route.query.giftName2!=undefined){
        this.giftName2 = this.$route.query.giftName2;
      }
      if(this.$route.query.interestDays!=undefined){
        this.interestDays = this.$route.query.interestDays;
      }
      this.initPage();
      this.computeInterestVal(project,this.investAmount,this.extraInterestVal);
      this.redCouponList(this.investAmount);
      this.extraCouponList(this.investAmount);
    },
    mixins: [getImgPath],
    components:{
      headTop,
      password
    },

    computed:{
      ...mapState([
        'userInfo',
        'login'
      ]),
    },

    created(){
      this.INIT_USERINFO();
    },
    methods:{
      ...mapMutations([
        'INIT_USERINFO'
      ]),
      nullAmount(){
        MessageBox.alert("请输入有效金额");
      },
      async investLoan(){
        if(this.ifChecked==false){
          MessageBox.alert("请勾选服务协议");
          return;
        }
        if(this.investAmount==''||this.investAmount==0){
          this.nullAmount();
          return;
        }
        this.isShow = true;
      },
      async validate(pwd){
        let investAmount = this.investAmount,
          tradePasswordStr=encrypt(pwd);
        this.userGiftIds = this.$route.query.userGiftIds;
        this.userRaiseId = this.$route.query.userRaiseId;
        let result = await investLoan(this.userInfo.sessionid,1,investAmount,this.project.projectId,tradePasswordStr,this.userGiftIds,this.userRaiseId);
        if(result.retcode!="00000000"){
          MessageBox.alert(result.retmsg)
        }else{
          this.$router.push({path: '/success_infos',query:{type:4}})
        }
      },
      initPage(){
        if(this.$route.query.giftName2!=undefined){
          this.userGiftIds = this.$route.query.userGiftIds;
          this.giftName2 = this.$route.query.giftName2;
        }
        if(this.$route.query.giftName1!=undefined){
          this.userRaiseId = this.$route.query.userRaiseId;
          this.giftName1 = this.$route.query.giftName1;
        }
      },
      changeMoney(type){
        this.investAmount==''?this.investAmount = 0:'';
        type=='add'?this.investAmount=parseInt(this.investAmount)+100:this.investAmount>=100?this.investAmount-=100:'';
      },
      async redCouponList(val){
        var redCouponresult = await myCoupon(this.userInfo.sessionid,1,0,10,0,val,this.project.projectId,this.$route.query.pTypeId);
        redCouponresult.retcode=='00000000'?this.redCoupon = redCouponresult:MessageBox.alert(redCouponresult.retmsg);
        var redget = false;
        if(this.userGiftIds!=''){
          for(var i = 0;i < redCouponresult.list.length;i++){
            if(this.userGiftIds == redCouponresult.list[i].userGiftId){
              redget = true;
            }
          }
          if(redget == true) return;
          else{
            this.giftName1 = '';
            this.userGiftIds = '';
          }
        }
      },
      async extraCouponList(val){
        var extraCouponresult = await myCoupon(this.userInfo.sessionid,1,2,10,0,val,this.project.projectId,this.$route.query.pTypeId);
        extraCouponresult.retcode=='00000000'?this.extraCoupon = extraCouponresult:MessageBox.alert(extraCouponresult.retmsg);
        var extraget = false;
        if(this.userRaiseId!=''){
          for(var i = 0;i < extraCouponresult.list.length;i++){
            if(this.userRaiseId == extraCouponresult.list[i].userGiftId){
              extraget = true;
            }
          }
          if(extraget == true) return;
          else{
            this.giftName2 = '';
            this.userRaiseId = '';
            this.interestDays = 0;
          }
        }
      },
      computeInterestVal(project,val,extraval){
        let deadline_f = project.deadline,
          expectedReturn_f = 0,
          jiaxiReturn_f = 0,
          jiaxiDay_f = 0,
          monthRate = parseFloat(project.rateBase)+parseFloat(project.rateAppend),
          jiaxiCurRate = project.rateAppend;

        if(this.$route.query.interestDays!=undefined)
          jiaxiDay_f = this.$route.query.interestDays;
        if (project.repayWay=="3") {
          //等额本息 每月还款金额=（借款本金*月利率*（1+月利率)^还款期数）/（(1+月利率)^还款期数-1）
          //总利息=每月还款金额*还款月数-借款本金
          let monthNeedMoney = (val * monthRate * Math.pow(1+monthRate, deadline_f)) / (Math.pow(1+monthRate, deadline_f) - 1);
          expectedReturn_f = monthNeedMoney * deadline_f - val;
          //加息>0 执行
          jiaxiReturn_f = val * this.giftName2 / 100.0 / 12 * jiaxiDay_f / 30;
          expectedReturn_f = expectedReturn_f + jiaxiReturn_f;
        }else if (project.repayWay=="4") {
          //等额本金 每月还款金额=借款本金/还款月数+（本金-已归还本金累计额）*每月利率
          expectedReturn_f = val * monthRate * (deadline_f + 1) / 2.0;
          //加息>0 执行
          jiaxiReturn_f = investAmount_f * jiaxiCurRate / 100.0 / 12 * jiaxiDay_f / 30;
          expectedReturn_f = expectedReturn_f + jiaxiReturn_f;
        }else {
          if (project.deadlineType=="DAY") {
            expectedReturn_f = val * monthRate / 100.0 * deadline_f / 360.0;
            jiaxiReturn_f = val * jiaxiCurRate / 100.0 * jiaxiDay_f / 360.0;
            expectedReturn_f = expectedReturn_f + jiaxiReturn_f;
          }else if (project.deadlineType=="MONTH"){
            expectedReturn_f = val * monthRate / 100.0 * deadline_f / 12;
            jiaxiReturn_f = val * jiaxiCurRate / 100.0 / 12 * jiaxiDay_f / 30;
            expectedReturn_f = expectedReturn_f + jiaxiReturn_f;
          }else if (project.deadlineType=="YEAR") {
            expectedReturn_f = val * monthRate / 100.0 * deadline_f;
            jiaxiReturn_f = val * jiaxiCurRate / 100.0 * jiaxiDay_f / 360.0;
            expectedReturn_f = expectedReturn_f + jiaxiReturn_f;
          }
        }
        this.interestVal = (parseFloat(expectedReturn_f.toFixed(2))+parseFloat(extraval)).toFixed(2);
      }
    },
    watch: {
      investAmount(val,val2){
        this.redCouponList(val);
        this.extraCouponList(val);
        let project = this.project;
        this.computeInterestVal(project,this.investAmount,this.extraInterestVal);
      },
      giftName2(val,val2){
        let project = this.project;
        this.extraInterestVal = this.investAmount*val/100/360*this.interestDays;
        this.computeInterestVal(project,this.investAmount,this.extraInterestVal);
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../../style/mixin';
  .invest_block{
    padding-top: 2rem;
    .invest_title {
      @include sc(0.625rem,#333);
      background: #fff;padding-left: 0.5rem;
      padding-top: 0.4rem;
    }
    .invest_input {
      position: relative;
      padding: 0 0.5rem;
      @include sc(0.58rem,#999);
      background: $fc;
      .input_value {
        width: 64%;
        margin: 0 8.6%;
        height: 1.4rem;
        border-bottom: 1px solid #e4e4e4;
        text-align: center;
        font-size: 0.725rem;
        color: #fc5c3f;
      }
      .can_invest {
        text-align: left;
       @include hh(2rem,2rem);
      }
      .benefit {
        background-image: url("../../../images/invest/earnimg@2x.png");
        background-size: 100% 100%;
        position: absolute;
        text-align: center;
        top: -1.26rem;
        right: 1.21rem;
        @include sc(0.382rem,$fc);
        width: 5.6rem;
        height: 0.92rem;
        span{color: $fc;}
      }
      span.button{
        font-size: 0.8rem;
        width: 1.4rem;
        height: 1.4rem;
        line-height: 1.2rem;
        background: #fff;
        border: 1px solid #eee;
        display: inline-block;
        text-align: center;
      }
    }
    .top,.middle{margin-bottom: 0.538rem;background: $fc;}
    .top{
      p{
        @include hh(1.464rem,1.464rem)
        font-size: 0.625rem;
        padding: 0 0.425rem;
        span{
          color: #8b8b8b;
          line-height: 1.464rem;
        }
      }
    }
    .middle{
      .text{
        @include sc(0.538rem,#8d8d8d);
        padding-left: 0.5rem;
        margin-bottom: 0.832rem;
      }
    }
    .btn_recharge {
      border-radius: 4px;
      color: #fc5c3f;
      height: 1.2rem;
      margin-top: 0.4rem;
      margin-right: 0.5rem;
      border: 1px solid;
    }
  }
  .coupon {
    p{
      @include sc(0.68rem,#999);
      margin-left: 0.5rem;
      span{
          color: #f65958;
      }
    }
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
    padding-left: 0.51rem;
    margin-top: 0.48rem;
  }
  .agree{
    font-size: 0.6rem;
    color: #999;
    margin-left:0.42rem;
  }
  .agree a{
    color: #37abe7;
  }
  .btn_invest {
    position: fixed;
    width: 100%;
    background: #fc5c3f;
    color: #fff;
    bottom: 0;
    border-radius: 0;
  }
  .btn_invest.gray {background: #cdcdcd;}
</style>
