import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(Router)

// 设置路由，即通过不同网址访问到不同页面
export default new Router({
  routes: [
    {
      // 根目录，即localhost:8080/#/
      path: '/',
      name: 'Home',
      component: Home
    }, {
      // localhost:8080/detail/。。
      path: '/detail/:id', // 动态路由，:id表示id是动态的
      name: 'Detail',
      component: Detail
    }
  ]
})
