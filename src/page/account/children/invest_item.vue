<template>
  <div class="invest_list">
    <head-top :head-title="headTitle" is-back="true" is-gray="true" @go-page="$router.go(-1)"></head-top>
    <div class="list_content">
      <div class="list_container">
        <div class="item">
          <div class="title">
            <h4>新客专享第00115期</h4>
            <div class="col-4"><p>15<span>%</span></p><p class="text">预期年化利率</p></div>
            <div class="col-4"><p>15<span>天</span></p><p class="text">锁定期</p></div>
            <div class="col-4"><p>10000.00</p><p class="text">借款金额(元)</p></div>
          </div>
          <p class="clear"><span class="left">到期时间</span><span class="right">2018-01-05 18:18:18</span></p>
          <p class="clear"><span class="left">还款方式</span><span class="right">一次性还本付息</span></p>
          <p class="clear"><span class="left">已投金额(元)</span><span class="right">20,000.00</span></p>
          <p class="clear"><span class="left">预计收益(元)</span><span class="right">145.83</span></p>
          <p class="clear"><span class="left">理财券</span><span class="right">已用18元红包</span></p>
          <p class="clear no_border" @click="changeState()">
            <span class="left">收款明细</span><span :class="close==true?'right status close':'right status open'"></span>
            <span class="clear"></span>
          </p>
          <ul id="extra_ul" :class="close==false?'animated bounceInRight':'animated bounceOutLeft'">
            <li v-for="n in 3">
              <span class="left">第一期已收本息<i>20145.83元</i></span><span class="right">2018.01.05</span>
            </li>
          </ul>
          <span class="tag">筹集中</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  export default {
    data: function () {
      return {
        headTitle: "已购产品详情",
        close: true
      }
    },
    components:{
      headTop
    },
    mounted(){
      this.getEleById("app").style.background = '#f1f1f1';
      this.getEleById("headerTop").style.background = '#fff';
      this.getEleById("headerTitle").style.color = '#333';
      this.getEleById("extra_ul").style.display = 'none';
    },
    methods:{
      getEleById(id){
          return document.getElementById(id);
      },
      changeState(){
        this.getEleById("extra_ul").style.display = 'inherit';
        this.close = !this.close;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin';
  .invest_list{min-height: 100%;}
  .list_content{
    padding-top: 1.95rem;
  }
  .list_container{
    padding-bottom: 0.4255rem;
    .item{
      position: relative;
      background: $fc;
      @include wh(14.6808rem,15.9574rem);
      margin: 0.4255rem auto 0;
      border-radius: 4px;
      .title{
        height: 4.468rem;
        padding: 0.6383rem 0.4255rem 0;
        border-bottom: 1px solid #e8e8e8;
      }
      h4{
        font-size: 0.6383rem;
      }
      .col-4{
        margin-top: 0.7234rem;
        text-align: center;
        padding: 0;
        p{
          @include sc(0.8085rem,#333);
        }
        p.text{
          @include sc(0.468rem,#999);
        }
      }
      >p{
        background: $fc;
        border-bottom: 1px solid #e8e8e8;
        font-size: 0.5957rem;
        min-height: 1.9149rem;
        line-height: 1.9149rem;
        padding: 0 0.4255rem;
        span.status{
          @include wh(0.851rem,0.5106rem);
          background-size: 100% 100%;
          margin-top: 0.70215rem;
          background-image: url("../../../../static/images/recode/close@2x.png");
          transition-duration: 0.4s;
          -moz-transition-duration: 0.4s; /* Firefox 4 */
          -webkit-transition-duration: 0.4s; /* Safari 和 Chrome */
          -o-transition-duration: 0.4s;
        }
        span.open{
          transform:rotate(180deg);
          -ms-transform:rotate(180deg); 	/* IE 9 */
          -moz-transform:rotate(180deg); 	/* Firefox */
          -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
          -o-transform:rotate(180deg); 	/* Opera */
          /*background-image: url("../../../../static/images/recode/open@2x.png");*/
        }
        span.close{
          transform:rotate(360deg);
          -ms-transform:rotate(360deg); 	/* IE 9 */
          -moz-transform:rotate(360deg); 	/* Firefox */
          -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
          -o-transform:rotate(360deg); 	/* Opera */
        }
      }
      p.no_border{
        border-bottom: none;
      }
      span.tag{
        position: absolute;
        right: 0;
        top: 0.8085rem;
        background: url("../../../../static/images/recode/status_bg.png");
        background-size: 100% 100%;
        @include sc(0.5957rem,#fc7a5c);
        @include wh(2.932rem,0.8936rem);
        text-align: right;
        padding-right: 8px;
      }
      ul{
        background: #fff;
        padding: 0 0.4255rem 0.7234rem;
      }
      li{
      @include hh(0.9787rem,0.9787rem);
        padding: 0 0.2rem;
      span{font-size: 0.5106rem;
      i{
        color: $mc;
      }
      }
      span.left{color: #666;}
      span.right{color: #999;}
      }
      li:nth-of-type(2n+1){
        background: #ffefeb;
      }
    }
  }
</style>
