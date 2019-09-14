<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-center">
      <!-- <span class="search-icon iconfont">&#xe632;</span> -->
      <input class="header-input" type="text" placeholder="请输入地点">
    </div>
    <div class="header-right">
      <p>{{ city }}</p>
      <span class="iconfont option-icon">&#xe6aa;</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  // 接收父组件传递过来的值
  props: {
    city: String // 接收一个字符串类型的参数city
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl' // 引入varibles.styl定义的变量styl样式文件
  // header容器
  .header
    background-color: $bgColor // 设置容器背景颜色，引用定义的全局css变量
    color: #fff // 设置容器里的文字、iconfont图标颜色
    width: 100%
    height: .86rem // 这个可以换成vw为单位更加符合自适应设计，当然修改了之后输入框等的页要设成vw
    display: flex
    flex-direction: row

    // header-left容器
    .header-left
      width: 1rem
      display: flex
      align-items: center // 让back-icon交叉轴居中
      justify-content: center //同时主轴也居中

    // header-right容器
    .header-right
      width: 1.5rem
      display: flex
      flex-direction: row
      align-items: center // 让header-right里的文本和icon行排列且交叉轴居中
      justify-content: center //同时主轴也居中
      // option-icon图标
      .option-icon
        margin-left: .1rem

    // header-center容器
    .header-center
      display: flex
      flex: 1 //header-center容器自动撑开占满剩余空间
      align-items: center // 让输入框在header-center容器里交叉轴居中
      // 输入框
      .header-input
        display: flex
        flex: 1 // 让输入框自动撑开占满header-center容器
        height: .67rem
        border-radius: .1rem // 让输入框变成圆角
        text-indent: .2rem // 文本缩进

</style>
