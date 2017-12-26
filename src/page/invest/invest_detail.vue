<template>
  <div>
    <head-top :head-title="headTitle" :is-back="true"></head-top>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  export default {
    data: function () {
      return {
          headTitle: "产品详情"
      }
    },
    components:{
      headTop
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';

</style>
