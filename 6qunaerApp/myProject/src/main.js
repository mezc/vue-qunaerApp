// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//整个项目的入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/style/reset.css"
// 1像素边框显示多像素问题解决方案，引入border.css
import "./assets/style/border.css"
//解决不同浏览器click事件延迟300ms,引入fastclick模块，cnpm i fastclick -S
import fastClick from "fastclick"
// 引入iconfont.css
import "./assets/style/iconfont.css"
//引入制作轮播图的插件vue-awesome-swiper
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
