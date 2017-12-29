<template>
  <div>
    <!--<head-top :head-title="headTitle" :is-back="true"></head-top>-->
    <header class="header_top">
      <section class="head_goback left" @click="$router.go(-1)">
        <img src="../../../static/images/tabBar/back_normal@2x.png">
      </section>
      <h1 class="header-title" v-if="headTitle">{{headTitle}}</h1>
    </header>
    <div class="project-swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="project_info">
            <div class="info_top block">
              <p class="project_title">财神票据A期甲子号</p>
              <p class="project_interest">12.08%<span class="extra_interest">+3.00%</span></p>
              <p class="text">预期年化收益率</p>
            </div>
            <section class="invest_p">
              <ul>
                <li>
                  <p class="text">项目总额</p>
                  <p>200,000.00</p>
                </li>
                <li>
                  <p class="text">投资期限</p>
                  <p>30天</p>
                </li>
                <li>
                  <p class="text">起投金额</p>
                  <p>100元</p>
                </li>
              </ul>
              <div class="project_progress">
                <div class="progress_bg"></div>
                <div class="progress_value" :style="'width: '+progress_value+'%;'"></div>
              </div>
              <p class="text"><span class="left">已投{{progress_value}}%</span><span class="right">剩余可投<i>100,000.00</i>元</span></p>
            </section>
            <section class="project_intro">
              <h4>项目介绍</h4>
              <div class="intro_content">
                <ul>
                  <li><p>产品发布</p></li>
                  <li><p>预计起息</p></li>
                  <li><p>预计到期</p></li>
                </ul>
                <ul class="progress_values">
                  <li>
                    <i class="circle circle_sel"></i>
                  </li>
                  <li>
                    <i class="circle "></i>
                  </li>
                  <li>
                    <i class="circle"></i>
                  </li>
                </ul>
                <ul>
                  <li><p>2017年12月29号</p></li>
                  <li><p>2017年12月29号</p></li>
                  <li><p>2017年12月29号</p></li>
                </ul>
                <div class="step_progress">
                  <div class="step step_active"></div>
                  <div class="step"></div>
                </div>
              </div>
              <p class="desc">
                财神票据是智慧财神为用户准备的高收益互联网金融投资理财专享标。<br>
                1.本产品按天计息，投标之日起即开始计息。还款期限到后一次性还本付息。<br>
                2.百元起投，投资上线为标的总额，投资倍数为100的倍数。<br>
                3.投资成功后不予撤销。<br>
                4.最终解释权归智慧财神所有。
              </p>
              <p class="tips">温馨提示：投资有风险，理财需谨慎</p>
            </section>
          </div>
          <button class="pull">下拉显示更多</button>
        </div>
        <div class="swiper-slide">
          <p style="margin-top: 1.95rem;">第二页</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import Swiper from 'swiper'
  export default {
    data: function () {
      return {
        headTitle: "财神汽车",
        progress_value:'',
        indeterminate: false,
        counterClockwise: false,
        hideBackground: false,
      }
    },
    components:{
      headTop
    },
    mounted(){
      const that = this;
      setTimeout(function () {
        that.progress_value = 60;
      });
      new Swiper('.project-swiper-container', {
        direction:'vertical'
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .header_top{
    height: 1.95rem;
    color: $fc;
    background-image: -webkit-linear-gradient(left, #f95f36, #fe6e46, #ff8655);
    text-align: center;
    line-height: 1.95rem;
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .header-title{
    font-size: 0.6rem;
    color: $fc;
  }
  .head_goback{
    position: absolute;
  }
  .head_goback img{
    height: 1rem;
    width: 0.6rem;
    padding-left: 0.4rem;
  }
  /*详情*/
  .project_info{
    background: #f7f9fb;
    padding-bottom: 1.102rem;
  }
  .block{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top center;
  }
  .info_top{
    text-align: center;
    padding-top: 1.95rem;
    height: 8.08rem;
    background-image: url("../../../static/images/invest/rate_bg.png");
    p{color: $fc;}
    p.text{font-size: 0.511rem;}
    p.project_title{font-size: 0.425rem;font-weight: lighter;margin-top: 0.6rem;}
    p.project_interest{font-size: 1.702rem;}
    span.extra_interest{font-size: 0.51rem;color: $fc;}
  }
  .invest_p{
    height: 5.66rem;
    background: $fc;
    padding: 0.628rem;
    li{width: 31.8%;display: inline-block;}
    li:nth-child(2){text-align: center;}
    li:nth-child(3){text-align: right;}
    p{color: #444;font-size: 0.628rem;}
    p.text{color: #999;font-size: 0.51rem;
      span{color: #666;line-height: 48px;
        i{color: $mc;}
      }
    }
    .project_progress{
      position: relative;
      height: 18px;
      .progress_bg,.progress_value{
        position: absolute;
        height: 6px;
        border-radius: 15px;
        top: 12px;
      }
      .progress_bg{
        background: #e5e5e5;
        width: 100%;
      }
      .progress_value{
        background-image: -webkit-linear-gradient(left, #ff8c67, #fd6745);
        /*background: #fd6745;*/
        width: 0;
        transition: width 1s ease-in-out;
      }
    }
  }
  .project_intro{
    position: relative;
    margin-top: 0.297rem;
    background: #fff;
    h4{
      padding-left:0.628rem;
      font-size: 0.638rem;
      color: #444;
      @include hh(2.217rem,2.217rem);
      border-bottom: 1px solid #f4f4f4;
    }
    .intro_content{padding: 0 0.628rem;}
    ul{
      position: relative;
      z-index: 101;
      display: flex;
      li{
      @include fj;
        flex: 1;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin: 0.2rem 0 0.2rem 0;
        .circle {
          width: 0.5rem;
          height: 0.5rem;
          background: #eee;
          border-radius: 50%;
        }
        .circle_sel{
          background: $mc;
        }
        p{
          font-size: 0.51rem;
          color: #999;
        }
      }
    }
    ul:nth-child(1){
      padding-top: 0.5rem;
    }
    .step_progress{
      position: absolute;
      top: 4.2rem;
      width: 62%;
      z-index: 100;
      left: 0;
      right: 0;
      margin: auto;
    .step {
      width: 50%;height: 0.17rem;
      background: #eee;
      float: left;
    }
    .step_active {
      background: #fc5c3f;
    }
    }
  }
  .desc,.tips{@include sc(0.51rem,#444);padding: 0 1.12rem;}
  .tips{margin-top: 0.51rem;}

  .pull{@include hh(2.085rem,2.085rem);width: 100%;@include sc(0.51rem,#909090);}
</style>
