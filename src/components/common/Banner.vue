<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.img + ')' }"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data () {
      return {
        msg: ''
      }
    },
    props: ['listImg'],
    mounted() {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        effect:'fade',
        speed: 600,
        autoplay: 3000,
        onTouchEnd: function() {
          swiper.startAutoplay()
        }
      });
    }
  }
</script>
<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 180px;
  }
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-white .swiper-pagination-bullet {
    width:0.3rem;
    height: 0.3rem;
    display: inline-block;
    background: #b8b8b8;
    opacity: 1;
  }
  .swiper-pagination-white .swiper-pagination-bullet-active{
    background: #fff;
  }
</style>
