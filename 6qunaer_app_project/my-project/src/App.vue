<template>
  <div id="app">
    <!-- 显示当前路径所对应的组件  -->
    <!-- 意思是：路由加载过一次之后，就把路由上的内容放到内存之中，下次再进入到路由时，不需要重新渲染这个组件-->
    <!-- exclude不使用缓存，当进入页面时，mounted（）都会被重新执行,会重新发送ajax请求-->
    <keep-alive exclude="Detail"> 
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
