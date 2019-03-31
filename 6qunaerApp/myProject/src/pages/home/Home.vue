<template>
<!-- 只能暴露一个层级标签 -->
    <div>
        <HomeHeader></HomeHeader>
        <!-- <home-swiper></home-swiper> -->
        <HomeSwiper></HomeSwiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcons from "./components/Icons.vue"

export default {
    name:"Home" ,
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style scoped>

</style>
