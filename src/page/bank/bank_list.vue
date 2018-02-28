<template>
  <div>
    <head-top :head-title="profiletitle" is-back="true" @go-page="$router.go(-1)"></head-top>
    <div class="bank_list">
      <div class="bank_item" v-for="item in bank_list">
        <div @click="returnBind(item.bankName,item.bankCode)">
          <img :src="item.bankImg">
          <span class="bank_name">{{item.bankName}}</span>
          <span class="limit">限额:单次:{{item.onceLimit}} 单日:{{item.dayLimit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import headTop from '@/components/header/head'
  import {mapState,mapMutations} from 'vuex'
  import {getBankSupportList} from '@/service/getData'
  import {success} from '@/config/env'
  import {getBankImg,getStore,setStore} from '@/config/mUtils'
  export default {
    data: function () {
      return {
        profiletitle: '选择银行卡',
        bank_list:{},
        bankInfo:{}
      }
    },
    components:{
      headTop,
    },
    created(){
      this.INIT_USERINFO();
    },
    mounted(){
      this.getBankList(1);
      if(getStore('bankInfo')){
        this.bankInfo = JSON.parse(getStore('bankInfo'));
      }
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
      async getBankList(page){
        const result =  await getBankSupportList(this.userInfo.sessionid,page);
        if(result.retcode == success)
        {
          this.bank_list = result.bankList;
          for(let i=0;i<this.bank_list.length;i++){
            this.bank_list[i].bankImg = getBankImg(this.bank_list[i].bankShortName);
          }
        }
        else {
          alert(result.retmsg)
        }
      },
      returnBind(bankName,bankCode){
        this.bankInfo.bankName = bankName;
        this.bankInfo.bankCode = bankCode;
        setStore('bankInfo',this.bankInfo);
        this.$router.push({path:'/bind_bank'})
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../style/mixin';
  .bank_list{
    padding-top: 1.95rem;
    background: #fff;
  }
  .bank_item{
    height: 72px;
    padding: 10px;
    border-bottom: 1px solid #e8e8e8;
    margin-left: 10px;
    img{
      float: left;
      margin-right: 10px;
      @include wh(2.6276rem,2.1276rem);
    }
    .bank_name{
      margin-top: 4px;
    }
    .bank_name,.limit{
      color: #333;
      font-size: 14px;
      float: left;
      width: 60%;
    }
  }
</style>
