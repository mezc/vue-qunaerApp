<template>
  <div id="app">
    <!-- 显示当前路径所对应的组件  -->
    <!-- 意思是：路由加载过一次之后，就把路由上的内容放到内存之中，下次再进入到路由时，不需要重新渲染这个组件-->
    <keep-alive> 
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
