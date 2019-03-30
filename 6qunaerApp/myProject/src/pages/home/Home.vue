<template>
<!-- 只能暴露一个层级标签 -->
    <div>
        <HomeHeader></HomeHeader>
        <!-- <home-swiper></home-swiper> -->
        <HomeSwiper></HomeSwiper>
        <div>test</div>
    </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper.vue"
export default {
    name:"Home" ,
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style scoped>

</style>
