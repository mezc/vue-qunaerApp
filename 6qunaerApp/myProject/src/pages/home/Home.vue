<template>
<!-- 只能暴露一个层级标签 -->
    <div>
        <HomeHeader></HomeHeader>
        <!-- <home-swiper></home-swiper> -->
        <HomeSwiper></HomeSwiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper.vue"
import HomeIcons from "./components/Icons.vue"
import HomeRecommend from "./components/Recommend.vue"
import HomeWeekend from "./components/Weekend.vue"


export default {
    name:"Home" ,
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
}
</script>

<style scoped>

</style>
