import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/home/Home"
import City from "@/pages/city/City"
import Detail from "@/pages/detail/Detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home 
    },
    {
      path: '/city',
      name: 'City',
      component: City 
    },
    // 动态路由
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail 
    }
  ],
  //当切换路由时，让进入的显示页面x轴为0，y轴为0
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
