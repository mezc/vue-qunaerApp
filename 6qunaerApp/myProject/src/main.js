// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//整个项目的入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/style/reset.css"
// 1像素边框显示多像素问题解决方案，引入border.css
import "./assets/style/border.css"
//解决不同浏览器click事件延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
