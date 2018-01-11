<template>
  <div>
    <head-top :head-title="headTitle"></head-top>

    <alert-msg :message="'恭喜，绑定成功！'">
      <div class="btn_group" slot="btn_group">
        <router-link :to="{path: '/'}" class="left">返回首页</router-link>
        <router-link :to="{path: '/account'}" class="right">个人中心</router-link>
      </div>
    </alert-msg>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import alertMsg from '@/components/common/success_alert'
  export default {
    data: function () {
      return {
        headTitle: "成功提示页面"
      }
    },
    components:{
      headTop,
      alertMsg
    },
    mounted(){
      this.$("#app")[0].style.background = "#fff";
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
</style>
