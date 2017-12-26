<template>
  <header class="header_top">
    <section class="head_goback left" v-if="isBack" @click="$router.go(-1)">
      <img src="../../../static/images/tabBar/back_normal@2x.png">
    </section>
    <!--<mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>-->
    <slot name='search'></slot>
    <h1 class="header-title" v-if="headTitle">{{headTitle}}</h1>
    <slot name="other"></slot>
    <slot name="more"></slot>
  </header>
  <!--<mt-header :title="headTitle">
    <router-link to="" slot="left">
      <mt-button icon="back" v-if="isBack" @click="$router.go(-1)"></mt-button>
    </router-link>
  </mt-header>-->
</template>

<script>
  export default {
    props:['headTitle','isBack'],
    data: function () {
      return {
        value:''
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .header_top{
    height: 1.95rem;
    background: $mc;
    color: $fc;
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
</style>
