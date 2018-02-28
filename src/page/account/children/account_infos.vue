<template>
  <div class="account_infos_body">
    <head-top :head-title="headTitle" is-back="true" @go-page="$router.go(-1)"></head-top>
    <div class="account_infos">
      <mt-cell class="avatar mt20 no_border" title="头像">
        <img class="right" slot="icon" src="../../../../static/images/account/head_icon.png">
      </mt-cell>
      <mt-cell
        class="mt20"
        title="实名认证"
        :to="{path:'/bind_bank'}"
        is-link
        value="">
      </mt-cell>
      <mt-cell
        title="我的银行卡"
        :to="{path:'/my_bank'}"
        is-link
        value="">
      </mt-cell>
      <mt-cell
        title="昵称"
        to="//github.com"
        is-link
        value="理财大人">
      </mt-cell>
      <mt-cell
        class="no_border"
        title="手机号"
        to="//github.com"
        is-link
        value="15588888888">
      </mt-cell>
      <mt-cell class="mt20"
        title="修改密码"
        to="//github.com"
        is-link
        value="">
      </mt-cell>
      <mt-cell
        title="设置交易密码"
        to="//github.com"
        is-link
        value="">
      </mt-cell>
      <mt-cell class="no_border"
        title="清除缓存"
        to="//github.com"
        is-link
        value="255M">
      </mt-cell>
      <div class="logout_bg">
        <mt-button @click="logout">退出登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import {getStore,removeStore} from '@/config/mUtils'
  import {mapState,mapMutations} from 'vuex'
  export default {
    data: function () {
      return {
          headTitle: "账户信息"
      }
    },
    mounted(){
        this.$("#app")[0].style.background = "#eee";
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
        'OUT_LOGIN','INIT_USERINFO'
      ]),
      logout(){
        this.OUT_LOGIN();
        this.$router.push('/');
        removeStore('user_id')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .account_infos_body{
    height: 100%;
    background: #eee;
  }
  .account_infos{
    padding-top: 1.95rem;
  }
  .avatar{
    height: 3.2766rem;
    line-height: 3.2766rem!important;
    img{
      margin-top: 0.766rem;
      @include wh(1.7447rem,1.7447rem);
    }
  }
  .mt20{
    margin-top: 0.4255rem;
  }
  .logout_bg{
    padding: 0 0.5957rem;
    margin-top: 1.702rem;
    button{
      @include wh(100%,1.9148rem);
      line-height: 1.9148rem;
      background: $mc;
      color: $fc;
    }
  }
</style>
