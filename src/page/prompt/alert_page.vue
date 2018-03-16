<template>
  <div>
    <head-top :head-title="headTitle"></head-top>
    <div class="alert">
      <img slot="msgImg" :src="msgImg">
      <p class="message">{{message}}</p>
      <div class="btn_group" slot="btn_group">
        <router-link :to="{path: '/'}" class="left">返回首页</router-link>
        <router-link :to="{path: '/account'}" class="right">个人中心</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  export default {
    data: function () {
      return {
        headTitle: "成功提示页面",
        message:'',
        msgImg:'',
        bindcardSuccess: require ('../../../static/images/alert/bindcard_success@2x.png'),
        rechargeSuccess: require ('../../../static/images/alert/recharge_success@2x.png'),
        investSuccess: require ('../../../static/images/alert/invest_success@2x.png')
      }
    },
    components:{
      headTop,
    },
    mounted(){
      this.$("#app")[0].style.background = "#fff";
      this.message = this.$route.query.message;
      this.msgImg = this.$route.query.msgImg==='invest'?this.investSuccess:this.$route.query.msgImg==='bindcard'?this.bindcardSuccess:this.rechargeSuccess;
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .alert{
    padding-top: 1.95rem;
    text-align: center;
    img{
      @include wh(50%,50%);
      margin: 1.2766rem 0 0.936rem;
    }
    .message{
      @include sc(0.7234rem,#666);
      width: 14.255rem;
      padding-bottom: 1.2766rem;
      border-bottom: 1px solid #e4e4e4;
      margin: 0 auto 1.2766rem;
    }
    .btn_group{
      padding: 0 1.489rem;
      a{
        background: $fc;
        line-height: 1.5319rem;
        @include wh(5.617rem,1.5319rem);
        @include sc(0.6808rem,$mainColor);
        border: 1px solid $mainColor;
        border-radius: 8px;
      }
    }
  }
</style>
