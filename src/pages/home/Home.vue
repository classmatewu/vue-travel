<template>
    <div>
      <home-header :city="city"></home-header>
      <home-swiper :swiperArr="swiperArr"></home-swiper>
      <home-icons :iconArr="iconArr"></home-icons>
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/Icons.vue'

export default {
  name: 'Home',
  // 组件
  components: {
    HomeHeader, // es6语法，等价于es5的：HomeHeader: HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  // 数据
  data () {
    return {
      city: '',
      swiperArr: [],
      iconArr: []
    }
  },
  // 方法
  methods: {
    // 发送axios get请求api获取后端的home页面的数据
    getHomeInfo () {
      axios.get('/api/home.json') // 由于现在没有后端api，所以利用 配置文件，将以api开头的接口访问到转接到本地的static静态文件
        // 成功则进入
        .then(res => {
          console.log(res.data);
          res = res.data;
          if(res.ret && res.data){ // 如果ret=true即数据成功获取到 且 data不为空
            this.city = res.data.city;
            this.swiperArr = res.data.swiperArr;
            this.iconArr = res.data.iconArr;
          }
        })
    }
  },
  // 生命周期函数——页面挂载完成执行函数，即页面还没显示出来前执行
  mounted () {
    this.getHomeInfo();
  }
}
</script>

<style scoped>

</style>
