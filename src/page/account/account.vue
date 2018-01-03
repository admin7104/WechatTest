<template>
  <div class="account">
    <section class="account_info">
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
      <div class="wave_content">
        <div class="wave_contain">
          <div class="wave waveMiddle"></div>
        </div>
        <div class="wave_contain">
          <div class="wave waveBottom"></div>
        </div>
      </div>
    </section>
    <!--<section class="invest_info">

    </section>
    <section class="operation">

    </section>
    <section class="advertising">

    </section>-->
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
