<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="财神" @click="gotoAddress('/home')">
      <img slot="icon" src="../../../static/images/tabBar/recommend.png">
      外卖
    </mt-tab-item>
    <mt-tab-item id="理财" @click="gotoAddress('/invest')">
      <img slot="icon" src="../../../static/images/tabBar/money.png">
      理财
    </mt-tab-item>
    <mt-tab-item id="我的" @click="gotoAddress('/account')">
      <img slot="icon" src="../../../static/images/tabBar/myAccount.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    }
  }
</script>
