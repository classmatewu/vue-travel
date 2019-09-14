<template>
  <div class="container">
    <div class="banner">
      <img class="banner-img" src="/static/mock/images/vr.png" alt="VR技术">
      <div class="banner-desc">
        <p class="desc-text">这是5A景点</p>
        <div class="desc-num">
          <span class="iconfont banner-icon">&#xe6aa;</span>
          <p class="num">39</p>
        </div>
      </div>
      <detail-header></detail-header>
      <div></div>
      <!-- <detail-album></detail-album> -->
    </div>
  </div>
</template>

<script>
import DetailAlbum from "./Album.vue"
import DetailHeader from "./Header.vue"

export default {
  name: "Banner",
  components: {
    DetailAlbum,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height: 50rem // 设置页面足够长，让页面可以滚动起来
    .banner
      width: 100vw
      height: 80vw
      position: relative
      background-color: yellow
      color: #fff
      .banner-img
        width: 100vw
        height: 80vw
      .banner-desc
        width: 100vw
        height: 10vw
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        position: absolute
        bottom: 0vw
        // 设置banner-desc部分为黑色渐变
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .desc-num
          // float: right // 浮动和定位不能同时设置，定位会使浮动失效
          margin-right: .6rem
          font-size: .35rem
          display: flex
          flex-direction: row
          align-items: center
          background-color: red
        .desc-text
          font-size: .35rem
          margin-left: .6rem
          .num
            margin-left: .5rem // 为什么这一句会无效呢，在Header组件里做法一样却能成功呢
</style>