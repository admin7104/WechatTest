<template>
  <header class="header_top" id="headerTop">
    <section class="head_goback left" v-if="isBack" @click="goPage(url)">
      <img v-if="!isGray" src="../../../static/images/tabBar/back_normal@2x.png">
      <img v-if="isGray" src="../../../static/images/tabBar/back_gray@2x.png">
    </section>
    <h1 id="headerTitle" class="header_title" v-if="headTitle">{{headTitle}}</h1>
    <!--<mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>-->
    <slot name='search'></slot>
    <slot name="other"></slot>
    <slot name="more"></slot>
  </header>
</template>

<script>
  export default {
    props:['headTitle','isBack','isGray','url'],
    data: function () {
      return {
        value:''
      }
    },
    methods:{
      goPage(url){
        //this.$router.go(-1);
        this.$emit('go-page', url);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .header_top{
    height: 1.95rem;
    background-image: -webkit-linear-gradient(left, #fa5e35, #fe6e46, #ff8655);;
    color: $fc;
    text-align: center;
    line-height: 1.95rem;
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
  .header_title{
    font-size: 0.7234rem;
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
  .more{
    top: 0;
    position: absolute;
    right: 0.6rem;
    line-height: 1.95rem;
    font-size: 0.5106rem;
    color: #fff;
  }
</style>
