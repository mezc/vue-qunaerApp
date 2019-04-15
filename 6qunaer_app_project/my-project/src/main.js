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


fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App : App}, 
  template: '<App/>'
})
