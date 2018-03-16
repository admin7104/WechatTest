<template>
  <div>
    <head-top :head-title="headTitle" isBack="true" @go-page="$router.go(-1)"></head-top>
    <div class="swiper-container project-swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="project_info">
            <div class="info_top block">
              <p class="project_title">财神票据A期甲子号</p>
              <p class="project_interest">12.08%<span class="extra_interest">+3.00%</span></p>
              <p class="text">预期年化收益率</p>
            </div>
            <section class="invest_p">
              <ul>
                <li>
                  <p class="text">项目总额</p>
                  <p>200,000.00</p>
                </li>
                <li>
                  <p class="text">投资期限</p>
                  <p>30天</p>
                </li>
                <li>
                  <p class="text">起投金额</p>
                  <p>100元</p>
                </li>
              </ul>
              <div class="project_progress">
                <div class="progress_bg"></div>
                <div class="progress_value" :style="'width: '+progress_value+'%;'"></div>
              </div>
              <p class="text"><span class="left">已投{{progress_value}}%</span><span class="right">剩余可投<i>100,000.00</i>元</span></p>
            </section>
            <section class="project_intro">
              <h4><i></i>项目介绍</h4>
              <div class="intro_content">
                <ul>
                  <li><p>产品发布</p></li>
                  <li><p>预计起息</p></li>
                  <li><p>预计到期</p></li>
                </ul>
                <ul class="progress_values">
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
                <ul>
                  <li><p>2017年12月29号</p></li>
                  <li><p>2017年12月29号</p></li>
                  <li><p>2017年12月29号</p></li>
                </ul>
                <div class="step_progress">
                  <div class="step step_active"></div>
                  <div class="step"></div>
                </div>
              </div>
              <p class="desc">
                财神票据是智慧财神为用户准备的高收益互联网金融投资理财专享标。<br>
                1.本产品按天计息，投标之日起即开始计息。还款期限到后一次性还本付息。<br>
                2.百元起投，投资上线为标的总额，投资倍数为100的倍数。<br>
                3.投资成功后不予撤销。<br>
                4.最终解释权归智慧财神所有。
              </p>
              <p class="tips">温馨提示：投资有风险，理财需谨慎</p>
            </section>
            <button class="pull">下拉显示更多</button>
          </div>
        </div>

        <div class="swiper-slide" style="padding-top: 1.95rem;">
          <div>
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
                        <td>神车通</td>
                      </tr>
                      <tr>
                        <th>加入条件</th>
                        <td>稳健性及以上投资者</td>
                      </tr>
                      <tr>
                        <th>计息日</th>
                        <td>2018年1月2日</td>
                      </tr>
                      <tr>
                        <th>锁定期</th>
                        <td>三个月</td>
                      </tr>
                    </table>
                  </div>
                  <div class="p_desc">
                    <h4><i></i>产品描述</h4>
                    <p>本债权是由杭州萧驰汽车销售有限公司提供，系办理合同编号为【CSQC-20170013】的汽车金融公司间客金融业务。</p>
                  </div>
                  <div class="p_opera">
                    <h4><i></i>第三方合作机构</h4>
                    <p>杭州萧驰汽车销售有限公司是一家主要从事“汽车销售、汽车银行按揭及汽车抵押贷款业务代理服务、各种汽车咨询服务，二手车交易”的私营企业，当前公司的业务范围实际覆盖杭州、临安、富阳、宁波市场并在积极向全省拓展，其他区域也在积极铺设网点。公司在2016年09月已成为中国工商银行浙江市场汽车银行按揭业务额最大的汽车销售公司。</p>
                  </div>
                  <div class="p_suggest">
                    <h4><i></i>独立风控审核意见</h4>
                    <p>杭州萧驰汽车销售有限公司均已对借款人的基础信息进行审核，经该机构核实，购车人身份信息、购车信息、借款合同及担保函等相关系列材料，证实借款主体相关信息齐全、真实、可靠。</p>
                  </div>
                  <div class="p_ways">
                    <h4><i></i>风控措施</h4>
                    <p>1、合作机构对借款主体进行严格尽职调查，评估该笔债权所涉及的债权转让人收入稳定，还款来源真实有保障；<br>
                      2、债权转让人保证借款人信息真实有效，收入稳定，信用状况良好；<br>
                      3、合作机构行业口碑优良，具有较强的业务及风险把控能力，通过全国法院公开数据查询，企业和法人代表近五年无失信被执行信息，无被执行案件，无不良信用记录；<br>
                      4、车辆所有人及其财产共有人连带担保，三方机构提供变现担保、代偿，保障措施完备。
                    </p>
                  </div>
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container2">
                <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
              </mt-tab-container-item>
              <mt-tab-container-item id="tab-container3">
                <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>
          </div>
        </div>
      </div>
    </div>
    <button class="invest_btn"><img class="animated pulse infinite" src="../../../static/images/home/investanimation@2x.png">立即投资</button>
  </div>
</template>

<script>
  import headTop from '@/components/header/head'
  import Swiper from 'swiper'
  export default {
    data: function () {
      return {
        headTitle: "财神汽车",
        progress_value:'',
        indeterminate: false,
        counterClockwise: false,
        hideBackground: false,
        active: 'tab-container1',
        project: {},
        projectInfo: {},
        pdv: {},
      }
    },
    components:{
      headTop
    },
    mounted(){
      const that = this;
      setTimeout(function () {
        that.progress_value = 60;
      });
      let mySwiper1 = Swiper('.project-swiper-container', {
        direction: 'vertical',
      });
      let mySwiper2 = Swiper('.swiper-container-scrollbar', {
        /*scrollbar: '.swiper-container-scrollbar .swiper-scrollbar',*/
        direction: 'vertical',
        /*slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        nested: true*/
      });
    },
    methods:{
      async tenderDetail(sessionId,projectId){
        this.project =  await myTenderDetail(sessionId,projectId);
        if(this.project.retcode == success)
        {
          this.projectInfo = this.project.projectInfo;
          this.pdv = this.project.pdv;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .header_top{
    height: 1.95rem;
    color: $fc;
    background-image: -webkit-linear-gradient(left, #f95f36, #fe6e46, #ff8655);
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
  /*详情*/
  .project-swiper-container{height: -webkit-fill-available;background: #e5e5e5;}
  .swiper-wrapper{margin-bottom: 1.95rem;}
  .swiper-slide-active{min-height: 100%;height: fit-content!important;}
  .swiper-slide-next{display: none;}
  .project_info{
    background: #f7f9fb;
  }
  .swiper-slide{
    overflow: auto;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
  }
  .block{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top center;
  }
  .info_top{
    text-align: center;
    padding-top: 1.95rem;
    height: 8.08rem;
    background-image: url("../../../static/images/invest/rate_bg.png");
    p{color: $fc;}
    p.text{font-size: 0.511rem;}
    p.project_title{font-size: 0.425rem;font-weight: lighter;margin-top: 0.6rem;}
    p.project_interest{font-size: 1.702rem;}
    span.extra_interest{font-size: 0.51rem;color: $fc;}
  }
  .invest_p{
    height: 5.66rem;
    background: $fc;
    padding: 0.628rem;
    li{width: 31.8%;display: inline-block;}
    li:nth-child(2){text-align: center;}
    li:nth-child(3){text-align: right;}
    p{color: #444;font-size: 0.628rem;}
    p.text{color: #999;font-size: 0.51rem;
      span{color: #666;line-height: 48px;
        i{color: $mainColor;}
      }
    }
    .project_progress{
      position: relative;
      height: 18px;
      .progress_bg,.progress_value{
        position: absolute;
        height: 6px;
        border-radius: 15px;
        top: 12px;
      }
      .progress_bg{
        background: #e5e5e5;
        width: 100%;
      }
      .progress_value{
        background-image: -webkit-linear-gradient(left, #ff8c67, #fd6745);
        /*background: #fd6745;*/
        width: 0;
        transition: width 1s ease-in-out;
      }
    }
  }
  .project_intro{
    position: relative;
    margin-top: 0.297rem;
    padding-bottom: 1.102rem;
    background: #fff;
    h4{
      padding-left:0.628rem;
      font-size: 0.638rem;
      color: #444;
      @include hh(2.217rem,2.217rem);
      border-bottom: 1px solid #f4f4f4;
      i{
        width: 0.14rem;
        height: 0.46rem;
        border-radius: 4px;
        display: inline-block;
        margin-right: 0.2rem;
        background: #fc5c3f;
      }
    }
    .intro_content{padding: 0 0.628rem;}
    ul{
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
        .circle_sel{
          background: $mainColor;
        }
        p{
          font-size: 0.51rem;
          color: #999;
        }
      }
    }
    ul:nth-child(1){
      padding-top: 0.5rem;
    }
    .step_progress{
      position: absolute;
      top: 4.2rem;
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
  .desc,.tips{@include sc(0.51rem,#444);padding: 0 1.12rem;}
  .tips{margin-top: 0.51rem;}

  .pull{@include hh(2.085rem,2.085rem);width: 100%;@include sc(0.51rem,#909090);}

  /*tab切换*/
  .nav{background: $fc;}
  .tab_btn{
    width: 20%;
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
  .list_container{margin-top: 0.2rem;}
  .tab1{
    background: $fc;
    padding: 0.341rem;
    p{font-size: 0.51rem;}
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
    th{color: #999;min-width: 3.85rem;}
    th,td{font-size: 0.51rem;text-align: left;line-height: 1.2rem;}
  }
  .tab1>div{border-bottom: 1px solid #e6e6e6;padding: 0.45rem 0;}
  .invest_btn{position: fixed;bottom: 0;height: 1.95rem;width: 100%;color: $fc;background: #ccc;font-size: 0.723rem;z-index: 1000;
    img{
      @include wh(0.968rem,0.968rem);
      position: absolute;
      left: 5.2rem;
    }
  }
</style>
