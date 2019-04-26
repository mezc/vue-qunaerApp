// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/styles/reset.css"
// 解决多倍屏中1像素边框被显示为多像素的问题
import "./assets/styles/border.css"
// 解决移动端某些机型在执行click事件时，延时300ms
import fastClick from "fastclick"
// import "./assets/styles/iconfont.css"
// 引入iconcss
import './assets/styles/iconfont.css'
//引入轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入vuex
import store from "./store/index.js"
Vue.use(VueAwesomeSwiper)



fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App : App}, 
  template: '<App/>'
})
