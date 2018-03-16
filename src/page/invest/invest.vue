<template>
  <div class="invest_body">
    <head-top :head-title="headTitle" @go-page="$router.go(-1)">
      <nav slot="other" class="mint-navbar">
        <span @click="changeType('new')"><button :class="currentType=='new'?'selected':''">新客专享</button></span>
        <span @click="changeType('car')"><button :class="currentType=='car'?'selected':''">财神汽车</button></span>
      </nav>
    </head-top>
    <div class="project_list">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in projectList">
          <router-link :to="{path: '/invest_detail'}">
            <div :class="item.pcomplete==100?'project_item project_item_f':'project_item'">
              <div class="p_head">
                <h3 class="projectName">{{item.pname}}<span :class="item.pcomplete==100?'tag tag_f':'tag'" v-for="tag in item.tag">{{tag}}</span></h3>
              </div>
              <div class="ib info_left">
                <p class="percent">{{item.prateBase}}<span>{{item.text}}</span><span v-if="item.prateAppend" class="extra">+{{item.prateAppend}}.00%</span></p>
                <p class="desc lh">历史年化收益率</p>
              </div>
              <div class="ib info_right">
                <p class="lh"><span class="desc">锁&nbsp;定&nbsp;期</span><span class="text">{{item.pdeadline}}{{item.pdeadlineType}}</span></p>
                <p class="lh"><span class="desc">可投金额</span><span class="text">{{item.ploan-item.ploanReal}}元</span></p>
              </div>
              <p class="progress_value" v-if="item.pcomplete!=100&&item.pstatusId!='5'&&item.pstatusId!='6'&&item.pstatusId!='7'">{{item.pcomplete}}%</p>
              <loading-progress v-if="item.pcomplete!=100&&item.pstatusId!='5'&&item.pstatusId!='6'&&item.pstatusId!='7'"
                :progress="item.pcomplete==0?1-0.00000000001:1-item.pcomplete/100"
                :indeterminate="indeterminate"
                :counter-clockwise="counterClockwise"
                :hide-background="hideBackground"
                shape="circle"
                size="150"
                fill-duration="2"
                background="circle_bg"
                progress_bg = "progress2"
              />
              <div class="sell_status sold" v-if="item.pcomplete==100&&item.pstatusId=='5'"></div>
              <div class="sell_status repaid" v-if="item.pstatusId=='7'"></div>
              <div class="sell_status repaying" v-if="item.pstatusId=='6'"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import footerGuide from '@/components/footer/footerGuide'
  import '../../../static/common.css'
  import {investlist} from '@/service/getData'
  import {pdeadlineType} from '@/config/mUtils'
  export default {
    data: function () {
      return {
        headTitle: "",
        selected:true,
        currentType:'new',
        loading:true,
        projectList:[],
        indeterminate: false,
        counterClockwise: false,
        hideBackground: false,
        page: 1,
      }
    },
    mounted(){
      this.getProjectList(0,this.page);
      this.$route.query.type!=undefined?this.changeType(this.$route.query.type):'';
    },
    components:{
      headTop,
      footerGuide
    },
    methods:{
      async getProjectList (protype,page) {
        const result = await investlist(protype,page);
        if(result.retcode=='00000000'){
          this.projectList = result.list;
          for(let i=0;i<this.projectList.length;i++){
            this.projectList[i].prateBase = this.projectList[i].prateBase;
            this.projectList[i].text = ((this.projectList[i].prateBase-parseInt(this.projectList[i].prateBase)).toFixed(2)).substr(1)+'%';
            this.projectList[i].pdeadlineType = pdeadlineType(this.projectList[i].pdeadlineType);
          }
        }
        else alert(result.retmsg);
      },
      changeType(type){
          this.currentType = type;
          this.$router.push({path:"/invest",query:{'type':type}})
      },
      loadMore() {
        this.loading = true;
        this.page++;
        setTimeout(() => {
          this.loading = false;
        }, 2500);
      },
    },
    watch: {
      currentType(curVal, oldVal) {
        oldVal=='new'?this.getProjectList(11):this.getProjectList(0);
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .vue-progress-path{width: 3rem!important;height: 3rem!important;stroke-width: 6;position: absolute;top: 2rem;right: 0;}
  .invest_body{background: #f1f1f1!important;}
  .progress_value{
    position: absolute;
    top: 3rem;
    right: 0.6rem;
    color: #fc5c3f;
    font-size: 0.8rem;
  }
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
    color: $mainColor;
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
    color: $mainColor;
    font-size: 0.638rem;
  }
  .mint-navbar button.selected{
    color: $fc;
    background-color: $mainColor;
    box-shadow: 4px 0 4px -3px $mainColor;
  }
  .mint-navbar span:nth-child(2) button.selected{
    box-shadow: -4px 0 4px -3px $mainColor;
  }
  /*列表*/
  .project_list{margin-bottom: 2.85rem;padding-top: 1.95rem;}
  .p_head{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgb(230,230,230);
  }
  .project_item{
    position: relative;
    margin-top: 0.638rem;
    padding: 0 0.638rem 0.338rem;
    background-color: $fc;
    .projectName{
      font-size: 0.638rem;
      span.tag{
        font-size: 0.468rem;
        color: $mainColor;
        border: 1px solid $mainColor;
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
      color: $mainColor;
      span{
        font-weight: bold;
        @include sc(0.88rem,$mainColor);
      }
      span.extra{
        font-size: 0.6rem;
      }
    }
    .info_left{
      min-width: 6.5rem;
      margin-top: 0.4rem;
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
  .sell_status{
    @include wh(3.81rem,3.66rem);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 1.4rem;
    right:0;
  }
  .sold{background-image: url("../../../static/images/invest/sold.png")}
  .repaid{background-image: url("../../../static/images/invest/repaid.png")}
  .repaying{background-image: url("../../../static/images/invest/repaying.png")}
</style>
