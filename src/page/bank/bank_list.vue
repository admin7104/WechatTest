<template>
  <div>
    <head-top :head-title="profiletitle" is-back="true"></head-top>
    <div class="bank_list">
      <div class="bank_item" v-for="item in bankList">
        <router-link :to="{path:'/bind_bank',query: {bankname: bankname+item}}">
          <img src="../../../static/images/account/bank/gongshang.png">
          <span class="bank_name">{{bankname+item}}</span>
          <span class="limit">限额:单次:5万 单日:5万</span>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
  import headTop from '@/components/header/head'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data: function () {
      return {
        profiletitle: '选择银行卡',
        bankList:[1,2,3,4,5,7,8,9,0],
        bankname:"中国工商银行"
      }
    },
    components:{
      headTop,
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../style/mixin';
  .bank_list{
    padding-top: 1.95rem;
    background: #fff;
  }
  .bank_item{
    height: 72px;
    padding: 10px;
    border-bottom: 1px solid #e8e8e8;
    margin-left: 10px;
    img{
      float: left;
      margin-right: 10px;
      @include wh(2.1276rem,2.1276rem);
    }
    .bank_name{
      margin-top: 4px;
    }
    .bank_name,.limit{
      color: #333;
      font-size: 14px;
      float: left;
      width: 60%;
    }
  }
</style>
