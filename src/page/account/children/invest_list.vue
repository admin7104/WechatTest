<template>
  <div class="invest_list">
    <head-top :head-title="headTitle" is-back="true" is-gray="true"></head-top>
    <div class="list_content">
      <mt-navbar v-model="selected" class="nav_tab">
        <mt-button :class="selected=='invest_list1'?'current col-4':' col-4'" @click="selected='invest_list1'">筹集中</mt-button>
        <mt-button :class="selected=='invest_list2'?'current col-4':' col-4'" @click="selected='invest_list2'">投资中</mt-button>
        <mt-button :class="selected=='invest_list3'?'current col-4':' col-4'" @click="selected='invest_list3'">已还清</mt-button>
      </mt-navbar>
      <div class="list_container">
        <mt-tab-container v-model="selected" swipeable>
          <mt-tab-container-item id="invest_list1" v-show="selected=='invest_list1'">
            <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="invest_list2" v-show="selected=='invest_list2'">
            <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="invest_list3" v-show="selected=='invest_list3'">
            <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  export default {
    data: function () {
      return {
        headTitle: "投资记录",
        selected:'invest_list1'
      }
    },
    components:{
      headTop
    },
    mounted(){
      this.getEleById("app").style.background = '#f1f1f1';
      this.getEleById("headerTop").style.background = '#fff';
      this.getEleById("headerTitle").style.color = '#333';
    },
    methods:{
      getEleById(id){
          return document.getElementById(id);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin';
  .invest_list{min-height: 100%;}
  .list_content{
    padding-top: 1.95rem;
    .nav_tab{
      border-top: 1px solid #e8e8e8;
      border-bottom: 1px solid #e8e8e8;
      button{
        border: none;
        box-shadow: none;
        background: $fc;
        border-radius: 0;
      }
      button.current{
        border-bottom: 2px solid $mc;
        color: #333;
      }
    }
  }
</style>
