<template>
  <div>
    <head-top :head-title="headTitle" is-back="true" @go-page="$router.go(-1)"></head-top>
    <div class="content">
      <ul
        infinite-scroll-immediate-check="true"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li class="title">
          <p class="col-3">日期</p>
          <p class="col-3">资金类型</p>
          <p class="col-3">金额明细</p>
          <p class="col-3">可用余额</p>
        </li>
        <li class="item" v-for="n in list">
          <p class="col-3">2018-01-08<br>00:00:00</p>
          <p class="col-3">提现</p>
          <p class="col-3">-10000.00</p>
          <p class="col-3">200000.00</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  export default {
    data: function () {
      return {
        headTitle: "资金流水",
        list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        loading:false
      }
    },
    mounted(){
      this.getEleById("app").style.background = '#fff';
    },
    components:{
      headTop
    },
    methods:{
      getEleById(id){
        return document.getElementById(id);
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .content{
    padding-top: 1.95rem;
    text-align: center;
    li{
      @include hh(2.127rem,2.127rem);
    }
    .title>p{
      padding: 0;
      font-size: 0.6383rem;
      font-weight: normal;
      border-bottom: 1px solid #eaeaea;
    }
    li.item:nth-of-type(odd){
      background: #f5f5f5;
    }
    li.item>p{
      padding: 0;
      @include sc(0.5957rem,#666);
    }
    li.item>p:nth-child(1){
      font-size: 0.468rem;
      line-height: 0.638rem;
      padding: 0.4255rem 0;
    }
  }
</style>
