<template>
  <div>
    <head-top :head-title="headTitle"></head-top>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  export default {
    data: function () {
      return {
          headTitle: ""
      }
    },
    components:{
      headTop
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin.scss';

</style>
