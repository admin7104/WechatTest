<template>
  <div class="invest_detail_page">
    <head-top :head-title="headTitle" is-back="true"></head-top>

    <!-- Swiper -->
    <div style="padding-bottom: 1.95rem;">
          <section class="rate_black">
            <div class="rate_container">
              <p class="invest_title">
                {{pdv.pName}}
              </p>
              <p class="rate">
                {{pdv.rateBase}}<span>%</span><span style="font-size: 0.8234rem;" v-if="pdv.rateAppend!=0">+{{pdv.rateAppend}}%</span>
              </p>
              <p class="rate_title">
                预期年化率
              </p>
            </div>
          </section>
          <section class="project_infos container">
            <ul class="project_values">
              <li>
                <p>项目总额</p>
                <p>{{pdv.loan}}元</p>
              </li>
              <li>
                <p>投资期限</p>
                <p>{{pdv.deadline}}{{pdv.deadlineType == 'MONTH'?'个月':pdv.deadlineType == 'DAY'?'天':pdv.deadlineType == 'YEAR'?'年':''}}</p>
              </li>
              <li>
                <p>起投金额</p>
                <p>{{pdv.pminInvest}}元</p>
              </li>
            </ul>
            <ik-progress :value="progress_value" :bar-height="10" :progress-color="'#ff7f5b'"></ik-progress>
            <div class="invest_progress_dec">
              <div class="left">
                已投{{pdv.complete}}%
              </div>
              <div class="right">
                剩余可投<span>{{pdv.pstatusId==5||pdv.pstatusId==6||pdv.pstatusId==7?0:pdv.payLoan}}</span>元
              </div>
              <div class="clear"></div>
            </div>

          </section>
          <section class="project_introduce container">
            <h4>项目介绍</h4>
            <ul class="project_values project_values_first">
              <li>
                <p>产品发布</p>
              </li>
              <li>
                <p>预计起息</p>
              </li>
              <li>
                <p>预计到期</p>
              </li>
            </ul>
            <ul class="project_values">
              <li>
                <i class="circle circle_sel"></i>

              </li>
              <li>
                <i class="circle "></i>

              </li>
              <li>
                <i class="circle"></i>
              </li>
            </ul>
            <ul class="project_values project_values_last">
              <li>
                <p>{{pdv.popenDateStr}}</p>
              </li>
              <li>
                <p>{{pdv.pinterestDateStr}}</p>
              </li>
              <li>
                <p>{{pdv.pcloseDateStr}}</p>
              </li>
            </ul>
            <div class="project_progress">
              <div class="step step_active">

              </div>
              <div class="step">

              </div>
            </div>
          </section>
          <section class="project_dec container">
            <img class="safe_img" src="../../../../static/images/invest/safe_img.png"/>
            <p>财神汽车是基于互联网投资需求日益增长的环境下推出的汽车金融理财业务，主要为小微企业及个人用户提供汽车金融信息服务，同时致力于稳健投资理财产品的研发，为投资者提供更全面的汽车金融供应链的金融服务。</p>
            <p v-if="pdv.pTypeTitle=='财神汽车'">神车通产品源于间客式汽车金融模式（即借款人先到银行特约汽车经销商处选购汽车，提交有关贷款申请资料，并由汽车经销商代向银行提出贷款申请），围绕消费者在新车购置与银行之间的贷款环节存在的短期性资金需求而开发的专项金融产品。该产品业务涉及银行、汽车经销商及购车人三方，购车人办理银行汽车按揭贷款业务需全款车抵押，合作汽车经销商在收到银行贷款审批通过告知函后，为具有垫资需求的购车人垫付购车款而形成债权，合作汽车经销商将经过平台风控审核后的优质债权，通过“智慧财神”平台向投资者转让，从而实现该笔债务收益权的转让，并由汽车经销商承诺到期回购。</p>
            <p v-if="pdv.pTypeTitle=='财神汽车'">神车通产品极大地提高了汽车经销商的资金使用率，也为广大投资者提供了安全、稳定和高收益的汽车金融类理财产品。</p>
          </section>
          <div style="box-shadow: rgb(181, 181, 181) 2px 2px 2px 2px;padding: 0.625rem 0;">
            <div class="nav" v-model="active">
              <mt-button :class="active=='tab-container1'?'tab_btn tab_selected':'tab_btn'" @click ="active='tab-container1'">产品详情</mt-button>
              <mt-button :class="active=='tab-container2'?'tab_btn tab_selected':'tab_btn'" @click ="active='tab-container2'">相关证件</mt-button>
              <mt-button :class="active=='tab-container3'?'tab_btn tab_selected':'tab_btn'" @click ="active='tab-container3'">投资记录</mt-button>
            </div>

            <!-- tab-container -->
            <div class="list_container">
              <mt-tab-container v-model="active" swipeable>
                <mt-tab-container-item id="tab-container1">
                  <div class="tab1">
                    <div class="p_intro">
                      <h4><i></i>产品说明</h4>
                      <table>
                        <tr>
                          <th>产品名称</th>
                          <td>{{projectInfo.pName}}</td>
                        </tr>
                        <tr>
                          <th>加入条件</th>
                          <td>{{projectInfo.pJoinRule}}</td>
                        </tr>
                        <tr>
                          <th>预计起息</th>
                          <td>{{projectInfo.pInterestDate}}</td>
                        </tr>
                        <tr>
                          <th>预计到期</th>
                          <td>{{projectInfo.pDeadlineDate}}</td>
                        </tr>
                        <tr>
                          <th>锁定期</th>
                          <td>{{projectInfo.pLockDate}}</td>
                        </tr>
                        <tr>
                          <th>还款方式</th>
                          <td>{{projectInfo.pRepayType}}</td>
                        </tr>
                      </table>
                    </div>
                    <div class="p_desc" v-if="projectInfo.pProductDesc">
                      <h4><i></i>产品描述</h4>
                      <p v-html="projectInfo.pProductDesc"></p>
                    </div>
                    <div class="p_opera" v-if="projectInfo.pThirdInstitution">
                      <h4><i></i>第三方合作机构</h4>
                      <p v-html="projectInfo.pThirdInstitution"></p>
                    </div>
                    <div class="p_opera" v-if="projectInfo.pRiskControlOption">
                      <h4><i></i>委员会风控审核意见</h4>
                      <p v-html="projectInfo.pRiskControlOption"></p>
                    </div>
                    <div class="p_suggest" v-if="projectInfo.pWindControlAudit">
                      <h4><i></i>独立风控</h4>
                      <p v-html="projectInfo.pWindControlAudit"></p>
                    </div>
                    <div class="p_suggest" v-if="projectInfo.pWindControlOption">
                      <h4><i></i>独立风控审核意见</h4>
                      <p v-html="projectInfo.pWindControlOption"></p>
                    </div>
                    <div class="p_ways" v-if="projectInfo.pRiskMeasure">
                      <h4><i></i>风控措施</h4>
                      <p v-html="projectInfo.pRiskMeasure">
                      </p>
                    </div>
                    <div class="p_ways" v-if="projectInfo.pZhbIntroduce">
                      <h4><i></i>智汇宝介绍</h4>
                      <p v-html="projectInfo.pZhbIntroduce">
                      </p>
                    </div>
                    <div class="p_ways">
                      <p class="statement">免责声明：智慧财神作为信息发布平台，未以任何明示、默示或法定的方式对投资人提供任何担保或承诺保本保息。智慧财神提供的各种信息及资料仅供参考，投资人应根据其自身投资偏好及风险承受能力独立判断并作出决策。投资人据此进行交易的，产生的责任与风险由投资人自行承担，智慧财神不承担任何责任。</p>
                    </div>
                  </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                  <div v-if="basicImg">
                    <h4><i></i>{{basicImg.title}}</h4>
                    <div class="zjImg" v-for="item in basicImg.piclist" @click="bigSizeImg(item)" :style="'background-image:url('+item+')'">
                    </div>
                  </div>
                  <div v-if="htImg">
                    <h4><i></i>{{htImg.title}}</h4>
                    <div class="zjImg" v-for="item in htImg.piclist" @click="bigSizeImg(item)" :style="'background-image:url('+item+')'">
                    </div>
                  </div>
                  <div v-if="carImg">
                    <h4><i></i>{{carImg.title}}</h4>
                    <div class="zjImg" v-for="item in carImg.piclist" @click="bigSizeImg(item)" :style="'background-image:url('+item+')'">
                    </div>
                  </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container3">
                  <ul v-if="projectInvest.length!=0">
                    <li><span class="col-4">投资人</span><span class="col-4">投资时间</span><span class="col-4">投资金额</span></li>
                    <li v-for="investItem in projectInvest"><span class="col-4">{{investItem.loginName}}</span><span class="col-4">{{investItem.pibitTime}}</span><span class="col-4">￥{{investItem.pipayAmount}}</span></li>
                  </ul>
                </mt-tab-container-item>
              </mt-tab-container>
            </div>
          </div>
    </div>
    <div v-show="bigImgShow" style="position:fixed;background: #000;top: 0;width: 100%;height: 100%;z-index: 99999;" @click="bigImgShow=false">
      <img class="bigImg" style="width: 100%" :src="bigImgSrc"/>
    </div>
    <button v-if="pdv.pstatusId==4&&pdv.complete!=100" :class="pdv.pstatusId==4&&pdv.complete!=100?'invest_btn':'invest_btn gray'" @click="invest()"><img class="animated pulse infinite" src="../../../../static/images/home/investanimation@2x.png">立即投资</button>
  </div>
</template>

<script>
  import headTop from 'src/components/header/head'
  import ikProgress from 'src/components/common/ik_progress'
  import {mapState, mapMutations} from 'vuex'
  import {imgBaseUrl} from 'src/config/env'
  import {getImgPath} from 'src/components/common/mixin'
  import 'vue-progress-path/dist/vue-progress-path.css'
  import 'src/plugins/swiper.min'
  import 'src/style/swiper.min.css'
  import {myTenderDetail,projectInvest} from 'src/service/getData'
  import {success} from 'src/config/env'
  import {getStore} from 'src/config/mUtils'

  export default {
    data(){
      return{
        profiletitle: '',
        progressVisible: false,
        indeterminate: false,
        progress: 1-0.2,
        counterClockwise: false,
        hideBackground: false,
        progress_value:0,
        project: {},
        projectInfo: {},
        pdv: {},
        projectInvest: {},
        active: 'tab-container1',
        projectImageList:{},
        basicImg:null,
        htImg:null,
        carImg:null,
        bigImgSrc:'',
        bigImgShow:false
      }
    },
    filters: {
      //保留2位小数点过滤器 不四舍五入
      keepTwoNum(value) {
        let val = Number(value);
        return val.toFixed(2);
      }
    },
    computed:{
      ...mapState([
        'userInfo',
        'login'
      ]),
    },
    mounted(){
      let mySwiper = new Swiper('#swiper-container1', {
        direction: 'vertical',
//        autoHeight:true,
//        slidesPerView: 'auto'
      });
      let mySwiper2 = new Swiper('#swiper-container2',{//子swiper
        nested:true,
        direction: 'vertical',
        resistanceRatio: 0,
        autoHeight:true,
        freeMode : true
      });
      this.pdv = JSON.parse(getStore("pdv"));
      this.profiletitle = this.pdv.pTypeTitle;
      this.getProjectInvest(1,10,this.pdv.projectId.toString());
      this.getProjectDetail(this.pdv.projectId.toString());

      let that = this;
      setTimeout(function () {
        if(!(that.pdv.pstatusId==5||that.pdv.pstatusId==6||that.pdv.pstatusId==7)){
          that.progress_value = parseInt((that.pdv.loanReal/that.pdv.loan)*100);
        }
        else that.progress_value = 100;
      },1000);
    },
    mixins: [getImgPath],
    components:{
      headTop,
      ikProgress

    },

    created(){
      this.INIT_USERINFO();
    },
    methods:{
      ...mapMutations([
        'INIT_USERINFO'
      ]),
      async getProjectInvest(current_page,pageSize,projectId){
        this.projectInvest = await projectInvest(current_page, pageSize, projectId);
        if (this.projectInvest.retcode == success){
          this.projectInvest = this.projectInvest.detailList;
        }
      },
      async getProjectDetail(projectId){
        this.projectDetail = await myTenderDetail(this.userInfo?this.userInfo.sessionid:"", projectId);
        if (this.projectDetail.retcode == success){
          this.projectInfo = this.projectDetail.projectInfo;
          if(this.projectDetail.tpImage.length>0){
            for(let i=0;i<this.projectDetail.tpImage.length;i++){
              if(this.projectDetail.tpImage[i].title=='企业/个人基本信息') this.basicImg = this.projectDetail.tpImage[i];
              if(this.projectDetail.tpImage[i].title=='合同文件') this.htImg = this.projectDetail.tpImage[i];
              if(this.projectDetail.tpImage[i].title=='车辆信息') this.carImg = this.projectDetail.tpImage[i];
            }
          }
        }
      },
      bigSizeImg(img){
        this.bigImgShow = true;
        this.bigImgSrc = img;
      },
      gotoAddress(path){
          this.$router.push({path: path,query:{pTypeId:this.pdv.pTypeId}});
      },
      invest(){
        this.userInfo?this.userInfo.isTradepassword == 0?this.gotoAddress('set_trader_password'):this.userInfo.isbindcard==0?this.gotoAddress('/bind_bank'):this.gotoAddress('/invest_sure'):this.gotoAddress('/login');
      }
    },
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../../style/mixin';
  #swiper-container2 {
    height: auto;
    overflow-y:scroll;
    /* 否则不出现滚动条*/

  }
  .zjImg{
    background-size:100%;
    width:94%;height:8rem;
    margin: 0.2rem auto;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .bigImg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  /*}*/
  /*.swiper-container {*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/

  /*.swiper-slide {*/
    /*overflow: auto;*/
    /*overflow-scrolling: touch!important;*/
    /*-webkit-overflow-scrolling: touch!important;*/
  /*}*/
  /*.swiper-slide:first-child{*/
    /*height: auto;*/
  /*}*/
  .swiper-slide-prev{opacity: 0;}
  .rate_black{
    width: 100%;height: 6.878rem;background: url("../../../../static/images/invest/rate_bg.png")no-repeat;background-size: 100% 100%;margin-top: 0.95rem;
    .rate_container{
      padding-top: 1.55rem;
      p{
        text-align: center;
        @include sc(0.553rem,#fff);
        span{
          color: #fff;
        }
      }
      .rate{
        font-size: 1.5rem;
        margin: 0.3rem 0;
      }

    }
  }
  .project_infos{
    background: #fff;
    .project_values{
      display: flex;
      li{
        @include fj;
        flex: 1;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin: 0.5rem 0 0.4rem 0;
        p{
          @include sc(0.581rem,#666);
        }
      }

    }
    .invest_progress_dec{
      padding-bottom: 0.5rem;
      div{
        @include sc(0.5rem,#666);
        span{color:#fc5c3f; }
      }
    }
  }
  .project_introduce{
    margin-top: 0.5rem;
    position: relative;
    @include bg();
    h4{
      @include sc(0.638rem,#444);
      line-height: 2.127rem;
      margin: 0 -15px;
      padding-left: 15px;
      border-bottom: 1px solid #f4f4f4;
    }
    .project_values{
      position: relative;
      z-index: 101;
      display: flex;
      li{
        @include fj;
        flex: 1;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin: 0.2rem 0 0.2rem 0;

        .circle {
          width: 0.5rem;
          height: 0.5rem;
          background: #eee;
          border-radius: 50%;
        }
        .circle_sel {
          background: #fd6345;
        }

      }

    }
    .project_values_first{
      padding-top: 0.2rem;
      li p {
        @include sc(0.5106rem,#999);
      }
    }
    .project_values_last{
      padding-bottom: 0.2rem;
      li p{
        @include sc(0.4255rem,#888);
      }
    }
    .project_progress {
      position: absolute;
      top: 3.8rem;
      width: 62%;
      z-index: 100;
      left: 0;
      right: 0;
      margin: auto;
      .step {
        width: 50%;height: 0.17rem;
        background: #eee;
        float: left;
      }
      .step_active {
        background: #fc5c3f;
      }
    }
  }
  .project_dec {
    @include bg(#fafafa);
    padding: 0 15px 10px;
    .safe_img {
        @include ct();
      height: 3.915rem;
        padding-top: 0.4255rem;
      padding-bottom: 0.6rem;
    }
    p{
      @include sc(0.598rem,#666);
      line-height: 1.1rem;
      text-indent: 1.2rem;
    }
  }
  #head_top{
    background-color: #fc5c3f!important;
    border-bottom:none!important;
  }
  .detail_values
  {
    padding-top: 2.5rem;
    font-size: 0.68rem;
    text-align: center;
    background: $red;
    p{
      color: #fefefe;
    }
    .rate
    {
      font-size: 1.6rem;
      span{
        color: #fefefe;
        font-size: 0.7rem;
      }
    }
    .rate_title{
      color: #ffbdbd;
      line-height: 1.5rem;
    }
    .invest_from {
      @include ct;
      border: 1px solid #fff;
      width: 25%;
    }
    .detail_value_infos {
      ul{
        background: #f76e6d;
        height: 3rem;
        margin: 1rem 0;
        li{
          @include fl;
          width: 33%;
          text-align: center;
          p{
            height: 1.5rem;
            line-height: 1.5rem;
          }
        }
      }
    }
  }
  .step {
    background: #fff;
    .step_block {padding-top: 0.6rem;}
    ul{
      li{
        @include fl;
        text-align: center;
        width: 33%;
        img{
          width: 40%;
        }
        p{
          font-size: 0.68rem;
          line-height: 1.2rem;
        }
      }
    }
    .pro_info {
      color: #ccc;
      font-size: 0.72rem;
      width: 86%;
      margin-left: 7%;
      border-bottom: 1px solid #ddd;
      height: 2.8rem;
      line-height: 2.8rem;
      span{
        padding-left: 1rem;
        color: #333;
      }
    }
  }
  .btn_invest {position: fixed;bottom: 0;background: #f65958;color: #fff;}

  /*tab切换*/
  .nav{background: $fc;}
  .tab_btn{
    width: 19.8%;
    box-shadow: none;
    padding: 0;
    border-radius: inherit;
    margin: 0 6%;
    background: $fc;
  }
  .mint-button{
    font-size: 0.638rem;
  }
  .tab_selected{
    color: #ee6a28;
    border-bottom: 2px solid #ee6a28;
  }
  .list_container{
    margin-top: 0.2rem;
    min-height: 22.2rem;
  }
  h4{
    margin-bottom: 0.2rem;
    font-size: 0.51rem;
    i{
      width: 0.14rem;
      height: 0.46rem;
      border-radius: 4px;
      display: inline-block;
      margin-right: 0.2rem;
      background: #fc5c3f;
    }
  }
  .tab1{
    background: $fc;
    padding: 0.341rem;
  p{font-size: 0.51rem;}
    p.statement{@include sc(0.382rem,#6a6a6a)}
  th{color: #999;min-width: 3.85rem;}
  th,td{font-size: 0.51rem;text-align: left;line-height: 1.2rem;}
  }
  .tab1>div{border-bottom: 1px solid #e6e6e6;padding: 0.45rem 0;}
  .invest_btn{position: fixed;bottom: 0;height: 1.95rem;width: 100%;color: $fc;background: $mainColor;font-size: 0.723rem;z-index: 1000;
    img{
    @include wh(0.968rem,0.968rem);
      position: absolute;
      left: 5.2rem;
    }
  }
  .invest_btn.gray{background: #ccc;}
  .mint-tab-container-item .col-4{
    text-align: center;
    font-size: 0.638rem;
    background: #fff;
    line-height: 1.4rem;
    border-bottom: 1px solid #eee;
  }
</style>
