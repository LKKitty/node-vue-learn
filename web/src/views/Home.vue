<template>
  <div class="home">
   <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img class="w-100" src="../assets/images/e164adca6936d19292275179c3c65edb.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100"  src="../assets/images/e45f24980e2f83592e73fe0d48746e87.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100"  src="../assets/images/b96e6ac775b282ba7452a9b07df2eadd.png" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination pagination-home text-right px-3 pb-2"  slot="pagination"></div>
  </swiper>
  <!-- end-of-swiper -->
  <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
    <div class="d-flex flex-wrap">
      <div class="nav-item mb-3" v-for="n in 10" :key="n">
        <i class="sprite sprite-news"></i>
        <div class="py-2">爆料站</div>
      </div>
    </div>
    <div class="bg-light py-2 fs-sm">
      <i class="sprite sprite-arrow mr-1"></i>
      <span>收起</span>
    </div>
  </div>
  <!-- end of nav icons -->
  <div class="card p-3">
    <div class="card-header d-flex">
      <i class="iconfont icon-caidan1"></i>
      <div class="fs-xxl">新闻资讯</div>
    </div>
    <div class="card-body">

    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          autoplay:true,
          pagination:{
            el:".pagination-home"
          }
        }
    }
  },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
.pagination-home{
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background:map-get($colors,'white');
    &.swiper-pagination-bullet-active{
      background: map-get($colors,'info') !important
    }
  }
}
.nav-icons{
  border-top:1px solid $border-color;
  border-bottom:1px solid $border-color;
  .nav-item{
    width:25%;
    border-right:1px solid $border-color;
    &:nth-child(4n) {
      border-right:none;
    }
  }
}
</style>
