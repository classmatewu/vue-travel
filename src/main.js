// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick'; // 引入fastclick包解决部分设备点击响应300ms延迟问题
import App from './App';
import router from './router';
import '@/assets/styles/reset.css'; // 引入reset.css统一不同用户的显示样式效果
import '@/assets/styles/border.css'; // 引入border.css解决1px在不同分辨率屏幕下不同大小像素边框的问题
import '@/assets/styles/iconfont/home-header/iconfont.css'; // 引入iconfont图标css样式
import '@/assets/styles/iconfont/home-icons/iconfont.css'; // 引入iconfont图标css样式

// 引入vue-awesome-swiper轮播图包
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
