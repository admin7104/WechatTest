<template>
  <div class="alert">
    <img slot="msgImg" :src="bindcardSuccess">
    <p class="message">{{message}}</p>
    <slot name="btn_group">
    </slot>
  </div>
</template>

<script>
  export default {
    props:['message'],
    data: function () {
      return {
        bindcardSuccess: require ('../../../static/images/alert/bindcard_success@2x.png')
      }
    },
    components:{
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .alert{
    padding-top: 1.95rem;
    text-align: center;
    img{
      @include wh(5.404rem,5.0212rem);
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
        @include sc(0.6808rem,$mc);
        border: 1px solid $mc;
        border-radius: 8px;
      }
    }
  }
</style>
