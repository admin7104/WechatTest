<template>
  <div>
    <head-top :head-title="headTitle"></head-top>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import footerGuide from '@/components/footer/footerGuide'
  export default {
    data: function () {
      return {
          headTitle: "我的账户"
      }
    },
    components:{
      headTop,
      footerGuide
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';

</style>
