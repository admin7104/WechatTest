<template>
  <div class="invest_list">
    <head-top :head-title="headTitle" is-back="true" is-gray="true" @go-page="$router.push('account')"></head-top>
    <div class="list_content">
      <mt-navbar v-model="selected" class="nav_tab">
        <mt-button :class="selected=='invest_list1'?'current col-4':' col-4'" @click="changeType('invest_list1')">筹集中</mt-button>
        <mt-button :class="selected=='invest_list2'?'current col-4':' col-4'" @click="changeType('invest_list2')">投资中</mt-button>
        <mt-button :class="selected=='invest_list3'?'current col-4':' col-4'" @click="changeType('invest_list3')">已还清</mt-button>
      </mt-navbar>
      <div class="list_container">
        <mt-tab-container v-model="selected" swipeable>
          <mt-tab-container-item id="invest_list1" v-show="selected=='invest_list1'">
            <ul>
              <router-link :to="{path:'/invest_item',query: {projectId: item.projectId}}" v-for="(item,index) in investlist" :key="index">
                <li>
                  <div class="title">
                    <h4>{{item.pname}}</h4>
                    <p class="invest_time">{{item.piBidTimeStr}}</p>
                  </div>
                  <p class="clear"><span class="text left">预期年化收益率</span><span class="right">{{item.prateIn}}%</span></p>
                  <p class="clear"><span class="text left">投资本金(元)</span><span class="right">{{item.piAmount}}</span></p>
                  <p class="clear"><span class="text left">预计收益(元)</span><span class="right">{{item.piBeGetRateSum}}</span></p>
                  <p class="clear"><span class="text left">到期时间</span><span class="right">{{item.expireDate}}</span></p>
                  <span class="tag">{{item.pStatusText}}</span>
                </li>
              </router-link>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="invest_list2" v-show="selected=='invest_list2'">
            <ul>
              <router-link :to="{path:'/invest_item',query: {projectId: item.projectId}}" v-for="(item,index) in investlist" :key="index">
                <li>
                  <div class="title">
                    <h4>{{item.pname}}</h4>
                    <p class="invest_time">{{item.piBidTimeStr}}</p>
                  </div>
                  <p class="clear"><span class="text left">预期年化收益率</span><span class="right">{{item.prateIn}}%</span></p>
                  <p class="clear"><span class="text left">投资本金(元)</span><span class="right">{{item.piAmount}}</span></p>
                  <p class="clear"><span class="text left">预计收益(元)</span><span class="right">{{item.piBeGetRateSum}}</span></p>
                  <p class="clear"><span class="text left">到期时间</span><span class="right">{{item.expireDate}}</span></p>
                  <span class="tag">{{item.pStatusText}}</span>
                </li>
              </router-link>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="invest_list3" v-show="selected=='invest_list3'">
            <ul>
              <router-link :to="{path:'/invest_item',query: {projectId: item.projectId}}" v-for="(item,index) in investlist" :key="index">
                <li>
                  <div class="title">
                    <h4>{{item.pname}}</h4>
                    <p class="invest_time">{{item.piBidTimeStr}}</p>
                  </div>
                  <p class="clear"><span class="text left">预期年化收益率</span><span class="right">{{item.prateIn}}%</span></p>
                  <p class="clear"><span class="text left">投资本金(元)</span><span class="right">{{item.piAmount}}</span></p>
                  <p class="clear"><span class="text left">预计收益(元)</span><span class="right">{{item.piBeGetRateSum}}</span></p>
                  <p class="clear"><span class="text left">到期时间</span><span class="right">{{item.expireDate}}</span></p>
                  <span class="tag">{{item.pStatusText}}</span>
                </li>
              </router-link>
            </ul>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import {mapMutations,mapState} from 'vuex'
  import {myTender} from '@/service/getData'
  export default {
    data: function () {
      return {
        headTitle: "投资记录",
        selected:'invest_list1',
        investlist:{}
      }
    },
    components:{
      headTop
    },
    mounted(){
      this.$("#app")[0].style.background = '#f1f1f1';
      this.$("#headerTop")[0].style.background = '#fff';
      this.$("#headerTitle")[0].style.color = '#333';
      this.getInvestList(1,1);
    },
    created(){
      this.INIT_USERINFO();
    },
    computed:{
      ...mapState([
        'userInfo',
      ]),
    },
    methods:{
      ...mapMutations([
        'INIT_USERINFO'
      ]),
      changeType(selected){
          this.selected = selected;
      },
      async getInvestList(page,queryType){
        let investList = await myTender(this.userInfo.sessionid,page,queryType);
        if(investList.retcode="00000000"){
          this.investlist = investList.tenderList;
          for(let i=0;i<this.investlist.length;i++){
            this.investlist[i].pStatusText = this.investlist[i].pStatusId==4?'筹集中':this.investlist[i].pStatusId==6?'投资中':'已还清';
          }
        }
      }
    },
    watch: {
      selected:function () {
        if(this.selected == "invest_list1")
        {
          this.getInvestList(1,1);
        }
        else if(this.selected == "invest_list2")
        {
          this.getInvestList(1,3);
        }
        else if(this.selected == "invest_list3")
        {
          this.getInvestList(1,4);
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin';
  .invest_list{min-height: 100%;}
  .list_content{
    padding-top: 3.7797rem;
    .nav_tab{
      border-top: 1px solid #e8e8e8;
      border-bottom: 1px solid #e8e8e8;
      position: fixed;
      top: 1.95rem;
      width: 100%;
      height: 1.8297rem;
      z-index: 1;
      button{
        border: none;
        box-shadow: none;
        background: $fc;
        border-radius: 0;
        padding: 0;
        margin: 0 15px;
      }
      button.current{
        border-bottom: 2px solid $mainColor;
        color: #333;
      }
    }
  }
  .list_container{
    padding-bottom: 0.4255rem;
    li{
      position: relative;
      background: $fc;
      @include wh(14.6808rem,7.6595rem);
      margin: 0.4255rem auto 0;
      padding: 0 0.4255rem;/*0.6383rem*/
      border-radius: 4px;
      .title{
        height: 2.5532rem;
        padding-top: 0.6383rem;
        border-bottom: 1px solid #e8e8e8;
        margin-bottom: 0.6383rem;
      }
      h4{
        font-size: 0.6383rem;
      }
      p{
        font-size: 0.5957rem;
        line-height: 1.0212rem;
        span.left{color: #999;}
        span.right{color: #333;}
      }
      .invest_time{
        font-size: 0.3829rem;
      }
      span.tag{
        position: absolute;
        right: 0;
        top: 0.8085rem;
        background: url("../../../../static/images/recode/status_bg.png");
        background-size: 100% 100%;
        @include sc(0.5957rem,#fc7a5c);
        @include wh(2.932rem,0.8936rem);
        text-align: right;
        padding-right: 8px;
      }
    }
  }
</style>
