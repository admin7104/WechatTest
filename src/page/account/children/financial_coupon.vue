<template>
  <div>
    <head-top :head-title="headTitle" is-back="true" @go-page="$router.push('account')"></head-top>
    <div class="list_content">
      <mt-navbar v-model="selected" class="nav_tab">
        <mt-button :class="selected=='invest_list1'?'current col-4':' col-4'" @click="changeType('invest_list1')">红包券</mt-button>
        <mt-button :class="selected=='invest_list2'?'current col-4':' col-4'" @click="changeType('invest_list2')">加息券</mt-button>
        <mt-button :class="selected=='invest_list3'?'current col-4':' col-4'" @click="changeType('invest_list3')">现金券</mt-button>
      </mt-navbar>
      <div class="coupon_list">
        <mt-tab-container v-model="selected" swipeable>
          <mt-tab-container-item id="invest_list1" v-show="selected=='invest_list1'">
            <ul>
              <li class="red_envelopes used">
                <div class="left"><p class="money">188元</p><p>红包券</p></div>
                <div class="right">
                  <p class="title">新手礼包188元</p>
                  <p class="use_project">可用产品：1月标以上</p>
                  <p class="use_rule">使用规则：投资满500元以上</p>
                  <p class="use_tile">使用期限至2019.01.01</p>
                </div>
                <img :src="usedImg">
              </li>
              <li class="red_envelopes overdue">
                <div class="left"><p class="money">188元</p><p>红包券</p></div>
                <div class="right">
                  <p class="title">新手礼包188元</p>
                  <p class="use_project">可用产品：1月标以上</p>
                  <p class="use_rule">使用规则：投资满500元以上</p>
                  <p class="use_tile">使用期限至2019.01.01</p>
                </div>
                <img :src="overdueImg">
              </li>
              <li class="red_envelopes" v-for="n in 4">
                <div class="left"><p class="money">188元</p><p>红包券</p></div>
                <div class="right">
                  <p class="title">新手礼包188元</p>
                  <p class="use_project">可用产品：1月标以上</p>
                  <p class="use_rule">使用规则：投资满500元以上</p>
                  <p class="use_tile">使用期限至2019.01.01</p>
                </div>
              </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="invest_list2" v-show="selected=='invest_list2'">
            <ul>
              <li class="increase_interest">
                <div class="left"><p class="money">188元</p><p>红包券</p></div>
                <div class="right">
                  <p class="title">新手礼包188元</p>
                  <p class="use_project">可用产品：1月标以上</p>
                  <p class="use_rule">使用规则：投资满500元以上</p>
                  <p class="use_tile">使用期限至2019.01.01</p>
                </div>
              </li>
              <li class="increase_interest used">
                <div class="left"><p class="money">188元</p><p>红包券</p></div>
                <div class="right">
                  <p class="title">新手礼包188元</p>
                  <p class="use_project">可用产品：1月标以上</p>
                  <p class="use_rule">使用规则：投资满500元以上</p>
                  <p class="use_tile">使用期限至2019.01.01</p>
                </div>
                <img :src="usedImg">
              </li>
              <li class="increase_interest overdue">
                <div class="left"><p class="money">188元</p><p>红包券</p></div>
                <div class="right">
                  <p class="title">新手礼包188元</p>
                  <p class="use_project">可用产品：1月标以上</p>
                  <p class="use_rule">使用规则：投资满500元以上</p>
                  <p class="use_tile">使用期限至2019.01.01</p>
                </div>
                <img :src="overdueImg">
              </li>
            </ul>
          </mt-tab-container-item>
          <mt-tab-container-item id="invest_list3" v-show="selected=='invest_list3'">
            <ul>
              <li class="cash">
                <div class="left"><p class="money">188元</p><p>红包券</p></div>
                <div class="right">
                  <p class="title">新手礼包188元</p>
                  <p class="use_project">可用产品：1月标以上</p>
                  <p class="use_rule">使用规则：投资满500元以上</p>
                  <p class="use_tile">使用期限至2019.01.01</p>
                </div>
              </li>
            </ul>
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
        headTitle: "理财券",
        selected: 'invest_list1',
        overdueImg: require('../../../../static/images/account/coupon/used.png'),
        usedImg: require('../../../../static/images/account/coupon/overdue.png')
      }
    },
    mounted(){
      this.$("#app")[0].style.backgroundColor = "#f1f1f1";
    },
    components:{
      headTop
    },
    methods:{
      changeType(selected){
        this.selected = selected;
        this.$router.push({path:'/financial_coupon',query:{selected:selected}});
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../style/mixin.scss';
  .list_content{
    padding-top: 1.95rem;
    padding-bottom: 2rem;
    .nav_tab{
      width: 14.3829rem;
      margin: 0.4255rem auto;
      height: 1.319rem;
      border-radius: 4px;
      border: 2px solid $mc;
      button{
        height: 100%;
        box-shadow: none;
        @include sc(0.5106rem,$mc);
      }
      button.current{
        background: $mc;
        border-radius: 0;
        color: #fff;
      }
    }
    .coupon_list{
      li{
        position: relative;
        background-size: 100% 100%;
        margin: 0.4255rem auto 0;
        width: 15.106rem;
        height: 4.468rem;
        >img{
           position: absolute;
           width: 3.106rem;
           height: 2.957rem;
           right: 0;
           top: 0.2rem;
         }
        .left{
          padding: 1rem 1.1276rem;
          text-align: center;
          p{
            @include sc(0.6805rem,$fc);
          }
          .money{
            font-size: 1.0638rem;
          }
        }
      .right{
          margin: 0.6383rem 0.6383rem 0 0.6383rem;
          width: 8.1276rem;
          p{
            text-align: left;
            @include sc(0.5106rem,#666);
            margin-top: 0.1127rem;
          }
          .title{
            font-size: 0.5957rem;
            margin-top: 0;
            margin-bottom: 0.1127rem;
          }
        }
      }
      li.red_envelopes{
        background-image: url("../../../../static/images/account/coupon/bg_1.png");
      }
      li.red_envelopes.used,li.red_envelopes.overdue{
        background-image: url("../../../../static/images/account/coupon/bg_1_disable.png");
      }
      li.increase_interest{
         background-image: url("../../../../static/images/account/coupon/bg_2.png");
      }
      li.increase_interest.used,li.increase_interest.overdue{
        background-image: url("../../../../static/images/account/coupon/bg_2_disable.png");
      }
      li.cash{
        background-image: url("../../../../static/images/account/coupon/bg_3.png");
      }
    }
  }
</style>
