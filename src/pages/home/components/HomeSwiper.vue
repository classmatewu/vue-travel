<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-show="showSwiper"> 
      <!-- 得加v-show="showSwiper"这一句，否则由于初次渲染是空数组，会导致默认显示变成轮播图的最后一张，
      又由于为了尽量避免少地在视图层又逻辑计算，所以我们把showSwiper放在computed中进行计算 -->
      <!-- 循环轮播图 -->
      <swiper-slide v-for="item in swiperArr" :key="item.id">
        <img :alt="item.imgAlt" :src="item.imgUrl" />
      </swiper-slide>
      <!-- 页表项 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  // 数据
  data () {
    return {
      // 轮播图属性
      swiperOption: {
        pagination: '.swiper-pagination', // 加上这一句让轮播图下面有轮播的小点
        loop: true, // 让最后一张图片的下一张是第一张，实现循环轮播，而不是得往前翻
        //自动轮播，手指拨一下它就不会自动轮播了
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 2000, // 轮播速度2000ms
        direction: "horizontal", // 轮播方向，水平即横向
        observeParents: true, // 这两句是让轮播图轮播较稳定
        observer: true
      },
      // 轮播图内容，对象数组
    //   swiperArr: [{
    //     id: '01',
    //     imgAlt: '爱奇艺',
    //     imgUrl: require('@/assets/images/iqiyi.png')
    //     // imgUrl: 'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
    //   }, {
    //     id: "02",
    //     imgAlt: "VR技术",
    //     imgUrl: require('@/assets/images/vr.png')
    //     // require('../assets/a1.png')
    //   }, {
    //     id: "03",
    //     imgAlt: "微信张小龙",
    //     imgUrl: require("@/assets/images/wx.png")
    //   }]
    }
  },
  // 接收父组件穿肚过来的参数值
  props: {
    // 轮播图内容，对象数组
    swiperArr: Array
  },
  // 计算属性
  computed: {
    // 当轮播页面数组为空，即没有数据时，不显示轮播图，解决空数据到有数据后先显示最后一页的情况
    showSwiper () {
      return (this.swiperArr.length)
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式穿透
  // .wrapper类里只要有出现.swiper-pagination-bullet-active这个类名的，就杨勇这个样式，不管该类在不在该组件中
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff

  // 轮播图容器
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 80%
    background-color: #000
  // 轮播图样式
  // img
    // width: 100%
    // height: 80vw 
    // 不要设置高度也可以，它就是按原图笔记，
    // 但用vw为单位设置高度更灵活一点，可以设置高宽比来显示图片高度；
    // 且网速慢图片还没加出来时，由于先设置好了空间也不会有页面抖动的效果
  img 
    width: 100% // 利用.wrapper和img样式的结合实现与上面一样的效果，但是兼容性更好一点
    

</style>