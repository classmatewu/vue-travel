<template>
  <div>
    <swiper class="icons" :options="swiperOption">
      <swiper-slide v-for="(pages, index) in swiperPages" :key="index">
        <!-- 由于router-link默认会将节点元素渲染成a标签，所以里面的字体颜色会改变，
        所以我们再加tag="div"，即意味着该元素还是div，只不过它有a标签能实现链接跳转的功能 -->
        <router-link
          tag="div"
          class="aIcon" 
          v-for="item in pages" 
          :key="item.id"
          :to="'/detail/' + item.id"
        >  <!-- to属性绑定了，跳到动态地址页面，所以路由配置的地址也是动态的了 -->
          <div class="aIcon-iconfont">
            <span class="iconfont">&#xe79d;</span>
          </div>
          <p class="aIcon-text">{{ item.desc }}</p>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      swiperOption: {
        autoplay: false // 轮播图不自动轮播
      }
      // iconArr: [{
      //   id: "01",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦打卡机受得了了看见了看见"
      // }, {
      //   id: "02",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦"
      // }, {
      //   id: "03",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦"
      // }, {
      //   id: "04",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦"
      // }, {
      //   id: "05",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦"
      // }, {
      //   id: "06",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦"
      // }, {
      //   id: "07",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦"
      // }, {
      //   id: "08",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦"
      // }, {
      //   id: "09",
      //   iconfontId: "&#xe79d;",
      //   desc: "大麦"
      // }]
    }
  },
  props: {
    iconArr: Array
  },
  // 计算属性，用于计算，自带缓存机制，若值没有被修改则不会重新计算，且在缓存中，调用快，性能高
  // 写法是把要计算的属性在computed里定义成一个函数，并把计算结果return出去，在外面把这个在
  // computed里的这个函数当属性用，即调用时不用加()
  computed: {
    // 算法要实现的就是：
    // 循环遍历iconArr数组，判断是第几页，若该页数组（即第二维数组）为空，则新建一个空的页数组，
    // 将iconArr元素推进所在的页数组中，这些页数组是二维数组swiperPages的子元素
    swiperPages () {
      const swiperPages = []; // swiperPages其实是一个二维数组，第一维表示各个轮播页面，第二维表示页面里的各个iconfont
      this.iconArr.forEach((item, index) => { // 循环遍历iconArr数组的每个元素，将各个元素放到swiperPages二维数组里对应位置
        const pageIdx = Math.floor(index / 8); // 第几个轮播页面，取整数
        const iconIdx = Math.floor(index % 8); // 该页轮播页面下标为几
        if(!swiperPages[pageIdx]) { // 若第二维数组为空，则创建一个，将元素推到第二维数组中
          swiperPages[pageIdx] = [];
        }
        swiperPages[pageIdx].push(item);
        // 不能用下面这一句，因为js数组不允许这样的二维数组操作，必须定义出swiperPages[pageIdx] = []
        // swiperPages[pageIdx][iconIdx] = item; // 将该iconArr数组元素放到swiperPages二维数组中
      });
      return swiperPages
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式里面要引用其他样式，且要用别称，就得在别称前面加~ 
  @import "~@/assets/styles/mixins.styl"
  // 图标列表大容器
  .icons
    width: 100vw // 这句也可以不加，因为div容器默认width就是100vw
    height: 50vw
    background-color: red

    // 一个图标的容器
    .aIcon
      width: 25vw // 一个图标的容器宽是
      height: 25vw
      // 注意，padding-bottom: xx%，都是相对底层容器宽而言的 ？？
      background-color: #fff
      float: left
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center

      // .iconfont样式
      .iconfont
        font-size: 1.2rem

      // text文本样式
      .aIcon-text
        margin-top: .15rem
        // ellipsis() // 引入无效啊，在flex: 1;容器出加：min-wudth: 0; 也无效啊
</style>