<template>
    <div class="">
      <head-top :head-title="headTitle" is-back="true" @go-page="$router.go(-1)"></head-top>
      <div class="top_container container-fluid">
        <div class="row1">
          <img src="../../../../static/images/account/certification.png"/>
          <p>姓名<span>{{myAccount.decryptRealName}}</span></p>
          <p>身份证号<span>{{myAccount.idCardNo}}</span></p>
          <p>认证手机号<span>{{myAccount.decryptMobile}}</span></p>
        </div>

      </div>

    </div>
</template>

<script>
import headTop from '@/components/header/head'
import {mapState, mapMutations} from 'vuex'
import {myPayAccount} from '@/service/getData'
import {success} from '@/config/env'

export default {
    data(){
        return{
          headTitle: '实名认证',
          myAccount:{}
        }
    },
    created(){
      this.INIT_USERINFO();
    },
    mounted(){
        this.getMyPayAccount();
    },
    components:{
        headTop,
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
      async getMyPayAccount(){
        let data =  await myPayAccount(this.userInfo.sessionid);
        if(data.retcode == success)
        {
          this.myAccount = data.account;
        }
      },
    },
    watch: {

    }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
   @import '../../../style/mixin';
.actionsheet{
  position: absolute;
  bottom: 5rem;
}
   .top_container{
     padding-top: 1.95rem;
     .row1{
       @include bg();
       img{
         width: 100%;
       }
        p{
          margin-left: 0.5rem;
          color: #333;
          font-size: 0.6809rem;
          border-bottom: 1px solid #e5e5e5;
          height: 1.9149rem;
          line-height: 1.9149rem;
          span{
            font-size: 0.5957rem;
            float: right;
            margin-right: 0.5rem;
          }
        }
       p:last-child{
         border-bottom: none;
       }

     }

   }

  .container_block{
    margin-top: 0.5rem;
  }
.row {
  @include bg();
  .cell{
    margin-left: 15px;
    border-bottom: 1px solid #e6e6e6;
    display: block;
    height: 1.9149rem;
    line-height: 1.9149rem;
    .left{
      @include sc(0.6383rem,#333);
    }
    .right{
      padding-right:0.6383rem;
      @include sc(0.5106rem,#999);
      img{
       @include wh(0.3830rem,0.6383rem);
       position: relative;
        top: 0.15rem;
      }
    }
  }

}
.exit_login{
  @include wh(14.6809rem,1.9149rem);
  @include sc(0.6809rem,#fff);
  @include bg(#fc5c3f);
  @include ct();
  @include borderRadius(5px);
  margin-top: 1rem;
}
</style>
