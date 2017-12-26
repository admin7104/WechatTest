<template>
  <mt-header :title="headTitle">

    <router-link to="" slot="left">
      <mt-button icon="back" v-if="isBack" @click="$router.go(-1)"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
  export default {
    props:['headTitle','isBack'],
    data: function () {
      return {
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
</style>
