<template>
  <div class="ik_progress" id='ik-progress'>
    <slot name="start"></slot>
    <div class="content">
      <div class="runway" :style="{ height: barHeight + 'px' }"></div>
      <div class="progress" :style="{ width: value + '%', height: barHeight + 'px',background:progressColor,}"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.ik_progress {
  position: relative;
  display: flex;
  height: 30px;
  line-height: 30px;
  .content {
    position: relative;
    flex: 1;
  }
  .runway {
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    left: 0;
    right: 0;
    background-color: #ebebeb;
    height: 3px;
    border-radius: 15px;
    transition: width 4s ease-in-out;
  }
  .progress {
    position: absolute;
    display: block;
    top: 50%;
    transform: translate(0, -50%);
    width: 0;
    border-radius: 15px;
    transition: width 1s ease-in-out;
  }
}
</style>

<script type="text/ecmascript-6">
  export default {
    name: 'ik-progress',

    props: {
      value: {
        type: Number,
        default: 0
      },
      barHeight: {
        type: Number,
        default: 3
      },
      progressColor:{
        type:String,
        default:"#26a2ff"
      }
    }
  };
</script>
