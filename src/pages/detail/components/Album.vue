<template>
  <div class="container">
      <swiper :options="swiperOption" class="album-swiper"> 
        <!-- 循环轮播图 -->
        <swiper-slide>
          <img alt="VR技术" src="/static/mock/images/vr.png" />
        </swiper-slide>
        <swiper-slide>
          <img alt="微信" src="/static/mock/images/wx.png" />
        </swiper-slide>
        <!-- 页表项 -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Album",
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 分页器，属性可以去查看swiper3的官方API文档
        loop: true, // 可循环滑动
        paginationType: 'fraction', // 分式显示轮播位置
        observeParents: true, // 这两句是让轮播图轮播较稳定
        observer: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    // 让container覆盖全屏，让全屏为黑且不能滚动，覆盖页面所有其他东西
    z-index: 99
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    display: flex
    align-items: center
    color: #fff
    // .swiper-pagination
    //   bottom: -1rem
    img
      width: 100%
      height: 80vw
</style>