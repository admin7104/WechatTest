<template>
  <div>
    <head-top :head-title="headTitle">
      <nav slot="other" class="mint-navbar">
        <span @click="changeType('new')"><button :class="currentType=='new'?'selected':''">新客专享</button></span>
        <span @click="changeType('car')"><button :class="currentType=='car'?'selected':''">财神汽车</button></span>
      </nav>
    </head-top>
    <div class="project_list">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-immediate-check="true"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in projectList">
          <div class="project_item">
            <div class="p_head">
              <h3 class="projectName">{{project.projectName}}<span class="tag" v-for="tag in project.tag">{{tag}}</span></h3>
            </div>
            <div class="ib info_left">
              <p class="percent">15.<span>00%</span><span class="extra">+3.00%</span></p>
              <p class="desc lh">历史年化收益率</p>
            </div>
            <div class="ib info_right">
              <p class="lh"><span class="desc">锁&nbsp;定&nbsp;期</span><span class="text">15天</span></p>
              <p class="lh"><span class="desc">可投金额</span><span class="text">86,000.00元</span></p>
            </div>
          </div>
          <div class="project_item project_item_f">
            <div class="p_head">
              <h3 class="projectName">{{project.projectName}}<span class="tag tag_f" v-for="tag in project.tag">{{tag}}</span></h3>
            </div>
            <div class="ib info_left">
              <p class="percent">15.<span>00%</span><span class="extra">+3.00%</span></p>
              <p class="desc lh">历史年化收益率</p>
            </div>
            <div class="ib info_right">
              <p class="lh"><span class="desc">锁&nbsp;定&nbsp;期</span><span class="text">15天</span></p>
              <p class="lh"><span class="desc">可投金额</span><span class="text">86,000.00元</span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import footerGuide from '@/components/footer/footerGuide'
  export default {
    data: function () {
      return {
        headTitle: "",
        selected:true,
        currentType:'new',
        loading:false,
        projectList:[],
        list:[1],
        list2:[1,1,1,1,1,1,1,1,1],
        project:{
          projectName:'新客专享第00341期',
          tag:['期限短','收益高']
        }
      }
    },
    mounted(){
        this.projectList = this.list;
    },
    components:{
      headTop,
      footerGuide
    },
    methods:{
      changeType(type){
          this.currentType = type;
          type=='new'?this.projectList = this.list:this.projectList = this.list2;
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
  @import '../../style/mixin.scss';
  .mint-navbar {
    width: 52%;
    margin: 0 auto;
    height: 1.15rem;
    position: absolute;
    margin-top: 0.4rem;
    left: 24%;
    padding: 1px;
    border-radius: 1rem;
  }
  .mint-navbar span{
    width: 50%;
    border-radius: 1rem;
    background: $fc;
    color: $mc;
    position: relative;
  }
  .mint-navbar span:nth-child(2) button{
    right: 0;
    left: inherit;
  }
  .mint-navbar button{
    position: absolute;
    width: 98%;
    left: 0;
    height: 100%;
    border-radius: 1rem;
    background-color: $fc;
    color: $mc;
    font-size: 0.638rem;
  }
  .mint-navbar button.selected{
    color: $fc;
    background-color: $mc;
    box-shadow: 4px 0 4px -3px $mc;
  }
  .mint-navbar span:nth-child(2) button.selected{
    box-shadow: -4px 0 4px -3px $mc;
  }
  /*列表*/
  .project_list{margin-bottom: 2.85rem;padding-top: 1.95rem;}
  .p_head{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgb(230,230,230);
  }
  .project_item{
    margin-top: 0.638rem;
    padding: 0 0.638rem 0.338rem;
    background-color: $fc;
    .projectName{
      font-size: 0.638rem;
      span.tag{
        font-size: 0.468rem;
        color: $mc;
        border: 1px solid $mc;
        border-radius: 0.2rem;
        margin: 0 4px;
        @include wh(2.127rem,0.723rem);
        line-height: 0.723rem;
        display: inline-block;
        text-align: center;
        position: relative;
        top: -0.1rem;
      }
      span.tag_f{
        color: rgb(167,167,167);
        border: 1px solid rgb(167,167,167);
      }
    }
    .desc{
      color: $cf;
      font-size: 0.51rem;
    }
    .text{
      font-size: 0.51rem;
      padding-left: 0.2rem;
    }
    .percent{
      font-size: 1.49rem;
      font-weight: bold;
      color: $mc;
      span{
        font-weight: bold;
        @include sc(0.88rem,$mc);
      }
      span.extra{
        font-size: 0.6rem;
      }
    }
    .info_left{
      min-width: 6.5rem;
    }
    .info_right{
      padding-left: 0.4rem;
      border-left: 1px solid rgb(207,207,207);
      .lh:nth-child(1){
        line-height: 0.2rem;
      }
    }
    .lh{
      line-height: 0.8rem;
      height: 0.8rem;
    }
  }
  .project_item_f{
    .desc{color: rgb(207,207,207)}
    .text{color: rgb(204,204,204)}
    .percent,.percent span{
      color: $cf;
    }
  }
</style>
