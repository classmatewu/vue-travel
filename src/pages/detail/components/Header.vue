<template>
  <div class="container">
    <router-link tag="div" to="/" class="back" v-show="flag">
        <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="detail-header" v-show="!flag" :style="opacityStyle">
      <router-link tag="div" to="/">
        <span class="iconfont header-back">&#xe624;</span>
      </router-link>
      <p class="title">景点详情</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      flag: true,
      // 用于header的渐隐渐现的效果，滚动到60慢慢出现，到140完全出现
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    changeFlag () {
      const top = document.documentElement.scrollTop;
      console.log(top);
      if(top >= 60){ // 滑动超过60，则显示header，隐藏圆形返回按钮
        this.flag = false;
        // 实现渐隐渐现的效果，从60开始出现，140完全出现
        let opacity = top / 140;
        this.opacityStyle.opacity = (top > 140 ? 1 : opacity)
      }
      else{ // 否则，则隐藏header，显示圆形返回按钮
        this.flag = true;
      }
      console.log(this.flag)
    }
  },
  // <router-view>标签必须被<keep-alive>标签包裹才能触发activated等函数
  activated () {
    window.addEventListener("scroll", this.changeFlag);
  },
  // 由于window.addEventListener("scroll", this.changeFlag);是绑定在window上的，
  // 即为全局事件，这样不仅在detail页面滚动会触发，在其他页面滚动也会触发，所以我们必须对其解绑
  deactivated () {
    window.removeEventListener("scroll", this.changeFlag);
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl' // 引入varibles.styl定义的变量styl样式文件
  .container
    font-size: .33rem
    .back
      width: 10vw
      height: 10vw
      border-radius: .9rem
      background-color: rgba(0, 0, 0, 0.7)
      position: absolute
      top: .2rem
      left: .2rem
      display: flex
      align-items: center
      justify-content: center
    .detail-header
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 10vw
      background-color: $bgColor
      display: flex
      flex-direction: row
      align-items: center
      .header-back
        margin-left: .2rem
      .title
        // position: relative
        margin: 0 auto // 这里设置得不是很好，文字并没有在父容器居中，而是居中后右移了.2rem

</style>