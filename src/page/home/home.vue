<template>
  <div class="page-swipe">
    <app-banner :listImg="listImg"></app-banner>
    <section class="button-group">
      <ul>
        <li class="left" v-for="buttonItem in buttonList">
          <router-link :to="buttonItem.url">
            <img :src="buttonItem.img">
            <p>{{buttonItem.title}}</p>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="project-content">
      <div class="project-container" v-if="1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(project,index) in projects">
            <router-link :to="{path: '/invest_detail'}">
              <section class="project-item">
                <h3>神车通171213010{{index}}<img src="../../../static/images/home/biaoqian_shoutou.png"></h3>
                <loading-progress
                  :progress="progress"
                  :indeterminate="indeterminate"
                  :counter-clockwise="counterClockwise"
                  :hide-background="hideBackground"
                  shape="almostcircle"
                  size="100"
                  fill-duration="1"
                />
                <div class="project_infos">
                  <p class="rate_title">预期年化收益</p>
                  <p class="rate mc">12.<span class="mc">80%</span></p>
                  <span class="rate_dec mc">期限短&nbsp;收益高</span>
                  <ul>
                    <li>
                      <p class="invest_value mc">30<span class="mc sf">天</span></p>
                      <p class="sf">理财期限</p>
                    </li>
                    <li>
                      <p class="invest_value mc">100<span class="mc sf">元</span></p>
                      <p class="sf">起投金额</p>
                    </li>
                  </ul>
                  <mt-button class="btn_invest" type="danger">立即投资</mt-button>
                </div>
              </section>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <footer-guide></footer-guide>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import Banner from '@/components/common/Banner'
  import footerGuide from '@/components/footer/footerGuide'
  import '../../../static/common.css'
  import {mapState} from 'vuex'
  import {getStore} from '@/utils/mUtils'
  export default {
    data: function () {
      return {
        listImg: [
          {
            url: "http://www.itcast.cn/subject/phoneweb/index.html",
            img: "../../static/images/banner/banner1.png"
          },
          {
            url: "http://www.itcast.cn/subject/phoneweb/index.html",
            img: "../../static/images/banner/banner2.png"
          },
          {
            url: "http://www.itcast.cn/subject/phoneweb/index.html",
            img: "../../static/images/banner/banner3.png"
          },
          {
            url: "http://www.itcast.cn/subject/phoneweb/index.html",
            img: "../../static/images/banner/banner4.png"
          },
          {
            url: "http://www.itcast.cn/subject/phoneweb/index.html",
            img: "../../static/images/banner/banner5.png"
          }
        ],
        buttonList:[
          {
            url:"http://www.baidu.com",
            img:"../../static/images/home/safe.gif",
            title:"投资安全"
          },
          {
            url:"http://www.baidu.com",
            img:"../../static/images/home/activity.gif",
            title:"活动中心"
          },
          {
            url:"http://www.baidu.com",
            img:"../../static/images/home/invite.gif",
            title:"邀请好友"
          }
        ],
        projects:[1,1,1],
        indeterminate: false,
        progress: 1-0.2,
        counterClockwise: false,
        hideBackground: false,
      }
    },
    mounted(){
      var swiper = new Swiper('.project-container', {
        loop: false,
        effect: 'coverflow',
        grabCursor: true,
        slidesPerView: 'auto',
        coverflowEffect: {

        }
      });
      console.log(getStore('loginName'))
    },
    computed:{
      ...mapState([
        'geohash'
      ])
    },
    methods:{
    },
    components:{
      'app-banner':Banner,
      footerGuide
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .vue-progress-path{width: 10rem!important;height: 10rem!important;stroke-width:6;position: absolute;left: 1rem;}
  .mc{
    color: $mc;
  }
  .sf{
    font-size: 0.4rem;
  }
  .button-group{
    height: 3.42rem;
    background: #fff;
  }
  .button-group li{
    width: 33.33%;
    text-align: center;
    height: 3.42rem;
    box-sizing: border-box;
    padding: 8px 0;
  }
  .button-group li p{
    color: #333;
    font-size: .6rem;
  }
  .button-group li a {
    height: 100%;
    display: inline-block;
  }
  .button-group li img{
    height: 1.6rem;
    width: inherit;
  }
  .project-content{
    overflow: hidden;
    padding: 0 0.6rem 0 0.6rem;
    .project-container{
      width: 100%;
    }
    .swiper-slide {
      width: 13rem;
      background-position: center;
      background-size: cover;
      height: 14rem;
    }
  }
  .project-item{
    background: #fff;
    margin-top: .6rem;
    padding: 0 .6rem .6rem;
    border-radius: 0.2rem;
    width: 100%;
  }
  .project-item h3{
    font: 0.58rem/1.2rem "Microsoft YaHei";
  }
  .project-item h3 img{
    width: 2.2rem;
    float: right;
  }
  .project_infos{
    text-align: center;
    padding-top: 2rem;
  }
  .rate_title{
    font-size: 0.6rem;
    color: #999;
    text-align: center;
  }
  .rate,.rate span{
    font-size: 1.6rem;
    font-weight: bold;
  }
  .rate span{
    font-size: 1.4rem;
  }
  .rate_dec{
    font-size: 0.4rem;
    border: 1px solid $mc;
    border-radius: 4px;
    padding: 2px 4px;
  }
  .project-item ul li{
    width: 48%;
    display: inline-block;
  }
  .btn_invest{
    background: $mc;
    width: 100%;
  }
</style>
