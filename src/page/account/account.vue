<template>
  <div class="account">
    <section class="account_info">
      <div class="wave_content">
        <div class="wave_contain">
          <div class="wave waveMiddle"></div>
        </div>
        <div class="wave_contain">
          <div class="wave waveBottom"></div>
        </div>
      </div>
      <div class="head">
        <div class="col-2 head_icon">
          <router-link :to="{path: '/account_infos'}" >
            <img src="../../../static/images/account/head_icon.png"/>
          </router-link>
        </div>
        <div class="col-8">13788886688</div>
        <div class="col-2 mail_icon"><img src="../../../static/images/account/mail_icon.png"/></div>
        <div class="clear"></div>
      </div>
      <p class="total_title mt">总资产(元)</p>
      <p class="total_value">30000.00</p>
      <div class="money_detail">
        <div class="col-6">
          <p class="total_value">0.00</p>
          <p class="total_title">账户余额(元)</p>
        </div>
        <div class="col-6">
          <p class="total_value">500.00</p>
          <p class="total_title">累计收益(元)</p>
        </div>
      </div>
      <img class="ope_btn" src="../../../static/images/account/bottom_bg.png">
      <div class="btn_bg">
          <router-link class="col-6" :to="{path: '/recharge'}" >
            充值
          </router-link>
          <router-link class="col-6" :to="{path: '/withdraw'}" >
            提现
          </router-link>
      </div>
    </section>
    <section class="invest_info">
      <router-link :to="{path:'/invest_list'}">
        <div class="white_bg">
          <div class="title">
            <img src="../../../static/images/account/title_img.png" class="left"><span class="left">我的投资</span>
            <span class="right">详情<img src="../../../static/images/account/arrow.png" class="right"></span>
          </div>
          <div class="type_btn">
            <div class="col-4">筹集中(<span>0</span>)</div>
            <div class="col-4">投资中(<span>1</span>)</div>
            <div class="col-4">已结清(<span>5</span>)</div>
          </div>
        </div>
      </router-link>
    </section>
    <section class="operation">
      <div class="white_bg">
        <ul>
          <router-link :to="{path: '/capital_details'}" class="col-4">
            <li><img src="../../../static/images/account/icon_1.png"><p>资金流水</p></li>
          </router-link>
          <router-link :to="{path: '/financial_coupon'}" class="col-4">
            <li><img src="../../../static/images/account/icon_2.png"><p>理财券</p></li>
          </router-link>
          <router-link :to="{path: '/activity'}" class="col-4">
            <li><img src="../../../static/images/account/icon_3.png"><p>精彩活动</p></li>
          </router-link>
          <router-link :to="{path: '/login'}" class="col-4">
            <li><img src="../../../static/images/account/icon_4.png"><p>风险测评</p></li>
          </router-link>
          <router-link :to="{path: '/register'}" class="col-4">
            <li><img src="../../../static/images/account/icon_5.png"><p>推荐有礼</p></li>
          </router-link>
          <router-link :to="{path: '/recharge'}" class="col-4">
            <li><img src="../../../static/images/account/icon_6.png"><p>智能投资</p></li>
          </router-link>
        </ul>
      </div>
    </section>
    <section class="advertising">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <router-link :to="{path: '/recharge'}">
            <img src="../../../static/images/account/banner.png">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link :to="{path: '/recharge'}">
            <img src="../../../static/images/account/banner.png">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link :to="{path: '/recharge'}">
            <img src="../../../static/images/account/banner.png">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
  import footerGuide from '@/components/footer/footerGuide'
  export default {
    data: function () {
      return {
          headTitle: "我的账户"
      }
    },
    components:{
      footerGuide
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .account{
    background: #f6f6f6;
  }
  .account_info{
    position: relative;
    height: 9.8723rem;
    background: url("../../../static/images/account/top_bg.png");
    .head{
      height: 2.2rem;
      padding-top: 0.5rem;
      .head_icon{
        padding-right: 0;
      }
      .head_icon img{
        @include wh(1.7447rem,1.7447rem);
        display: block;
      }
      .col-8{
        padding-left: 0;
        color: $fc;
        font-size: 0.5957rem;
        @include hh(1.7447rem,1.7447rem);
      }
      .mail_icon img{
        width: 0.936rem;
      }
    }
    p{text-align: center;}
    .total_title{
      font-size: 0.51rem;
      color: #ffcac1;
    }
    .total_value{
      font-size: 1.0638rem;
      color: $fc;
    }
    .total_title.mt,.money_detail{
      margin-top: 0.851rem;
    }
    .wave_content{
      position: absolute;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      height: 100%;
    }
    .wave_contain{
      position: absolute;
      height: 2.5531rem;
      width: 100%;
      bottom: 0;
    }
    .wave{
      width: 200%;
      height: 100%;
      position: absolute;
      bottom: 0;
      background-repeat: repeat no-repeat;
      background-position: 0 bottom;
      transform-origin: center bottom;
    }
    .waveMiddle{
      background: url("../../../static/images/account/wave_1.png");
      animation: move_wave 5s linear infinite;
    }
    .waveBottom{
      background: url("../../../static/images/account/wave_2.png");
      animation: move_wave 8s linear infinite;
    }
    .ope_btn{
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 1.0638rem;
    }
    .btn_bg{
      width: 7.680rem;
      height: 1.8085rem;
      margin: auto;
      position: absolute;
      bottom: -0.95rem;
      left: 0;
      right: 0;
      background-image: url("../../../static/images/account/btn_recharge_withdraw.png");
      background-size: 100% 100%;
      line-height: 1.805rem;
      text-align: center;
      font-size: 0.836rem;
      a{
        color: #fe5435;
      }
    }
  }
  .invest_info,.operation,.advertising{padding: 0.4255rem 0.5532rem 0;}
  .white_bg{
    background: $fc;
    border-radius: 0.22rem;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.1);
    .title{
      margin-top: 1rem;
      height: 1.7872rem;
      line-height: 1.7872rem;
      padding: 0 0.5106rem;
      border-bottom: 1px solid #e6e6e6;
    }
    .title img.left{
      @include wh(0.7659rem,0.7659rem);
      margin-top: 0.46rem;
      margin-right: 0.2553rem;
    }
    .title img.right{
      width: 0.3829rem;
      margin-top: 0.48rem;
      margin-left: 0.3404rem;
    }
    .title span{
      font-size: 0.5957rem;
    }
    .title span.right{
      color: #999;
    }
    .type_btn{
      font-size: 0.5957rem;
      height: 3.0638rem;
      padding: 0.9361rem 0;
      text-align: center;
      .col-4{
        border-right: 1px solid #e6e6e6;
      }
      .col-4:last-child{
        border-right: none;
      }
      span{
        color: $mc;
      }
    }
  }
  .operation{
    .white_bg{
      height: 7.7446rem;
      padding-top: 1.0638rem;
      text-align: center;
      img{
        width: 1.2978rem;
      }
      p{
        font-size:0.5532rem;
      }
      a{
        border-right: 1px solid #e6e6e6;
      }
      a:nth-child(3n){
        border-right: none;
      }
      ul a:nth-child(4),ul a:nth-child(5),ul a:nth-child(6){
        margin-top: 1.0638rem;
      }
    }
  }
  .advertising{
    height: 4.0425rem;
    margin-bottom: 2.85rem;
    img{
      width: 100%;
    }
    a{
      width: 100%;
      height: 100%;
      display: inherit;
    }
  }

  @keyframes move_wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
      transform: translateX(0%) translateZ(0) scaleY(1)
    }
  }
</style>
