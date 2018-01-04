<template>
    <div class="">
      <head-top :head-title="profiletitle" is-back="true"></head-top>
      <form class="bind_bank">
        <p class="tips">*智慧财神采用数据加密，100%确保信息安全</p>
        <mt-field class="border_b" label="姓名" placeholder="请输入真实姓名" v-model="realname"></mt-field>
        <mt-field label="身份证号" placeholder="请输入真实身份证号" v-model="idcard"></mt-field>
        <p class="tips2">认证成功后不可修改</p>
        <mt-cell
          title="银行"
          class="border_b"
          :to="{path: '/bank_list'}"
          is-link
          :value="bankname">
        </mt-cell>
        <mt-field label="银行卡号" class="border_b" placeholder="请输入银行卡号" v-model="cardnum"></mt-field>
        <a class="over_click border_b" @click="overShow=true"><mt-cell
          title="开户行所在地"
          is-link
          :value="bankaddr">
        </mt-cell></a>
        <mt-field label="开户支行" placeholder="请输入支行名称（选填）" v-model="cardbranch"></mt-field>
        <mt-field style="margin-top: 0.6rem;" label="预留手机号" placeholder="请输入预留银行手机号" v-model="phone"></mt-field>
        <mt-button :class="ifChecked==true?'submit':'submit gray'">提交</mt-button>
        <div class="agree_div">
          <input @click="ifChecked=!ifChecked" type="checkbox" v-show="false" id="myCheck"><label class="left" for="myCheck"></label>
          <p class="agree left">我已同意并签署<router-link :to="{path: '/agreement/001'}">《XXXXX》</router-link></p>
        </div>
      </form>
      <div class="select_over" v-show="overShow" @click="overShow=false">
        <div class="picker_content">
          <div class="btn_group">
            <button class="left" @click="overShow=false">取消</button>
            <button class="right" @click="checkAddr">确定</button>
          </div>
          <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
        </div>
      </div>
    </div>
</template>

<script>
import headTop from '@/components/header/head'
import {mapState, mapMutations} from 'vuex'
import myaddress from '../../../static/address.json'

export default {
    data(){
        return{
          profiletitle: '实名与绑卡',
          overShow:false,
          realname:'',
          idcard:'',
          bankname:'',
          cardnum:'',
          cardbranch:'',
          phone:'',
          bankaddr:'',
          myAddressSlots: [
            {
              flex: 1,
              defaultIndex: 1,
              values: Object.keys(myaddress),  //省份数组
              className: 'slot1',
              textAlign: 'center'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: [],
              className: 'slot3',
              textAlign: 'center'
            }
          ],
          myAddressProvince:'省',
          myAddressCity:'市',
          ifChecked:false
        }
    },
    mounted(){
      if(this.$route.query.bankname!=undefined){
        this.bankname = this.$route.query.bankname;
      }
      this.$nextTick(() => { //vue里面全部加载好了再执行的函数  （类似于setTimeout）
        this.myAddressSlots[0].defaultIndex = 0
        // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
        //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
      });
    },
    components:{
        headTop,
    },

    computed:{

    },

    methods:{
      onMyAddressChange(picker, values) {
        if(myaddress[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
          picker.setSlotValues(1,myaddress[values[0]]); //
          this.myAddressProvince = values[0];
          this.myAddressCity = values[1];
        }
      },
      checkAddr(){
        this.bankaddr = this.myAddressProvince+'-'+this.myAddressCity;
        this.overShow = false;
      }
    },
    watch: {

    }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
   @import '../../style/mixin';


  .bind_bank{
    padding-top: 1.95rem;
    .tips{font-size: 0.6rem;
      color: #999;
      height: 1.2rem;
      line-height: 1.2rem;
      padding-left: 0.85rem;}
     .tips2{
       font-size: 0.26rem;
       color: #999;
       padding: 0.212rem;
     }
  }
   .select_over{
     position: fixed;
     bottom: 0;
     width: 100%;
     height: 100%;
     background: rgba(0,0,0,.3);
     .picker_content{
       bottom: 0;
       position: absolute;
       width: 100%;
       background: #fff;
     }
   }
   .btn_group{height: 1.44rem;}
   .btn_group button{
     background: transparent;
     font-size: 0.596rem;
     height: 1.44rem;
     width: 2.89rem;
   }
   .over_click{
     box-sizing: border-box;
     display: block;
     background: #fff;
     border-bottom: none;
   }
  .submit{
    background: #fc5c3f;
    color: #fff;
    width: 94%;
    margin: 0 auto;
    display: block;
    margin-top: 1.2rem;
  }
   .submit.gray{
     background: #ccc;
   }

   #myCheck + label{
     background-color: white;
     border-radius: 50%;
     border: 1px solid #d3d3d3;
     width:0.85rem;
     height: 0.85rem;
     display: inline-block;
     text-align: center;
     vertical-align: middle;
     line-height: 0.6rem;
   }
   #myCheck:checked + label{
     background-color: #52bb13;
   }
   #myCheck:checked + label:after{
     content:"\2713";
     color: #fff;
     font-size: 0.4rem;
   }
   .agree_div{
     height: 1.276rem;
     line-height: 0.98rem;
     padding-left: 0.51rem;
     margin-top: 0.48rem;
   }
  .agree{
    font-size: 0.6rem;
    color: #999;
    margin-left:0.42rem;
  }
  .agree a{
    color: #37abe7;
  }
</style>
